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

        let fireworks: Firework[] = [];

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
                this.z -= 1; // speed
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

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            alpha: number;
            color: string;

            constructor(x: number, y: number, color: string) {
                this.x = x;
                this.y = y;
                this.vx = random(-2, 2);
                this.vy = random(-2, 2);
                this.alpha = 1;
                this.color = color;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.alpha -= 0.02;
            }

            draw() {
                ctx!.globalAlpha = this.alpha;
                ctx!.fillStyle = this.color;
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, 2, 0, Math.PI * 2);
                ctx!.fill();
            }
        }

        class Firework {
            x: number;
            y: number;
            targetX: number;
            targetY: number;
            vx: number;
            vy: number;
            exploded: boolean;
            particles: Particle[];
            color: string;

            constructor() {
                this.x = random(width * 0.2, width * 0.8);
                this.y = height;
                this.targetX = random(this.x - width * 0.1, this.x + width * 0.1);
                this.targetY = random(height * 0.2, height * 0.5);
                this.vx = (this.targetX - this.x) / 50;
                this.vy = (this.targetY - this.y) / 50;
                this.exploded = false;
                this.particles = [];
                const hue = random(0, 360);
                this.color = `hsl(${hue}, 100%, 50%)`;
            }

            update() {
                if (!this.exploded) {
                    this.x += this.vx;
                    this.y += this.vy;
                    if (this.y <= this.targetY) {
                        this.exploded = true;
                        for (let i = 0; i < 50; i++) {
                            this.particles.push(new Particle(this.x, this.y, this.color));
                        }
                    }
                } else {
                    this.particles.forEach(p => p.update());
                    this.particles = this.particles.filter(p => p.alpha > 0);
                }
            }

            draw() {
                if (!this.exploded) {
                    ctx!.fillStyle = this.color;
                    ctx!.beginPath();
                    ctx!.arc(this.x, this.y, 3, 0, Math.PI * 2);
                    ctx!.fill();
                } else {
                    this.particles.forEach(p => p.draw());
                }
            }
        }


        let animationFrameId: number;
        function loop() {
            ctx!.globalCompositeOperation = 'source-over';
            ctx!.globalAlpha = 0.1;
            ctx!.fillStyle = 'black';
            ctx!.fillRect(0, 0, width, height);
            
            ctx!.globalCompositeOperation = 'lighter';
            ctx!.globalAlpha = 1;

            stars.forEach(star => {
                star.update();
                star.draw();
            });

            if (random(0, 100) < 2) {
                fireworks.push(new Firework());
            }

            fireworks.forEach((f, i) => {
                f.update();
                f.draw();
                if(f.exploded && f.particles.length === 0) {
                    fireworks.splice(i, 1);
                }
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
