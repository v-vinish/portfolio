import React from 'react';
import Link from 'next/link';
import { Code2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <Code2 className="h-6 w-6 text-primary" />
            <p className="text-sm">VinishV Pro</p>
          </Link>
        </div>
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          &copy; {currentYear} VinishV. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
