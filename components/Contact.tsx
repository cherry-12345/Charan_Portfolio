'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { GitHubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from './icons';

export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: <EmailIcon className="w-6 h-6" />,
            label: 'Email',
            value: 'charancherrykatkam@gmail.com',
            href: 'mailto:charancherrykatkam@gmail.com',
            color: 'from-blue-500 to-cyan-500',
        },
        {
            icon: <PhoneIcon className="w-6 h-6" />,
            label: 'Phone',
            value: '+91 96529 47909',
            href: 'tel:+919652947909',
            color: 'from-green-500 to-emerald-500',
        },
        {
            icon: <GitHubIcon className="w-6 h-6" />,
            label: 'GitHub',
            value: 'cherry-12345',
            href: 'https://github.com/cherry-12345',
            color: 'from-gray-500 to-gray-700',
        },
        {
            icon: <LinkedInIcon className="w-6 h-6" />,
            label: 'LinkedIn',
            value: 'Charan Katkam',
            href: 'https://www.linkedin.com/in/charan-katkam-160135259/',
            color: 'from-blue-600 to-blue-800',
        },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section-container relative overflow-hidden" ref={ref}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-neon-cyan/10 via-purple-500/5 to-transparent rounded-full blur-3xl" />
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
                        Get in Touch
                    </motion.span>
                    <h2 className="section-heading gradient-text">Let's Connect</h2>
                    <p className="section-subheading max-w-2xl mx-auto">
                        Open to AI/ML opportunities, collaborations, and interesting projects
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="relative group">
                            {/* Ultra Premium Glow */}
                            <div className="absolute -inset-2 holographic-card opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
                            
                            {/* Form Card - Ultra Glass */}
                            <div className="relative ultra-glass p-8 animate-glass-morph">
                                <h3 className="font-display text-2xl font-bold gradient-text-animated mb-6 animate-neon-pulse">
                                    Send a Message
                                </h3>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-12"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 border border-green-500 flex items-center justify-center">
                                            <span className="text-4xl">✓</span>
                                        </div>
                                        <h4 className="font-display text-xl font-bold text-white mb-2">
                                            Message Sent!
                                        </h4>
                                        <p className="text-gray-400">
                                            Thank you for reaching out. I'll get back to you soon!
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-6 text-neon-cyan hover:text-white transition-colors"
                                        >
                                            Send another message
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                                Your Name
                                            </label>
                                            <div className="relative group">
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-3 chrome-card text-white placeholder-gray-500 focus:outline-none focus:shadow-neon transition-all duration-300"
                                                    placeholder="John Doe"
                                                />
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                                Email Address
                                            </label>
                                            <div className="relative group">
                                                <input
                                                    type="email"
                                                    required
                                                    suppressHydrationWarning
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 chrome-card text-white placeholder-gray-500 focus:outline-none focus:shadow-neon transition-all duration-300"
                                                    placeholder="john@example.com"
                                                />
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">
                                                Message
                                            </label>
                                            <div className="relative group">
                                                <textarea
                                                    required
                                                    rows={4}
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    className="w-full px-4 py-3 chrome-card text-white placeholder-gray-500 focus:outline-none focus:shadow-neon transition-all duration-300 resize-none"
                                                    placeholder="Your message..."
                                                />
                                                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
                                            </div>
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={isSubmitting}
                                            whileHover={{ scale: 1.02, y: -2 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full relative group overflow-hidden disabled:opacity-50"
                                        >
                                            <div className="absolute -inset-1 holographic-card opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative px-8 py-4 font-display font-semibold text-lg ultra-glass">
                                                <span className="relative text-white flex items-center justify-center gap-2">
                                                    {isSubmitting ? (
                                                        <>
                                                            <motion.span
                                                                animate={{ rotate: 360 }}
                                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                                            />
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <motion.span
                                                                animate={{ x: [0, 5, 0] }}
                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                            >
                                                                →
                                                            </motion.span>
                                                        </>
                                                    )}
                                                </span>
                                            </div>
                                        </motion.button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6"
                    >
                        <h3 className="font-display text-2xl font-bold gradient-text-animated mb-6 animate-neon-pulse">
                            Contact Information
                        </h3>

                        {/* Contact Cards - Ultra Premium */}
                        <div className="grid gap-4">
                            {contactInfo.map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                                    whileHover={{ x: 10, scale: 1.02, y: -2 }}
                                    className="group relative"
                                >
                                    <div className="absolute -inset-1 holographic-card opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                                    <div className="relative flex items-center gap-4 p-5 ultra-glass transition-all duration-300">
                                        {/* Icon - Enhanced */}
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-chrome-reflect`}>
                                            {item.icon}
                                        </div>
                                        
                                        {/* Info */}
                                        <div className="flex-grow">
                                            <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                                            <p className="text-white font-medium group-hover:gradient-text-animated transition-all duration-300">
                                                {item.value}
                                            </p>
                                        </div>

                                        {/* Arrow - Enhanced */}
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            className="text-gray-500 group-hover:text-neon-cyan transition-colors text-xl"
                                        >
                                            →
                                        </motion.span>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Card - Ultra Premium */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="relative mt-8 group"
                        >
                            <div className="absolute -inset-1 holographic-card opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                            <div className="relative p-6 ultra-glass animate-depth-float">
                                <div className="flex items-center gap-4">
                                    <div className="text-4xl animate-particle-float">💡</div>
                                    <div>
                                        <h4 className="font-display font-bold gradient-text-animated mb-1">
                                            Let's build something impactful
                                        </h4>
                                        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                            Whether it's an AI project, a full-stack app, or research collaboration
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
