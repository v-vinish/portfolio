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
    <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-12">
        Experience & Education
      </h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border"></div>
        {experiences.map((exp, index) => (
          <div key={index} className="relative mb-12">
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
            <Card className={`w-[calc(50%-2rem)] p-6 relative ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                <h3 className="text-2xl font-bold text-primary">{exp.role}</h3>
                <p className="font-semibold text-lg">{exp.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                 <p className="text-muted-foreground mb-4">{exp.description}</p>
                 <div className="flex flex-wrap gap-2">
                    {exp.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                 </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
