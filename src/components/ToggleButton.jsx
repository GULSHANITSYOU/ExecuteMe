import React, { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { LuMoon } from "react-icons/lu";

const ToggleButton = () => {
  const [theme, setTheme] = useState(false);
  const handalclick = () => {
    setTheme((prev) => !prev);    
  };
  return (
    <button
      type="checkbox"
      onClick={handalclick}
      className={`h-[1.4rem] relative  hover:border-[#7a7ece] dark:bg-[#272a30] w-11 rounded-xl p-2  bg-[#eff0f3] flex items-center  border border-slate-500`}>
      <div
        className={`w-fit absolute transition-all duration-150 ease-out dark:bg-black dark:text-white bg-white rounded-full p-[0.2rem] flex items-center justify-center ${
          theme ? "left-0" : "left-5"
        }`}>
        {theme ? <MdOutlineLightMode /> : <LuMoon />}
        {theme
      ? document.querySelector("#root").classList.remove("dark")
      : document.querySelector("#root").classList.add("dark")}
      </div>
    </button>
  );
};

export default ToggleButton;
