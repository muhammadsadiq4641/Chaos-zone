import React from "react";
import Image from "next/image";
import CamelImg from "@assets/images/embark-bg.png";
import HushImg from "@assets/images/hush-img.png";
import QuackImg from "@assets/images/quack-img.png";
import PitterPatter from "@assets/images/pitter-patter-img.png";
import Wheoh from "@assets/images/wheoh-img.png";
import Pizza from "@assets/images/pizza.png";

const Embark = () => {
  return (
    <div>
      <div className="container mx-auto px-2 lg:mt-20 lg:pt-20">
        <h2 className="md:text-[63px] text-4xl font-bold text-center font-cedarvilleCursive">
          Embark on a Hilarious Odyssey
        </h2>
        <p className="font-cedarvilleCursive md:text-3xl text-base font-semibold text-center">
          Where Laughter Leads and Seriousness Fears to Tread!
        </p>
      </div>
      <div className=" mt-20 h-[1000vh] max-xl:hidden relative w-full">
        <div className="absolute w-full">
          <Image src={CamelImg} alt="camel" className="w-full h-[1000vh]" />
        </div>
        <div className="absolute top-[3%] right-[20%]">
          <Image className="mx-auto" src={HushImg} alt="image" />
          <p className="font-cedarvilleCursive text-[42px] ">Hush... 🌙💤</p>
        </div>
        <div className="absolute top-[14%] left-[15%]">
          <h2 className="font-cedarvilleCursive text-[72px]">
            Scroll a bit more
          </h2>
        </div>
        <div className="absolute top-[25%] right-[20%]">
          <Image className="mx-auto" src={QuackImg} alt="image" />
          <p className="font-cedarvilleCursive text-[42px] ">Quack quack! 🦆</p>
        </div>
        <div className="absolute top-[38%] left-[15%]">
          <h2 className="font-cedarvilleCursive text-[72px]">
            Scroll a bit more
          </h2>
        </div>
        <div className="absolute top-[50%] right-[20%]">
          <Image className="mx-auto" src={PitterPatter} alt="image" />
          <p className="font-cedarvilleCursive text-[42px] ">
            Pitter-patter... 💧💦🌧️
          </p>
        </div>
        <div className="absolute top-[63%] left-[15%]">
          <h2 className="font-cedarvilleCursive text-[72px]">Almost there!</h2>
        </div>
        <div className="absolute top-[74%] right-[20%]">
          <Image className="mx-auto " src={Wheoh} alt="image" />
          <p className="font-cedarvilleCursive text-[42px] ">
            Wheeeeeeeeeeeeeeoooooooohhhh!😄
          </p>
        </div>
        <div className="absolute bottom-[12%] left-[15%]">
          <h2 className="font-cedarvilleCursive text-[72px]">Almost there!</h2>
        </div>
        <div className="absolute bottom-[3%] right-[20%]">
          <Image className="mx-auto" src={Pizza} alt="image" />
          <p className="font-cedarvilleCursive text-[42px] ">Mmmmmmm... 😋</p>
        </div>
      </div>
      <div className="mx-auto pt-40 lg:w-[1048px]">
        <h1 className="md:text-[40px] text-3xl ">
          Lorem ipsum dolor sit amet consectetur. Suspendisse nunc quam tortor
          senectus rhoncus amet. Id turpis turpis ultrices rhoncus eu eu. In
          congue neque aliquam sed orci tortor facilisis aliquam. Sagittis cras
          sagittis lectus nunc vitae bibendum malesuada habitasse gravida.
        </h1>
      </div>
    </div>
  );
};

export default Embark;
