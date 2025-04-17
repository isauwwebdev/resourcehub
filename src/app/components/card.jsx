import React from "react";
import Image from "next/image";

export default function Card({
  imageSrc,
  iconSrc,
  location,
  title,
  description,
  onPrev,
  onNext,
}) {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg overflow-hidden">
      <div className="relative w-full h-77">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-13 -mt-6 mb-8">
        <div className="flex mb-2 justify-end">
          <button onClick={onPrev} className=" text-gray-600 hover:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={onNext}
            className="text-gray-600 hover:text-black z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="relative w-11 h-11 mb-8">
          <Image src={iconSrc} alt="Icon" layout="fill" objectFit="cover" />
        </div>
        <h2 className="font-poppins font-medium text-[14px] leading-[100%] tracking-tight text-red-800 mb-3">
          {location}
        </h2>
        <h3 className="font-poppins font-medium text-[30px] leading-[100%] tracking-tight text-gray-700 mb-7">
          {title}
        </h3>
        <p className="font-poppins font-normal text-[18px] leading-[100%] tracking-tight text-gray-600 mb-16">
          {description}
        </p>
        <button className="px-18 py-2 bg-red-800 text-white text-lg font-semibold rounded-lg hover:bg-red-600 focus:outline-none">
          Visit
        </button>
      </div>
    </div>
  );
}
