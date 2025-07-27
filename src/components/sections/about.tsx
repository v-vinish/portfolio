"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [0, 1], [-15, 15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [15, -15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX_val = (e.clientX - rect.left) / width;
      const mouseY_val = (e.clientY - rect.top) / height;
      mouseX.set(mouseX_val);
      mouseY.set(mouseY_val);
    }
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };
  
  return (
    <div className="container mx-auto grid items-center justify-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Me</h2>
        <p className="text-muted-foreground md:text-lg/relaxed">
          Electronics and Communication Engineering student with practical experience in computer vision and full-stack web development. Proficient in Python, OpenCV, MediaPipe, and React, with a focus on developing real-time applications. Committed to leveraging innovative technologies to address real-world challenges.
        </p>
         <div className="mt-8 text-center lg:text-left">
            <h3 className="text-2xl font-bold">Vinish V</h3>
            <p className="text-muted-foreground mt-1">Electronics and Communication Engineering Student</p>
        </div>
      </div>
      <div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex justify-center items-center perspective"
        >
          <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="w-[300px] h-[400px]"
          >
            <Image
                src="https://i.postimg.cc/kgMqBXnj/AI-LOOK.jpg"
                alt="Vinish V"
                width={300}
                height={400}
                className="rounded-xl object-cover w-full h-full shadow-2xl shadow-primary/20"
                style={{
                    transform: "translateZ(20px)",
                }}
            />
          </motion.div>
      </div>
    </div>
  );
}
