"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Activity, Server } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior
    console.log("Button clicked"); // Debug log
    
    // Open in new window instead of iframe
    window.open(
      "https://huggingface.co/spaces/Caoyunkang/Segment-Any-Anomaly", 
      "_blank", 
      "noopener,noreferrer"
    );
  };

  return (
    <section 
      className="relative min-h-screen w-full flex flex-col items-center justify-center text-white pt-20 overflow-hidden"
      id="home"
    >
      {/* Background Video */}
      <video 
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="container max-w-6xl px-4 py-16 relative z-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Sensor Anomaly Detection</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Advanced AI-powered detection and analysis of sensor anomalies
        </p>

        {/* Button */}
        <div className="flex justify-center mt-6">
          <button 
            onClick={handleButtonClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
          >
            Open Image Anomaly Detector
          </button>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Activity size={48} className="mx-auto text-green-400 mb-4" />
            <h3 className="font-semibold mb-2">Real-time Analysis</h3>
            <p className="text-gray-400">Instant sensor anomaly detection</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <AlertTriangle size={48} className="mx-auto text-red-500 mb-4" />
            <h3 className="font-semibold mb-2">Precise Alerts</h3>
            <p className="text-gray-400">Comprehensive anomaly identification</p>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <Server size={48} className="mx-auto text-blue-400 mb-4" />
            <h3 className="font-semibold mb-2">Advanced Insights</h3>
            <p className="text-gray-400">Detailed anomaly reporting</p>
          </div>
        </div>

        {/* Alternative Link Option */}
        <div className="text-center mt-6">
          
        </div>
      </div>
    </section>
  );
}
