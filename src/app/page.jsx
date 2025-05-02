"use client";
import React, { useState } from "react";
import { APIProvider } from "@vis.gl/react-google-maps";
import Sidebar from "./components/sidebar";
import HamburgerIcon from "./components/hamburgerIcon";
import Navbar from "./components/navbar";
import MapWithMarkers from "./components/MapWithMarkers";
import CardViewer from "./components/cardViewer";
import { motion } from "framer-motion";

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const [drawerOpen, setDrawerOpen] = useState(true); // your left sidebar
  const [selectedIndex, setSelectedIndex] = useState(null); // NEW: which card

  return (
    <APIProvider apiKey={apiKey}>
      <div className="flex h-screen">
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
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50"
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
