import React from "react";
import Image from "next/image";
import catLoader from "@assets/giff/cat-loader.gif";


const Loader = () => {
  return (
    <div className="w-full bg-[#FA0019] h-screen">
      <div className="flex flex-col justify-center h-screen items-center">
        <Image className="mx-auto w-[200px]" alt="cat-gif" src={catLoader} />
        <h1 className="font-cedarvilleCursive text-7xl text-center">
          Don’t you have anything better to do
        </h1>
      </div>
    </div>
  );
};

export default Loader;
