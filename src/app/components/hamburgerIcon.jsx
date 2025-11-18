"use client";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function HamburgerIcon({ open, setOpen }) {
  return (
    <div
      className={classNames(
        "z-80 fixed top-8 h-screen transition-all duration-300",
        open ? "left-6" : "left-6"

      )}
    >
      <button
        onClick={() => setOpen(!open)}
        className="relative w-8 h-8 flex flex-col justify-between items-center p-1 z-50"
      >
        {/* TOP LINE */}
        <span
          className={`block w-full h-0.5 bg-[#910304] transition-transform duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>

        {/* MIDDLE LINE */}
        <span
          className={`block w-full h-0.5 bg-[#910304] transition-opacity duration-300 ease-in-out ${
            open ? "opacity-0" : ""
          }`}
        ></span>

        {/* BOTTOM LINE */}
        <span
          className={`block w-full h-0.5 bg-[#910304] transition-transform duration-300 ease-in-out ${
            open ? "-rotate-45 -translate-y-3.5" : ""
          }`}
        ></span>
      </button>
    </div>
  );
}
