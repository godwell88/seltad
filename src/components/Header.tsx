import { useState } from "react";
import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logoImage from "../assets/mylogo.png";
import "./header.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Our Services" },
  { href: "/#process", label: "Claims Process" },
  { href: "/#team", label: "Our People" },
  { href: "/#contactus", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <a className="logo" href="/" aria-label="Seltad home">
          <img
            src={logoImage}
            alt="Seltad Logo"
          />

          <div className="logo-text">
            <h2>SELTAD</h2>
            <span>Loss Adjusters</span>
          </div>
        </a>
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.href === "/" ? "active-link" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.label === "Contact Us" ? (
                <span style={{ display: "flex", alignItems: "center" }}>
                  {link.label}
                  <img
                    src="https://flagcdn.com/w80/zw.png"
                    srcSet="https://flagcdn.com/w160/zw.png 2x"
                    height="34"
                    alt="Zimbabwe"
                    style={{ marginLeft: "10px", borderRadius: "4px" }}
                  />
                </span>
              ) : (
                link.label
              )}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
