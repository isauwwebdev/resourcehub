"use client";
import React from "react";
import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { MapPinIcon } from "@heroicons/react/24/solid";

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

export default function MapWithMarkers({ onMarkerClick }) {
  const markers = [
    { lat: 47.66, lng: -122.313, label: "SETTLING IN" },
    { lat: 47.7089, lng: -122.3238, label: "ESSENTIAL DOCUMENTS" },
    { lat: 47.6751, lng: -122.3036, label: "CAMPUS ORIENTATION" },
    {
      lat: 47.6062,
      lng: -122.3321,
      label: (
        <>
          SOCIAL + ACADEMIC
          <br />
          INTEGRATION
        </>
      ),
    },
    {
      lat: 47.5321,
      lng: -122.2831,
      label: (
        <>
          PART-TIME WORK
          <br />+ CREDITS
        </>
      ),
    },
    {
      lat: 47.6101,
      lng: -122.2015,
      label: (
        <>
          LIFESTYLE +<br />
          ADJUSTMENTS
        </>
      ),
    },
    {
      lat: 47.5797,
      lng: -122.327,
      label: (
        <>
          SIGN UP
          <br />
          FOR ISAUW
        </>
      ),
    },
  ];

  return (
    <Map
      mapId="bf10250b856ff341"
      style={{ width: "100%", height: "100%" }}
      gestureHandling="greedy"
      disableDefaultUI={true}
      defaultZoom={11.75}
      defaultCenter={{ lat: 47.6, lng: -122.3351 }}
      minZoom={11.5}
    >
      {markers.map((marker, index) => (
        <AdvancedMarker
          key={index}
          position={{ lat: marker.lat, lng: marker.lng }}
        >
          <div
            onClick={() => onMarkerClick(index)} // moved here
            style={{
              ...labelStyle,
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(0, 0, 0, 0.35)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)";
              e.currentTarget.style.color = "#000";
            }}
          >
            <MapPinIcon {...iconProps} />
            <div>{marker.label}</div>
          </div>
        </AdvancedMarker>
      ))}
    </Map>
  );
}
