import React from "react";

import NavigationBar from '../Containers/Navigation/NavBar';
import Hero  from "../Containers/Hero/Hero";
import About from "../Containers/About/About";
import Skills from "../Containers/Skills/skills";
import Portfolio from "../Containers/Portfolio/portfolio";
import Resume from "../Containers/Resume/resume";
import Contact from "../Containers/Contact/contact";

const Landing = () => (
  <div>
    <NavigationBar />
    <Hero />
    <div className="">
        <About />
        <Skills />
        <Portfolio />
        <Resume />
        <Contact />
    </div>
  </div>
);

export default Landing;