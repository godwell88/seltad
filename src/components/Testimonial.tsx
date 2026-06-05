// Testimonial.tsx

import personPlaceholder from "../assets/person_placeholder.png";
import "./testimonial.css";

const testimonials = [
  {
    name: "Moses Moyo",
    testimony:
      "Seltad handled our insurance assessment with professionalism and accuracy. Their reporting process was transparent and highly detailed.",
    image: personPlaceholder,
  },

  {
    name: "John Chibadura",
    testimony:
      "The team provided exceptional technical expertise during our claim evaluation process. Their support made everything smoother.",
    image: personPlaceholder,
  },

  {
    name: "Ndoitwa Moyo",
    testimony:
      "Reliable, responsive, and extremely knowledgeable. We highly recommend Seltad for professional risk and loss assessments.",
    image: personPlaceholder,
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        {/* TITLE */}
        <div className="section-title">
          <h2>Testimonials</h2>

          <p>
            Hear from clients who trust our expertise,
            professionalism, and commitment to accurate assessments.
          </p>

          <div className="section-line">
            <span className="dot"></span>
            <span className="line"></span>
          </div>
        </div>

        {/* TESTIMONIAL GRID */}
        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              {/* PROFILE */}
              <div className="testimonial-profile">
                <div className="testimonial-image">
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </div>

                <h3>{item.name}</h3>
              </div>

              {/* TESTIMONY */}
              <p className="testimonial-text">
                “{item.testimony}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;