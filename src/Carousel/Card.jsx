import React from "react";
import cardbg from "../assets/clients/cardbg.svg";
import textStyles from "../textstyles/textstyle";
import logo1 from "../assets/clients/logo1.svg";

const Card = ({ title, logo }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cardbg})` }}
      className="rounded-2xl flex md:h-[120px]   shadow-lg p-4 flex-col justify-center items-center">
      <div className="flex items-center border-b border-gray-600">
        <img src={logo1} alt="logo1" className="mb-8 w-[50]" />
        <div className="flex items-center">
          <h2
            style={{ fontSize: "1rem" }}
            className={`${textStyles.bl_heading}  text-cdcolor m-2 font-semibold ml-4`}>
            {title}
          </h2>
        </div>
        <div className="ml-5 flex justify-center items-center">
          <img src={logo} alt="logo" className="w-[80%]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
