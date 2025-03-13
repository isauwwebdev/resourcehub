"use client";
import React from "react";
import Card from "./components/card";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function Page() {
  // TODO: move api_key to /.env file
  const GOOGLE_MAPS_API_KEY = "AIzaSyBbAp6y5c-n-YB2gaWgq3yabpkyd1t8dRE";

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
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
