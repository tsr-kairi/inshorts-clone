import React from "react";
import categories from "../data/category";

export default function Sidebar({ setCategory }) {
  return (
    <ul className="">
      <div className="flex border border-gray-400 mt-5 mx-4 rounded-sm mb-5">
        <button class="bg-gray-400 text-black py-1 md:px-4 px-10 font-thin text-sm">
          English
        </button>

        <button class="bg-transparent font-thin text-sm md:px-8 px-12 hover:text-red-500">
          हिंदी
        </button>
      </div>
      <p className="border-t border-gray-400 text-sm font-thin text-gray-400 pt-2 pb-4">
        Categories
      </p>

      {categories.map((category, index) => (
        <li className="mb-1">
          <a
            href="#"
            key={index}
            onClick={() => setCategory(category)}
            className="flex items-center p-2 px-4 text-base font-thin hover:text-white rounded-sm hover:bg-gray-600 capitalize"
          >
            {category}
          </a>
        </li>
      ))}
    </ul>
  );
}
