import React from "react";

import NavigationBar from '../Containers/Navigation/NavBar';
import Hero  from "../Containers/Hero/Hero";
import About from "../Containers/About/About";
import Skills from "../Containers/Skills/skills";

const Landing = () => (
  <div>
    <NavigationBar />
    <Hero />
    <div className="lg:px-20">
        <About />
        <Skills />
    </div>
  </div>
);

export default Landing;