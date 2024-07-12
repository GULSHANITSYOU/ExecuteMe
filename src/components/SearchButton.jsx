import React from "react";
import { IoIosSearch } from "react-icons/io";


const SearchButton = () => {
  return (
    <button className="h-[70%] dark:bg-[#161618] font-semibold  border border-transparent text-slate-500 dark:text-[#aaaaa4]  hover:border-[#acb5ff]  bg-[#f6f6f7] px-3 rounded-md flex gap-1 items-center">
      <div className="text-xl ">
        <IoIosSearch />
        </div>
      <h5 className="text-[13px] ">Search</h5>
      <div className="border px-1 py-0.5 rounded-md border-slate-300  ml-2 text-[12px] flex items-center ">
        Ctrl K
      </div>
    </button>
  );
};

export default SearchButton;
