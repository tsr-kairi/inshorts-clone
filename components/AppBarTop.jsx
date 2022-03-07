import React from "react";
import Image from "next/image";

export default function AppBarTop() {
  return (
    <div className="md:flex hidden justify-between items-center px-10 py-1 bg-[#f44336]">
      <span className="text-base font-thin text-white">
        For the best experience use{" "}
        <a href="#" className="font-normal">
          inshorts
        </a>{" "}
        app on your smartphone
      </span>
      <div className="flex items-center gap-6">
        <a href="#" className="object-cover flex items-center">
          <Image src={"/images/appstore.png"} width={132} height={40} />
        </a>
        <a href="#" className="object-cover flex items-center">
          <Image src={"/images/playstore.png"} width={132} height={40} />
        </a>
      </div>
    </div>
  );
}
