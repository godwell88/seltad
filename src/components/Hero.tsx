import heroImage from "../assets/accident 1.png";
import "./Hero.css";

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);

  section?.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "center",
  });
};

const serviceHighlights = [
  {
    title: "Claims Handling",
    subtitle: "Independent Assessments",
    targetId: "service-motor-claims",
    active: true,
  },
  {
    title: "Risk Surveys",
    subtitle: "Commercial & Industrial",
    targetId: "service-risk-surveys-and-valuations",
  },
  {
    title: "Valuations",
    subtitle: "Evidence-Based Reporting",
    targetId: "service-risk-surveys-and-valuations",
  },
];

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

          <button
            type="button"
            className="hero-primary-btn"
            onClick={() => scrollToSection("services")}
          >
            Our Services
          </button>

          <button
            type="button"
            className="hero-secondary-btn"
            onClick={() => scrollToSection("contactus")}
          >
            Contact Us
          </button>

        </div>

        {/* TABS */}

        <div className="hero-tabs">

          {serviceHighlights.map((item) => (
            <button
              type="button"
              className={`hero-tab ${item.active ? "active-tab" : ""}`}
              key={item.title}
              onClick={() => scrollToSection(item.targetId)}
            >
              <h3>{item.title}</h3>
              <span>{item.subtitle}</span>
            </button>
          ))}

        </div>
      </div>
    </section>
  );
}
