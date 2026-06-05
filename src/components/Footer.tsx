import "./footer.css";

import {FaFacebookF, FaInstagram, FaWhatsapp, FaXTwitter, FaLocationDot, FaEnvelope, FaPhone, FaLinkedin} from "react-icons/fa6";
import Logo from "../assets/logo";

const WHATSAPP_NUMBER = "263789581990";

const socialLinks = {
  facebook: "https://facebook.com/seltad-placeholder",
  instagram: "https://instagram.com/seltad-placeholder",
  x: "#",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  linkedin: "https://linkedin.com/company/seltad-placeholder",
};

export default function Footer() {
  return (
    <footer id="contactus" className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-left">

          <div className="footer-brand-logo" aria-hidden="true">
            <Logo />
          </div>

          <span className="footer-subtitle">
            CONNECT WITH US
          </span>

          <h2>
            Seltad Loss Adjusters
          </h2>

          <div className="footer-motto">
            Clarity in Claims. Confidence in Results.
          </div>

          <p>
            Independent loss adjusting, risk surveys,
            claims management, and technical insurance
            consulting across multiple industries.
          </p>

          {/* SOCIALS */}

          <div className="social-links">

            <a href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href={socialLinks.x} aria-label="X">
              <FaXTwitter />
            </a>

            <a href={socialLinks.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT */}

        <div className="footer-right">

          <span className="footer-subtitle">
            CONTACT
          </span>

          <div className="contact-item">
            <FaLocationDot />
            <span>Mutare, Zimbabwe</span>
          </div>

          <div className="contact-item">
            <FaEnvelope />
            <span>info@seltad.com</span>
          </div>

          <div className="contact-item">
            <FaPhone />
            <span>+263 789 581 990</span>
          </div>

        </div>
      </div>

      {/* BOTTOM */}

      <div className="footer-bottom">

        <div className="footer-line"></div>

        <p>
          © 2026 Seltad Loss Adjusters. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
