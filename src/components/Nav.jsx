import React from "react";
import {vitenavlogo} from "../assets";

const Nav = () => {
  return (
    <nav className="h-14 ">
      <div className=" w-[1380px] h-full mx-auto flex flex-1 justify-between items-center">
        {/* search logo container */}
        <div className="flex h-full items-center justify-start gap-4">
            <a href="/" className="flex gap-2">
            <img src={vitenavlogo} alt="vite nav logo" width={23} height={23}  />
            <h3 className="font-semibold">Vite</h3>
            </a>
            <button>
                
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
