"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
};

export default function AnimatedSection({ children, className, id, style }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
