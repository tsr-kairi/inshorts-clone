import React, { useState } from "react";
import Image from "next/image";
import SideBar from "./SideBar";

export default function Navbar({ setCategory }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white flex w-full items-center sticky top-0 shadow-lg h-[70px] px-6 py-2.5 z-50">
      <div onClick={() => setOpen(!open)} className="relative">
        {open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-black w-[28px] h-[28px] cursor-pointer font-semibold md:ml-48 ml-72"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="text-black w-[28px] h-[28px] cursor-pointer font-semibold"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </div>

      {/* hamburger */}
      <div
        className={` absolute md:w-[15%] w-[65%] bg-[#303036] text-[#ffffff] px-2 transition-all duration-500 ease-in left-0 top-0 z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        <SideBar setCategory={setCategory} />
      </div>
      <a href="#" className="absolute object-cover p-2 left-[50%] ml-[-89px] top-0">
        <Image src={"/images/logo_inshorts.png"} width={132} height={55} />
      </a>
    </div>
  );
}
