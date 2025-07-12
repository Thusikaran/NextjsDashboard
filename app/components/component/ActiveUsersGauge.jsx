"use client";
import { useState, useEffect } from "react";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function ActiveUsersGauge({
  percent = 0,
  duration = 1200,
  pathColor = "#3b82f6",
  textColor = "#111827",
  label = "",
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      setValue(Math.floor(progress * percent));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [percent, duration]);

  return (
    <div style={{ width: 120, height: 120 }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          pathColor,
          textColor,
          trailColor: "#e5e7eb",
          strokeLinecap: "round",
        })}
      />
      <p style={{ textAlign: "center", marginTop: 12, color: "#6b7280" }}>
        {label}
      </p>
    </div>
  );
}
