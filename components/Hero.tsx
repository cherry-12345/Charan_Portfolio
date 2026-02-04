'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { DownloadIcon, ExternalLinkIcon, CheckIcon, SparklesIcon } from './icons';
import Link from 'next/link';
import ParticleSystem, { FloatingOrbs, AmbientLight } from './ParticleSystem';

const highlights = [
    { text: 'Built AI-powered SDLC platforms', icon: '🤖' },
    { text: 'Crafting solutions with Python, ML & Next.js', icon: '⚡' },
];

const roles = [
    'AI & ML Engineer',
    'Full-Stack Developer',
    'Python Developer',
];

// Neural Network Background Component
const NeuralNetwork = () => {
    const [nodes, setNodes] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);

    useEffect(() => {
        // Generate nodes only on client side to avoid hydration mismatch
        setNodes(
            Array.from({ length: 20 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                delay: Math.random() * 2,
            }))
        );
    }, []);

    if (nodes.length === 0) {
        return <div className="absolute inset-0 overflow-hidden opacity-20" />;
    }

    return (
        <div className="absolute inset-0 overflow-hidden opacity-20">
            <svg className="w-full h-full">
                {/* Connections */}
                {nodes.map((node, i) =>
                    nodes.slice(i + 1, i + 4).map((target, j) => (
                        <motion.line
                            key={`${i}-${j}`}
                            x1={`${node.x}%`}
                            y1={`${node.y}%`}
                            x2={`${target.x}%`}
                            y2={`${target.y}%`}
                            stroke="url(#gradient)"
                            strokeWidth="0.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: [0, 0.5, 0] }}
                            transition={{
                                duration: 3,
                                delay: node.delay,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        />
                    ))
                )}
                {/* Nodes */}
                {nodes.map((node) => (
                    <motion.circle
                        key={node.id}
                        cx={`${node.x}%`}
                        cy={`${node.y}%`}
                        r="3"
                        fill="#00F5D4"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1, 0.5, 1] }}
                        transition={{
                            duration: 2,
                            delay: node.delay,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                    />
                ))}
                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00F5D4" />
                        <stop offset="100%" stopColor="#F72585" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
};

// Floating 3D Shapes
const FloatingShapes = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 3D Cube */}
        <motion.div
            animate={{
                y: [0, -30, 0],
                rotateX: [0, 360],
                rotateY: [0, 360],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-[15%] left-[10%] w-16 h-16 md:w-24 md:h-24"
        >
            <div className="w-full h-full preserve-3d relative" style={{ transformStyle: 'preserve-3d' }}>
                <div className="absolute inset-0 border-2 border-neon-cyan/30 bg-neon-cyan/5" style={{ transform: 'translateZ(32px)' }} />
                <div className="absolute inset-0 border-2 border-neon-cyan/30 bg-neon-cyan/5" style={{ transform: 'translateZ(-32px)' }} />
            </div>
        </motion.div>

        {/* 3D Ring */}
        <motion.div
            animate={{
                y: [0, 40, 0],
                rotateZ: [0, 360],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-[20%] right-[15%] w-20 h-20 md:w-32 md:h-32"
        >
            <div className="w-full h-full rounded-full border-4 border-neon-pink/30 relative">
                <div className="absolute inset-4 rounded-full border-2 border-neon-pink/20" />
            </div>
        </motion.div>

        {/* Floating Orbs */}
        {[...Array(5)].map((_, i) => (
            <motion.div
                key={i}
                animate={{
                    y: [0, -20 - i * 10, 0],
                    x: [0, 10 + i * 5, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                }}
                className="absolute w-2 h-2 md:w-3 md:h-3 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink blur-sm"
                style={{
                    top: `${20 + i * 15}%`,
                    left: `${70 + i * 5}%`,
                }}
            />
        ))}

        {/* Gradient Blob */}
        <motion.div
            animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-neon-cyan/20 via-neon-pink/10 to-transparent blur-3xl"
        />
    </div>
);

const useTypingEffect = (texts: string[], typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000) => {
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[textIndex];

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return displayedText;
};

export default function Hero() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);
    const scale = useTransform(scrollY, [0, 300], [1, 0.9]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    const typedText = useTypingEffect(roles, 80, 40, 2500);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Premium Background Effects */}
            <AmbientLight />
            <ParticleSystem particleCount={30} className="opacity-40" />
            <FloatingOrbs count={12} />
            
            {/* Neural Network Background */}
            <NeuralNetwork />

            {/* Enhanced Animated Grid */}
            <motion.div style={{ y }} className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(#00F5D4 1px, transparent 1px),
                        linear-gradient(90deg, #00F5D4 1px, transparent 1px),
                        radial-gradient(circle at 50% 50%, rgba(0, 245, 212, 0.1) 0%, transparent 50%)
                    `,
                    backgroundSize: '60px 60px, 60px 60px, 200px 200px',
                }} />
            </motion.div>

            {/* Floating 3D Shapes */}
            <FloatingShapes />

            {/* Main Content */}
            <motion.div
                style={{ scale, opacity }}
                className="section-container relative z-10"
            >
                <div className="max-w-6xl mx-auto text-center">
                    {/* Greeting Badge - Ultra Premium */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="relative group mb-8"
                    >
                        <div className="absolute -inset-1 holographic-card opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="relative inline-flex items-center gap-2 px-6 py-4 ultra-glass animate-pulse-slow">
                            <SparklesIcon className="w-5 h-5 text-neon-cyan animate-spin-slow" />
                            <span className="text-sm font-medium text-white">Available for opportunities</span>
                            <div className="relative">
                                <span className="w-3 h-3 rounded-full bg-green-500 block animate-pulse" />
                                <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
                            </div>
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-4 tracking-wider">
                            Hi, I'm <span className="text-white font-bold">Charan Katkam</span>
                        </h2>
                    </motion.div>

                    {/* Main Title with Enhanced Typing Effect */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8 relative"
                    >
                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight relative z-10">
                            <span className="gradient-text-animated glow-cyan inline-block min-h-[1.2em] animate-neon-pulse">
                                {typedText}
                                <motion.span
                                    animate={{ opacity: [1, 0] }}
                                    transition={{ duration: 0.6, repeat: Infinity }}
                                    className="inline-block w-[3px] md:w-1 h-[0.8em] bg-neon-cyan ml-1 align-middle shadow-neon"
                                />
                            </span>
                        </h1>
                        {/* Text reflection effect */}
                        <div className="absolute inset-0 opacity-20 blur-sm scale-y-[-1] translate-y-full bg-gradient-to-t from-transparent to-black pointer-events-none" />
                    </motion.div>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                    >
                        Turning ideas into real projects with <span className="text-neon-cyan font-semibold relative">
                            AI tools
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-cyan/50" />
                        </span> and <span className="text-neon-pink font-semibold relative">
                            modern web tech
                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-pink/50" />
                        </span>
                    </motion.p>

                    {/* CTA Buttons - Ultra Premium */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
                    >
                        <Link
                            href="#projects"
                            className="group relative overflow-hidden"
                        >
                            <div className="absolute -inset-1 holographic-card opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative px-8 py-4 font-display font-semibold text-lg ultra-glass hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                <span className="relative text-neon-cyan group-hover:text-white transition-colors flex items-center gap-2">
                                    View Projects
                                    <ExternalLinkIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </div>
                        </Link>
                        
                        <a
                            href="/resume.pdf"
                            download
                            className="group relative overflow-hidden"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink animate-gradient-x rounded-xl" />
                            <div className="relative px-8 py-4 font-display font-semibold text-lg chrome-card hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                                <span className="relative text-white group-hover:text-neon-cyan transition-colors flex items-center gap-2">
                                    Download Resume
                                    <DownloadIcon className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                </span>
                            </div>
                        </a>
                    </motion.div>

                    {/* Stats/Highlights - Ultra Premium Glass Cards */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
                    >
                        {highlights.map((highlight, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20, rotateX: -15 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                                whileHover={{ 
                                    y: -12, 
                                    scale: 1.05,
                                    rotateY: 5,
                                }}
                                className="group relative perspective-1000"
                            >
                                <div className="absolute -inset-1 holographic-card opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
                                <div className="relative ultra-glass p-8 cursor-default animate-depth-float">
                                    <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/5 via-purple-500/3 to-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                                    <div className="relative flex items-center gap-6">
                                        <div className="text-4xl group-hover:scale-125 transition-transform duration-300 animate-particle-float">
                                            {highlight.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-base sm:text-lg text-gray-300 text-left font-medium group-hover:text-white transition-colors leading-relaxed">
                                                {highlight.text}
                                            </p>
                                            <div className="w-full h-px bg-gradient-to-r from-neon-cyan/50 via-purple-500/30 to-neon-pink/50 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                    <div className="w-6 h-10 border-2 border-neon-cyan/50 rounded-full flex justify-center p-2">
                        <motion.div
                            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-neon-cyan rounded-full"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
