'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
    {
        title: 'SmartSDLC',
        description: 'AI-Enhanced Software Development Lifecycle',
        technologies: ['Python', 'IBM Granite 3.3', 'Transformers', 'Gradio', 'PyPDF2', 'Google Colab'],
        achievements: [
            'Automated requirement classification, bug prediction, and test case generation',
            'Built with IBM Watsonx Granite AI model for NLP tasks',
            'Six modular AI features integrated into interactive Gradio interface',
            'Handles code generation, summarization, and chatbot assistance',
        ],
        githubUrl: 'https://github.com/cherry-12345/SmartSDLC-AI-Enhanced-Software-Development-Lifecycle',
        color: 'neon-cyan',
        emoji: '🤖',
    },
    {
        title: 'AJ Abhi Jewels',
        description: 'Enterprise E-commerce Platform',
        technologies: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
        achievements: [
            'Full-stack luxury jewelry e-commerce platform with modern design system',
            'Server-side rendering with Next.js 14 App Router and TypeScript safety',
            'Achieved <2 second page load time with advanced image optimization',
            'Features: Product catalog, shopping cart, wishlist, SEO optimization, Google Analytics',
        ],
        githubUrl: 'https://github.com/cherry-12345/Abhi-Jewels',
        color: 'neon-pink',
        emoji: '💎',
    },
    {
        title: 'My Music Platform',
        description: 'Full-Stack Music Streaming Application',
        technologies: ['React', 'JavaScript', 'Node.js', 'REST API'],
        achievements: [
            'Built interactive music streaming platform with real-time search',
            'Implemented personalized playlist features and user preferences',
            'Responsive design optimized for all devices',
            'Focus on user engagement and intuitive music discovery',
        ],
        githubUrl: 'https://github.com/cherry-12345/My-Music-Demo-Project',
        color: 'green',
        emoji: '🎵',
    },
    {
        title: 'Air Cursor',
        description: 'Hand Gesture Computer Vision System',
        technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI'],
        achievements: [
            'Real-time hand gesture recognition for hands-free cursor control',
            'Implemented gesture detection pipeline using MediaPipe landmarks',
            'Air drawing mode and gesture-controlled games for interactive experience',
            'Improved accessibility for touchless computer interaction',
        ],
        githubUrl: 'https://github.com/cherry-12345/Air-Cursor-Using-Hand-Gestures',
        color: 'orange',
        emoji: '👋',
    },
];

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="projects" className="section-container relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/30 to-black" />
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
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
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 border border-neon-cyan/30 text-neon-cyan text-sm font-medium mb-4"
                    >
                        My Work
                    </motion.span>
                    <h2 className="section-heading gradient-text">Featured Projects</h2>
                    <p className="section-subheading max-w-2xl mx-auto">
                        AI/ML solutions and full-stack applications that solve real-world problems
                    </p>
                </motion.div>

                {/* Projects Counter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex justify-center mb-12"
                >
                    <div className="flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-gray-800">
                        <span className="font-display text-2xl font-bold gradient-text">{projects.length}</span>
                        <span className="text-gray-400">Featured Projects</span>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 perspective-2000">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            index={index}
                        />
                    ))}
                </div>

                {/* View More CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex justify-center mt-16"
                >
                    <a
                        href="https://github.com/cherry-12345"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 px-8 py-4 font-display font-semibold text-lg rounded-xl overflow-hidden"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink animate-gradient-x" />
                        <span className="absolute inset-[2px] bg-black rounded-[10px] transition-colors group-hover:bg-gray-900" />
                        <span className="relative text-white flex items-center gap-2">
                            View All Projects on GitHub
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
