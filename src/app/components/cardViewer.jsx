"use client";
import React, { useState, useEffect } from "react";
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
    imageSrc: "/cardimage1.png",
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
    imageSrc: "/cardimage1.png",
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
  const [animation, setAnimation] = useState(false); // Track animation state

  const handlePrev = () => {
    setAnimation(true);
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAnimation(true);
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  // Start animation when moving to the next card
  const startAnimation = () => {
    setAnimation(true); // Trigger the animation
    setTimeout(() => setAnimation(false), 15); // Reset animation after 1s
  };

  return (
    <Card
      {...cards[currentIndex]}
      onPrev={handlePrev}
      onNext={handleNext}
      startAnimation={startAnimation}
      animation={animation}
    />
  );
}
