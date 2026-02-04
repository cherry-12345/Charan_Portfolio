'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    color: string;
    life: number;
    maxLife: number;
}

interface ParticleSystemProps {
    particleCount?: number;
    colors?: string[];
    className?: string;
}

export default function ParticleSystem({ 
    particleCount = 25, 
    colors = ['#00F5D4', '#F72585', '#A855F7'],
    className = ''
}: ParticleSystemProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };

        const createParticle = (): Particle => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 0,
            maxLife: Math.random() * 300 + 200
        });

        const initParticles = () => {
            particlesRef.current = Array.from({ length: particleCount }, createParticle);
        };

        const updateParticles = () => {
            particlesRef.current.forEach((particle, index) => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.life++;

                // Fade out as particle ages
                particle.opacity = Math.max(0, 0.7 * (1 - particle.life / particle.maxLife));

                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;

                // Reset particle if it's too old
                if (particle.life >= particle.maxLife) {
                    particlesRef.current[index] = createParticle();
                }
            });
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach(particle => {
                ctx.save();
                ctx.globalAlpha = particle.opacity;
                ctx.fillStyle = particle.color;
                ctx.shadowBlur = 10;
                ctx.shadowColor = particle.color;
                
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            });

            // Draw connections between nearby particles
            particlesRef.current.forEach((particle, i) => {
                particlesRef.current.slice(i + 1).forEach(otherParticle => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 80) {
                        ctx.save();
                        ctx.globalAlpha = (1 - distance / 80) * 0.15;
                        ctx.strokeStyle = particle.color;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            });
        };

        const animate = () => {
            updateParticles();
            drawParticles();
            animationRef.current = requestAnimationFrame(animate);
        };

        resizeCanvas();
        initParticles();
        animate();

        window.addEventListener('resize', resizeCanvas);

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [particleCount, colors]);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ opacity: 0.6 }}
        />
    );
}

// Floating Orbs Component
export function FloatingOrbs({ count = 8 }: { count?: number }) {
    // Generate deterministic positions based on index
    const generatePosition = (index: number) => {
        const seed = index * 137.508; // Golden angle for even distribution
        return {
            left: ((seed * 9301 + 49297) % 233280) / 2332.8,
            top: ((seed * 9301 + 49297) % 233280) / 2332.8,
            xOffset: ((index * 17) % 21) - 10,
            duration: 4 + ((index * 13) % 40) / 10,
            delay: ((index * 7) % 20) / 10
        };
    };

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: count }).map((_, i) => {
                const pos = generatePosition(i);
                return (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full"
                        style={{
                            background: `linear-gradient(45deg, #00F5D4, #F72585, #A855F7)`,
                            filter: 'blur(1px)',
                            left: `${pos.left}%`,
                            top: `${pos.top}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, pos.xOffset, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: pos.duration,
                            repeat: Infinity,
                            delay: pos.delay,
                            ease: "easeInOut",
                        }}
                    />
                );
            })}
        </div>
    );
}

// Ambient Light Component
export function AmbientLight() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Primary ambient lights */}
            <motion.div
                className="absolute w-[800px] h-[800px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(0, 245, 212, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    top: '10%',
                    left: '20%',
                }}
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(247, 37, 133, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    bottom: '10%',
                    right: '20%',
                }}
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 4,
                }}
            />
        </div>
    );
}