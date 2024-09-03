import React from "react";
import Image from "next/image";
import CatImg from "@assets/images/cat-image.png"

const LoaderFour = () => {
  return (
    <div className="w-full bg-[#D21EFF] h-screen">
      <div className="flex flex-col justify-center h-screen items-center">
        <Image className="mx-auto w-[200px]" alt="cat-gif" src={CatImg} />
        <h1 className="font-cedarvilleCursive text-7xl text-center xl:w-[1195px]">
        It is not my fault, your internet is slow, get a better connection peep
        </h1>
      </div>
    </div>
  );
};

export default LoaderFour;
