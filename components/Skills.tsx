'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
    {
        title: 'Programming Languages',
        icon: '💻',
        gradient: 'from-blue-500 to-cyan-500',
        skills: [
            { name: 'Python', level: 95 },
            { name: 'Java', level: 85 },
            { name: 'SQL', level: 80 },
            { name: 'R', level: 60 },
        ],
    },
    {
        title: 'AI & Machine Learning',
        icon: '🤖',
        gradient: 'from-neon-cyan to-green-500',
        skills: [
            { name: 'Scikit-learn', level: 90 },
            { name: 'TensorFlow', level: 85 },
            { name: 'PyTorch', level: 80 },
            { name: 'Pandas', level: 95 },
            { name: 'NumPy', level: 95 },
            { name: 'OpenCV', level: 85 },
            { name: 'NLP Pipelines', level: 88 },
            { name: 'Feature Engineering', level: 85 },
            { name: 'Prompt Engineering', level: 90 },
        ],
    },
    {
        title: 'Web Development',
        icon: '🌐',
        gradient: 'from-purple-500 to-neon-pink',
        skills: [
            { name: 'HTML/CSS', level: 90 },
            { name: 'JavaScript', level: 88 },
            { name: 'React', level: 85 },
            { name: 'Next.js', level: 88 },
            { name: 'Tailwind CSS', level: 92 },
            { name: 'TypeScript', level: 80 },
        ],
    },
    {
        title: 'Tools & Platforms',
        icon: '🛠️',
        gradient: 'from-orange-500 to-red-500',
        skills: [
            { name: 'Git/GitHub', level: 90 },
            { name: 'Jupyter', level: 95 },
            { name: 'MySQL', level: 85 },
            { name: 'VS Code', level: 95 },
            { name: 'Replit', level: 80 },
            { name: 'Bolt', level: 75 },
        ],
    },
];

interface SkillBadgeProps {
    skill: { name: string; level: number };
    index: number;
    gradient: string;
}

const SkillBadge = ({ skill, index, gradient }: SkillBadgeProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative group"
        >
            <div className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300`} />
            <div className="relative px-4 py-3 liquid-glass hover:scale-105 transition-all duration-300 cursor-default overflow-hidden">
                <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                        {skill.name}
                    </span>
                </div>
                {/* Ultra Premium Progress Bar */}
                <div className="h-2 bg-gray-800/50 backdrop-blur-sm rounded-full overflow-hidden border border-gray-700/30 relative">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 + index * 0.05, ease: "easeOut" }}
                        className={`h-full bg-gradient-to-r ${gradient} rounded-full relative overflow-hidden`}
                    >
                        <div className="absolute inset-0 bg-white/30 animate-shimmer-slow" />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-liquid-flow" />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

interface SkillCategoryCardProps {
    category: typeof skillCategories[0];
    index: number;
}

const SkillCategoryCard = ({ category, index }: SkillCategoryCardProps) => {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        setRotateX(((y - centerY) / centerY) * -5);
        setRotateY(((x - centerX) / centerX) * 5);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: 'transform 0.1s ease-out',
            }}
            className="group relative"
        >
            {/* Ultra Premium Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
            
            {/* Ultra Premium Glass Card */}
            <div className="relative liquid-glass overflow-hidden hover:scale-[1.02] transition-all duration-300">
                {/* Holographic Border */}
                <div className="absolute -inset-px holographic-card opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                {/* Header - With Ultra Glossy Effect */}
                <div className="p-6 pb-4 border-b border-white/10 relative">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl shadow-holographic relative overflow-hidden group-hover:scale-110 transition-transform duration-300 animate-chrome-reflect`}>
                            {category.icon}
                            <div className="absolute inset-0 bg-white/20 animate-glass-shine" />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-display text-xl font-bold text-white group-hover:gradient-text-animated transition-all duration-300">
                                {category.title}
                            </h3>
                            <div className="w-full h-px bg-gradient-to-r from-neon-cyan/50 via-purple-500/30 to-neon-pink/50 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    </div>
                </div>
                
                {/* Skills Grid */}
                <div className="p-6 pt-4 grid gap-3">
                    {category.skills.map((skill, skillIndex) => (
                        <SkillBadge
                            key={skill.name}
                            skill={skill}
                            index={skillIndex}
                            gradient={category.gradient}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="skills" className="section-container relative overflow-hidden" ref={ref}>
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon-cyan/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
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
                        className="inline-block px-4 py-2 rounded-full bg-neon-pink/10 border border-neon-pink/30 text-neon-pink text-sm font-medium mb-4"
                    >
                        My Toolkit
                    </motion.span>
                    <h2 className="section-heading gradient-text">Skills & Technologies</h2>
                    <p className="section-subheading max-w-2xl mx-auto">
                        Crafting intelligent solutions with cutting-edge tools and frameworks
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {skillCategories.map((category, index) => (
                        <SkillCategoryCard key={category.title} category={category} index={index} />
                    ))}
                </div>

                {/* Bottom Decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex justify-center mt-16 gap-2"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
                            className="w-2 h-2 rounded-full bg-neon-cyan"
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
