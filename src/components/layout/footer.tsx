import React from 'react';
import Link from 'next/link';
import { Code2, Mail, Phone, Linkedin } from 'lucide-react';

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-muted-foreground group-hover:text-primary"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
    </svg>
  );

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Code2 className="h-6 w-6 text-primary" />
            <p className="text-sm">Vinish V</p>
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            <a href="mailto:viniv6687@gmail.com" className="flex items-center gap-2 group">
                <Mail className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-primary">
                Mail me
                </span>
            </a>
            <a href="tel:+919025349047" className="flex items-center gap-2 group">
                <Phone className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-primary">
                Call me
                </span>
            </a>
            <a href="https://wa.me/919025349047" target="_blank" className="flex items-center gap-2 group">
                <WhatsAppIcon />
                <span className="text-sm text-muted-foreground group-hover:text-primary">
                WhatsApp me
                </span>
            </a>
             <a href="https://www.linkedin.com/in/vinish-v-80bb1020b" target="_blank" className="flex items-center gap-2 group">
                <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
                <span className="text-sm text-muted-foreground group-hover:text-primary">
                LinkedIn
                </span>
            </a>
        </div>
         <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              &copy; {currentYear} Vinish V. All rights reserved.
            </p>
      </div>
    </footer>
  );
}
