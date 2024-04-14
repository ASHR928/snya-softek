import React from "react";

import quote1 from "../assets/quote1.svg";
import textStyles from "../textstyles/textstyle";
import favicon from "../assets/favicon.png";

const Feedback = ({ quote, title, name }) => {
  return (
    <div className=" rounded flex flex-col cursor-pointer bg-fbg ml-8 custom-shadow transition-transform hover:scale-110">
      <div className="flex flex-col justify-center items-center text-center">
        <img src={quote1} alt="quote" className="pt-8 pb-8 " />
        <p
          className={`${textStyles.b_para} w-[367px] mb-4   h-[180px] pl-10 pr-10`}>
          {quote}
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <div className="mr-4">
          <img
            src={favicon}
            alt="favicon"
            className="pr-4 pb-4 w-[70px] h-[87px]"
          />
        </div>
        <div className="flex flex-col pb-10">
          <h3
            style={{ fontWeight: "500" }}
            className={`${textStyles.bl_heading}    text-xl`}>
            {name}
          </h3>
          <span className={`${textStyles.g_heading}`}>{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
