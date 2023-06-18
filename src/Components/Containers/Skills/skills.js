import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  SiCss3,
  SiHtml5,
  SiGithub,
  SiTailwindcss,
  SiReact,
  SiJavascript,
} from "react-icons/si";

//import Header from "../Header/header";
import SkillBar from "./skillBar";

const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      y: 150,
      opacity: 0,
      duration: 1.5,
    });
  }, []);

  return (
    <div className="pb-16 px-6 lg:pb-20 lg:px-28 ">
      <div className="grid grid-col-1 lg:grid-cols-3 justify-center gap-10 ">
        <SkillBar
          logo={<SiHtml5 className="w-8 h-8 mb-1 text-gray-500" />}
          title="HTML"
          years="3"
        />
        <SkillBar
          logo={<SiCss3 className="w-8 h-8 mb-1 text-gray-500" />}
          title="CSS"
          years="3"
        />
        <SkillBar
          logo={<SiTailwindcss className="w-8 h-8 mb-1 text-gray-500" />}
          title="TailwindCSS"
          years="3"
        />
        <SkillBar
          logo={<SiJavascript className="w-8 h-8 mb-1 text-gray-500" />}
          title="JavaScript"
          years="3"
        />
        <SkillBar
          logo={<SiReact className="w-8 h-8 mb-1 text-gray-500" />}
          title="React"
          years="3"
        />
        <SkillBar
          logo={<SiGithub className="w-8 h-8 mb-1 text-gray-500" />}
          title="Git/Github"
          years="3"
        />
      </div>
    </div>
  );
};

export default Skills;
