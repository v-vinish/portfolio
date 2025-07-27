import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="container mx-auto flex flex-col items-center justify-center text-center py-24 md:py-32 px-4 md:px-6">
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
          Vinish V
        </h1>
        <p className="text-lg text-muted-foreground md:text-xl">
          Electronics and Communication Engineering student with a passion for computer vision and web development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
