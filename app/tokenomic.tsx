import React from "react";
import Image from "next/image";
import CurlyImgTop from "@assets/images/orange-curlyLine.png";

const Tokenomic = () => {
  return (
    <div>
      <div className="bg-[#fee901]">
        <Image className="w-full" src={CurlyImgTop} alt="asd" />
        <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_#FFF000_57.31%,_#EFC14E_100%)] min-h-[1484px]">
          <h2 className="font-cedarvilleCursive lg:text-[80px] text-[40px] font-bold text-center pt-10">
            Tokenomics Section
          </h2>
          <div className="container mx-auto px-2">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-20">
              <div className="border-[5px] shadow-DarkBlackShadow min-h-[300px] border-black bg-[#EFC14E] p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[34px] font-bold font-cedarvilleCursive">
                    Marketing Mayhem:{" "}
                  </h2>
                  <h2 className="font-cedarvilleCursive text-[63px] font-semibold">
                    15%
                  </h2>
                </div>
                <p className="text-[25px] font-semibold text-center leading-[40px]">
                  15% for spreading the chaos – because marketing should be as
                  unpredictable as a coin toss.
                </p>
              </div>
              <div className="border-[5px] shadow-DarkBlackShadow min-h-[300px] border-black bg-[#EFC14E] p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[34px] font-bold font-cedarvilleCursive">
                    Liquidity Fool (LF):{" "}
                  </h2>
                  <h2 className="font-cedarvilleCursive text-[63px] font-semibold">
                    20%
                  </h2>
                </div>
                <p className="text-[25px] font-semibold text-center leading-[40px]">
                  20% for the Crypto Abyss Lifeguard – ensuring our liquidity
                  doesn't drown in a sea of confusion.
                </p>
              </div>
              <div className="border-[5px] shadow-DarkBlackShadow min-h-[300px] border-black bg-[#EFC14E] p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[34px] font-bold font-cedarvilleCursive">
                    Tax Tangle:{" "}
                  </h2>
                  <h2 className="font-cedarvilleCursive text-[63px] font-semibold">
                    10%
                  </h2>
                </div>
                <p className="text-[25px] font-semibold text-center leading-[40px]">
                  10% for the Tax Goblins – they demand their share in the
                  currency of chaos, of course.
                </p>
              </div>
              <div className="border-[5px] shadow-DarkBlackShadow min-h-[300px] border-black bg-[#EFC14E] p-5">
                <div className="flex items-center justify-between">
                  <h2 className="text-[34px] font-bold font-cedarvilleCursive">
                    Team Shenanigans:
                  </h2>
                  <h2 className="font-cedarvilleCursive text-[63px] font-semibold">
                    5%
                  </h2>
                </div>
                <p className="text-[25px] font-semibold text-center leading-[40px]">
                  5% for the Team Wizards – responsible for magically
                  transforming caffeine into lines of code.
                </p>
              </div>
              <div className="lg:col-span-2  lg:mx-auto">
                <div className="border-[5px]  lg:w-[725px] shadow-DarkBlackShadow min-h-[300px] border-black bg-[#EFC14E] p-5">
                  <div className="flex items-center justify-between">
                    <h2 className="text-[34px] font-bold font-cedarvilleCursive">
                      Total Token Supply:
                    </h2>
                    <h2 className="font-cedarvilleCursive text-[63px] font-semibold">
                      100%
                    </h2>
                  </div>
                  <p className="text-[25px] font-semibold text-center leading-[40px]">
                    {" "}
                    (because 110% would just be too logical)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomic;
