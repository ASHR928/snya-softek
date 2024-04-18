import React from "react";
import cardbg from "../assets/clients/cardbg.svg";
import textStyles from "../textstyles/textstyle";
import logo1 from "../assets/clients/logo1.svg";

const Card = ({ title, logo }) => {
  return (
    <div
      style={{ backgroundImage: `url(${cardbg})` }}
      className="md:rounded-2xl rounded-l flex md:h-[120px] h-[45px] md:w-[98%] md:pt-0 pt-2 w-[92%]  shadow-lg md:pl-0 pl-2 md:pb-0 pb-[2px] md:p-4 flex-col justify-center items-center">
      <div className="flex items-center border-b border-gray-600 ">
        <img
          src={logo1}
          alt="logo1"
          className="md:mb-10 mb-6  md:w-[30px] w-[15px] "
        />
        <div className="flex items-center">
          <h2
            className={`${textStyles.bl_heading} md:text-base text-[4px] md:W-[70%] w-[40%] ml-2   text-cdcolor md:m-2 font-semibold md:ml-4`}>
            {title}
          </h2>
        </div>
        <div className="md:ml-5 ml-[2px] flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="md:w-[80px] w-[50px] md:mr-0 mr-[3px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
