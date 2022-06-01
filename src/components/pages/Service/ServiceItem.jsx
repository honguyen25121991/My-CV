import React from "react";

const ServiceItem = (props) => {
  const { icon, title, description, link } = props.service;
  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white ">
        <div className="group">
          <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-purple-100 text-purple-600 transition duration-200 group-hover:bg-purple-600 group-hover:text-white">
            {icon}
          </div>
        </div>

        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
        <a href={link}>{link}</a>
      </div>
    </div>
  );
};

export default ServiceItem;
