'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    id: string;
    className?: string;
}

export default function SectionWrapper({ children, id, className = '' }: SectionWrapperProps) {
    const { scrollYProgress } = useScroll();

    return (
        <motion.section
            id={id}
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            {children}
        </motion.section>
    );
}
