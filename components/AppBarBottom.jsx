import React from "react";
import Image from "next/image";

export default function AppBarTop() {
  return (
    <div className="md:hidden flex flex-col justify-center items-center px-10 py-1 bg-[#f44336]">
      <span className="text-base text-center font-thin text-white">
        For the best experience use{" "}
        <a href="#" className="font-normal">
          inshorts
        </a>{" "}
        app on your smartphone
      </span>
      <div className="flex items-center my-6">
        <a href="#" className="object-cover flex items-center z-10">
          <Image src={"/images/playstore.png"} width={200} height={70} />
        </a>
      </div>
    </div>
  );
}
