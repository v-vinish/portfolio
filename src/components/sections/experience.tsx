"use client";

import { motion } from 'framer-motion';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Market Automation Technology and Data Analytics",
    company: "Customer Centria",
    period: "Jan 2024 - Jan 2024",
    description: "Worked successfully with diverse group of coworkers to accomplish goals and address issues related to our products and services.",
    skills: ["Teamwork", "Problem Solving"]
  },
  {
    role: "Education",
    company: "KGISL Institute of Technology, Coimbatore",
    period: "Expected 05/2027",
    description: "Pursuing a degree in Electronics and communication. Current CGPA: 8",
    skills: ["Electronics", "Communication"]
  }
];

export default function Experience() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
        Experience & Education
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-10 md:pl-0 mb-12 md:grid md:grid-cols-2 md:gap-8">
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:top-4"></div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className={`md:col-start-${index % 2 === 0 ? 1 : 2} md:row-start-1`}
            >
              <Card className={`p-6 relative ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} w-full`}>
                  <h3 className="text-xl md:text-2xl font-bold text-primary">{exp.role}</h3>
                  <p className="font-semibold text-lg">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                   <p className="text-muted-foreground mb-4">{exp.description}</p>
                   <div className="flex flex-wrap gap-2">
                      {exp.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                   </div>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
