import React from "react";
import { vitenavlogo } from "../assets";
import SearchButton from "./SearchButton";
import { links } from "../constants";
import { IoLanguageOutline } from "react-icons/io5";
import ToggleButton from "./ToggleButton";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  return (
    <nav className="h-14 bg-transparent z-10">
      <div className=" w-[1380px] h-full mx-auto flex flex-1 justify-between items-center">
        {/* search logo container */}
        <div className="flex h-full items-center justify-start gap-4">
          <a href="/" className="flex gap-2">
            <img src={vitenavlogo} alt="vite nav logo" width={23} height={23} />
            <h3 className="font-semibold dark:text-slate-200">Vite</h3>
          </a>

          {/* search button */}
          <SearchButton />
        </div>

        {/* Links section */}
        <div className="h-full flex gap-4 items-center">
          <ul className="h-full  flex  items-center gap-4 text-[0.9rem] text-slate-600 dark:text-slate-200 font-medium">
            {links.NavLinks.map(({ lable, href }) => (
              <li
                className="hover:text-[#7a7ece] transition-[300ms]"
                key={lable}>
                <a href={href}>{lable}</a>
              </li>
            ))}
            <li className="flex items-center gap-[0.4rem] h-full  hover:text-[#868992] transition-all duration-150 cursor-pointer resource">
              Resource
              <MdKeyboardArrowDown />
            </li>
              <div className="abc mx-[5rem] top-12  absolute  w-96 hidden h-96 bg-white"></div>
            <li className="flex items-center gap-[0.4rem] hover:text-[#868992] transition-all duration-150 cursor-pointer">
              Version
              <MdKeyboardArrowDown />
            </li>
            <li>
              <div className="border-l-2  dark:border-[#303035] border-slate-300 h-6  w-1"></div>
            </li>
            <li className="font-bold text-[1.1rem]">
              <IoLanguageOutline />
            </li>
            <li>
              <div className="border-l-[1px]  dark:border-[#303035] border-slate-300 h-6  w-1"></div>
            </li>
            <li className="h-full items-center flex">
              <ToggleButton />
            </li>
            <li>
              <div className="border-l-2  dark:border-[#303035] border-slate-300 h-6  w-1"></div>
            </li>
            <li className="text-2xl dark:text-gray-400">
              <a href="/">
                <FaXTwitter />
              </a>
            </li>
            <li className="text-2xl dark:text-gray-400">
              <a href="/">
                <FaDiscord />{" "}
              </a>
            </li>
            <li className="text-2xl dark:text-gray-400">
              <a href="/">
                <FaGithub />{" "}
              </a>
            </li>
            <li className="text-2xl dark:text-gray-400">
              <a href="/">
                <FaLinkedin />{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
