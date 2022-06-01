import React from "react";
import Skills from "./Skills/Skills";
import "./About.scss";

const About = () => {
  return (
    <section className="py-8">
      <div className="flex flex-wrap md:px-4">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 font-bold mb-4">Who am I?</h3>
            <p className="text-sm text-gray-400 leading-6 mb-3 text-color">
              From an outsider, with the desire to apply the professional
              knowledge from CyberSoft central programming courses as well as
              the experience learned in the past time, I will contribute my best
              to the development of the company and complete the project. Tasks
              are assigned as complete as possible. In the future, I hope to
              develop myself into a good Front-end Developer so that I can
              improve my skills and orient myself for long-term advancement in
              this field of information technology.
            </p>
          </div>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
