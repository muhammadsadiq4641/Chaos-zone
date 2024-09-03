"use client"
import React, { useEffect } from "react";
import { IoPlay } from "react-icons/io5";
interface LoaderSixProps {
  onClose: () => void;
}

const LoaderSix: React.FC<LoaderSixProps> = ({ onClose }) => {
  useEffect(() => {
    const video = document.getElementById('videoElement') as HTMLVideoElement | null;
    if (video) {
      video.play(); 
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="relative">
        <video loop autoPlay id="videoElement" playsInline className="w-[500px]">
          <source src="/assets/videos/meme-video.mp4" type="video/mp4" />
        </video>
        <button
          onClick={() => {
            const video = document.getElementById('videoElement') as HTMLVideoElement | null;
            if (video) {
              video.play();
            }
          }}
          className="absolute top-2 left-2 text-black  bg-white rounded-full w-[50px] h-[50px]"
        >
          play
        </button>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white  "
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoaderSix;
