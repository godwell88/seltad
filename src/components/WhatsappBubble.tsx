import { FaWhatsapp } from "react-icons/fa6";

import "./whatsapp-bubble.css";

const WHATSAPP_NUMBER = "263782557660";

export default function WhatsappBubble() {
  return (
    <a
      className="whatsapp-bubble"
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <span className="whatsapp-bubble__pulse" aria-hidden="true"></span>
      <span className="whatsapp-bubble__icon">
        <FaWhatsapp />
      </span>
    </a>
  );
}
