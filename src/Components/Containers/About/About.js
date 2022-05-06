import React from "react";
import { HiAcademicCap } from "react-icons/hi";
import pic from './DSC_0931.JPG'

const About = () => {
    return (
      <div className="lg:py-8">
        <h2 className="font-bold font-serif text-blue-900 text-3xl">ABOUT</h2>
        <div className=" py-10 flex flex-col lg:flex-row ">
          <div className="flex-1 px-5  text-justify">
            <img className="m-auto h-52 rounded-full" src={pic} alt="" />
            <p className="pt-5">
              I am{" "}
              <span className="text-teal-900 font-bold">
                Daniel Nyarko Sarkodie
              </span>
              , Hardworking and reliable Developer with strong ability in design
              and development of web applications. I am an Organized and
              motivated developer eager to apply acquired skills in various
              environments and ready to learn and contribute to team success.
            </p>
          </div>
          <div className="flex-1 px-5 m-auto">
            <p className="text-center text-teal-500 font-bold">Education</p>
            <div className="shadow-md px-6 py-4">
              {/* <HiAcademicCap/> */}
              <p className="font-bold">BSc. Computer Science</p>
              <p className="text-base">University of Cape Coast</p>
              <p className="text-sm">2017 - 2021</p>
            </div>
            <p className="text-center text-teal-500 font-bold mt-12">
              Experience
            </p>
            <div className="shadow-md px-6 py-4">
              <p className="font-bold">Web Developer</p>
              <p className="text-base">Ume Businesses</p>
              <p className="text-sm text-blue-400">www.umebusinesses.com</p>
            </div>
          </div>
          <div className="flex-1 px-5 m-auto">
            <p className="text-center text-teal-500 font-bold">Skills</p>
            <div className="shadow-md px-6 py-5">
              <ul className="list-disc px-5">
                <li>Understanding in HTML, CSS, JavaScript.</li>
                <li>Indept understanding of ReactJS</li>
                <li>Ability to develop restful APIs with NodeJS</li>
                <li>
                  User interface designs using graphic design software
                  (Photoshop, figma).
                </li>
                <li>Understanding Git</li>
                <li>
                  Strong communication skills and ability to work in a team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;

