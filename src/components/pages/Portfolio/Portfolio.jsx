import React from "react";
import image1 from "../../../images/portfolio/SGU.jpg";
import image2 from "../../../images/portfolio/CyberSoft.png";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "SGU",
    link: "https://sgu.edu.vn/",
    description: "2010-2012 Saigon University",
  },
  {
    id: 2,
    image: image2,
    title: "CyberSoft Academy",
    link: "https://cybersoft.edu.vn/",
    description: (
      <div>
        2020-present
        <br />
        CyberSoft exploits the demand for programmers, connects jobs with
        businesses and integrates projects with the latest technology into
        active training methods for students..
      </div>
    ),
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
