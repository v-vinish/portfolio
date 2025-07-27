import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function About() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-card/50">
      <div className="container mx-auto grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">About Me</h2>
          <p className="text-muted-foreground md:text-lg">
            I am a passionate and results-oriented software engineer with a strong foundation in full-stack development. My journey in technology has been driven by a curiosity to solve complex problems and build applications that are not only functional but also provide a seamless user experience. With expertise in technologies like React, Next.js, and Node.js, I thrive in collaborative environments and am always eager to learn and adapt to new challenges.
          </p>
          <p className="text-muted-foreground md:text-lg">
            Beyond coding, I have a keen interest in UI/UX design principles, which helps me bridge the gap between technical implementation and user-centric design. I believe in writing clean, scalable, and maintainable code to create robust and impactful digital products.
          </p>
        </div>
        <div className="flex justify-center">
            <Card className="w-full max-w-sm border-2 border-primary/20 hover:border-primary/50 transition-all">
                <CardHeader className="items-center pt-8">
                    <Avatar className="w-32 h-32 border-4 border-primary">
                        <AvatarImage src="https://placehold.co/200x200.png" alt="VinishV" data-ai-hint="professional headshot" />
                        <AvatarFallback>VV</AvatarFallback>
                    </Avatar>
                </CardHeader>
                <CardContent className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold">VinishV</CardTitle>
                    <p className="text-muted-foreground mt-1">Full-Stack Software Engineer</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
