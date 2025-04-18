"use client";
import React, { useState } from "react";
import Card from "../components/card";

const cards = [
  {
    imageSrc: "/cardimage1.png",
    iconSrc: "/cardIcon(1).png",
    location: "UNIVERSITY DISTRICT",
    title: "Settling In",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/cardimage(2).png",
    iconSrc: "/cardIcon(2).png",
    location: "NORTHGATE",
    title: "Essential Documents and Preparations",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/cardimage(2).png",
    iconSrc: "/cardIcon(3).png",
    location: "RAVENNA",
    title: "Campus Orientation and Study Essentials",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/cardimage(2).png",
    iconSrc: "/cardIcon(4).png",
    location: "DOWNTOWN SEATTLE",
    title: "Social and Academic Integration",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/cardimage(2).png",
    iconSrc: "/cardIcon(5).png",
    location: "SOUTH SEATTLE",
    title: "Part-Time Work and Academic Credits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    imageSrc: "/cardimage(2).png",
    iconSrc: "/cardIcon(6).png",
    location: "BELLEVUE",
    title: "Lifestyle and Adjustments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function CardViewer() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <Card {...cards[currentIndex]} onPrev={handlePrev} onNext={handleNext} />
  );
}
