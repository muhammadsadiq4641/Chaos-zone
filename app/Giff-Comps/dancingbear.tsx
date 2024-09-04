"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import { Modal } from "antd";
import DancingBear from "@assets/giff/dancing-bear.gif";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

const MemeBox: FC = () => {
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
        videoRef.current.currentTime = 0;
      }
    }
  }, [isModalOpen]);

  return (
    <div>
      <Image
        onClick={showModal}
        src={DancingBear}
        alt="dancing bear"
        className="w-[83px] cursor-pointer"
      />
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        className="p-0 m-0"
        style={{
          top: 0,
          padding: 0,
        }}
      >
        <div className="bg-[#31FF28] relative shadow-whiteShadow md:p-5 p-2 w-full h-full md:h-auto md:max-w-[768px] mx-auto flex justify-center items-center">
          <IoMdClose
            onClick={handleCancel}
            className="absolute z-50 text-white top-6 right-6 hover:bg-[#ffffff49] cursor-pointer"
            size={15}
          />
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            playsInline
          >
            <source src="../assets/videos/sleeping-guy-video.mp4" type="video/mp4" />
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default MemeBox;
