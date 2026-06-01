import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Ourteam from "../components/Ourteam";
import Process from "../components/Processes";
import Servicestab from "../components/Servicestab";
import Testimonial from "../components/Testimonial";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="section-divider"></div>

      <AboutUs />

      <div className="section-divider"></div>

      <section id="services">
        <Servicestab />
      </section>

      <div className="section-divider"></div>

      <section id="process">
        <Process />
      </section>

      <div className="section-divider"></div>

      <section id="team">
        <Ourteam />
      </section>

      <div className="section-divider"></div>

      <section id="testimonials">
        <Testimonial />
      </section>

      <div className="section-divider"></div>

      <section id="contactus">
        <Footer />
      </section>
    </>
  );
}
