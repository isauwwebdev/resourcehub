"use client";
import React from "react";
import Card from "./components/card";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  return (
    <APIProvider apiKey={apiKey}>
      <div>
        <Card />
        <Map
          style={{ width: "100vw", height: "100vh" }}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          defaultZoom={12.25}
          defaultCenter={{ lat: 47.6, lng: -122.3351 }}
        />
      </div>
    </APIProvider>
  );
}
