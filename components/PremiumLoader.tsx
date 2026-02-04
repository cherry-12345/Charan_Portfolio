'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PremiumLoaderProps {
    onComplete?: () => void;
    duration?: number;
}

export default function PremiumLoader({ onComplete, duration = 3000 }: PremiumLoaderProps) {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        onComplete?.();
                    }, 500);
                    return 100;
                }
                return prev + (100 / (duration / 50));
            });
        }, 50);

        return () => clearInterval(interval);
    }, [duration, onComplete]);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
                >
                    {/* Premium Background */}
                    <div className="absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
                    </div>

                    {/* Particle System */}
                    <div className="absolute inset-0 pointer-events-none">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-neon-cyan rounded-full"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                }}
                                animate={{
                                    y: [0, -30, 0],
                                    opacity: [0.3, 1, 0.3],
                                    scale: [1, 1.5, 1],
                                }}
                                transition={{
                                    duration: 2 + Math.random() * 2,
                                    repeat: Infinity,
                                    delay: Math.random() * 2,
                                }}
                            />
                        ))}
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 text-center">
                        {/* Logo */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative mb-8"
                        >
                            <div className="absolute -inset-4 holographic-card opacity-60 animate-aurora" />
                            <div className="relative w-24 h-24 mx-auto ultra-glass rounded-2xl flex items-center justify-center">
                                <span className="font-display text-4xl font-bold gradient-text-animated animate-neon-pulse">
                                    CK
                                </span>
                            </div>
                        </motion.div>

                        {/* Loading Text */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mb-8"
                        >
                            <h1 className="font-display text-2xl md:text-3xl font-bold gradient-text-animated mb-2">
                                Charan Katkam
                            </h1>
                            <p className="text-gray-400 text-sm md:text-base">
                                AI & ML Engineer • Full-Stack Developer
                            </p>
                        </motion.div>

                        {/* Progress Bar */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="relative w-80 max-w-full mx-auto"
                        >
                            {/* Progress Container */}
                            <div className="relative h-2 ultra-glass rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink rounded-full relative overflow-hidden"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                    <div className="absolute inset-0 bg-white/30 animate-shimmer-slow" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-liquid-flow" />
                                </motion.div>
                            </div>

                            {/* Progress Text */}
                            <motion.div
                                className="flex justify-between items-center mt-3 text-sm text-gray-400"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.5 }}
                            >
                                <span>Loading Portfolio</span>
                                <span className="font-mono">{Math.round(progress)}%</span>
                            </motion.div>
                        </motion.div>

                        {/* Loading States */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                            className="mt-6 text-xs text-gray-500"
                        >
                            {progress < 30 && "Initializing AI systems..."}
                            {progress >= 30 && progress < 60 && "Loading projects..."}
                            {progress >= 60 && progress < 90 && "Preparing experience..."}
                            {progress >= 90 && "Almost ready..."}
                        </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Rotating Rings */}
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-neon-cyan/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-neon-pink/20 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        />
                        <motion.div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-purple-500/20 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}