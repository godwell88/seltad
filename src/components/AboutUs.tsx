import "./aboutus.css";
import { Eye, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";

import personPlaceholder from "../assets/person_placeholder.png";
import { services } from "../data/services";

const aboutHighlights = [
  {
    title: "Our Mission",
    text: "To provide world-class loss adjusting and claims management services through integrity, expertise, and client-focused solutions.",
    Icon: Target,
  },
  {
    title: "Our Vision",
    text: "To be a global leader in specialist loss adjusting, recognized for excellence, innovation, integrity, and technical quality in every claim we handle.",
    Icon: Eye,
  },
];

const whyChooseUs = [
  {
    title: "Accuracy",
    text: "We focus on clear evidence, careful assessment, and reliable reporting.",
  },
  {
    title: "Integrity",
    text: "Every claim is handled independently, professionally, and with fairness.",
  },
  {
    title: "Goals",
    text: "To keep improving claim outcomes through technical quality, timely service, and client-focused support.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="about-section">
      <div className="about-shell">
        <div className="about-overview">
          <div className="about-kicker">
            <span></span>
            <p>Welcome to</p>
          </div>

          <h2>Seltad Loss Adjusters</h2>

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

        <div className="about-highlights">
          {aboutHighlights.map((item) => (
            <article className="about-highlight" key={item.title}>
              <div className="about-highlight-icon" aria-hidden="true">
                <item.Icon size={28} strokeWidth={1.9} />
              </div>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
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
                navigate even the most challenging claims.
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
          </div>
        </div>

        <section className="why-choose-us" aria-labelledby="why-choose-us-title">
          <div className="why-choose-us-heading">
            <span className="about-kicker-text">Why Choose Us</span>
            <h3 id="why-choose-us-title">Built around clear goals</h3>
            <p>
              These points can be expanded as more company information becomes
              available.
            </p>
          </div>

          <div className="why-choose-us-grid">
            {whyChooseUs.map((item) => (
              <article className="why-choose-us-card" key={item.title}>
                <ShieldCheck size={26} strokeWidth={1.9} aria-hidden="true" />
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
