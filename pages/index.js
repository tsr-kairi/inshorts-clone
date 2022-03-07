import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import AppBarBottom from "../components/AppBarBottom";
import AppBarTop from "../components/AppBarTop";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import NewsContent from "../components/newsContent/NewsContent";
import axios from "axios";
import apikey from "../data/config";

export default function Home() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();

  const newsApi = async (category) => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apikey}&category=${category}`
      );
      setNewsArray(news.data.articles);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi(category);
  }),
    [newsResults, category];

  return (
    <div>
      <Head>
        <title>Inshorts-Clone</title>
      </Head>
      <NavBar setCategory={setCategory} />
      <div className="md:w-[65.5%] w-[96%] mx-auto mt-10">
        <AppBarTop />
        <NewsContent newsArray={newsArray} newsResults={newsResults} />
        <AppBarBottom />
      </div>
      <Footer />
    </div>
  );
}
