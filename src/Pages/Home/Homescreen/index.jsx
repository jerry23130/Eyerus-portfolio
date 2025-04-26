import HeroSection from "../HeroSection";
import Skills from "../Skills";
import Project from "../Project";
import About from "../About";
import Testimonials from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Skills />
      <About />
      <Project />
      <Testimonials />
      <ContactMe />
      <Footer />
    </>
  );
}
