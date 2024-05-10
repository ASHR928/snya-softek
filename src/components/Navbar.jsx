import { navLinks } from "../constants";
import logo from "../assets/anya-logo.svg";
import cmi from "../assets/home/cmi.svg";
import menu from "../assets/home/menu.svg";
import cross from "../assets/home/cross.svg";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navbarRef = useRef(null);
  const navbarButtonRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(e.target) &&
        !navbarButtonRef.current.contains(e.target)
      ) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = 20;
      const currentScrollPos = window.pageYOffset;
      const isScrollingDown = currentScrollPos > threshold;
      setIsScrolled(isScrollingDown);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`w-full px-4 py-2 flex z-50 fixed justify-between items-center navbar ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
    >
      <div className="flex justify-start">
        <img
          src={logo}
          alt="logo"
          className="w-auto h-10 sm:h-12 sm:ml-10 md:mt-2 md:ml-8 md:pl-20"
        />
      </div>

      <div className="hidden sm:flex justify-center flex-1">
        <ul className="list-none flex space-x-6 md:space-x-14">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-montserrat text-xl text-black hover:scale-110 hover:font-semibold cursor-pointer transition-all duration-300 ease-in-out"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex justify-end items-center">
        <img
          src={cmi}
          alt="cmi"
          className="w-auto h-12 pr-10 md:mr-6
           hidden md:block"
        />

        <img
          src={toggle ? cross : menu}
          alt="menu"
          className="w-8 h-8 ml-2 md:hidden"
          onClick={() => setToggle((prev) => !prev)}
          ref={navbarButtonRef}
        />
      </div>

      {toggle && (
        <div
          className="sm:hidden absolute top-14 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-tertiary"
          ref={navbarRef}
        >
          <ul className="list-none flex flex-col p-4 items-start">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] border-b border-white w-full ${
                  active === nav.title ? "text-black" : "text-white"
                }  ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
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
