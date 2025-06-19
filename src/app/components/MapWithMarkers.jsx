"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import { MapPinIcon, PlayIcon } from "@heroicons/react/24/solid";

const labelStyle = {
  fontFamily: "var(--font-poppins)",
  fontWeight: 700,
  fontSize: "16px",
  width: "220px",
  minHeight: "55px",
  padding: "12px 16px",
  borderRadius: "12px",
  backdropFilter: "blur(12px)",
  background:
    "linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.9), rgba(241, 245, 249, 0.85))",
  // border: "2px solid rgba(255, 255, 255, 0.9)", // Removed to avoid conflict with specific border properties
  boxShadow: `
    0 12px 40px rgba(0, 0, 0, 0.15),
    0 4px 16px rgba(0, 0, 0, 0.1),
    0 2px 8px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 rgba(255, 255, 255, 1),
    inset 0 -1px 0 rgba(0, 0, 0, 0.05)
  `,
  color: "#1f2937",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  gap: "8px",
  flexDirection: "row",
  position: "relative",
  zIndex: 15,
  transform: "translateZ(0)",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  borderTop: "1px solid rgba(255, 255, 255, 0.8)",
  borderLeft: "1px solid rgba(255, 255, 255, 0.6)",
  borderRight: "1px solid rgba(0, 0, 0, 0.1)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
};

const iconProps = {
  className: "w-8 h-8 flex-shrink-0 text-red-900",
};

export default function MapWithMarkers({ onMarkerClick }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isOnboardingActive, setIsOnboardingActive] = useState(true);
  const [highlightedMarker, setHighlightedMarker] = useState(null);
  const [map, setMap] = useState(null);
  const [markerPositions, setMarkerPositions] = useState({});
  const mapRef = useRef(null);
  const containerRef = useRef(null);
  const markerRefs = useRef({});

  const markers = [
    {
      lat: 47.7089,
      lng: -122.3238,
      label: "ESSENTIAL DOCUMENTS",
      step: 0,
      description: "Start your journey here!",
    },
    {
      lat: 47.6684,
      lng: -122.3834,
      label: "SETTLING IN",
      step: 1,
      description: "Get comfortable in your new environment",
    },
    {
      lat: 47.6751,
      lng: -122.3036,
      label: "CAMPUS ORIENTATION",
      step: 2,
      description: "Learn about campus life and academics",
    },
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
      step: 3,
      description: "Build connections and excel academically",
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
      step: 4,
      description: "Explore work opportunities",
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
      step: 5,
      description: "Adapt to your new lifestyle",
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
      step: 6,
      description: "Join our community!",
    },
  ];

  // Auto-advance onboarding every 3 seconds
  useEffect(() => {
    if (!isOnboardingActive) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= markers.length - 1) {
          setIsOnboardingActive(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isOnboardingActive, markers.length]);

  // Update marker positions when step changes or map moves
  useEffect(() => {
    const updatePositions = () => {
      const positions = {};
      Object.keys(markerRefs.current).forEach((index) => {
        const element = markerRefs.current[index];
        if (element && containerRef.current) {
          const rect = element.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();

          positions[index] = {
            x: rect.left - containerRect.left + rect.width / 2,
            y: rect.top - containerRect.top + rect.height / 2,
          };
        }
      });
      setMarkerPositions(positions);
    };

    // Update positions when step changes
    updatePositions();

    // Also update on window resize or scroll
    const handleUpdate = () => updatePositions();
    window.addEventListener("resize", handleUpdate);
    window.addEventListener("scroll", handleUpdate);

    return () => {
      window.removeEventListener("resize", handleUpdate);
      window.removeEventListener("scroll", handleUpdate);
    };
  }, [currentStep, isOnboardingActive]);

  // Store marker ref without causing re-renders
  const setMarkerRef = useCallback((index, element) => {
    markerRefs.current[index] = element;
  }, []);

  const getMarkerStyle = (markerStep) => {
    const isActive = markerStep === currentStep && isOnboardingActive;
    const isCompleted = markerStep < currentStep && isOnboardingActive;
    const isUpcoming = markerStep > currentStep && isOnboardingActive;
    const isHighlighted = highlightedMarker === markerStep;

    let style = { ...labelStyle };

    if (isHighlighted) {
      // Highlighted state (when clicked)
      style = {
        ...style,
        background:
          "linear-gradient(135deg, rgba(251, 191, 36, 0.95), rgba(245, 158, 11, 0.9))",
        border: "2px solid rgba(251, 191, 36, 0.8)",
        color: "#fff",
        transform: "scale(1.1) translateZ(0)",
        boxShadow: `
          0 12px 40px rgba(251, 191, 36, 0.4),
          0 4px 12px rgba(251, 191, 36, 0.3),
          inset 0 1px 0 rgba(255, 255, 255, 0.3)
        `,
      };
    } else if (isActive) {
      style = {
        ...style,
        background:
          "linear-gradient(135deg, rgba(59, 130, 246, 0.95), rgba(37, 99, 235, 0.9))",
        border: "2px solid rgba(59, 130, 246, 0.8)",
        color: "#fff",
        animation: "pulse 2s infinite, float 3s ease-in-out infinite",
        transform: "scale(1.05) translateZ(0)",
        boxShadow: `
          0 12px 40px rgba(59, 130, 246, 0.3),
          0 4px 12px rgba(59, 130, 246, 0.2),
          inset 0 1px 0 rgba(255, 255, 255, 0.3)
        `,
      };
    } else if (isCompleted) {
      style = {
        ...style,
        background:
          "linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(22, 163, 74, 0.85))",
        border: "2px solid rgba(34, 197, 94, 0.7)",
        color: "#fff",
        boxShadow: `
          0 8px 24px rgba(34, 197, 94, 0.2),
          0 2px 8px rgba(34, 197, 94, 0.15),
          inset 0 1px 0 rgba(255, 255, 255, 0.3)
        `,
      };
    } else if (isUpcoming) {
      style = {
        ...style,
        background:
          "linear-gradient(135deg, rgba(156, 163, 175, 0.7), rgba(107, 114, 128, 0.6))",
        border: "2px solid rgba(156, 163, 175, 0.5)",
        color: "#374151",
        boxShadow: `
          0 6px 20px rgba(156, 163, 175, 0.15),
          0 2px 6px rgba(156, 163, 175, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.4)
        `,
      };
    }

    return style;
  };

  const renderConnectionLines = () => {
    if (!isOnboardingActive || Object.keys(markerPositions).length < 2)
      return null;

    return markers.slice(0, -1).map((marker, index) => {
      const nextIndex = index + 1;
      const currentPos = markerPositions[index];
      const nextPos = markerPositions[nextIndex];

      if (!currentPos || !nextPos) return null;

      const isLineActive = index < currentStep;

      return (
        <svg
          key={`line-${index}`}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            zIndex: 5,
          }}
        >
          <defs>
            <linearGradient
              id={`lineGradient-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop
                offset="0%"
                stopColor={
                  isLineActive
                    ? "rgba(59, 130, 246, 0.9)"
                    : "rgba(156, 163, 175, 0.6)"
                }
              />
              <stop
                offset="50%"
                stopColor={
                  isLineActive
                    ? "rgba(59, 130, 246, 0.7)"
                    : "rgba(156, 163, 175, 0.4)"
                }
              />
              <stop
                offset="100%"
                stopColor={
                  isLineActive
                    ? "rgba(59, 130, 246, 0.9)"
                    : "rgba(156, 163, 175, 0.6)"
                }
              />
            </linearGradient>
          </defs>

          {/* Main line without arrow */}
          <line
            x1={currentPos.x}
            y1={currentPos.y}
            x2={nextPos.x}
            y2={nextPos.y}
            stroke={`url(#lineGradient-${index})`}
            strokeWidth={isLineActive ? "5" : "3"}
            strokeDasharray="8,6"
            opacity={isLineActive ? "0.9" : "0.6"}
            style={{
              transition: "all 0.5s ease",
            }}
          />

          {/* Glow effect for active lines */}
          {isLineActive && (
            <line
              x1={currentPos.x}
              y1={currentPos.y}
              x2={nextPos.x}
              y2={nextPos.y}
              stroke="rgba(59, 130, 246, 0.4)"
              strokeWidth="12"
              strokeDasharray="8,6"
              opacity="0.5"
            />
          )}

          {/* Animated moving dot for active lines */}
          {isLineActive && (
            <circle r="4" fill="#3b82f6" opacity="0.8">
              <animateMotion
                dur="1s"
                repeatCount="indefinite"
                path={`M ${currentPos.x},${currentPos.y} L ${nextPos.x},${nextPos.y}`}
              />
              <animate
                attributeName="r"
                values="3;6;3"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </circle>
          )}
        </svg>
      );
    });
  };

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: scale(1.05) translateY(0px) translateZ(0);
          }
          50% {
            transform: scale(1.05) translateY(-3px) translateZ(0);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .start-here {
          position: absolute;
          top: -50px;
          right: -30px;
          transform: translateX(0);
          background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 10px 18px;
          border-radius: 25px;
          font-size: 12px;
          font-weight: bold;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4),
            0 3px 10px rgba(251, 191, 36, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          animation: pulse 2s infinite, float 3s ease-in-out infinite;
          z-index: 25;
          overflow: hidden;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .start-here::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          animation: shine 3s infinite;
        }

        .step-indicator {
          position: absolute;
          top: -18px;
          left: -18px;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border: 3px solid rgba(255, 255, 255, 0.9);
          color: white;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: bold;
          z-index: 20;
          box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3),
            0 2px 8px rgba(59, 130, 246, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
      `}</style>

      {/* Connection Lines */}
      {renderConnectionLines()}

      {/* Onboarding Controls */}
      {isOnboardingActive && (
        <div
          style={{
            position: "absolute",
            top: "80px",
            right: "20px",
            background: "rgba(255, 255, 255, 0.95)",
            padding: "16px 20px",
            borderRadius: "12px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
            zIndex: 20,
            minWidth: "200px",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "8px",
              color: "#1f2937",
            }}
          >
            Step {currentStep + 1} of {markers.length}
          </div>
          <div
            style={{
              fontSize: "14px",
              color: "#6b7280",
              marginBottom: "12px",
              lineHeight: "1.4",
            }}
          >
            {markers[currentStep]?.description}
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={() => setIsOnboardingActive(false)}
              style={{
                padding: "6px 12px",
                background: "#ef4444",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Skip Tour
            </button>
            <button
              onClick={() => {
                setCurrentStep((prev) => {
                  if (prev >= markers.length - 1) {
                    setIsOnboardingActive(false);
                    return 0;
                  }
                  return prev + 1;
                });
              }}
              style={{
                padding: "6px 12px",
                background: "#3b82f6",
                color: "white",
                border: "none",
                borderRadius: "6px",
                fontSize: "12px",
                cursor: "pointer",
                fontWeight: "500",
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <Map
        ref={mapRef}
        mapId="bf10250b856ff341"
        style={{ width: "100%", height: "100%" }}
        gestureHandling="greedy"
        disableDefaultUI={true}
        defaultZoom={11.75}
        defaultCenter={{ lat: 47.6, lng: -122.3351 }}
        minZoom={11.5}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        {markers.map((marker, index) => (
          <AdvancedMarker
            key={index}
            position={{ lat: marker.lat, lng: marker.lng }}
          >
            <div
              ref={(el) => setMarkerRef(index, el)}
              onClick={() => {
                onMarkerClick(index);
                setHighlightedMarker(index);
                setCurrentStep(index);
                setIsOnboardingActive(false);

                // Clear highlight after 2 seconds
                setTimeout(() => {
                  setHighlightedMarker(null);
                }, 2000);
              }}
              style={{
                ...getMarkerStyle(marker.step),
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            >
              {/* Start Here Indicator */}
              {marker.step === 0 && isOnboardingActive && (
                <div className="start-here">
                  <PlayIcon className="w-3 h-3 mr-1" />
                  START HERE
                </div>
              )}

              {/* Step Number Indicator - Always visible */}
              <div className="step-indicator">{marker.step + 1}</div>

              <MapPinIcon {...iconProps} />
              <div>{marker.label}</div>
            </div>
          </AdvancedMarker>
        ))}
      </Map>
    </div>
  );
}
