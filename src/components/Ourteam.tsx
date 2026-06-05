import { useState } from "react";
import personPlaceholder from "../assets/person_placeholder.png";
import "./ourteam.css";

const teamMembers = [
  {
    id: 1,
    name: "Itai Selwyn Dzinamarira",
    role: "Founder and Senior Consultant",
    description:
      "Itai Selwyn Dzinamarira is a loss adjusting professional with cross-border experience in the Southern African insurance market. He has worked on commercial and agricultural insurance claims in collaboration with insurers and brokers in Mozambique and Zimbabwe.",
    image: personPlaceholder,
  },

  {
    id: 2,
    name: "Lloyd Mahoso",
    role: "Trainee Loss Adjuster",
    description:
      "Lloyd provides specialist technical expertise in engineering, motor, plant, and machinery claims.",
    image: personPlaceholder,
  },

  {
    id: 3,
    name: "Eunice",
    role: "Administrator",
    description:
      "Eunice manages the firm's file administration, financial records, and claims documentation with accounting-grade rigor.",
    image: personPlaceholder,
  },
];

export default function Ourteam() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
    );
  };

  const member = teamMembers[current];

  return (
    <section className="team-section">
      <div className="container">

        <div className="section-title">
          <h2>Our Team</h2>

          <p>
            Meet our experienced professionals dedicated to delivering
            trusted assessments and expert insurance solutions.
          </p>

          <div className="section-line">
            <span className="dot"></span>
            <span className="line"></span>
          </div>
        </div>

        <div className="team-carousel">

          <button
            className="carousel-btn"
            onClick={prevSlide}
          >
            ←
          </button>

          <div className="team-card">

            <div className="team-image">
              <img
                src={member.image}
                alt={member.name}
              />
            </div>

            <div className="team-content">
              <h3>{member.name}</h3>

              <span>{member.role}</span>

              <p>{member.description}</p>
            </div>

          </div>

          <button
            className="carousel-btn"
            onClick={nextSlide}
          >
            →
          </button>

        </div>

        <div className="carousel-dots">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              className={`dot-btn ${
                current === index ? "active-dot" : ""
              }`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}