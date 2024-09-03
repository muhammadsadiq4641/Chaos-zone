"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import { Modal } from "antd";
import DancingBearGiff from "@assets/giff/dancing-bear.gif";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const DancingBear: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      if (isModalOpen) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
        videoRef.current.currentTime = 0; // Optional: Reset video to start
      }
    }
  }, [isModalOpen]);

  return (
    <div>
      <Image
        onClick={showModal}
        src={DancingBearGiff}
        alt="dancing bear"
        className="w-[83px]"
      />
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <div className="md:bg-[#31FF28] md:shadow-whiteShadow relative p-5  w-[90%] md:w-[504px] h-[70%] md:h-[380px] flex justify-center items-center">
          <p className="text-black absolute top-4 right-4">
            <IoMdClose
              onClick={handleCancel}
              className="hover:bg-[#ffffff49]"
            />
          </p>
          <video className="w-full h-full" ref={videoRef} autoPlay loop playsInline>
            <source src="../assets/videos/sleeping-guy-video.mp4" type="video/mp4" />
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default DancingBear;
