import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";
import profile from "../../../images/profile.jpg";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://www.facebook.com/honguyen2512/",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/honguyen25121991",
  },
  {
    id: 3,
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/h%E1%BB%93-nguy%E1%BB%85n-302790228/",
  },
  {
    id: 4,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/mr.shirosr/",
  },
];

const Sidebar = () => {
  return (
    <aside className="sticky top-0 bg-white md:mx-8 lg:mx-4 mb-8 p-6 shadow-md rounded-md -mt-40">
      <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
        <img src={profile} alt="honguyen" className="w-full" />
      </div>
      <div className="text-center">
        <h1 className="text-xl text-gray-800 font-bold mb-1">Ho Nguyen</h1>
        <p className="text-sm text-gray-400 mb-3">Frontend Web Developer</p>

        <ul className="flex flex-wrap justify-center">
          {socials.map((social, id) => (
            <SocialIcon social={social} key={id} />
          ))}
        </ul>
      </div>
      <div className="text-start pt-4">
        <h3 className="text-md mb-2 uppercase font-medium text-gray-800">
          About Me
        </h3>
        <div className="font-thin text-gray-800">
          <div>
            {" Address : "}
            Hung Vuong Apartment,11 Dang Thai Than Street, Wards 11 , District 5
            , HCM City
          </div>
          <div>Phone :0338037039</div>

          <div>Birth day:06/01</div>
          <div>Gender: Male</div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        className="w-8 h-8 bg-purple-100 rounded text-purple-800 flex items-center justify-center hover:text-white hover:bg-purple-600"
      >
        {icon}
      </a>
    </li>
  );
};
