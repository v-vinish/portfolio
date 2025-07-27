"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

export default function Contact() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
      <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl font-headline mb-8">
        Get In Touch
      </h2>
      <p className="text-center text-muted-foreground md:text-lg max-w-2xl mx-auto mb-12">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out to me.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex justify-center gap-4 mt-4"
      >
        <Button asChild variant="outline" size="icon">
          <Link href="tel:+919025349047" aria-label="Phone">
            <Phone className="h-5 w-5" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon">
          <Link href="https://wa.me/919025349047" target="_blank" aria-label="WhatsApp">
            <WhatsAppIcon />
          </Link>
        </Button>
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
      </motion.div>
      <div className="text-center mt-8 space-y-2">
        <p className="text-muted-foreground">
          <a href="mailto:viniv6687@gmail.com" className="hover:text-primary transition-colors">
            viniv6687@gmail.com
          </a>
        </p>
        <p className="text-muted-foreground">
           <a href="tel:+919025349047" className="hover:text-primary transition-colors">
            +91 9025349047
           </a>
        </p>
      </div>
    </div>
  );
}
