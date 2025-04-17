"use client";
import React, { useState } from "react";
import Card from "./components/card";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Sidebar from "./components/sidebar";

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const [open, setOpen] = useState(true);

  return (
    <APIProvider apiKey={apiKey}>
      <div className="flex h-screen">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1 relative overflow-hidden">
          <div className="p-4 z-50 fixed top-4 left-4 bg-white">
            <button onClick={() => setOpen(!open)}>
              <img
                src="/hamburger.png"
                alt="Hamburger Icon"
                className="h-8 w-auto"
              />
            </button>
          </div>
          <div className="h-full w-full ">
            {/* MAIN PAGE HERE */}
            <Card />
            <Map
              style={{ width: "100vw", height: "100vh" }}
              gestureHandling={"greedy"}
              disableDefaultUI={true}
              defaultZoom={12.25}
              defaultCenter={{ lat: 47.6, lng: -122.3351 }}
            />
          </div>
        </div>
      </div>
    </APIProvider>
  );
}
