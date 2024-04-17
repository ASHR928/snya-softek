import React from "react";
import cardbg from "../assets/clients/cardbg.svg";
import textStyles from "../textstyles/textstyle";
import logo1 from "../assets/clients/logo1.svg";

const Card = ({ title, logo }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cardbg})` }}
      className="md:rounded-2xl rounded-xl flex md:h-[120px] h-[70%] md:w-[98%] w-[98%]  shadow-lg p-4 md:p-4 flex-col justify-center items-center">
      <div className="flex items-center border-b border-gray-600 ">
        <img
          src={logo1}
          alt="logo1"
          className="md:mb-10 mb-6 md:w-[30px] w-[10px] "
        />
        <div className="flex items-center">
          <h2
            className={`${textStyles.bl_heading} md:text-base text-xxs md:W-[40%]    text-cdcolor m-2 font-semibold ml-4`}>
            {title}
          </h2>
        </div>
        <div className="ml-5 flex justify-center items-center">
          <img src={logo} alt="logo" className="md:w-[80px] w-[40px]" />
        </div>
      </div>
    </div>
  );
};

export default Card;
