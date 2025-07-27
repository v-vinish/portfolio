"use client";

import { motion, useScroll, useTransform } from 'framer-motion';

export default function RocketShip() {
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], ['100vh', '-100vh']);
  const rotate = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, -10, 10, 0]);

  return (
    <motion.div
      style={{ y, rotate, position: 'fixed', bottom: 0, left: '5%', zIndex: 50 }}
      className="w-16 h-auto md:w-24"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 150"
        xmlSpace="preserve"
        className="drop-shadow-[0_0_10px_#ff6a00]"
      >
        <motion.g
           initial={{ y: 0 }}
           animate={{ y: [-1, 1, -1] }}
           transition={{
              duration: 0.2,
              repeat: Infinity,
              repeatType: 'reverse',
           }}
        >
          {/* Rocket Body */}
          <path fill="#E0E0E0" d="M50 0 L75 50 L65 50 L65 110 L35 110 L35 50 L25 50 Z" />
          <path fill="#C0C0C0" d="M50 0 L65 50 L50 50 Z" />
          <path fill="#FFFFFF" d="M50 15 a 10 10 0 1 1 0.0001 0" />
          
          {/* Fins */}
          <path fill="#D32F2F" d="M25 50 L10 80 L25 70 Z" />
          <path fill="#B71C1C" d="M25 50 L18 65 L25 70 Z" />

          <path fill="#D32F2F" d="M75 50 L90 80 L75 70 Z" />
          <path fill="#B71C1C" d="M75 50 L82 65 L75 70 Z" />
          
           <path fill="#D32F2F" d="M35 110 L20 130 L35 120 Z" />
           <path fill="#B71C1C" d="M35 110 L27.5 115 L35 120 Z" />

           <path fill="#D32F2F" d="M65 110 L80 130 L65 120 Z" />
           <path fill="#B71C1C" d="M65 110 L72.5 115 L65 120 Z" />
        </g>
        
        {/* Flames */}
        <motion.g 
          initial={{ scaleY: 1, opacity: 1 }}
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 0.3, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '50% 110px' }}
        >
          <path fill="#FFD700" d="M35 110 C 40 130, 45 140, 50 150 C 55 140, 60 130, 65 110 Z" />
          <path fill="#FFA500" d="M40 110 C 43 125, 47 130, 50 140 C 53 130, 57 125, 60 110 Z" />
        </motion.g>
      </svg>
    </motion.div>
  );
}
