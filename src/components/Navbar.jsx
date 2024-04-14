import React from "react";
import { navLinks } from "../constants";
import logo from "../assets/home/logo.svg";
import cmi from "../assets/home/cmi.svg";

import menu from "../assets/home/menu.svg";
import cross from "../assets/home/cross.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 20; // Set your threshold value here
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > threshold;
      setIsScrolled(isScrollingDown);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    // "w-full flex fixed py-4 justify-around items-center navbar"
    <nav
      className={`w-full pr-10 flex z-50 fixed  justify-around items-center navbar ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start ">
          <img src={logo} alt="logo" className="w-[173px] h-[83px] ml-10 " />
        </div>

        <div className="flex justify-center  flex-1 w-full">
          <ul className="list-none flex sm:flex hidden  justify-center items-center space-x-12 w-full">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                style={{ fontFamily: "Montserrat" }}
                className={` font-normal cursor-pointer  text-2xl text-black transition-transform hover:scale-110 `}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[173px] h-[72px] mt-4 mb-4 ">
          <img
            src={cmi}
            alt="cmi"
            className="w-[173px] h-[72px] ml-2 hidden md:block "
          />
        </div>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? cross : menu}
            alt="menu"
            className="w-[35px] h-[35px] object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-black" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                  onClick={() => setActive(nav.title)}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
