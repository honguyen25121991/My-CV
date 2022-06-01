import React from "react";
import {
  FaBootstrap,
  FaCode,
  FaHtml5,
  FaReact,
  FaJsSquare,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import OTP from "../../OTP/OTP";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FaCode />,
    title: "Clone Udemy",
    description: "HTML CSS SCSS",
    link: "https://udemy-demo.vercel.app/",
  },
  {
    id: 2,
    icon: <FaJsSquare />,
    title: "Todo List",
    description: "JavaScript ECMA6 ",
    link: "https://todolist-flame-two.vercel.app/",
  },
  {
    id: 3,
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
    link: " https://movie-start.vercel.app/",
  },
  {
    id: 4,
    icon: <FaBootstrap />,
    title: "Bootstrap Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 4,
    icon: <SiTailwindcss />,
    title: "Tailwindcss Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
  {
    id: 4,
    icon: <FaReact />,
    title: "React Template",
    description:
      "Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to incididunt uabore etdolore magna aliqua.",
  },
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
      <OTP />
    </section>
  );
};

export default Service;
