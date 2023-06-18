import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import { IoIosCall, IoIosMail } from "react-icons/io";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

import Header from "../Header/header";
import SingleContact from "./SingleContact/singleContact";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    gsap.from(ref.current, {
      scrollTrigger: {
        trigger: ref.current,
        start: "top 99%",
        toggleActions: "play none none none",
      },
      y: 120,
      opacity: 0,
      duration: 1,
    });
  }, []);
  return (
    <div className="py-16 px-6 lg:py-20 lg:px-28 ">
      <Header text="Contact" />

      <div className="container md:m-auto">
        <div className="max-w-md flex flex-col mx-auto justify-center mb-10 md:mb-20 ">
          <p className=" text-xl text-gray-500 text-center font-bold">
            Ways To Contact Me
          </p>
        </div>
        <div ref={ref} className="w-full gap-10 flex flex-wrap justify-center ">
          <SingleContact
            icon={<IoIosCall className="h-6 w-6" />}
            text="+233 548974517"
          />
          <SingleContact
            icon={<IoIosMail className="h-6 w-6" />}
            text="dsarkodienyarko@gmail.com"
          />
          <SingleContact
            icon={<FaTwitter className="h-6 w-6" />}
            text="@sark_daniel_"
          />
          <SingleContact
            icon={<FaLinkedin className="h-6 w-6" />}
            text="Daniel Nyarko Sarkodie"
          />
          <SingleContact
            icon={<FaFacebook className="h-6 w-6" />}
            text="Abrantepa Nhana Sark"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
