import React from "react";

import quote1 from "../assets/quote1.svg";
import textStyles from "../textstyles/textstyle";
import favicon from "../assets/favicon.png";

const Feedback = ({ quote, title, name }) => {
  return (
    <div className=" rounded flex flex-col md:w-[327px] w-[100px]  ml-[15px]  h-[160px] md:h-[397px] md:ml-10 md:pl:32   cursor-pointer bg-fbg custom-shadow transition-transform hover:scale-110">
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src={quote1}
          alt="quote"
          className="md:mt-2 md:mb-2 md:mt-4 w-[10px] mb-2 mt-2 md:w-[80px] md:mb-4"
        />
        <p
          className={`${textStyles.b_para} mb-[1px] md:text-base text-[6px] md:mb-4 pl-2 pr-2 md:pl-6 md:pr-6 md:pl-10 md:pr-10`}>
          {quote}
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <div className="">
          <img
            src={favicon}
            alt="favicon"
            className="pb-2 md:pb-4 pb-4 mr-4 md:mr-6 w-[10px] md:w-[40px]"
          />
        </div>
        <div className="flex flex-col pb-2 md:pb-10">
          <h3
            style={{ fontWeight: "500" }}
            className={`${textStyles.bl_heading} md:text-base text-[4px]`}>
            {name}
          </h3>
          <span className={`${textStyles.g_heading} md:text-base text-[4px]`}>
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
