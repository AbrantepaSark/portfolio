import React, { useState, useRef } from "react";

//import NavigationBar from '../Containers/Navigation/NavBar';
import Hero  from "../Containers/Hero/Hero";
import About from "../Containers/About/About";
import Skills from "../Containers/Skills/skills";
import Portfolio from "../Containers/Portfolio/portfolio";
import Resume from "../Containers/Resume/resume";
import Contact from "../Containers/Contact/contact";
import Footer from "../Containers/Footer/footer";
import DownLoad from "../Containers/Navigation/DownloadBtn/button";

const Landing = () => {

  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    return setToggle(!toggle);
  };
  
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

  // const commonProps = {
  //   home: homeRef,
  //   about: aboutRef,
  //   skills: skillsRef,
  //   port: portRef,
  //   resume: resumeRef,
  //   contact: contactRef,
  // }

return (
  <div>
    <nav className="sticky top-0 z-40 drop-shadow-lg  flex items-center justify-between flex-wrap bg-white py-4 px-7 lg:px-28 lg:py-0">
      <div className="flex items-center flex-shrink-0 text-blue-900  mr-10">
        <span className="font-semibold text-2xl tracking-tight">SARK</span>
      </div>
      <div className=" lg:hidden">
        <button
          onClick={toggleHandler}
          className="flex items-center px-3 py-2 border rounded text-gray-900  border-gray-900"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full ${
          toggle && "hidden"
        } flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex-grow">
          <p
            onClick={() => scrollHandler(homeRef)}
            className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold  text-gray-900 lg:hover:bg-gray-800 lg:hover:text-white lg:py-5 lg:px-7 py-2 px-0 "
          >
            Home
          </p>

          <p
            onClick={() => scrollHandler(aboutRef)}
            className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold  text-gray-900 lg:hover:bg-gray-800 lg:hover:text-white lg:py-5 lg:px-7 py-2 px-0 "
          >
            About
          </p>
          <p
            onClick={() => scrollHandler(portRef)}
            className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold  text-gray-900 lg:hover:bg-gray-800 lg:hover:text-white lg:py-5 lg:px-7 py-2 px-0 "
          >
            Portfolio
          </p>
          <p
            onClick={() => scrollHandler(contactRef)}
            className="block mt-4 lg:inline-block lg:mt-0 hover:font-bold  text-gray-900 lg:hover:bg-gray-800 lg:hover:text-white lg:py-5 lg:px-7 py-2 px-0 "
          >
            Contact
          </p>
        </div>
        <div>
          <DownLoad />
        </div>
      </div>
    </nav>
    <div ref={homeRef}>
      <Hero />
    </div>
    <div ref={aboutRef}>
      <About />
    </div>
    <div ref={skillsRef}>
      <Skills />
    </div>
    <div ref={portRef}>
      <Portfolio />
    </div>
    <div ref={resumeRef}>
      <Resume />
    </div>
    <div ref={contactRef}>
      <Contact />
    </div>
    <Footer />
  </div>
  
);
} 

export default Landing;