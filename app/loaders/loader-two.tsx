import React from "react";
import Image from "next/image";
import catLoader from "@assets/giff/cat-loader.gif";


const LoaderTwo = () => {
  return (
    <div className="w-full bg-[#31FF28] h-screen">
      <div className="flex flex-col max-md:pt-36 md:justify-center h-screen items-center">
        <Image className="mx-auto w-[150px]" alt="cat-gif" src={catLoader} />
        <h1 className="font-cedarvilleCursive md:text-7xl text-4xl text-center xl:w-[1195px]">
        Cancel my subscription because I don't need your issues
        </h1>
      </div>
    </div>
  );
};

export default LoaderTwo;
