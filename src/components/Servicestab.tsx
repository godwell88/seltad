import type { CSSProperties } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { services } from "../data/services";
import "./servicestab.css";

export default function ServicesTabs() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 380; // approximate card width + gap
      if (direction === "left") {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const scrollToContact = () => {
    document.getElementById("contactus")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="services-section">
      <div className="services-header">
        <div className="services-header-top">
          <div>
            <span className="services-subtitle">PROFESSIONAL SERVICES</span>
            <h2>Our Services</h2>
          </div>
          <div className="carousel-controls">
            <button className="carousel-button" onClick={() => scroll("left")} aria-label="Scroll left">
              <ChevronLeft size={24} />
            </button>
            <button className="carousel-button" onClick={() => scroll("right")} aria-label="Scroll right">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        <p>
          Independent loss adjusting, technical assessments, and risk advisory
          support across specialist insurance classes.
        </p>
      </div>

      <div className="services-wrapper" ref={scrollRef}>
        {services.map((service) => (
          <article
            id={`service-${service.slug}`}
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
              <div className="service-actions">
                <Link to={`/services/${service.slug}`}>Learn More</Link>
                <button type="button" onClick={scrollToContact}>
                  Contact Us
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
