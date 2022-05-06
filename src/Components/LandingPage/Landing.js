import React from "react";

import NavigationBar from '../Containers/Navigation/NavBar';
import Hero  from "../Containers/Hero/Hero";
import About from "../Containers/About/About";

const Landing = () => (
  <div>
    <NavigationBar />
    <Hero />
    <div className="lg:px-20">
        <About />
    </div>
  </div>
);

export default Landing;