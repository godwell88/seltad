import "./aboutus.css";
import { Link } from "react-router-dom";

import personPlaceholder from "../assets/person_placeholder.png";
import { services } from "../data/services";

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-overview">
          <div className="about-kicker">
            <span></span>
            <p>Know Who We Are</p>
          </div>

          <h2>About our company</h2>

          <p className="about-lead">
            Seltad Loss Adjusters is a specialist loss adjusting and claims
            management firm dedicated to supporting the global insurance
            industry.
          </p>

          <p>
            With a strong reputation for professionalism and precision, we
            bring decades of combined experience to the assessment and
            resolution of complex claims across a broad spectrum of industries.
          </p>
        </div>

        <div className="about-layout">
          <aside className="about-services">
            <h3>Our Services</h3>

            <div className="about-service-list">
              {services.map((service) => (
                <Link
                  className="about-service-item"
                  key={service.slug}
                  to={`/services/${service.slug}`}
                >
                  <span>{service.title}</span>
                  <span className="about-service-arrow" aria-hidden="true">
                    ›
                  </span>
                </Link>
              ))}
            </div>
          </aside>

          <div className="about-copy">
            <h3>Who we are</h3>

            <p>
              Seltad operates with a clear mandate: to bring technical
              precision, ethical rigour, and defined reporting standards to
              Zimbabwe's insurance claims environment. The firm is headquartered
              in Mutare and maintains the operational capacity to mobilise
              rapidly across all provinces of Zimbabwe.
            </p>

            <blockquote className="about-quote">
              <span className="about-quote-mark" aria-hidden="true">
                &quot;
              </span>

              <p>
                At Seltad, we pride ourselves on delivering accurate, timely,
                and independent loss assessments that help insurers and clients
                navigate even the most challenging claims. Our global
                perspective, technical expertise, and commitment to service
                excellence make us a trusted partner in the risk and insurance
                landscape.
              </p>

              <footer className="about-founder">
                <img
                  src={personPlaceholder}
                  alt="Selwyn Dzinamarira"
                  loading="lazy"
                />

                <div>
                  <strong>Selwyn Dzinamarira</strong>
                  <span>Founder</span>
                </div>
              </footer>
            </blockquote>

            <div className="about-accent-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
