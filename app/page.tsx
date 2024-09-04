"use client";
import Embark from "./embark";
import Hero from "./hero";
import Loader from "./loaders/loader";
import LoaderFive from "./loaders/loader-five";
import LoaderFour from "./loaders/loader-four";
import LoaderTwo from "./loaders/loader-two";
import LoaderThree from "./loaders/loaderThree";
import Navbar from "./navbar";
import React, { useState, useEffect } from "react";
import Tokenomic from "./tokenomic";
import Footer from "./footer";

const Home: React.FC = () => {
  const [currentLoader, setCurrentLoader] = useState<
    "loader" | "loaderTwo" | "loaderThree" | "loaderFour" | "loaderFive"
  >("loader");
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setCurrentLoader("loaderTwo");
    }, 3000);

    const secondTimer = setTimeout(() => {
      setCurrentLoader("loaderThree");
    }, 6000);

    const thirdTimer = setTimeout(() => {
      setCurrentLoader("loaderFour");
    }, 8000);
    const fourthTimer = setTimeout(() => {
      setCurrentLoader("loaderFive");
    }, 11000);

    const fifthTimer = setTimeout(() => {
      setShowContent(true);
    }, 2000);

    return () => {
      clearTimeout(firstTimer);
      clearTimeout(secondTimer);
      clearTimeout(thirdTimer);
      clearTimeout(fourthTimer);
      clearTimeout(fifthTimer);
    };
  }, []);

  return (
    <main className="bg-[#FDF407]">
      {!showContent && (
        <>
          {currentLoader === "loader" && <Loader />}
          {currentLoader === "loaderTwo" && <LoaderTwo />}
          {currentLoader === "loaderThree" && <LoaderThree />}
          {currentLoader === "loaderFour" && <LoaderFour />}
          {currentLoader === "loaderFive" && <LoaderFive />}
        </>
      )}
      {showContent && (
        <>
            <div className="bg-[#FDF407] h-screen">
              <Navbar />
              <Hero />
            </div>
            <div className="bg-hero-gradient xl:h-[1080vh]">
              <Embark />
            </div>
            <Tokenomic />
            <Footer />
        </>
      )}
    </main>
  );
};

export default Home;
