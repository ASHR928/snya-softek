import quote1 from "../assets/quote1.svg";
import textStyles from "../textstyles/textstyle";
import favicon from "../assets/favicon.png";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Feedback = ({ quote, title, name }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      className=" rounded flex flex-col md:w-[327px] sm:w-[200px] w-[100px] ml-[15px] h-[160px] sm:h-[250px] md:h-[497px] md:ml-10  cursor-pointer bg-fbg custom-shadow transition-transform hover:scale-110 "
      data-aos="flip-left"
    >
      <div className="flex flex-col justify-center items-center text-center">
        <img
          src={quote1}
          alt="quote"
          className="mt-2 mb-2 md:mt-4 w-[10px] sm:w-[40px] md:w-[80px] md:mb-4"
        />
        <p
          className={`${textStyles.b_para} mb-[1px] text-[12px] md:text-xl md:mb-4 pl-2 pr-2 sm:pl-6 sm:pr-6 md:pl-10 md:pr-10`}
        >
          {quote}
        </p>
      </div>
      <div className="flex justify-center mt-2">
        <div className="">
          <img
            src={favicon}
            alt="favicon"
            className="pb-2 md:pb-4 mr-4 md:mr-6 w-[10px] sm:w-[20px] md:w-[40px]"
          />
        </div>
        <div className="flex flex-col pb-2 md:pb-10">
          <h3
            style={{ fontWeight: "500" }}
            className={`${textStyles.bl_heading} md:text-base text-[10px]`}
          >
            {name}
          </h3>
          <span className={`${textStyles.g_heading} md:text-base text-[10px]`}>
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

Feedback.propTypes = {
  quote: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Feedback;
