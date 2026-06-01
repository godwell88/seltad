import type { CSSProperties } from "react";
import { Link } from "react-router-dom";

import { services } from "../data/services";
import "./servicestab.css";

export default function ServicesTabs() {
  return (
    <section className="services-section">
      <div className="services-header">
        <span className="services-subtitle">PROFESSIONAL SERVICES</span>
        <h2>Our Services</h2>
        <p>
          Independent loss adjusting, technical assessments, and risk advisory
          support across specialist insurance classes.
        </p>
      </div>

      <div className="services-wrapper">
        {services.map((service) => (
          <article
            className="service-card"
            key={service.slug}
            style={{ "--service-accent": service.accent } as CSSProperties}
          >
            <div className="service-image">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <div className="service-overlay"></div>
            </div>

            <div className="service-content">
              <h3>{service.title}</h3>
              <div className="service-line"></div>
              <p>{service.description}</p>
              <Link to={`/services/${service.slug}`}>Learn More</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
