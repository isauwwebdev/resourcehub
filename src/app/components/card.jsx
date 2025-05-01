"use client";
import React from "react";
import Image from "next/image";

export default function Card({
  imageSrc,
  iconSrc,
  location = "Unknown",
  title = "Untitled",
  description = "No description available.",
  onPrev,
  onNext,
}) {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg overflow-hidden">
      {/* Main image */}
      <div className="relative w-full h-[200px]">
        {imageSrc ? (
          <Image src={imageSrc} alt={title} fill className="object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No image</span>
          </div>
        )}
      </div>

      <div className="p-6 -mt-4 mb-8">
        {/* Prev/Next controls */}
        <div className="flex mb-2 justify-end gap-4">
          <button onClick={onPrev} className="text-gray-600 hover:text-black">
            ←
          </button>
          <button
            onClick={onNext}
            className="text-gray-600 hover:text-black z-10"
          >
            →
          </button>
        </div>

        {/* Icon */}
        <div className="relative w-11 h-11 mb-8">
          {iconSrc && (
            <Image
              src={iconSrc}
              alt="Section icon"
              fill
              className="object-cover"
            />
          )}
        </div>

        <h2 className="font-poppins font-medium text-sm text-red-800 mb-3">
          {location}
        </h2>
        <h3 className="font-poppins font-medium text-2xl text-gray-700 mb-4">
          {title}
        </h3>
        <p className="font-poppins text-base text-gray-600 mb-10">
          {description}
        </p>
        <button className="px-6 py-2 bg-red-800 text-white rounded-lg hover:bg-red-600 focus:outline-none">
          Visit
        </button>
      </div>
    </div>
  );
}
