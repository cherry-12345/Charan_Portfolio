'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const certifications = [
    {
        title: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional',
        issuer: 'Oracle',
        icon: '☁️',
        color: 'from-red-500 to-orange-500',
    },
    {
        title: 'Generative AI with IBM',
        issuer: 'SmartBridge',
        icon: '🧠',
        color: 'from-blue-500 to-cyan-500',
    },
    {
        title: 'Python Programming',
        issuer: 'Microsoft (SkillIndia)',
        icon: '🐍',
        color: 'from-yellow-500 to-green-500',
    },
    {
        title: 'Prompt Engineering with OpenAI',
        issuer: 'Columbia+',
        icon: '💬',
        color: 'from-green-500 to-teal-500',
    },
    {
        title: 'Java Programming',
        issuer: 'Codetantra',
        icon: '☕',
        color: 'from-orange-500 to-red-500',
    },
    {
        title: 'AI Data Quality Analyst',
        issuer: 'Rooman Technologies',
        icon: '📊',
        color: 'from-purple-500 to-pink-500',
    },
    {
        title: 'Full-Stack Internship Completion',
        issuer: 'SkillDzire',
        icon: '🎯',
        color: 'from-neon-cyan to-neon-pink',
    },
];

interface CertCardProps {
    cert: typeof certifications[0];
    index: number;
}

const CertCard = ({ cert, index }: CertCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group relative perspective-1000"
        >
            {/* Glow Effect */}
            <motion.div
                animate={{ opacity: isHovered ? 0.4 : 0 }}
                className={`absolute -inset-2 bg-gradient-to-r ${cert.color} rounded-2xl blur-xl transition-opacity`}
            />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 p-6 h-full group-hover:border-transparent transition-all duration-300 overflow-hidden">
                {/* Icon */}
                <motion.div
                    animate={{ rotate: isHovered ? 10 : 0, scale: isHovered ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}
                >
                    {cert.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-display text-lg font-semibold text-white mb-3 group-hover:text-neon-cyan transition-colors leading-tight">
                    {cert.title}
                </h3>

                {/* Issuer Badge */}
                <div className="mt-auto">
                    <span className={`inline-block px-3 py-1.5 bg-gradient-to-r ${cert.color} bg-opacity-10 border border-white/10 rounded-full text-xs font-medium text-white/80`}>
                        {cert.issuer}
                    </span>
                </div>

                {/* Verified Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0 }}
                    className="absolute top-4 right-4"
                >
                    <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                        <span className="text-green-400 text-sm">✓</span>
                    </div>
                </motion.div>

                {/* Shine Effect */}
                <motion.div
                    animate={{ x: isHovered ? '200%' : '-100%' }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                />
            </div>
        </motion.div>
    );
};

export default function Certifications() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="certifications" className="section-container relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
                <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
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
                        className="inline-block px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-4"
                    >
                        Credentials
                    </motion.span>
                    <h2 className="section-heading gradient-text">Certifications</h2>
                    <p className="section-subheading max-w-2xl mx-auto">
                        Professional credentials validating expertise in AI, programming, and development
                    </p>
                </motion.div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <CertCard key={cert.title} cert={cert} index={index} />
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex justify-center mt-12"
                >
                    <div className="flex items-center gap-8 px-8 py-4 rounded-2xl bg-white/5 border border-gray-800">
                        <div className="text-center">
                            <div className="font-display text-3xl font-bold gradient-text">{certifications.length}</div>
                            <p className="text-sm text-gray-400">Certifications</p>
                        </div>
                        <div className="w-px h-12 bg-gray-700" />
                        <div className="text-center">
                            <div className="font-display text-3xl font-bold gradient-text">5+</div>
                            <p className="text-sm text-gray-400">Platforms</p>
                        </div>
                        <div className="w-px h-12 bg-gray-700" />
                        <div className="text-center">
                            <div className="font-display text-3xl font-bold text-green-400">✓</div>
                            <p className="text-sm text-gray-400">Verified</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
