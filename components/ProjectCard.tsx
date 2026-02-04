'use client';

import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GitHubIcon, ExternalLinkIcon } from './icons';

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    achievements: string[];
    githubUrl: string;
    index: number;
    color?: string;
    emoji?: string;
}

export default function ProjectCard({
    title,
    description,
    technologies,
    achievements,
    githubUrl,
    index,
    color = 'neon-cyan',
    emoji = '🚀',
}: ProjectCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for 3D effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        setIsHovered(false);
    };

    const gradientColors = {
        'neon-cyan': 'from-neon-cyan to-blue-500',
        'neon-pink': 'from-neon-pink to-purple-500',
        'green': 'from-green-400 to-emerald-600',
        'orange': 'from-orange-400 to-red-500',
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }}
            className="group relative h-full cursor-pointer"
        >
            {/* Animated Border Gradient */}
            <motion.div
                className={`absolute -inset-[2px] bg-gradient-to-r ${gradientColors[color as keyof typeof gradientColors] || gradientColors['neon-cyan']} rounded-2xl opacity-0 blur-sm transition-opacity duration-500`}
                animate={{ opacity: isHovered ? 0.6 : 0 }}
            />

            {/* Glow Effect */}
            <motion.div
                className="absolute -inset-4 bg-neon-cyan/10 rounded-3xl blur-2xl transition-opacity duration-500"
                animate={{ opacity: isHovered ? 1 : 0 }}
            />

            {/* Main Card - Ultra Premium Glass */}
            <div className="relative h-full liquid-glass overflow-hidden transition-all duration-300 hover:scale-[1.02]">
                {/* Holographic overlay */}
                <motion.div
                    className="absolute inset-0 holographic-card opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                    animate={{ opacity: isHovered ? 0.4 : 0 }}
                />
                {/* Project Number & Emoji Header */}
                <div className="relative p-6 pb-4">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <motion.div
                                animate={{ rotate: isHovered ? 360 : 0, scale: isHovered ? 1.2 : 1 }}
                                transition={{ duration: 0.6 }}
                                className="text-3xl"
                            >
                                {emoji}
                            </motion.div>
                            <span className="text-sm font-mono text-gray-500 group-hover:text-neon-cyan transition-colors">
                                Project {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>
                        
                        {/* GitHub Link - Premium */}
                        <motion.a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative p-2 rounded-lg glossy-card group/github"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <GitHubIcon className="w-5 h-5 text-gray-400 group-hover/github:text-neon-cyan transition-colors" />
                        </motion.a>
                    </div>

                    {/* Title - Enhanced */}
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white mt-4 group-hover:gradient-text-animated transition-all duration-300 glow-cyan animate-neon-pulse">
                        {title}
                    </h3>
                    <p className="text-gray-400 mt-2 text-sm md:text-base group-hover:text-gray-300 transition-colors leading-relaxed">{description}</p>
                </div>

                {/* Technologies - Ultra Premium Badges */}
                <div className="px-6 pb-4">
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, techIndex) => (
                            <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + techIndex * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="relative group/badge"
                            >
                                <div className="absolute -inset-px holographic-card opacity-0 group-hover/badge:opacity-60 transition-opacity duration-300" />
                                <span className="relative px-3 py-1.5 text-xs font-medium chrome-card cursor-default">
                                    {tech}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="px-6 pb-6">
                    <div className="space-y-3">
                        {achievements.slice(0, 3).map((achievement, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + idx * 0.1 }}
                                className="flex items-start gap-3 group/item"
                            >
                                <div className="w-1.5 h-1.5 mt-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex-shrink-0 group-hover/item:shadow-neon group-hover/item:scale-125 transition-all" />
                                <p className="text-sm text-gray-300 group-hover/item:text-white transition-colors leading-relaxed">
                                    {achievement}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer - View Project Button - Premium */}
                <div className="px-6 pb-6 pt-2 border-t border-white/10">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-neon-cyan hover:text-white font-display font-semibold transition-all group/link hover:glow-cyan"
                    >
                        <span>View on GitHub</span>
                        <motion.span
                            animate={{ x: isHovered ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ExternalLinkIcon className="w-4 h-4" />
                        </motion.span>
                    </a>
                </div>

                {/* Premium Shine Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full pointer-events-none"
                    animate={{ translateX: isHovered ? '200%' : '-100%' }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </div>
        </motion.div>
    );
}
