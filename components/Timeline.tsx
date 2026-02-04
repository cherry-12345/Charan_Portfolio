'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const experiences = [
    {
        company: 'SmartBridge',
        role: 'AI Developer Intern',
        type: 'Remote',
        year: '2025',
        duration: 'Internship',
        icon: '🤖',
        color: 'neon-cyan',
        achievements: [
            'Built an AI-powered SDLC automation platform prototype',
            'Worked on requirement classification, bug prediction, and test case generation',
            'Prepared datasets and supported model evaluation and iteration',
            'Integrated NLP chatbot features with the platform workflow',
        ],
    },
];

interface TimelineItemProps {
    experience: typeof experiences[0];
    index: number;
    isInView: boolean;
}

const TimelineItem = ({ experience, index, isInView }: TimelineItemProps) => {
    const itemRef = useRef(null);
    
    return (
        <motion.div
            ref={itemRef}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} group`}
        >
            {/* Content Card */}
            <div className={`w-full md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <motion.div
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="relative"
                >
                    {/* Glow Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon-cyan to-neon-pink rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* Card */}
                    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl border border-gray-800 group-hover:border-neon-cyan/50 p-6 md:p-8 transition-all duration-300 overflow-hidden">
                        {/* Background Pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
                                backgroundSize: '20px 20px',
                            }} />
                        </div>

                        {/* Header */}
                        <div className="relative flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                            <div className="flex items-start gap-4">
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-pink flex items-center justify-center text-2xl shadow-lg flex-shrink-0"
                                >
                                    {experience.icon}
                                </motion.div>
                                <div>
                                    <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-neon-cyan transition-colors">
                                        {experience.role}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 mt-1">
                                        <span className="text-lg text-neon-cyan font-semibold">{experience.company}</span>
                                        <span className="text-gray-600">•</span>
                                        <span className="text-sm text-gray-400">{experience.type}</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Year Badge */}
                            <div className="flex items-center gap-2">
                                <span className="px-4 py-2 bg-neon-pink/10 border border-neon-pink/30 text-neon-pink font-display font-bold text-sm rounded-full">
                                    {experience.year}
                                </span>
                            </div>
                        </div>

                        {/* Achievements */}
                        <div className="relative space-y-3">
                            {experience.achievements.map((achievement, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                    transition={{ delay: 0.5 + idx * 0.1 }}
                                    className="flex items-start gap-3 group/item"
                                >
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, delay: idx * 0.2, repeat: Infinity }}
                                        className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-pink flex-shrink-0"
                                    />
                                    <p className="text-gray-300 group-hover/item:text-white transition-colors leading-relaxed">
                                        {achievement}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-neon-cyan/10 to-transparent rounded-bl-full" />
                    </div>
                </motion.div>
            </div>

            {/* Timeline Node */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative"
                >
                    <div className="w-6 h-6 rounded-full bg-black border-4 border-neon-cyan shadow-neon z-10 relative" />
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 rounded-full bg-neon-cyan"
                    />
                </motion.div>
            </div>
        </motion.div>
    );
};

export default function Timeline() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="section-container relative overflow-hidden" ref={containerRef}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-neon-pink/5 rounded-full blur-3xl -translate-y-1/2" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10" ref={ref}>
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
                        Career Journey
                    </motion.span>
                    <h2 className="section-heading gradient-text">Experience</h2>
                    <p className="section-subheading max-w-2xl mx-auto">
                        Professional journey in AI and software development
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                    {/* Animated Vertical Line */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-800 transform -translate-x-1/2">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-neon-cyan via-purple-500 to-neon-pink"
                        />
                    </div>

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((experience, index) => (
                            <TimelineItem
                                key={experience.company}
                                experience={experience}
                                index={index}
                                isInView={isInView}
                            />
                        ))}
                    </div>
                </div>

                {/* Looking for More */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-neon-cyan/5 to-neon-pink/5 border border-gray-800">
                        <span className="text-2xl">🚀</span>
                        <p className="text-gray-300">
                            <span className="text-white font-semibold">Open to opportunities</span> in AI/ML and full-stack development
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
