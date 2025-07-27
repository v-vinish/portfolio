"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="relative container mx-auto flex flex-col items-center justify-center text-center py-2 md:py-4 px-4 md:px-6 h-[80vh] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 bg-gradient-to-b from-background via-purple-900/10 to-background z-0"></motion.div>
      <div className="space-y-6 max-w-3xl z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1, rotateY: 15, rotateX: 10, transition: { duration: 0.3 } }}
          transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 15 }}
          className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl font-headline bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-accent floating"
          >
          Vinish V
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto floating" style={{animationDelay: '0.5s'}}>
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
          <Button asChild variant="outline" size="lg">
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
