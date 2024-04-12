import React from "react";
import cardbg from "../assets/clients/cardbg.svg";
import textStyles from "../textstyles/textstyle";
import logo1 from "../assets/clients/logo1.svg";

const Card = ({ title, logo }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cardbg})` }}
      className="rounded-2xl flex w-[517px] h-[180px] shadow-lg p-6 flex-col justify-center items-center">
      <div className="flex justify-center items-center border-b border-gray-600">
        <img src={logo1} alt="logo1" className="mb-12 pb-12" />
        <div className="flex items-center">
          <h2
            className={`${textStyles.bl_heading} text-xl text-cdcolor font-semibold ml-4`}>
            {title}
          </h2>
        </div>
        <div className="ml-5 flex justify-center items-center">
          <img src={logo} alt="logo" className="h-[120px] w-[130px]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
