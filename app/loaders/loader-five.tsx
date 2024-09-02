"use client";
import React, { useState } from "react";
import Image from "next/image";
import BTNBG from "@assets/images/loader-five-btnimg.png";
import WebLogo from "@assets/images/web-logo.png";

const LoaderFive = () => {
  const [showText, setShowtext] = useState(false);

  const [position, setPosition] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });

  const handleMouseEnter = () => {
    const randomTop = Math.floor(Math.random() * 600) - 300;
    const randomLeft = Math.floor(Math.random() * 600) - 300;

    setPosition({ top: randomTop, left: randomLeft });
  };

  return (
    <div className="w-full bg-[#FDF407] h-screen absolute">
      <div className="flex flex-col justify-center h-screen items-center gap-14">
        <h1 className="font-cedarvilleCursive text-7xl text-center w-[1195px]">
          Sorry for the inconvenience! Please accept our apology
        </h1>
        <Image
          style={{
            transform: `translate(${position.left}px, ${position.top}px)`,
          }}
          className="mx-auto cursor-pointer transition-transform duration-1000 ease-out"
          alt="cat-gif"
          src={BTNBG}
          onMouseEnter={() => {
            handleMouseEnter();
            setShowtext(true);
          }}
        />
        <div>
          {showText && (
            <>
              <Image className="mx-auto" src={WebLogo} alt="laughter" />
              <h5 className="font-cedarvilleCursive text-5xl text-center">
                haha! the fool can,t even click the button
              </h5>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoaderFive;
