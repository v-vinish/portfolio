"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
      </div>
      <div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="flex justify-center perspective"
        >
          <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
          >
            <Card className="w-full max-w-sm border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 transform-style-3d hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader className="items-center pt-8">
                    <Avatar className="w-32 h-32 border-4 border-primary">
                        <AvatarImage src="https://i.postimg.cc/3xRxy2pq/Whats-App-Image-2025-07-25-at-12-11-09-f1edb528.jpg" alt="Vinish V" />
                        <AvatarFallback>VV</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className="text-center pb-8 transform-style-3d">
                    <CardTitle style={{ transform: "translateZ(20px)"}} className="text-2xl font-bold">Vinish V</CardTitle>
                    <p style={{ transform: "translateZ(10px)"}} className="text-muted-foreground mt-1">Electronics and Communication Engineering Student</p>
                </CardContent>
            </Card>
          </motion.div>
      </div>
    </div>
  );
}
