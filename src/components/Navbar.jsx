import React from "react";
import { navLinks } from "../constants";
import logo from "../assets/home/logo.svg";
import menu from "../assets/home/menu.svg";
import cross from "../assets/home/cross.svg";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > prevScrollPos;
      const isPastThreshold = currentScrollPos > 100; // Adjust the threshold as needed
      setIsScrolled(isScrollingDown || isPastThreshold);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);
  return (
    // "w-full flex fixed py-4 justify-around items-center navbar"
    <nav
      className={`w-full pr-10 flex z-50 fixed py-4 justify-around items-center navbar ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start ">
          <img
            src={logo}
            alt="logo"
            className="w-[158px] h-[73px] ml-10 mt-3"
          />
        </div>

        <div className="flex justify-center  flex-1 w-full">
          <ul className="list-none flex sm:flex hidden justify-center items-center space-x-12 w-full">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-2xl text-black transition-transform hover:scale-110 `}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <button
            style={{
              border: "2px solid",
              borderColor: "transparent",
              background:
                "linear-gradient(172.29deg, #07547D 5.19%, #3BB7F9 93.4%)",
              backgroundClip: "padding-box",
            }}
            className="hidden md:block w-[242px] h-[53px] text-white text-xl font-poppins mr-10 relative overflow-hidden transition-transform hover:scale-110 rounded-lg">
            Get in touch
          </button>
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
