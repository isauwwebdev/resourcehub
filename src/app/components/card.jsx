import React from "react";
import Image from "next/image";

export default function Card({ cardNumber, show }) {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg overflow-hidden flex rounded">
      <div className="relative w-full h-80">
        <Image
          src="/cardImag.png"
          alt="University District"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-5">
        <div className="relative w-9 h-10 mb-3 p-3">
          <Image
            src="/person1.png"
            alt="University District"
            layout="fill"
            objectFit="cover"
          />
        </div>
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
        <button className="mt-6 px-12 py-1 bg-red-800 text-white text-lg font-semibold rounded-lg hover:shadow focus:outline-none">
          Visit
        </button>
      </div>
      <div class="flex p-6">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
