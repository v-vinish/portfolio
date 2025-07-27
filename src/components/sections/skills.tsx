import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Brain, Handshake, Cpu } from 'lucide-react';

const skills = {
  programming: [
    { name: 'Python', level: 90 },
    { name: 'HTML, CSS, JavaScript', level: 85 },
    { name: 'React & Next.js', level: 80 },
    { name: 'Git', level: 80 },
  ],
  ai: [
    { name: 'OpenCV', level: 90 },
    { name: 'MediaPipe', level: 85 },
    { name: 'TensorFlow Lite', level: 75 },
  ],
  softskills: [
    { name: 'Analytical thinking', level: 95 },
    { name: 'Effective communication', level: 90 },
    { name: 'Collaborative teamwork', level: 95 },
  ],
};

const skillCategories = [
    { title: "Programming Languages & Frameworks", icon: <Code className="h-8 w-8 text-primary" />, data: skills.programming },
    { title: "AI & Computer Vision", icon: <Cpu className="h-8 w-8 text-primary" />, data: skills.ai },
    { title: "Soft Skills", icon: <Handshake className="h-8 w-8 text-primary" />, data: skills.softskills }
]

export default function Skills() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
        My Skills
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <Card key={category.title} className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
            <CardHeader className="flex flex-row items-center gap-4 pb-4">
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
  );
}
