"use client";
import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function BackToIsauw({ level, setLevel }) {
  const router = useRouter();

  const handleClick = () => {
    window.location.href = "https://www.isauw.org/";
  };
  return (
    <button
      onClick={handleClick}
      className={classNames(
        "fixed top-3 right-7 bg-red-800 hover:bg-red-800/75 font-bold text-white px-4 py-2 rounded shadow transform hover:scale-[1.05] hover:translate-x-1",
        level === null ? "z-60 transition ease-in duration-300" : "z-30"
      )}
    >
      back to Isauw.org
    </button>
  );
}
