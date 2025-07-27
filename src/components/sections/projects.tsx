"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

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
    image: "https://placehold.co/600x400.png",
    imageHint: "sign language",
    tags: ["MediaPipe", "TensorFlow Lite", "React", "Tailwind"],
  },
  {
    title: "Gesture-Controlled Racing Game",
    description: "Control gameplay in Need for Speed using a webcam.",
    longDescription: "Developed a real-time hand gesture recognition system to control gameplay in Need for Speed using a webcam using OpenCV, MediaPipe, Python.",
    image: "https://placehold.co/600x400.png",
    imageHint: "racing game",
    tags: ["OpenCV", "MediaPipe", "Python", "Gesture Recognition"],
  },
  {
    title: "Portfolio Website",
    description: "My personal space on the internet to showcase my work.",
    longDescription: "A personal portfolio website built with Next.js and Tailwind CSS to showcase my projects, skills, and experience. It's designed to be fully responsive and performant.",
    image: "https://placehold.co/600x400.png",
    imageHint: "developer portfolio",
    tags: ["Next.js", "React", "Tailwind CSS"],
    liveUrl: "/",
    repoUrl: "https://github.com/vinish-v/portfolio"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
        Featured Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 perspective">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotateY: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="flex flex-col overflow-hidden group transition-all duration-300 h-full hover:shadow-lg hover:shadow-primary/20 transform-style-3d">
              <CardHeader className="p-0">
                <div className="overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint={project.imageHint}
                  />
                </div>
                 <div className="p-6">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-end p-6 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                </div>
                <Button onClick={() => setSelectedProject(project)} className="w-full mt-auto">
                  View Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="sm:max-w-[650px]">
            <DialogHeader>
              <div className="overflow-hidden rounded-lg mb-4">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto max-h-64"
                  data-ai-hint={selectedProject.imageHint}
                />
              </div>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {selectedProject.tags.map(tag => <Badge key={tag} variant="outline">{tag}</Badge>)}
              </div>
              <DialogDescription className="pt-4">{selectedProject.longDescription}</DialogDescription>
            </DialogHeader>
            <DialogFooter className="mt-4">
              <div className="flex justify-end gap-2 w-full">
                {selectedProject.repoUrl && (
                  <Button asChild variant="outline">
                    <Link href={selectedProject.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                )}
                {selectedProject.liveUrl && (
                  <Button asChild>
                    <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                )}
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
