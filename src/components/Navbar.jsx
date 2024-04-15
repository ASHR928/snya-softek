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
      className={`w-full px-4 py-2 flex z-50 fixed justify-between items-center navbar ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}>
      <div className="flex justify-start">
        <img src={logo} alt="logo" className="w-auto h-12 ml-2 md:ml-4" />
      </div>

      <div className="hidden sm:flex justify-center flex-1">
        <ul className="list-none flex space-x-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-montserrat text-xl text-black hover:scale-110">
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-end items-center">
        <img
          src={cmi}
          alt="cmi"
          className="w-auto h-12 mr-2 md:mr-4 hidden md:block"
        />

        <img
          src={toggle ? cross : menu}
          alt="menu"
          className="w-8 h-8 ml-2 md:hidden"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>

      {toggle && (
        <div className="sm:hidden absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-blue-gradient">
          <ul className="list-none flex flex-col items-end">
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
      )}
    </nav>
  );
};

export default Navbar;
