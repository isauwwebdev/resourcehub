import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg overflow-hidden">
      <div className="relative w-full h-87">
        <Image
          src="/cardImage.png"
          alt="University District"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="mt-[87px] p-6">
        <h2 className="font-poppins font-medium text-[14px] leading-[100%] tracking-tight text-red-800">
          UNIVERSITY DISTRICT
        </h2>
        <h3 className="font-poppins font-medium text-[29.33px] leading-[100%] tracking-tight text-gray-700 mt-2">
          Settling In
        </h3>
        <p className="font-poppins font-normal text-[18px] leading-[100%] tracking-tight text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="mt-6 px-4 py-2 bg-red-800 text-white text-lg font-semibold rounded-lg hover:bg-red-600 focus:outline-none">
          Visit
        </button>
      </div>
    </div>
  );
}
