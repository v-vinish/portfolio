"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

type Project = {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  imageHint: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const projects: Project[] = [
  {
    title: "Sign Language Translator App",
    description: "Real-time ISL to text translation in all regional languages.",
    longDescription: "Real-time ISL to text translation in all regional languages using MediaPipe and TensorFlow Lite. Built responsive front-end interfaces using React and Tailwind, Integrated backend APIs to fetch and display dynamic data.",
    image: "https://static01.nyt.com/images/2024/03/04/crosswords/04gameplay-asl-art/04gameplay-asl-art-square320.jpg?quality=75&auto=webp&disable=upscale",
    imageHint: "sign language",
    tags: ["MediaPipe", "TensorFlow Lite", "React", "Tailwind"],
  },
  {
    title: "Gesture-Controlled Racing Game",
    description: "Control gameplay in Need for Speed using a webcam.",
    longDescription: "Developed a real-time hand gesture recognition system to control gameplay in Need for Speed using a webcam using OpenCV, MediaPipe, Python.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMiRp56ehUts3rR_luctaPGEx7TXd1AH4CiQ&s",
    imageHint: "racing game",
    tags: ["OpenCV", "MediaPipe", "Python", "Gesture Recognition"],
  }
];

export default function Projects() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  const handleInteraction = (index: number) => {
    if (!isMobile) {
      setFlippedIndex(index);
    }
  }
  const handleMobileClick = (index: number) => {
    if (isMobile) {
        setFlippedIndex(flippedIndex === index ? null : index);
    }
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full h-[450px] md:h-[420px] perspective"
            onMouseEnter={() => handleInteraction(index)}
            onMouseLeave={() => handleInteraction(null)}
            onClick={() => handleMobileClick(index)}
          >
            <motion.div
              className="relative w-full h-full transform-style-3d"
              animate={{ rotateY: flippedIndex === index ? 180 : 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Front of the card */}
              <Card className="absolute top-0 left-0 w-full h-full flex flex-col overflow-hidden group transition-all duration-300 backface-hidden">
                <CardHeader className="p-0">
                  <div className="overflow-hidden rounded-t-lg relative group-hover:holographic-shine-hover">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={project.imageHint}
                    />
                    <div className="holographic-shine"></div>
                  </div>
                   <div className="p-6">
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                  <p className="text-sm text-primary mt-4 font-semibold">{isMobile ? "Tap to learn more" : "Hover to learn more"}</p>
                </CardContent>
              </Card>

              {/* Back of the card */}
              <Card className="absolute top-0 left-0 w-full h-full flex flex-col justify-between overflow-hidden group transition-all duration-300 backface-hidden [transform:rotateY(180deg)] p-6">
                <div>
                  <CardTitle>{project.title}</CardTitle>
                  <p className="text-muted-foreground mt-4">{project.longDescription}</p>
                </div>
                <div className="flex justify-end gap-2 w-full mt-4">
                  {project.repoUrl && (
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
