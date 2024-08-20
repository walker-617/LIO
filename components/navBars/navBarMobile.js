"use client";

import CloseIcon from "../../icons/closeIcon";
import { useState } from "react";
import SearchIcon from "@/icons/searchIcon";

function NavBarMobile() {
  const [close, setClose] = useState(true);

  return (
    <div className="lg:hidden">
      <div className=" sticky top-0 bg-black text-[10px] font-bold items-center justify-between flex p-[15px] flex-row gap-[40px] text-orange-500">
        <a href="./" className="text-[30px] font-bold leading-none">
          LIO
        </a>
        {close ? (
          <div
            className="flex flex-col gap-[5px] cursor-pointer"
            onClick={() => setClose(false)}
          >
            <div className="h-[3px] w-[25px] bg-orange-500"></div>
            <div className="h-[3px] w-[25px] bg-orange-500"></div>
            <div className="h-[3px] w-[25px] bg-orange-500"></div>
          </div>
        ) : (
          <div className="text-black flex justify-center items-center text-[15px] gap-[15px] cursor-pointer">
            <a href="./myPortfolio" className="bg-orange-500 px-[5px]">
              My portfoLIO
            </a>
            {/* <a href="./about" className="underline underline-offset-[5px]">About</a> */}
            <a href="./login" className="bg-orange-500 px-[5px]">
              Login
            </a>
            <span onClick={() => setClose(true)}>
              <CloseIcon height="25px" width="25px" color="#f97316" />
            </span>
          </div>
        )}
      </div>
      <form className="flex border-[1px] rounded-[0] border-orange-900 has-[:focus]:border-orange-500 py-[5px] pl-[10px] pr-[10px] mx-[12px] mt-[10px]">
        <input
          placeholder="Search portfoLIOs with email"
          className=" mr-[5px] text-orange-500 placeholder:text-gray-400 placeholder:text-[13px] w-full placeholder:font-light text-[15px]  bg-transparent border-0  focus:outline-none"
        />
        <button className="cursor-pointer pl-[5px] border-l-[2px] border-orange-500">
          <SearchIcon height="25px" width="25px" color="#f97316" />
        </button>
      </form>
    </div>
  );
}

export default NavBarMobile;
