"use client";

import React, { useRef, useEffect } from 'react';

const Fireworks: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        let fireworks: Firework[] = [];
        let particles: Particle[] = [];

        function random(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }

        class Firework {
            x: number;
            y: number;
            sx: number;
            sy: number;
            tx: number;
            ty: number;
            distanceToTarget: number;
            distanceTraveled: number;
            coordinates: [number, number][];
            coordinateCount: number;
            angle: number;
            speed: number;
            acceleration: number;
            brightness: number;
            targetRadius: number;
            hue: number;

            constructor(sx: number, sy: number, tx: number, ty: number) {
                this.x = sx;
                this.y = sy;
                this.sx = sx;
                this.sy = sy;
                this.tx = tx;
                this.ty = ty;
                this.distanceToTarget = Math.sqrt(Math.pow(tx - sx, 2) + Math.pow(ty - sy, 2));
                this.distanceTraveled = 0;
                this.coordinates = [];
                this.coordinateCount = 3;
                while (this.coordinateCount--) {
                    this.coordinates.push([this.x, this.y]);
                }
                this.angle = Math.atan2(ty - sy, tx - sx);
                this.speed = 2;
                this.acceleration = 1.05;
                this.brightness = random(50, 70);
                this.targetRadius = 1;
                this.hue = random(0, 360);
            }

            update(index: number) {
                this.coordinates.pop();
                this.coordinates.unshift([this.x, this.y]);

                if (this.targetRadius < 8) {
                    this.targetRadius += 0.3;
                } else {
                    this.targetRadius = 1;
                }

                this.speed *= this.acceleration;

                const vx = Math.cos(this.angle) * this.speed;
                const vy = Math.sin(this.angle) * this.speed;

                this.distanceTraveled = Math.sqrt(Math.pow(this.x - this.sx, 2) + Math.pow(this.y - this.sy, 2));

                if (this.distanceTraveled >= this.distanceToTarget) {
                    createParticles(this.tx, this.ty, this.hue);
                    fireworks.splice(index, 1);
                } else {
                    this.x += vx;
                    this.y += vy;
                }
            }

            draw() {
                ctx!.beginPath();
                ctx!.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
                ctx!.lineTo(this.x, this.y);
                ctx!.strokeStyle = `hsl(${this.hue}, 100%, ${this.brightness}%)`;
                ctx!.stroke();

                ctx!.beginPath();
                ctx!.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
                ctx!.stroke();
            }
        }

        class Particle {
            x: number;
            y: number;
            angle: number;
            speed: number;
            friction: number;
            gravity: number;
            hue: number;
            brightness: number;
            alpha: number;
            decay: number;
            coordinates: [number, number][];
            coordinateCount: number;

            constructor(x: number, y: number, hue: number) {
                this.x = x;
                this.y = y;
                this.angle = random(0, Math.PI * 2);
                this.speed = random(1, 10);
                this.friction = 0.95;
                this.gravity = 1;
                this.hue = hue;
                this.brightness = random(50, 80);
                this.alpha = 1;
                this.decay = random(0.015, 0.03);
                this.coordinates = [];
                this.coordinateCount = 5;
                while (this.coordinateCount--) {
                    this.coordinates.push([this.x, this.y]);
                }
            }

            update(index: number) {
                this.coordinates.pop();
                this.coordinates.unshift([this.x, this.y]);
                this.speed *= this.friction;
                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed + this.gravity;
                this.alpha -= this.decay;

                if (this.alpha <= this.decay) {
                    particles.splice(index, 1);
                }
            }

            draw() {
                ctx!.beginPath();
                ctx!.moveTo(this.coordinates[this.coordinates.length - 1][0], this.coordinates[this.coordinates.length - 1][1]);
                ctx!.lineTo(this.x, this.y);
                ctx!.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
                ctx!.stroke();
            }
        }

        function createParticles(x: number, y: number, hue: number) {
            let particleCount = 50;
            while (particleCount--) {
                particles.push(new Particle(x, y, hue));
            }
        }

        let animationFrameId: number;
        function loop() {
            animationFrameId = requestAnimationFrame(loop);
            ctx!.globalCompositeOperation = 'destination-out';
            ctx!.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx!.fillRect(0, 0, width, height);
            ctx!.globalCompositeOperation = 'lighter';
            
            let i = fireworks.length;
            while (i--) {
                fireworks[i].draw();
                fireworks[i].update(i);
            }

            let j = particles.length;
            while (j--) {
                particles[j].draw();
                particles[j].update(j);
            }
        }

        const launchFirework = () => {
            if (fireworks.length < 20) { // Limit number of fireworks on screen
                 fireworks.push(new Firework(width / 2, height, random(0, width), random(0, height / 2)));
            }
        };

        const intervalId = setInterval(launchFirework, 1000);
        
        const handleResize = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        }

        window.addEventListener('resize', handleResize);
        
        loop();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            clearInterval(intervalId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none' }} />;
};

export default Fireworks;
