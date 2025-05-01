"use client";
import { useState } from "react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ open, setOpen }) {
  const [openSection, setOpenSection] = useState(null);
  return (
    <div
      className={classNames(
        "fixed top-0 left-0 w-full backdrop-blur bg-white/10border-b border-white/20 shadow z-50 px-4 py-8 md:opacity-0 lg:opacity-0 transition-all duration-200",
        open ? "opacity-0" : ""
      )}
    ></div>
  );
}
