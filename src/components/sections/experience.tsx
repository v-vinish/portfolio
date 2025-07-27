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
    <section id="experience" className="w-full py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
          Experience & Education
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
