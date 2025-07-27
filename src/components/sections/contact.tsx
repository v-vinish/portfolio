import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ContactForm } from '@/components/contact-form';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Get In Touch
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you. Fill out the form or reach out via email or social media.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="outline" size="icon">
              <Link href="mailto:viniv6687@gmail.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://www.linkedin.com/in/vinish-v-80bb1020b" target="_blank" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="icon">
              <Link href="https://github.com/vinish-v" target="_blank" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
