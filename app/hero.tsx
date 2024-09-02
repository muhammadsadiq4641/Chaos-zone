import React, {useState} from "react";
import SkullGiff from "./Giff-Comps/skull";
import DancingBear from "./Giff-Comps/dancingbear";
import SearchBar from "./Giff-Comps/search-bar";
import MemeBox from "./Giff-Comps/meme-box";
import LoaderSixth from "./loaders/loader-six";

const Hero = () => {

    const [position, setPosition] = useState<{ top: number; left: number }>({
        top: 0,
        left: 0,
      });

      const [showLoader, setShowLoader] = useState(true);

      const handleMouseEnter = () => {
        const randomTop = Math.floor(Math.random() * 600) - 300;
        const randomLeft = Math.floor(Math.random() * 600) - 300;
    
        setPosition({ top: randomTop, left: randomLeft });
      };

  return (
    <div className="pt-6 container mx-auto max-sm:px-4">
        {showLoader && <LoaderSixth onClose={() => setShowLoader(false)} />}
      <div className="flex justify-between ">
        <DancingBear />
        <SearchBar />
      </div>
      <div className="flex flex-col gap-16 items-center justify-center">
        <h1 className="font-cedarvilleCursive text-8xl font-bold w-[825px] text-center">
          Welcome to the Chaos Zone!
        </h1>
        <p className="font-cedarvilleCursive text-6xl">
          Where Nothing Makes Sense
        </p>

        <div>
          <button style={{
            transform: `translate(${position.left}px, ${position.top}px)`,
          }} className="  cursor-pointer transition-transform duration-700 ease-outfont-cedarvilleCursive text-[29px] mx-auto block font-medium bg-[#D21EFF] shadow-PurpleShadow px-5 py-2"  onMouseEnter={() => {
            handleMouseEnter();
          }}>
            Click if you dare!
          </button>
          <p className="font-cedarvilleCursive text-3xl mt-16">
            CA:0x71C7656EC7ab88b098defB751B7401B5f6d8976F
          </p>
        </div>
        <div className="flex justify-between  w-full">
            <SkullGiff />
            <MemeBox />
        </div>
      </div>
    </div>
  );
};

export default Hero;
