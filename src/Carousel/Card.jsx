import cardbg from "../assets/clients/cardbg.svg";
import textStyles from "../textstyles/textstyle";
import logo1 from "../assets/clients/logo1.svg";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Card = ({ title, logo }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div
      style={{ backgroundImage: `url(${cardbg})` }}
      className="md:rounded-2xl rounded-l flex md:h-[120px] h-[45px] md:w-[98%] md:pt-0 pt-2 w-[92%] shadow-lg md:pl-0 pl-2 md:pb-0 pb-[2px] md:p-4 flex-col justify-center items-center"
      data-aos="zoom-in"
    >
      <div className="flex items-center relative ">
        <img
          src={logo1}
          alt="logo1"
          className="md:mb-20 mb-6 md:ml-2 md:mt-2 md:w-[30px] w-[15px] absolute "
        />
        <div className="flex items-center">
          <h2
            className={`${textStyles.bl_heading} border-b border-gray-600  md:text-base text-[4px] md:w-[90%] w-[40%] ml-2   text-cdcolor md:m-2 font-semibold md:ml-4`}
          >
            {title}
          </h2>
        </div>
        <div className="md:ml-5 ml-[2px] flex justify-center items-center">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 md:w-[80px] md:h-auto md:mr-0 mr-[3px]"
          />
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default Card;
