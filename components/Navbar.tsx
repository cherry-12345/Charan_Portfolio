'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MenuIcon, CloseIcon } from './icons';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });

            if (currentSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'frosted-glass'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-20">
                    {/* Logo with Ultra Glow */}
                    <Link
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('#home');
                        }}
                        className="relative group"
                    >
                        <div className="absolute -inset-2 holographic-card opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                        <div className="relative liquid-glass px-4 py-2 rounded-xl">
                            <span className="font-display text-2xl font-bold gradient-text glow-cyan hover:scale-110 transition-transform inline-block">
                                CK
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Ultra Premium */}
                    <div className="hidden md:flex items-center gap-1 px-2 py-2 ultra-glass rounded-full animate-glass-morph">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`relative px-4 py-2 font-display text-sm font-medium transition-all duration-300 rounded-full group ${activeSection === item.href.substring(1)
                                        ? 'text-white'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {activeSection === item.href.substring(1) && (
                                    <div className="absolute inset-0 chrome-card rounded-full animate-chrome-reflect" />
                                )}
                                <span className="relative z-10">{item.name}</span>
                                {activeSection === item.href.substring(1) && (
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-neon-cyan to-neon-pink rounded-full shadow-neon" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Premium */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden relative group text-white p-3 hover:text-neon-cyan transition-colors"
                        aria-label="Toggle menu"
                    >
                        <div className="absolute inset-0 ultra-glass rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span className="relative z-10">
                            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Ultra Premium Glassmorphism */}
            {isMobileMenuOpen && (
                <div className="md:hidden ultra-glass animate-slide-down border-t border-white/10">
                    <div className="px-4 py-6 space-y-2">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                style={{ animationDelay: `${index * 0.05}s` }}
                                className={`block px-5 py-3 font-display text-lg font-medium rounded-xl transition-all duration-300 animate-fade-in-up group ${activeSection === item.href.substring(1)
                                        ? 'text-white'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {activeSection === item.href.substring(1) && (
                                    <div className="absolute inset-0 chrome-card rounded-xl animate-chrome-reflect" />
                                )}
                                <span className="relative flex items-center gap-3">
                                    <span className={`w-2 h-2 rounded-full ${activeSection === item.href.substring(1) ? 'bg-neon-cyan shadow-neon' : 'bg-gray-600'} transition-all`} />
                                    {item.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
