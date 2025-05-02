"use client";
import { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function hamburgerIcon({ open, setOpen }) {
  return (
    <div
      className={classNames(
        "z-50 fixed top-4 h-screen transition-all duration-300",
        open ? "left-4" : "lg:left-6 md:left-3.5 left-6"
      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="relative w-8 h-8 flex flex-col justify-between items-center p-1 z-50"
      >
        <span
          className={`block w-full h-0.5 bg-black transition-transform duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-0.5 bg-black transition-opacity duration-300 ease-in-out ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-full h-0.5 bg-black transition-transform duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-3.5" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}
