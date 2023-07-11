import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <button className="space-y-1 md:hidden z-20" onClick={handleClick}>
        {isOpen ? (
          <span className="text-4xl font-bold mx-2">x</span>
        ) : (
          <>
            <div className="bg-black block w-6 h-[0.25rem] rounded" />

            <div className="bg-black block w-6 h-[0.25rem] rounded" />

            <div className="bg-black block w-6 h-[0.25rem] rounded" />
          </>
        )}
      </button>
      {isOpen ? (
        <div className="md:hidden absolute top-0 bg-white w-full h-screen text-center py-36">
          <ul
            className="items-center text-black space-y-6"
            onClick={handleClick}
          >
            <li className="hover:text-gray-500 cursor-pointer text-lg">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-lg">
              <a href="#about">About Me</a>
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-lg">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-gray-500 cursor-pointer text-lg">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
}
