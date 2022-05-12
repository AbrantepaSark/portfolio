import React, { useRef } from "react";

import NavigationBar from '../Containers/Navigation/NavBar';
import Hero  from "../Containers/Hero/Hero";
import About from "../Containers/About/About";
import Skills from "../Containers/Skills/skills";
import Portfolio from "../Containers/Portfolio/portfolio";
import Resume from "../Containers/Resume/resume";
import Contact from "../Containers/Contact/contact";
import Footer from "../Containers/Footer/footer";

const Landing = () => {
  
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const portRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollHandler = ref => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  const commonProps = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    port: portRef,
    resume: resumeRef,
    contact: contactRef,
  }

return (
  <div>
    <NavigationBar {...commonProps} onScroll={scrollHandler} />
    <Hero ref={homeRef} />
    <div>
      <div ref={aboutRef}>
        <About />
      </div>

      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </div>
  </div>
);
}

export default Landing;