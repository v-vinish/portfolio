"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight, Github, Linkedin, Mail, Phone } from 'lucide-react';

const letterContainerVariants = {
  before: { transition: { staggerChildren: 0.05 } },
  after: { transition: { staggerChildren: 0.05 } },
};

const letterVariants = {
  before: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
  after: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 200,
    },
  },
};

const jumpVariants = {
  hover: {
    y: -10,
    transition: {
      yoyo: Infinity,
      duration: 0.3,
    },
  },
};

export default function Hero() {
  const name = "Vinish V";

  return (
    <section className="relative container mx-auto flex flex-col items-center justify-center text-center py-20 md:py-32 px-4 md:px-6 min-h-[90vh] overflow-hidden">
      <div className="space-y-6 max-w-3xl z-10">
        <motion.h1 
          variants={letterContainerVariants}
          initial="before"
          animate="after"
          className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent floating flex justify-center flex-wrap"
        >
          {name.split('').map((letter, index) => (
            <motion.div key={index} variants={letterVariants} whileHover="hover" className="inline-block">
              <motion.span variants={jumpVariants} style={{ display: 'inline-block', ...(letter === ' ' && { width: '0.25em' }) }}>
                {letter}
              </motion.span>
            </motion.div>
          ))}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base text-muted-foreground md:text-xl max-w-2xl mx-auto floating" style={{animationDelay: '0.5s'}}>
          Electronics and Communication Engineering student with a passion for computer vision and web development.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
          >
          <Button asChild size="lg" className="group nebula-glow">
            <Link href="#projects">
              View My Work
              <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
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
      </div>
    </section>
  );
}
