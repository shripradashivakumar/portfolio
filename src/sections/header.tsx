import { useState } from "react";
import Hamburger from "../components/hamburger";
import Moon from "../assets/Moon.svg";
import Sun from "../assets/Sun.svg";

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  if (isDark) {
    document.querySelector("body")?.classList.add("dark");
  } else {
    document.querySelector("body")?.classList.remove("dark");
  }

  const handleChange = () => {
    setIsDark(!isDark);
  };

  console.log(localStorage);
  return (
    <div className="drop-shadow-lg h-1/6 sticky top-0 w-full bg-white dark:bg-dark mx-auto">
      <nav className="h-full mx-auto flex justify-between items-center">
        <div className="flex-1">
          <img
            className="w-48"
            src={`${isDark ? "/logo10.png" : "/logo3.png"}`}
            alt="logo"
          />
        </div>
        <div className="flex-2 text-center">
          <ul className="hidden items-center text-black md:text-lg md:space-x-10 lg:text-xl lg:space-x-14 md:flex">
            <li className="hover:text-gray-500 cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <a href="#about">About Me</a>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-gray-500 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <button
          className="hidden md:inline-block flex-1 mx-4"
          onClick={handleChange}
        >
          {isDark ? (
            <img src={Moon} className="w-8 float-right" />
          ) : (
            <img src={Sun} className="w-8 float-right" />
          )}
        </button>
        <Hamburger />
      </nav>
    </div>
  );
}
