import React from "react";
import Image from "next/image";

export default function NewsCard({ newsItem }) {
  console.log(newsItem);
  return (
    <div className="flex md:flex-row flex-col p-2 shadow-3xl">
      <img
        src={newsItem.urlToImage ? newsItem.urlToImage : "/images/no_image.png"}
        width={300}
        height={500}
        layout="fill"
        alt={newsItem.title}
      />

      <div className="flex flex-col pl-4 py-2 pr-8">
        <span className="text-[22px] text-[#44444d] font-thin leading-6">
          {newsItem.title}
        </span>
        <span className="flex gap-1 text-xs mt-2">
          <a href={newsItem.url} target="__blank">
            <b>short</b>
          </a>{" "}
          <span>by {newsItem.author ? newsItem.author : "unknown"}</span>
        </span>

        <div className="flex flex-col">
          <div className="mt-3 text-base text-[#44444d]">{newsItem.description}</div>
          <span className="mt-4 text-xs text-[#222222]">
            read more at{" "}
            <a href={newsItem.url} target="__blank">
              <b>{newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
