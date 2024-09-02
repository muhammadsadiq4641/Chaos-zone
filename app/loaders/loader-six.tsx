// LoaderSix.tsx
import React from "react";

interface LoaderSixProps {
  onClose: () => void;
}

const LoaderSix: React.FC<LoaderSixProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="relative">
        <video autoPlay loop playsInline className="w-[500px]" >
          <source src="/assets/videos/meme-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-gray-600 rounded-full p-2"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default LoaderSix;
