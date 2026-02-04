import React from 'react';
import { GitHubIcon, LinkedInIcon, EmailIcon } from './icons';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/cherry-12345',
        icon: GitHubIcon,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/charan-katkam-160135259/',
        icon: LinkedInIcon,
    },
    {
        name: 'Email',
        href: 'mailto:charancherrykatkam@gmail.com',
        icon: EmailIcon,
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-black border-t border-gray-800 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-neon-cyan/5 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-12 grid md:grid-cols-3 gap-8 items-center">
                    {/* Logo & Tagline */}
                    <div className="text-center md:text-left">
                        <a href="#home" className="inline-block font-display text-3xl font-bold gradient-text mb-3">
                            CK
                        </a>
                        <p className="text-gray-400 text-sm max-w-xs mx-auto md:mx-0">
                            Building intelligent systems with <span className="text-neon-cyan">AI</span> & <span className="text-neon-pink">ML</span>
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-400 hover:text-neon-cyan text-sm font-medium transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-end gap-4">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative p-3 rounded-xl bg-white/5 border border-gray-800 hover:border-neon-cyan/50 transition-all duration-300"
                                aria-label={social.name}
                            >
                                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                                <div className="absolute inset-0 rounded-xl bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

                {/* Bottom Bar */}
                <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {currentYear} <span className="text-white">Charan Katkam</span>. All rights reserved.
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Made with</span>
                        <span className="text-red-500 animate-pulse">❤️</span>
                        <span>and</span>
                        <span className="text-neon-cyan">Next.js</span>
                    </div>

                    <a
                        href="/resume.pdf"
                        download
                        className="text-sm text-neon-cyan hover:text-white transition-colors font-medium"
                    >
                        Download Resume →
                    </a>
                </div>
            </div>

            {/* Decorative Bottom Line */}
            <div className="h-1 bg-gradient-to-r from-neon-cyan via-purple-500 to-neon-pink" />
        </footer>
    );
}
