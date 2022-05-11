import React from 'react';

import Header from '../Header/header';
import ResumeSection from './resumeSection';

 const Resume = () => {
  return (
    <div className="py-10 px-6 lg:py-10 lg:px-28 md:bg-gray-100">
      <Header text="Resume" />
      <div className="flex flex-col gap-y-10 md:flex-row">
        <div className="flex-1">
          <p className="font-semibold  text-lg ">Work Experience</p>
          <div className="gap-y-5 flex flex-col">
            <ResumeSection
              title="Front-End Web Developer"
              subTitle="Ume Businesses"
              location="Cape Coast, Ghana"
              time="2019 - Date"
            />
            <ResumeSection
              title="Front-End Web Developer"
              subTitle="ExposeCampus"
              location="Cape Coast, Ghana"
              time="2019 - 2020"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="font-semibold   text-lg ">Education</p>
          <div className="gap-y-5 flex flex-col">
            <ResumeSection
              title="Bachelor of Science( Computer Science )"
              subTitle="University of Cape Coast"
              location="Cape Coast, Ghana"
              time="2017 - 2021"
            />
            <ResumeSection
              title="General Science"
              subTitle="Sunyani Senior High School"
              location="Sunyani, Ghana"
              time="2013 - 2016"
            />
          </div>
        </div>
      </div>
      <div className="h-30 w-full flex justify-center  mt-12">
        <button className="bg-blue-600 hover:bg-blue-800 rounded-md text-white font-bold py-2 px-4">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Resume;
