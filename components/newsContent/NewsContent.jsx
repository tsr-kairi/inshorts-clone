import React from "react";
import NewsCard from "../NewsCard";

export default function NewsContent({ newsArray, newsResults }) {
  return (
    <div className="flex flex-col gap-3 mt-5">
      {newsArray.map((newsItem) => (
        <NewsCard newsItem={newsItem} key={newsItem.title} />
      ))}
    </div>
  );
}
