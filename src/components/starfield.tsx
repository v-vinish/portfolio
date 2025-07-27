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
        
        let mouse = {
            x: width / 2,
            y: height / 2,
            isSet: false
        };

        function random(min: number, max: number) {
            return Math.random() * (max - min) + min;
        }
        
        function getStarScreenCoords(star: Star) {
            const sx = (star.x / star.z) * width/2 + width/2;
            const sy = (star.y / star.z) * height/2 + height/2;
            return { sx, sy };
        }

        class Star {
            x: number;
            y: number;
            z: number;
            pz: number;

            constructor() {
                this.x = random(-width, width);
                this.y = random(-height, height);
                this.z = random(0, width);
                this.pz = this.z;
            }

            update() {
                this.z -= 2; // speed
                if (this.z < 1) {
                    this.z = width;
                    this.x = random(-width, width);
                    this.y = random(-height, height);
                    this.pz = this.z;
                }
            }

            draw() {
                ctx!.fillStyle = 'rgba(255, 255, 255, 0.8)';
                
                const { sx, sy } = getStarScreenCoords(this);

                const r = Math.max(0.1, 2.5 * (1 - this.z / width));

                ctx!.beginPath();
                ctx!.arc(sx, sy, r, 0, Math.PI * 2);
                ctx!.fill();
            }
        }
        
        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.isSet = true;
        };
        
        const handleTouchMove = (e: TouchEvent) => {
          if (e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
            mouse.isSet = true;
          }
        }

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('touchmove', handleTouchMove);
        window.addEventListener('touchstart', (e) => handleTouchMove(e as unknown as TouchEvent));


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
            
            // Draw constellation lines
            if(mouse.isSet){
                ctx!.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                for (let i = 0; i < stars.length; i++) {
                    const star1 = stars[i];
                    const { sx: x1, sy: y1 } = getStarScreenCoords(star1);
                    
                    // Check distance from mouse
                    const distToMouse = Math.hypot(x1 - mouse.x, y1 - mouse.y);

                    if (distToMouse < 150) { // Only connect stars near the cursor
                         for (let j = i + 1; j < stars.length; j++) {
                            const star2 = stars[j];
                            const { sx: x2, sy: y2 } = getStarScreenCoords(star2);
                            
                            const dist = Math.hypot(x1 - x2, y1 - y2);

                            if (dist < 100) { // Max distance between stars to connect
                                ctx!.beginPath();
                                ctx!.moveTo(x1, y1);
                                ctx!.lineTo(x2, y2);
                                ctx!.stroke();
                            }
                        }
                    }
                }
            }


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
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchstart', (e) => handleTouchMove(e as unknown as TouchEvent));
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1, pointerEvents: 'none', background: 'black' }} />;
};

export default Starfield;
