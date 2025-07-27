"use client";

import React, { useRef, useEffect } from 'react';

const Starfield: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let stars: Star[] = [];
        const numStars = 500;
        
        function random(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        class Star {
            x: number;
            y: number;
            z: number;

            constructor() {
                this.x = random(-width / 2, width / 2);
                this.y = random(-height / 2, height / 2);
                this.z = random(0, width);
            }

            update() {
                this.z -= 2; // speed
                if (this.z < 1) {
                    this.z = width;
                    this.x = random(-width / 2, width / 2);
                    this.y = random(-height / 2, height / 2);
                }
            }

            draw() {
                ctx!.fillStyle = 'rgba(255, 255, 255, 0.8)';
                
                const sx = this.x * (width / this.z) + width / 2;
                const sy = this.y * (height / this.z) + height / 2;

                const r = Math.max(0.1, 2.5 * (1 - this.z / width));

                ctx!.beginPath();
                ctx!.arc(sx, sy, r, 0, Math.PI * 2);
                ctx!.fill();
            }
        }
        
        for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
        }

        let animationFrameId: number;
        function loop() {
            ctx!.fillStyle = 'rgba(0, 0, 0, 0.25)'; // a bit of trail
            ctx!.fillRect(0, 0, width, height);

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            animationFrameId = requestAnimationFrame(loop);
        }

        const handleResize = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
          stars = [];
          for (let i = 0; i < numStars; i++) {
            stars.push(new Star());
          }
        }

        window.addEventListener('resize', handleResize);
        
        loop();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none', background: 'black' }} />;
};

export default Starfield;
