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
import { RiArrowRightUpLine } from "react-icons/ri";

const Nav = () => {
  return (
    <nav className="h-14 bg-transparent w-full z-10">
      <div className=" w-[95%] h-full mx-auto flex flex-1 justify-between items-center">
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
        <div className="h-full  flex gap-4 items-center">
          <ul className="h-full  flex  items-center gap-5 text-[0.9rem] text-slate-600 dark:text-slate-200 font-medium">
            {links.NavLinks.map(({ lable, href }) => (
              <li
                className="hover:text-[#7a7ece] transition-[300ms]"
                key={lable}>
                <a href={href}>{lable}</a>
              </li>
            ))}

            <div className=" dropDown relative h-full">
              <li className="flex   hov items-center gap-[0.4rem] h-full  hover:text-[#868992] transition-all duration-150 cursor-pointer ">
                Resources
                <MdKeyboardArrowDown />
              </li>

              <div className="absolute  font-semibold right-0 top-[95%] w-[185%] bg-white  dark:bg-[#202127] shadow-xl   rounded-lg   droppdown  flex justify-center items-center">
                <ul className="flex flex-col gap-3  py-4  px-5">
                  {links.Resources.Document.map((link) => (
                    <li key={link.lable}>
                      <a href={link.src}>{link.lable}</a>
                    </li>
                  ))}
                </ul>

                <hr className="w-full   left-0  dark:border-[#343437]" />

                <ul className="flex flex-col gap-3  py-4  px-5">
                  {links.Resources.social.map((link) => (
                    <li className="flex items-center gap-1" key={link.lable}>
                      <a href={link.src}>{link.lable}</a>
                      <div className="text-[#7c7d86]">
                        <RiArrowRightUpLine />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className=" dropDown relative h-full">
              <li className="flex   hov items-center gap-[0.4rem] h-full  hover:text-[#868992] transition-all duration-150 cursor-pointer ">
                Version
                <MdKeyboardArrowDown />
              </li>

              <div className="absolute  right-0 top-[100%] w-[191%] bg-white  py-4  px-5 dark:bg-[#202127] shadow-lg  rounded-md droppdown  flex justify-center items-center">
                <ul className="flex flex-col gap-2.5 font-semibold">
                  {links.versions.map((link) => (
                    <li className="flex items-center gap-1" key={link.lable}>
                      <a href={link.src}>{link.lable}</a>
                      <div className="text-[#7c7d86]">
                        <RiArrowRightUpLine />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <li>
              <div className="border-l-2  dark:border-[#303035] border-slate-300 h-6  w-1"></div>
            </li>

            <div className=" dropDown relative h-full ">
              <li className="flex   hov items-center gap-[0.4rem] h-full  hover:text-[#868992] transition-all duration-150 cursor-pointer ">
                <IoLanguageOutline />
                <MdKeyboardArrowDown />
              </li>

              <div className="absolute  right-0 top-[100%] w-[360%] bg-white  py-4  px-5 dark:bg-[#202127] shadow-lg  rounded-md droppdown  flex justify-center items-center">
                <ul className="flex flex-col gap-2.5 ">
                  <li className="font-semibold">English</li>
                  {links.languages.map((link) => (
                    <li className="flex items-center gap-1" key={link.lable}>
                      <a href={link.src}>{link.lable}</a>
                      <div className="text-[#7c7d86]">
                        <RiArrowRightUpLine />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

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
