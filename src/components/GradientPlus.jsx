// components/GradientPlus.jsx
import React from "react";

const GradientPlus = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    strokeWidth={2}
    className={`w-7 h-7 ${className}`}
  >
    <defs>
      <linearGradient id="plusGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#ec4899" />   {/* pink */}
        <stop offset="50%" stopColor="#8b5cf6" /> {/* purple */}
        <stop offset="100%" stopColor="#2563eb" />{/* blue */}
      </linearGradient>
    </defs>
    <path
      stroke="url(#plusGradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 4.5v15m7.5-7.5h-15"
    />
  </svg>
);

export default GradientPlus;
