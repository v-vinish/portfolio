import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Innovate Inc.",
    period: "Jan 2021 - Present",
    description: "Led the development of a scalable microservices architecture for a new e-commerce platform. Mentored junior developers and championed best practices in code reviews and pair programming. Improved application performance by 30% through strategic refactoring and query optimization.",
    skills: ["React", "Node.js", "Kubernetes", "AWS", "TypeScript"]
  },
  {
    role: "Software Engineer",
    company: "Tech Solutions",
    period: "Jun 2018 - Dec 2020",
    description: "Developed and maintained features for a large-scale SaaS application. Collaborated with product managers and designers to translate requirements into technical specifications. Implemented a CI/CD pipeline which reduced deployment time by 50%.",
    skills: ["JavaScript", "Vue.js", "Express", "MongoDB", "Docker"]
  },
  {
    role: "Junior Developer",
    company: "Creative Coders",
    period: "Jul 2017 - May 2018",
    description: "Assisted in the development of client websites using HTML, CSS, and JavaScript. Gained foundational experience in version control with Git and agile development methodologies.",
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Git"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
          Professional Experience
        </h2>
        <div className="grid gap-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card key={index} className="flex flex-col md:flex-row hover:border-primary/50 transition-all">
              <div className="p-6 md:w-1/3 md:border-r">
                <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                <p className="font-semibold text-lg">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
              </div>
              <div className="p-6 md:w-2/3">
                 <p className="text-muted-foreground mb-4">{exp.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                 </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
