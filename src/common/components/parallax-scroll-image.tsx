"use client";

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
  parallaxIntensity?: number;
  overlayOpacity?: number;
}

export function ParallaxScrollImage({ 
  src, 
  alt, 
  className = '',
  parallaxIntensity = 0.4,
  overlayOpacity = 0.5
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create parallax effect with vertical translation
  const yTranslate = useTransform(
    scrollYProgress, 
    [0, 1], 
    [`-${parallaxIntensity * 100}%`, `${parallaxIntensity * 100}%`]
  );

  return (
    <div ref={ref} className="relative overflow-hidden">
      {/* Parallax Image */}
      <motion.div
        style={{
          y: yTranslate,
          scale: 1.2, // Slightly scale up to prevent edges showing during translation
        }}
        className={`absolute inset-0 w-full h-full ${className}`}
      >
        <Image 
          src={src} 
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          quality={80}
        />
        
        {/* Optional Overlay */}
        <div 
          className="absolute inset-0 bg-black" 
          style={{ 
            opacity: overlayOpacity 
          }}
        />
      </motion.div>
    </div>
  );
}