import React from 'react';

import Header from '../Header/header';
import ResumeSection from './resumeSection';

 const Resume = () => {
  return (
    <div className="py-16 px-6 lg:py-20 lg:px-28 bg-[#38393f]">
      <Header text="Resume" />
      <div className="flex flex-col text-lg gap-y-10 md:flex-row">
        <div className="flex-1">
          <p className="font-semibold text-xl text-[#606365]  ">
            Work Experience
          </p>
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
          <p className="font-semibold text-[#606365]  text-xl ">Education</p>
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
    </div>
  );
}

export default Resume;
