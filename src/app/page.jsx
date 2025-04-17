"use client";
import React from "react";
import Card from "./components/card";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";
import { MapPinIcon } from "@heroicons/react/24/solid";

export default function Home() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  const labelStyle = {
    fontFamily: "var(--font-poppins)",
    fontWeight: 700,
    fontSize: "16px",
    width: "220px",
    minHeight: "55px",
    padding: "8px 12px",
    borderRadius: "8px",
    backdropFilter: "blur(8px)",
    background: "rgba(255, 255, 255, 0.25)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: "8px",
    flexDirection: "row",
  };

  const iconProps = {
    className: "w-8 h-8 flex-shrink-0 text-red-900",
  };

  return (
    <APIProvider apiKey={apiKey}>
      <div>
        <Card />
        <Map
          mapId="bf10250b856ff341"
          style={{ width: "100vw", height: "100vh" }}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
          defaultZoom={11.75}
          defaultCenter={{ lat: 47.6, lng: -122.3351 }}
        >
          {/* 1. Settling In - University District */}
          <AdvancedMarker position={{ lat: 47.66, lng: -122.313 }}>
            <Pin
              background="#fff"
              borderColor="#000"
              glyphColor="#000"
              scale={1.5}
            >
              <div style={labelStyle}>
                <MapPinIcon {...iconProps} />
                <div>SETTLING IN</div>
              </div>
            </Pin>
          </AdvancedMarker>

          {/* 2. Essential Documents and Preparation - Northgate */}
          <AdvancedMarker position={{ lat: 47.7089, lng: -122.3238 }}>
            <Pin
              background="#fff"
              borderColor="#000"
              glyphColor="#000"
              scale={1.5}
            >
              <div style={labelStyle}>
                <MapPinIcon {...iconProps} />
                <div>ESSENTIAL DOCUMENTS</div>
              </div>
            </Pin>
          </AdvancedMarker>

          {/* 3. Campus Orientation and Study Essentials - Ravenna */}
          <AdvancedMarker position={{ lat: 47.6751, lng: -122.3036 }}>
            <Pin
              background="#fff"
              borderColor="#000"
              glyphColor="#000"
              scale={1.5}
            >
              <div style={labelStyle}>
                <MapPinIcon {...iconProps} />
                <div>CAMPUS ORIENTATION</div>
              </div>
            </Pin>
          </AdvancedMarker>

          {/* 4. Social and Academic Integration - Downtown Seattle */}
          <AdvancedMarker position={{ lat: 47.6062, lng: -122.3321 }}>
            <Pin
              background="#fff"
              borderColor="#000"
              glyphColor="#000"
              scale={1.5}
            >
              <div style={labelStyle}>
                <MapPinIcon {...iconProps} />
                <div>
                  SOCIAL + ACADEMIC
                  <br />
                  INTEGRATION
                </div>
              </div>
            </Pin>
          </AdvancedMarker>

          {/* 5. Part-time Work and Academic Credits - South Seattle */}
          <AdvancedMarker position={{ lat: 47.5321, lng: -122.2831 }}>
            <Pin
              background="#fff"
              borderColor="#000"
              glyphColor="#000"
              scale={1.5}
            >
              <div style={labelStyle}>
                <MapPinIcon {...iconProps} />
                <div>
                  PART-TIME WORK
                  <br />+ CREDITS
                </div>
              </div>
            </Pin>
          </AdvancedMarker>

          {/* 6. Lifestyle and Adjustments - Bellevue */}
          <AdvancedMarker position={{ lat: 47.6101, lng: -122.2015 }}>
            <Pin
              background="#fff"
              borderColor="#000"
              glyphColor="#000"
              scale={1.5}
            >
              <div style={labelStyle}>
                <MapPinIcon {...iconProps} />
                <div>
                  LIFESTYLE +<br />
                  ADJUSTMENTS
                </div>
              </div>
            </Pin>
          </AdvancedMarker>

          {/* 7. Sign Up for ISAUW Community - International District */}
          <AdvancedMarker position={{ lat: 47.5974, lng: -122.3255 }}>
            <Pin
              background="#fff"
              borderColor="#000"
              glyphColor="#000"
              scale={1.5}
            >
              <div style={labelStyle}>
                <MapPinIcon {...iconProps} />
                <div>
                  SIGN UP
                  <br />
                  FOR ISAUW
                </div>
              </div>
            </Pin>
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
