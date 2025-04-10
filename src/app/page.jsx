"use client";
import React, { useState } from "react";
import Card from "./components/card";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Sidebar from "./sidebar/page";

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const [open, setOpen] = useState(true);

  return (
    <APIProvider apiKey={apiKey}>
      <div>
        <div className="w-64">
          <Sidebar open={open} />
        </div>
        <div className="flex-1 relative">
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
    </APIProvider>
  );
}
