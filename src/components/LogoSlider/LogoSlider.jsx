"use client";
import React, { useState, useEffect, useRef } from "react";
import style from "./LogoSlider.module.css";

export default function LogoSlider({ logos }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.scrollWidth;
    const scrollSpeed = 2; // Adjust the speed as needed

    const scrollInterval = setInterval(() => {
      setScrollPosition((prevPosition) => {
        const newPosition = prevPosition + scrollSpeed;
        if (newPosition >= containerWidth / 2) {
          // Reset to create the infinite loop effect. The logic here is important.
          return 0;
        }
        return newPosition;
      });
    }, 16); // Approximately 60 frames per second

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);
  const duplicateLogos = [...logos, ...logos,...logos,...logos]; // Duplicate for seamless loop
  return (
    <div className={style.LogoSlider}>
      <div className="logo-slider-container bg-white" ref={containerRef}>
        <div
          className="logo-slider-track"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {duplicateLogos.map((logo, index) => (
            <span
              key={index}
              alt={`Logo ${index + 1}`}
              className="logo-slider-item pr-36"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
