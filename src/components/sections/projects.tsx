"use client";

import React, { useState } from 'react';
import Image from 'next/image';
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
    title: "E-commerce Platform",
    description: "A modern, full-featured e-commerce site with a custom CMS.",
    longDescription: "This project is a comprehensive e-commerce platform built from the ground up using Next.js for the frontend and Strapi as a headless CMS. It features product catalogs, user authentication, a shopping cart, and Stripe integration for payments. The architecture is designed to be scalable and performant, providing a seamless shopping experience.",
    image: "https://placehold.co/600x400.png",
    imageHint: "online shopping",
    tags: ["Next.js", "React", "Stripe", "Tailwind CSS", "CMS"],
    liveUrl: "#",
    repoUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates.",
    longDescription: "A Kanban-style task management application designed for team collaboration. It's built with the T3 stack (Next.js, TypeScript, tRPC, Prisma, NextAuth.js) and features real-time drag-and-drop functionality using WebSockets. Users can create boards, lists, and cards to organize their workflows efficiently.",
    image: "https://placehold.co/600x400.png",
    imageHint: "project management",
    tags: ["T3 Stack", "tRPC", "Prisma", "WebSockets", "TypeScript"],
    repoUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio, designed to be clean and responsive.",
    longDescription: "A personal portfolio website built with Next.js and shadcn/ui to showcase my skills and projects. It is designed with a mobile-first approach, ensuring a great user experience on all devices. The design is minimalist and modern, with a focus on readability and performance.",
    image: "https://placehold.co/600x400.png",
    imageHint: "web design",
    tags: ["Next.js", "shadcn/ui", "Tailwind CSS", "React"],
    liveUrl: "#",
    repoUrl: "#"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full py-16 md:py-24 bg-card/50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
          Featured Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col overflow-hidden group hover:border-primary/50 transition-all">
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
          ))}
        </div>
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
    </section>
  );
}
