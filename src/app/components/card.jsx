"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Card({
  imageSrc,
  iconSrc,
  location,
  title,
  description,
  onPrev,
  onNext,
  startAnimation, // Accept startAnimation prop
  animation,
  link,
  onClose, 
}) {
  const [resetKey, setResetKey] = useState(0);
  useEffect(() => {
    setResetKey((prevKey) => prevKey + 1);
  }, [animation]);

  return (
    <div className="w-full h-full mx-auto bg-white shadow-lg overflow-hidden ">
      <div className="relative w-full aspect-video md:h-72 ">
        <Image src={imageSrc} alt={title} fill style={{ objectFit: "cover" }} />
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-0 w-9 h-9 z-50
            flex items-center justify-center bg-white/70
            shadow-md
          "
        >
          <span
            className="
              absolute block
              w-5 h-0.5
              bg-red-800
              rotate-45
            "
          />
          <span
            className="
              absolute block
              w-5 h-0.5
              bg-red-800
              -rotate-45
            "
          />
        </button>
      </div>

      <div className="p-10 -mt-8 mb-8">
        <div className="flex mt-4 mb-2 justify-end">
          <button
            onClick={() => {
              startAnimation(); // Start animation
              onPrev(); // Go to the next card
            }}
            className="text-gray-600 hover:text-black z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              startAnimation(); // Start animation
              onNext(); // Go to the next card
            }}
            className="text-gray-600 hover:text-black z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        {/* card start here */}
        <div>
          <div className="relative w-11 h-11 mb-8 ">
            <Image src={iconSrc} alt="Icon" layout="fill" objectFit="cover" />
          </div>
          <h2 className="font-poppins font-medium text-[14px] leading-[100%] tracking-tight text-red-800 mb-3">
            {location}
          </h2>
          <h3 className="font-poppins font-medium text-[30px] leading-[100%] tracking-tight text-gray-700 mb-7">
            {title}
          </h3>
          <p className="font-poppins font-normal text-[18px] leading-[100%] tracking-tight text-gray-600 mb-10">
            {description}
          </p>
          <Link href={link} passHref>
            <button className="px-18 py-2 bg-red-800 text-white text-lg font-semibold rounded-lg hover:bg-red-600 focus:outline-none">
              Visit
            </button>
          </Link>
        </div>
        {/* Train animation */}
        <div className="flex items-center justify-center mt-8">
          <motion.div
            key={resetKey}
            initial={{ x: "-220%" }}
            animate={{ x: animation ? "-200%" : "250%" }}
            transition={{ duration: 1.7 }}
          >
            <Image
              src="/train_frame.png"
              alt="train frame"
              width={200}
              height={200}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
