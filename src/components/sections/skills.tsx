import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Database, Server, Component } from 'lucide-react';

const skills = {
  frontend: [
    { name: 'React & Next.js', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'HTML5 & CSS3', level: 98 },
  ],
  backend: [
    { name: 'Node.js & Express', level: 90 },
    { name: 'Python & Django', level: 75 },
    { name: 'REST & GraphQL APIs', level: 85 },
  ],
  database: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Prisma', level: 90 },
  ],
  devops: [
    { name: 'Docker', level: 80 },
    { name: 'CI/CD (GitHub Actions)', level: 85 },
    { name: 'AWS', level: 70 },
  ],
};

const skillCategories = [
    { title: "Frontend", icon: <Component className="h-8 w-8 text-primary" />, data: skills.frontend },
    { title: "Backend", icon: <Server className="h-8 w-8 text-primary" />, data: skills.backend },
    { title: "Database", icon: <Database className="h-8 w-8 text-primary" />, data: skills.database },
    { title: "DevOps & Tools", icon: <Code className="h-8 w-8 text-primary" />, data: skills.devops }
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
