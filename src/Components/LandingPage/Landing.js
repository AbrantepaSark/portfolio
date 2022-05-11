import React from "react";

import NavigationBar from '../Containers/Navigation/NavBar';
import Hero  from "../Containers/Hero/Hero";
import About from "../Containers/About/About";
import Skills from "../Containers/Skills/skills";
import Portfolio from "../Containers/Portfolio/portfolio";
import Resume from "../Containers/Resume/resume";
import Contact from "../Containers/Contact/contact";
import Footer from "../Containers/Footer/footer";

const Landing = () => (
  <div>
    <NavigationBar />
    <Hero />
    <div>
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
    </div>
  </div>
);

export default Landing;