import "./footer.css";

import {FaFacebookF, FaInstagram, FaWhatsapp, FaXTwitter, FaLocationDot, FaEnvelope, FaPhone} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}

        <div className="footer-left">

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

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaXTwitter />
            </a>

            <a href="#">
              <FaWhatsapp />
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
            <span>+263 782 557 660</span>
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
