import heroImage from "../assets/accident 1.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">

      {/* BACKGROUND */}

      <div className="hero-background">
        <img
          src={heroImage}
          alt="Industrial Site"
        />

        <div className="hero-overlay"></div>

      </div>

      {/* CONTENT */}

      <div className="hero-content">

        <span className="hero-subtitle">
          INDEPENDENT LOSS ADJUSTERS
        </span>

        <h1>
          Technical Insurance
          Specialists &
          Risk Experts
        </h1>

        <div className="hero-line"></div>

        <p>
          Independent claims handling, risk surveys,
          valuations, and technical investigations
          delivered with professionalism and accuracy.
        </p>

        {/* BUTTONS */}

        <div className="hero-buttons">

          <a href="#services" className="hero-primary-btn">
            Our Services
          </a>

          <a href="#contactus" className="hero-secondary-btn">
            Contact Us
          </a>

        </div>

        {/* TABS */}

        <div className="hero-tabs">

          <div className="hero-tab active-tab">
            <h3>Claims Handling</h3>
            <span>Independent Assessments</span>
          </div>

          <div className="hero-tab">
            <h3>Risk Surveys</h3>
            <span>Commercial & Industrial</span>
          </div>

          <div className="hero-tab">
            <h3>Valuations</h3>
            <span>Evidence-Based Reporting</span>
          </div>

        </div>
      </div>
    </section>
  );
}
