"use client";
import React, { useState, useEffect } from "react";
import Card from "../components/card";

const cards = [
  {
    imageSrc: "/assets/card/cardimage1.png",
    iconSrc: "/assets/card/cardIcon(1).png",
    location: "UNIVERSITY DISTRICT",
    title: "Settling In",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/settling",
  },
  {
    imageSrc: "/assets/card/cardimage(2).png",
    iconSrc: "/assets/card/cardIcon(2).png",
    location: "NORTHGATE",
    title: "Essential Documents",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/essentialDocuments",
  },
  {
    imageSrc: "/assets/card/cardimage1.png",
    iconSrc: "/assets/card/cardIcon(3).png",
    location: "RAVENNA",
    title: "Campus Orientation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/campus-study",
  },
  {
    imageSrc: "/assets/card/cardimage(2).png",
    iconSrc: "/assets/card/cardIcon(4).png",
    location: "DOWNTOWN SEATTLE",
    title: "Campus Life",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/social",
  },
  {
    imageSrc: "/assets/card/cardimage1.png",
    iconSrc: "/assets/card/cardIcon(5).png",
    location: "SOUTH SEATTLE",
    title: "Work Opportunities",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/work",
  },
  {
    imageSrc: "/assets/card/cardimage(2).png",
    iconSrc: "/assets/card/cardIcon(6).png",
    location: "BELLEVUE",
    title: "Lifestyle and Adjustments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/lifestyle",
  },
  {
    imageSrc: "/assets/card/cardimage(2).png",
    iconSrc: "/assets/card/cardIcon(6).png",
    location: "INTERNATIONAL DISTRICT",
    title: "Sign Up for ISAUW",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/join-isauw",
  },
];

export default function CardViewer({ selectedIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(selectedIndex);
  const [animation, setAnimation] = useState(false);

  // Sync card with new marker click
  useEffect(() => {
    setCurrentIndex(selectedIndex);
  }, [selectedIndex]);

  const handlePrev = () => {
    setAnimation(true);
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAnimation(true);
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const startAnimation = () => {
    setAnimation(true);
    setTimeout(() => setAnimation(false), 15);
  };

  return (
    <div className="h-full flex flex-col text-black">
      <div className="flex-1 flex items-center justify-center">
        <Card
          {...cards[currentIndex]}
          onPrev={handlePrev}
          onNext={handleNext}
          startAnimation={startAnimation}
          animation={animation}
          onClose={onClose}
        />
      </div>
    </div>
  );
}
