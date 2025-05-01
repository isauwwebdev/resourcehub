"use client";
import React, { useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import MapWithMarkers from "./components/MapWithMarkers";
import CardViewer from "./components/cardViewer";

const cards = [
  {
    imageSrc: "/cardimage1.png",
    iconSrc: "/cardIcon1.png",
    location: "UNIVERSITY DISTRICT",
    title: "Settling In",
    description: "Tips and tools for settling into life around UW and Seattle.",
  },
  {
    imageSrc: "/cardimage2.png",
    iconSrc: "/cardIcon2.png",
    location: "NORTHGATE",
    title: "Essential Documents and Preparations",
    description: "Everything you need before arriving — visas, IDs, and more.",
  },
  {
    imageSrc: "/cardimage3.png",
    iconSrc: "/cardIcon3.png",
    location: "RAVENNA",
    title: "Campus Orientation and Study Essentials",
    description: "Navigating campus, supplies, and where to study effectively.",
  },
  {
    imageSrc: "/cardimage4.png",
    iconSrc: "/cardIcon4.png",
    location: "DOWNTOWN SEATTLE",
    title: "Social and Academic Integration",
    description: "Join clubs, meet people, and find your academic community.",
  },
  {
    imageSrc: "/cardimage5.png",
    iconSrc: "/cardIcon5.png",
    location: "SOUTH SEATTLE",
    title: "Part-Time Work and Academic Credits",
    description: "Explore CPT, on-campus jobs, and credit transfer options.",
  },
  {
    imageSrc: "/cardimage6.png",
    iconSrc: "/cardIcon6.png",
    location: "BELLEVUE",
    title: "Lifestyle and Adjustments",
    description: "Adjusting to the U.S., mental health, culture, and fun.",
  },
  {
    imageSrc: "/cardimage7.png",
    iconSrc: "/cardIcon7.png",
    location: "INTERNATIONAL DISTRICT",
    title: "Sign Up for ISAUW Community",
    description: "Join a supportive Indonesian student community!",
  },
];

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <APIProvider apiKey={apiKey}>
      <div className="relative h-screen w-screen">
        <MapWithMarkers onMarkerClick={setSelectedIndex} />

        {selectedIndex !== null && (
          <div className="absolute top-0 right-0 z-50 w-full sm:w-[450px] h-full bg-white shadow-xl transition-transform duration-300">
            <CardViewer
              cards={cards}
              currentIndex={selectedIndex}
              setCurrentIndex={setSelectedIndex}
            />
          </div>
        )}
      </div>
    </APIProvider>
  );
}
