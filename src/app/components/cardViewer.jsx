import React from "react";
import Card from "./card";

export default function CardViewer({ cards, currentIndex, setCurrentIndex }) {
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  if (!cards || !cards[currentIndex]) return null;

  return (
    <Card {...cards[currentIndex]} onPrev={handlePrev} onNext={handleNext} />
  );
}
