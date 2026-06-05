import type { CSSProperties } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { services } from "../data/services";
import "./home-services-summary.css";

export default function HomeServicesSummary() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const featuredServices = services.slice(0, 4); // Display only first 4 as key services

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300; // scroll slightly less than full card for peek effect
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
    <section className="home-services-section">
      <div className="home-services-header">
        <div className="home-services-title-area">
          <span className="home-services-subtitle">CORE EXPERTISE</span>
          <h2>Our Services</h2>
          <p>
            Independent loss adjusting, technical assessments, and risk advisory
            support across specialist insurance classes.
          </p>
        </div>
        
        <div className="home-services-actions">
          <Link to="/services" className="view-all-button desktop-only">
            View All Services <ArrowRight size={18} />
          </Link>
          <div className="home-carousel-controls">
            <button className="home-carousel-button" onClick={() => scroll("left")} aria-label="Scroll left">
              <ChevronLeft size={24} />
            </button>
            <button className="home-carousel-button" onClick={() => scroll("right")} aria-label="Scroll right">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="home-services-carousel" ref={scrollRef}>
        {featuredServices.map((service) => (
          <article
            className="home-service-card"
            key={service.slug}
            style={{ "--service-accent": service.accent } as CSSProperties}
          >
            <div className="home-service-image">
              <img
                src={service.image}
                alt={service.title}
                loading="lazy"
              />
              <div className="home-service-overlay"></div>
            </div>

            <div className="home-service-content">
              <h3>{service.title}</h3>
              <div className="home-service-line"></div>
              <p>{service.description}</p>
              <div className="home-service-links">
                <Link to={`/services/${service.slug}`}>Learn More</Link>
                <button type="button" onClick={scrollToContact}>
                  Contact Us
                </button>
              </div>
            </div>
          </article>
        ))}
        
        <div className="home-service-card view-more-card desktop-hidden">
           <div className="view-more-content">
              <h3>Looking for more?</h3>
              <Link to="/services" className="view-all-button">
                View All Services <ArrowRight size={18} />
              </Link>
           </div>
        </div>
      </div>
    </section>
  );
}
