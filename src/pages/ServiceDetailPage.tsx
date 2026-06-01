import type { CSSProperties } from "react";

import { Link, useParams } from "react-router-dom";

import { getServiceBySlug } from "../data/services";
import "./service-detail.css";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return (
      <main className="service-detail-page">
        <section className="service-detail-hero">
          <div className="service-detail-shell">
            <p className="service-detail-kicker">Service Not Found</p>
            <h1>The page you requested does not exist.</h1>
            <div className="service-detail-actions">
              <Link to="/" className="service-detail-button primary">
                Return Home
              </Link>
              <a href="/#services" className="service-detail-button secondary">
                Back to Services
              </a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-shell">
          <p className="service-detail-kicker">Our Services</p>
          <h1>{service.title}</h1>
          <p className="service-detail-intro">{service.intro}</p>

          <div className="service-detail-actions">
            <Link to="/" className="service-detail-button primary">
              Return Home
            </Link>
            <a href="/#services" className="service-detail-button secondary">
              Back to Services
            </a>
          </div>
        </div>
      </section>

      <section className="service-detail-content">
        <div className="service-detail-shell service-detail-layout">
          <div className="service-detail-copy">
            <span className="service-detail-label">Service Overview</span>
            <p>{service.overview}</p>
          </div>

          <aside
            className="service-detail-image-placeholder"
            style={{ "--service-accent": service.accent } as CSSProperties}
          >
            <img src={service.image} alt={service.title} />
          </aside>
        </div>
      </section>

      <section className="service-detail-cards-section">
        <div className="service-detail-shell">
          <div className="service-detail-grid">
            {service.detailCards.map((card) => (
              <article className="service-detail-card" key={card.title}>
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div className="service-detail-divider"></div>
                <p className="service-detail-highlight">{card.highlight}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {service.deliverables && service.deliverables.length > 0 ? (
        <section className="service-detail-deliverables-section">
          <div className="service-detail-shell">
            <h2 className="service-detail-deliverables-title">
              Standard Service Deliverables
            </h2>

            <div className="service-detail-deliverables-box">
              <ul className="service-detail-deliverables-list">
                {service.deliverables.map((deliverable) => (
                  <li key={deliverable}>{deliverable}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
