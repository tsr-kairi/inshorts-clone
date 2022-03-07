import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center pt-4 mt-6 pb-2 bg-[#323232] text-white md:px-60 px-4 z-10">
      <div className="flex items-center justify-center gap-4">
        <a href="#" className="text-white text-xl font-bold hover:bg-gray-600 p-2">
          <FaFacebookF />
        </a>
        <a href="#" className="text-white text-xl font-bold hover:bg-gray-600 p-2">
          <FaTwitter />
        </a>
        <a href="#" className="text-white text-xl font-bold hover:bg-gray-600 p-2">
          <FaLinkedinIn />
        </a>
      </div>
      <hr className="w-[90%] mx-auto mt-4"/>
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="flex flex-col items-center border-r border-gray-400">
          <a href="#" className="object-cover flex items-center mt-1 pr-6 z-0">
            <Image src={"/images/logo_footer.png"} width={132} height={40} />
          </a>
          <small className="text-sm font-thin text-gray-400 text-right mt-4 pb-6">
            <span className="text-white font-bold">Inshorts</span> Pte. Ltd.
            <br />
            ©COPYRIGHT 2022
          </small>
        </div>
        <div className="flex flex-col items-center">
          <a href="#" className="object-cover flex items-center pl-2 z-0">
            <Image src={"/images/contact_icon.png"} width={132} height={40} />
          </a>
          <small className="text-sm font-thin text-white text-left mt-4 pb-6">
            Terms & conditions
            <br />
            Privacy Policies
          </small>
        </div>
      </div>
    </div>
  );
}
