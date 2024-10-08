import React, { useState } from "react";
import SkullGiff from "./Giff-Comps/skull";
import DancingBear from "./Giff-Comps/dancingbear";
import SearchBar from "./Giff-Comps/search-bar";
import MemeBox from "./Giff-Comps/meme-box";
import LoaderSixth from "./loaders/loader-six";
import Image from "next/image";
import CurlyHr from "@assets/images/curly-hr.png";

const Hero = () => {
  const [showLoader, setShowLoader] = useState(true);

  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = () => {
    const maxTop = window.innerHeight / 2 - 100;
    const maxLeft = window.innerWidth / 2 - 100;

    const randomTop = Math.floor(Math.random() * (maxTop * 2)) - maxTop;
    const randomLeft = Math.floor(Math.random() * (maxLeft * 2)) - maxLeft;

    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div>
      <div className="pt-6 container mx-auto max-sm:px-4">
        {showLoader && <LoaderSixth onClose={() => setShowLoader(false)} />}
        <div className="flex md:flex-row flex-col justify-between ">
          <span className="max-md:mx-auto">
            <DancingBear />
          </span>
          <SearchBar />
        </div>
        <div className="flex flex-col md:gap-16 gap-7 items-center justify-center">
          <h1 className="font-cedarvilleCursive lg:text-8xl max-sm:mt-10 text-5xl break-words font-bold lg:w-[825px] text-center">
            Welcome to the Chaos Zone!
          </h1>
          <p className="font-cedarvilleCursive lg:text-6xl text-2xl">
            Where Nothing Makes Sense
          </p>

          <button
            onClick={handleMouseEnter}
            style={{
              transform: `translate(${position.left}px, ${position.top}px)`,
            }}
            className=" text-white font-cedarvilleCursive cursor-pointer max-lg:w-[190px] transition-transform duration-300 ease-outfont-cedarvilleCursive lg:text-[29px] text-[18px] mx-auto block font-medium bg-[#D21EFF] shadow-PurpleShadow px-5 py-2"
            onMouseEnter={() => {
              handleMouseEnter();
            }}
          >
            Click if you dare!
          </button>
          <div>
            <p className="font-cedarvilleCursive lg:text-3xl max-[400px]:w-[300px] break-words text-center text-base md:mt-16 mt-5">
              CA:0x71C7656EC7ab88b098defB751B7401B5f6d8976F
            </p>
          </div>
          <div className="flex md:flex-row -mt-10 flex-col max-md:items-center justify-between  w-full">
            <SkullGiff />
            <MemeBox />
          </div>
        </div>
      </div>
      <Image src={CurlyHr} alt="hr line" className="w-full" />
    </div>
  );
};

export default Hero;
