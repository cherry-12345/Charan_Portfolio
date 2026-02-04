'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
    { value: 'B.Tech', label: 'Computer Science (AI)', icon: '🎓' },
    { value: '3+', label: 'Years Learning & Building', icon: '⚡' },
    { value: '5+', label: 'Projects Completed', icon: '🚀' },
    { value: '∞', label: 'Always Learning', icon: '📚' },
];

export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="section-container relative overflow-hidden" ref={ref}>
            {/* Background Decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-medium mb-4"
                    >
                        About Me
                    </motion.span>
                    <h2 className="section-heading gradient-text">Building the Future with AI</h2>
                    <p className="section-subheading max-w-2xl mx-auto">
                        Transforming complex problems into intelligent, scalable solutions
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
                    {/* Left: Profile Card - Premium Glass */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-2"
                    >
                        <div className="relative group">
                            {/* Animated Glow Border */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink rounded-2xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-gradient-x" />
                            
                            {/* Card Content - Liquid Glass */}
                            <div className="relative liquid-glass p-8">
                                {/* Avatar with Photo - Fallback to Initials */}
                                <div className="relative w-32 h-32 mx-auto mt-4 mb-6 rounded-full bg-gradient-to-br from-neon-cyan to-neon-pink p-1 group-hover:scale-110 transition-transform duration-500 animate-pulse-slow overflow-hidden">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 blur-xl animate-pulse-glow" />
                                    <div className="relative w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                                        <img
                                            src="/avatar.png"
                                            alt="Charan Katkam"
                                            className="w-full h-full object-cover"
                                            style={{ objectPosition: 'center 20%' }}
                                            onError={(e) => {
                                                const img = e.currentTarget as HTMLImageElement;
                                                img.style.display = 'none';
                                                const next = img.nextElementSibling as HTMLElement;
                                                if (next) next.style.display = 'flex';
                                            }}
                                        />
                                        <span className="font-display text-4xl font-bold gradient-text glow-cyan flex items-center justify-center w-full h-full" style={{ display: 'none' }}>CK</span>
                                        {/* Shine effect */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent animate-shimmer-slow" />
                                    </div>
                                </div>
                                
                                <h3 className="font-display text-2xl font-bold text-white text-center mb-2">
                                    Charan Katkam
                                </h3>
                                
                                {/* Quick Info - Premium */}
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-300 p-2 rounded-lg hover:bg-white/5 transition-colors group/item">
                                        <span className="text-lg group-hover/item:scale-125 transition-transform">🎓</span>
                                        <span className="text-sm">B.Tech in Computer Science (AI)</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300 p-2 rounded-lg hover:bg-white/5 transition-colors group/item">
                                        <span className="text-lg group-hover/item:scale-125 transition-transform">📍</span>
                                        <span className="text-sm">India</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-300 p-2 rounded-lg hover:bg-white/5 transition-colors group/item">
                                        <span className="text-lg group-hover/item:scale-125 transition-transform">💼</span>
                                        <span className="text-sm">Open to Opportunities</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bio Content - Premium Glass */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-3 space-y-6"
                    >
                        <div className="prose prose-invert max-w-none">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="relative p-6 rounded-xl glass-card shimmer"
                            >
                                <div className="absolute top-4 left-4 text-5xl opacity-10 text-neon-cyan">"</div>
                                <p className="text-lg text-gray-300 leading-relaxed pl-8">
                                    I'm a Computer Science undergraduate specializing in <span className="text-neon-cyan font-semibold">Artificial Intelligence</span>, and I enjoy building by experimenting, prompting, and iterating quickly. As a vibe coder, I focus on turning ideas into working systems through hands-on exploration rather than heavy theory.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="p-6 rounded-xl glass-card shimmer"
                            >
                                <p className="text-gray-300 leading-relaxed">
                                    During my <span className="text-neon-cyan font-semibold">AI Developer internship</span>, I contributed to AI-driven automation tasks involving <span className="text-neon-cyan font-semibold">supervised learning</span> and <span className="text-neon-cyan font-semibold">NLP-based features</span>. I've also built projects across AI, computer vision, and full-stack web development using <span className="text-neon-pink font-semibold">React</span> and <span className="text-neon-pink font-semibold">Next.js</span>, learning by building and refining as I go.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                transition={{ duration: 0.5, delay: 0.6 }}
                                className="p-6 rounded-xl glossy-card"
                            >
                                <p className="text-gray-300 leading-relaxed">
                                    I'm especially interested in collaborative, <span className="text-neon-pink font-semibold">research-driven environments</span> where 
                                    learning happens through experimentation and real problem-solving. Let's build something impactful together.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section - Premium Glass Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative floating-card p-6 text-center">
                                <span className="text-3xl mb-3 block group-hover:scale-125 transition-transform duration-300">{stat.icon}</span>
                                <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2 glow-cyan">
                                    {stat.value}
                                </div>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent mt-16"
                />
            </div>
        </section>
    );
}
