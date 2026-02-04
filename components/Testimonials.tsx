'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        quote: "Charan consistently delivered reliable AI solutions and showed strong ownership of complex automation tasks. His ability to translate requirements into working ML models was impressive.",
        author: "Team Lead",
        company: "SmartBridge",
        role: "AI Development Team",
        avatar: "🧑‍💼",
    },
    {
        quote: "A talented developer with a keen eye for both technical implementation and user experience. The e-commerce platform he built exceeded our performance expectations.",
        author: "Project Stakeholder",
        company: "Abhi Jewels",
        role: "Client",
        avatar: "👨‍💼",
    },
    {
        quote: "His NLP expertise and understanding of the SDLC automation needs made him an invaluable asset to our project. The 30% reduction in QA effort speaks for itself.",
        author: "Senior Developer",
        company: "SmartBridge",
        role: "Mentor",
        avatar: "👩‍💻",
    },
];

interface TestimonialCardProps {
    testimonial: typeof testimonials[0];
    isActive: boolean;
}

const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ 
                opacity: isActive ? 1 : 0.5, 
                scale: isActive ? 1 : 0.85, 
                rotateY: isActive ? 0 : -15,
                x: isActive ? 0 : -50,
            }}
            exit={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
        >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-neon-cyan/20 via-purple-500/20 to-neon-pink/20 rounded-3xl blur-2xl opacity-50" />
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-xl rounded-2xl border border-gray-800 p-8 md:p-10 overflow-hidden">
                {/* Quote Mark */}
                <div className="absolute top-6 left-6 text-8xl text-neon-cyan/10 font-serif leading-none">
                    "
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 italic">
                        "{testimonial.quote}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neon-cyan to-neon-pink flex items-center justify-center text-2xl">
                            {testimonial.avatar}
                        </div>
                        <div>
                            <h4 className="font-display font-bold text-white">{testimonial.author}</h4>
                            <p className="text-sm text-gray-400">
                                <span className="text-neon-cyan">{testimonial.role}</span> at {testimonial.company}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-neon-pink/10 to-transparent rounded-tl-full" />
            </div>
        </motion.div>
    );
};

export default function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-rotate testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;
        
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handleDotClick = (index: number) => {
        setActiveIndex(index);
        setIsAutoPlaying(false);
        // Resume auto-play after 10 seconds
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    return (
        <section className="section-container relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-neon-cyan/5 via-purple-500/5 to-transparent rounded-full" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
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
                        className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-4"
                    >
                        Kind Words
                    </motion.span>
                    <h2 className="section-heading gradient-text">What People Say</h2>
                    <p className="section-subheading max-w-2xl mx-auto">
                        Feedback from colleagues and collaborators
                    </p>
                </motion.div>

                {/* Testimonial Carousel */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <TestimonialCard
                            key={activeIndex}
                            testimonial={testimonials[activeIndex]}
                            isActive={true}
                        />
                    </AnimatePresence>
                </div>

                {/* Navigation Dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex justify-center gap-3 mt-8"
                >
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === activeIndex
                                    ? 'bg-neon-cyan w-8 shadow-neon'
                                    : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </motion.div>

                {/* Progress Bar */}
                <div className="flex justify-center mt-6">
                    <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            key={activeIndex}
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 5, ease: 'linear' }}
                            className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
