"use client";
import React from "react";
import CardViewer from "./components/cardViewer";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Sidebar from "./sidebar/page";

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const [open, setOpen] = useState(true);

  return (
    <APIProvider apiKey={apiKey}>
      <div>
        <CardViewer />
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
