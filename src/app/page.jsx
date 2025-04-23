"use client";
import React from "react";
import CardViewer from "./components/cardViewer";
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
// import Card from "./components/card";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const [open, setOpen] = useState(true);

  return (
    <APIProvider apiKey={apiKey}>
      <div className="flex h-screen">
        <Sidebar open={open} setOpen={setOpen} />
        <div className="flex-1 relative overflow-hidden">
          <div
            className={classNames(
              "z-50 fixed top-4 h-screen transition-all duration-300",
              open ? "left-4" : "lg:left-6 md:left-3.5 left-6"
            )}
          >
            <button onClick={() => setOpen(!open)}>
              <Bars3Icon className="h-8 w-8 text-gray-400" aria-hidden="true" />
            </button>
          </div>
          <div className="h-full w-full ">
            {/* MAIN PAGE HERE */}
            <CardViewer />
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
