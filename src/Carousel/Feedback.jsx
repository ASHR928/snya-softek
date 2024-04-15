import React from "react";

import quote1 from "../assets/quote1.svg";
import textStyles from "../textstyles/textstyle";
import favicon from "../assets/favicon.png";

const Feedback = ({ quote, title, name }) => {
  return (
    <div className="rounded flex flex-col md:w-[70%] cursor-pointer bg-fbg custom-shadow transition-transform hover:scale-110">
      <div className="flex flex-col justify-center items-center text-center">
        <img src={quote1} alt="quote" className="mt-2 mb-2 md:mt-4 md:mb-4" />
        <p
          style={{ fontSize: "0.9rem" }}
          className={`${textStyles.b_para} mb-2 md:mb-4 pl-6 pr-6 md:pl-10 md:pr-10`}>
          {quote}
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <div className="">
          <img
            src={favicon}
            alt="favicon"
            className="pb-2 md:pb-4 w-[40%] md:w-[50%]"
          />
        </div>
        <div className="flex flex-col pb-4 md:pb-10">
          <h3
            style={{ fontWeight: "500", fontSize: "1rem" }}
            className={`${textStyles.bl_heading} mb-1`}>
            {name}
          </h3>
          <span
            style={{ fontSize: "0.8rem" }}
            className={`${textStyles.g_heading}`}>
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
