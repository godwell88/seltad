import { type MouseEvent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaPhoneAlt,
  FaTimes,
} from "react-icons/fa";

import logoImage from "../assets/mylogo.png";
import "./header.css";

const navLinks = [
  { href: "#/", label: "Home" },
  { href: "#/about", label: "About Us", sectionId: "about" },
  { href: "#/services", label: "Our Services", sectionId: "services" },
  // To show this nav item again, restore the Claims Process section in
  // src/pages/HomePage.tsx and uncomment the line below.
  // { href: "#/process", label: "Claims Process", sectionId: "process" },
  { href: "#/team", label: "Our Team", sectionId: "team" },
  { href: "#/contactus", label: "Contact Us", sectionId: "contactus" },
];

const PHONE_NUMBER = "+263 789 581 990";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (sectionId?: string) => {
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId?: string,
  ) => {
    event.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");
      window.setTimeout(() => scrollToSection(sectionId), 0);
      return;
    }

    scrollToSection(sectionId);
  };

  return (
    <header className="header">
      <div className="header-container">
        <a
          className="logo"
          href="#/"
          aria-label="Seltad home"
          onClick={(event) => handleNavClick(event)}
        >
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
              className={!link.sectionId ? "active-link" : undefined}
              onClick={(event) => handleNavClick(event, link.sectionId)}
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

        <a className="header-phone" href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
          <FaPhoneAlt aria-hidden="true" />
          <span>{PHONE_NUMBER}</span>
        </a>

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
