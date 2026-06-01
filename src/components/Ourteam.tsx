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

const Ourteam = () => {
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

        <div className="team-grid">

          {teamMembers.map((member) => (

            <div className="team-card" key={member.id}>

              <div className="team-image">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
              </div>

              <div className="team-content">

                <h3>{member.name}</h3>

                <span>{member.role}</span>

                <p>{member.description}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Ourteam;
