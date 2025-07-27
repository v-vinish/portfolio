import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-card/50">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Me</h2>
          <p className="text-muted-foreground md:text-lg">
            Electronics and Communication Engineering student with practical experience in computer vision and full-stack web development. Proficient in Python, OpenCV, MediaPipe, and React, with a focus on developing real-time applications. Committed to leveraging innovative technologies to address real-world challenges.
          </p>
        </div>
        <div className="flex justify-center">
            <Card className="w-full max-w-sm border-2 border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader className="items-center pt-8">
                    <Avatar className="w-32 h-32 border-4 border-primary">
                        <AvatarImage src="/vinish.jpg" alt="Vinish V" />
                        <AvatarFallback>VV</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold">Vinish V</CardTitle>
                    <p className="text-muted-foreground mt-1">Electronics and Communication Engineering Student</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
