from __future__ import annotations

import struct
import zlib
from pathlib import Path


PNG_SIGNATURE = b"\x89PNG\r\n\x1a\n"


def read_png(path: Path) -> tuple[int, int, int, bytes]:
    data = path.read_bytes()
    if not data.startswith(PNG_SIGNATURE):
        raise ValueError("Expected a PNG file")

    offset = len(PNG_SIGNATURE)
    width = height = color_type = 0
    idat = bytearray()

    while offset < len(data):
      length = struct.unpack(">I", data[offset : offset + 4])[0]
      chunk_type = data[offset + 4 : offset + 8]
      chunk_data = data[offset + 8 : offset + 8 + length]
      offset += 12 + length

      if chunk_type == b"IHDR":
          width, height, bit_depth, color_type, compression, filter_method, interlace = struct.unpack(
              ">IIBBBBB", chunk_data
          )
          if bit_depth != 8 or color_type not in (2, 6) or compression or filter_method or interlace:
              raise ValueError("Only non-interlaced 8-bit RGB/RGBA PNG files are supported")
      elif chunk_type == b"IDAT":
          idat.extend(chunk_data)
      elif chunk_type == b"IEND":
          break

    return width, height, color_type, zlib.decompress(bytes(idat))


def unfilter_scanlines(width: int, height: int, color_type: int, raw: bytes) -> bytearray:
    bpp = 4 if color_type == 6 else 3
    stride = width * bpp
    output = bytearray(height * stride)
    cursor = 0

    for y in range(height):
        filter_type = raw[cursor]
        cursor += 1
        scanline = bytearray(raw[cursor : cursor + stride])
        cursor += stride
        previous = output[(y - 1) * stride : y * stride] if y else bytearray(stride)

        for x in range(stride):
            left = scanline[x - bpp] if x >= bpp else 0
            up = previous[x]
            upper_left = previous[x - bpp] if x >= bpp else 0

            if filter_type == 1:
                scanline[x] = (scanline[x] + left) & 255
            elif filter_type == 2:
                scanline[x] = (scanline[x] + up) & 255
            elif filter_type == 3:
                scanline[x] = (scanline[x] + ((left + up) // 2)) & 255
            elif filter_type == 4:
                p = left + up - upper_left
                pa = abs(p - left)
                pb = abs(p - up)
                pc = abs(p - upper_left)
                predictor = left if pa <= pb and pa <= pc else up if pb <= pc else upper_left
                scanline[x] = (scanline[x] + predictor) & 255
            elif filter_type != 0:
                raise ValueError(f"Unsupported PNG filter: {filter_type}")

        output[y * stride : (y + 1) * stride] = scanline

    if color_type == 6:
        return output

    rgba = bytearray(width * height * 4)
    for src, dest in zip(range(0, len(output), 3), range(0, len(rgba), 4)):
        rgba[dest : dest + 3] = output[src : src + 3]
        rgba[dest + 3] = 255
    return rgba


def write_png(path: Path, width: int, height: int, pixels: bytearray) -> None:
    stride = width * 4
    raw = bytearray()
    for y in range(height):
        raw.append(0)
        raw.extend(pixels[y * stride : (y + 1) * stride])

    def chunk(chunk_type: bytes, chunk_data: bytes) -> bytes:
        return (
            struct.pack(">I", len(chunk_data))
            + chunk_type
            + chunk_data
            + struct.pack(">I", zlib.crc32(chunk_type + chunk_data) & 0xFFFFFFFF)
        )

    png = bytearray(PNG_SIGNATURE)
    png.extend(chunk(b"IHDR", struct.pack(">IIBBBBB", width, height, 8, 6, 0, 0, 0)))
    png.extend(chunk(b"IDAT", zlib.compress(bytes(raw), 9)))
    png.extend(chunk(b"IEND", b""))
    path.write_bytes(bytes(png))


source = Path("src/assets/mylogo.png")
width, height, color_type, raw = read_png(source)
pixels = unfilter_scanlines(width, height, color_type, raw)

for index in range(0, len(pixels), 4):
    red, green, blue, alpha = pixels[index : index + 4]
    if alpha and red >= 245 and green >= 245 and blue >= 245:
        pixels[index + 3] = 0

png_output = Path("public/favicon.png")
ico_output = Path("public/favicon.ico")

write_png(png_output, width, height, pixels)
png_data = png_output.read_bytes()
ico_header = struct.pack("<HHHBBBBHHII", 0, 1, 1, 0, 0, 0, 0, 1, 32, len(png_data), 22)
ico_output.write_bytes(ico_header + png_data)
