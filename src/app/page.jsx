"use client";
import React, { useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import Sidebar from "./components/sidebar";
import HamburgerIcon from "./components/hamburgerIcon";
import Navbar from "./components/navbar";
import MapWithMarkers from "./components/MapWithMarkers";
import BackToIsauw from "./components/backToIsauw";
import CardViewer from "./components/cardViewer";
import { motion } from "framer-motion";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  // If sm size then initial state false
  const [drawerOpen, setDrawerOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 640; // sm size tailwind
    }
    return false;
  }); // your left sidebar
  const [selectedIndex, setSelectedIndex] = useState(null); // NEW: which card

  return (
    <APIProvider apiKey={apiKey}>
      <BackToIsauw level={selectedIndex} setLevel={setSelectedIndex} />
      <div className="flex h-screen static">
        <Sidebar open={drawerOpen} setOpen={setDrawerOpen} />
        <div className="flex-1 relative overflow-hidden">
          <Navbar open={drawerOpen} setOpen={setDrawerOpen} />
          <HamburgerIcon open={drawerOpen} setOpen={setDrawerOpen} />

          {/* map fills the full page */}
          <MapWithMarkers
            style={{ width: "100vw", height: "100vh" }}
            gestureHandling="greedy"
            disableDefaultUI
            defaultZoom={12.25}
            defaultCenter={{ lat: 47.6, lng: -122.3351 }}
            onMarkerClick={setSelectedIndex} // NEW
          />

          {/* sliding card panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: selectedIndex !== null ? 0 : "100%" }}
            transition={{ type: "tween", duration: 0.45 }}
            className={
              "fixed right-0 top-0 h-full w-full max-w-md z-50 bg-white shadow-xl"
            }
          >
            {selectedIndex !== null && (
              <CardViewer
                selectedIndex={selectedIndex}
                onClose={() => setSelectedIndex(null)}
              />
            )}
          </motion.div>
        </div>
      </div>
    </APIProvider>
  );
}
