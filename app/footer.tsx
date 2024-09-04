import React from "react";
import Image from "next/image";
import FooterImg from "@assets/images/footer-top-img.png";
import WebLogo from "@assets/images/web-logo.png";
import FooterLogo from "@assets/images/footer-logo.png";
import FooterTelegram from "@assets/images/footer-telegram-logo.png";
import FooterX from "@assets/images/footer-x-logo.png";

const Footer = () => {
    const currentYear: number = new Date().getFullYear();

  return (
    <div>
      <Image className="w-full" src={FooterImg} alt="asd" />
      <div className="container mx-auto py-5 px-2">
        <div className="flex max-md:flex-col max-md:gap-10 items-center justify-between">
          <div className="flex  items-center gap-5">
            <Image className="w-[44px] h-[44px]" src={FooterLogo} alt="logo" />
            <Image className="w-[35px] h-[30px]" src={FooterX} alt="logo" />
            <Image
              className="w-[35px] h-[40px]"
              src={FooterTelegram}
              alt="logo"
            />
          </div>
          <div>
            <p className="sm:text-[25px] text-[14px] font-cedarvilleCursive text-center">
              © {currentYear} You Have Rights.... Right! haha...
            </p>
          </div>
          <div>
            <Image className="w-[87px] h-[59px]" src={WebLogo} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
