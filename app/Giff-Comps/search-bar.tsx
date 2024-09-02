"use client";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import SearchIcon from "@assets/images/search-icon.png";
import WebLogo from "@assets/images/web-logo.png";
import { useState, useRef } from "react";
import { IoIosClose } from "react-icons/io";

const SearchBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    setisOpen(!isOpen);
    if (audioRef.current) {
        audioRef.current.play(); 
      }
  };
  const handleCancle = () => {
    setisOpen(false);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex justify-between w-[440px] px-5 border-2 py-3 shadow-BlackShadow cursor-pointer border-black"
      >
        <p className="font-cedarvilleCursive text-lg">Don’t Search!</p>
        <Image src={SearchIcon} alt="search icon" />
      </div>
      {isOpen && (
        <div className="border border-black  p-5 w-[440px] mt-5 relative">
            <p onClick={handleCancle} className="absolute text-black text-2xl right-3 top-3 cursor-pointer"><IoIosClose /></p>
          <Image className="w-[60px] mx-auto mb-3"
            src={WebLogo}
            alt="web logo
            "
          />
          <p className="font-cedarvilleCursive text-lg font-bold text-center">So you think this is search bar</p>
          <audio autoPlay loop ref={audioRef}>
            <source src="/assets/voice/laughing-meme-voice.mp3" type="audio/mpeg" />
          </audio>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
