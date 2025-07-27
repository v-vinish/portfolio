import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Component, Brain, Handshake } from 'lucide-react';

const skills = {
  programming: [
    { name: 'Python', level: 90 },
    { name: 'HTML, CSS, JavaScript', level: 85 },
    { name: 'Git', level: 80 },
  ],
  softskills: [
    { name: 'Analytical thinking', level: 95 },
    { name: 'Effective communication', level: 90 },
    { name: 'Collaborative teamwork', level: 95 },
  ],
};

const skillCategories = [
    { title: "Technical Skills", icon: <Code className="h-8 w-8 text-primary" />, data: skills.programming },
    { title: "Soft Skills", icon: <Handshake className="h-8 w-8 text-primary" />, data: skills.softskills }
]

export default function Skills() {
  return (
    <section id="skills" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
          Technical Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.title} className="hover:border-primary/50 transition-all">
              <CardHeader className="flex flex-row items-center gap-4">
                {category.icon}
                <CardTitle className="text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.data.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-base font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
