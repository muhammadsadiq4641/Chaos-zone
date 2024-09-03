import React from "react";
import Image from "next/image";
import catLoader from "@assets/giff/cat-loader.gif";


const LoaderThree = () => {
  return (
    <div className="w-full bg-[#2000FB] h-screen">
      <div className="flex flex-col justify-center h-screen items-center">
        <Image className="mx-auto w-[200px]" alt="cat-gif" src={catLoader} />
        <h1 className="font-cedarvilleCursive text-7xl text-center xl:w-[1195px]">
        You are wasting time like you waste your money
        </h1>
      </div>
    </div>
  );
};

export default LoaderThree;
