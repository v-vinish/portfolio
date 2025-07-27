"use client";

import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Spidey = () => {
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      rotate: Math.sin(scrollY / 200) * 10,
      transition: { type: 'spring', stiffness: 100, damping: 10 },
    });
  }, [scrollY, controls]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: -20,
        left: '10%',
        zIndex: 1000,
        transformOrigin: 'top center',
      }}
      animate={controls}
      initial={{ rotate: 0 }}
    >
      <div style={{ position: 'relative', width: 100, height: 150 }}>
        {/* Web thread */}
        <svg width="2" height="120" style={{ position: 'absolute', top: 0, left: '50%', marginLeft: -1 }}>
          <line x1="1" y1="0" x2="1" y2="120" stroke="white" strokeWidth="1" />
        </svg>
        {/* Spidey SVG */}
        <motion.div
            style={{ position: 'absolute', top: 90, left: '50%', marginLeft: -25 }}
            initial={{ y: -20, opacity: 0}}
            animate={{ y: 0, opacity: 1, rotate: 0}}
            transition={{ delay: 1, duration: 1, type: "spring"}}
        >
        <svg
          width="50"
          height="60"
          viewBox="0 0 200 250"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.g 
            transform="translate(100, 125)"
            whileHover={{ scale: 1.1, rotate: [0, 5, -5, 5, 0], transition: { duration: 0.5, yoyo: Infinity } }}
            >
            {/* Head */}
            <path d="M-35,0 A35,45 0 1,1 35,0 A35,45 0 1,1 -35,0" fill="#c00" />
            <path d="M-25,0 A25,35 0 1,1 25,0 L20,-5 L-20,-5 Z" fill="#fff" opacity="0.8" />
            <path d="M-18, -2 L18,-2 L15,-6 L-15,-6Z" fill="#222" />

            {/* Body */}
            <path d="M-40,40 C-40,80 40,80 40,40 L30,35 L-30,35 Z" fill="#005c9e" />
            <path d="M-30,45 L30,45 L0,85Z" fill="#c00" />
            
            {/* Spider Logo */}
            <circle cx="0" cy="55" r="8" fill="#c00" />
            <path d="M0,63 l5,5 M0,63 l-5,5 M0,63 l5,-5 M0,63 l-5,-5 M0,63 l0,8 M0,63 l8,0 M0,63 l-8,0 M0,63 l0,-8" stroke="#c00" strokeWidth="2" />
          </motion.g>
        </svg>
      </motion.div>

      </div>
    </motion.div>
  );
};

export default Spidey;
