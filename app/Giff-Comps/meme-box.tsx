"use client";
import React, { FC, useState, useRef, useEffect } from "react";
import { Modal } from "antd";
import MemeBoxGiff from "@assets/giff/memeBox.gif";
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
        videoRef.current.currentTime = 0; // Optional: Reset video to start
      }
    }
  }, [isModalOpen]);

  return (
    <div>
      <Image
        onClick={showModal}
        src={MemeBoxGiff}
        alt="dancing bear"
        className="w-[83px]"
      />
      <Modal open={isModalOpen} onCancel={handleCancel}>
        <div className="bg-[#FA0019] shadow-whiteShadow relative p-5 w-[504px] h-[380px] flex justify-center items-center">
          <p className="text-black absolute top-4 right-4">
            <IoMdClose
              onClick={handleCancel}
              className="hover:bg-[#ffffff49]"
            />
          </p>
          <video className="" ref={videoRef} autoPlay loop playsInline>
            <source src="../assets/videos/chin-tapak.mp4" type="video/mp4" />
          </video>
        </div>
      </Modal>
    </div>
  );
};

export default MemeBox;
