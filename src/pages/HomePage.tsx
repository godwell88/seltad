import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
//import Ourteam from "../components/Ourteam";
import Servicestab from "../components/Servicestab";
// To show the Claims Process section again, uncomment this import and the
// matching JSX block marked "CLAIMS PROCESS SECTION" below.
// import Process from "../components/Processes";
// To show the Testimonials section again, uncomment this import and the
// matching JSX block marked "TESTIMONIALS SECTION" below.
// import Testimonial from "../components/Testimonial";

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

      {/* CLAIMS PROCESS SECTION
      <div className="section-divider"></div>

      <section id="process">
        <Process />
      </section>
      */}

      <div className="section-divider"></div>

      {/*<section id="team">
        <Ourteam />
      </section>}

      {/* TESTIMONIALS SECTION
      <div className="section-divider"></div>

      <section id="testimonials">
        <Testimonial />
      </section>
      */}

      <div className="section-divider"></div>

      <section>
        <Footer />
      </section>
    </>
  );
}
