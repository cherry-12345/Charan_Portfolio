import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                black: "#000000",
                white: "#FFFFFF",
                neon: {
                    cyan: "#00F5D4",
                    pink: "#F72585",
                    purple: "#A855F7",
                    blue: "#3B82F6",
                    green: "#10B981",
                },
                gray: {
                    950: "#050505",
                    900: "#0a0a0a",
                    850: "#121212",
                    800: "#1a1a1a",
                    750: "#222222",
                    700: "#2a2a2a",
                    600: "#3a3a3a",
                    500: "#5a5a5a",
                    400: "#8a8a8a",
                    300: "#b0b0b0",
                    200: "#d0d0d0",
                },
                glass: {
                    light: "rgba(255, 255, 255, 0.05)",
                    DEFAULT: "rgba(255, 255, 255, 0.03)",
                    dark: "rgba(0, 0, 0, 0.3)",
                    cyan: "rgba(0, 245, 212, 0.1)",
                    pink: "rgba(247, 37, 133, 0.1)",
                    purple: "rgba(168, 85, 247, 0.1)",
                },
            },
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
                display: ["Space Grotesk", "system-ui", "sans-serif"],
            },
            animation: {
                "glow": "glow 2s ease-in-out infinite alternate",
                "slide-up": "slideUp 0.6s ease-out",
                "slide-down": "slideDown 0.6s ease-out",
                "fade-in": "fadeIn 0.8s ease-out",
                "fade-in-up": "fadeInUp 0.8s ease-out",
                "float": "float 6s ease-in-out infinite",
                "float-slow": "float 8s ease-in-out infinite",
                "float-delayed": "float 6s ease-in-out infinite 3s",
                "tilt": "tilt 10s ease-in-out infinite",
                "spin-slow": "spin 8s linear infinite",
                "spin-slower": "spin 20s linear infinite",
                "pulse-glow": "pulseGlow 2s ease-in-out infinite",
                "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
                "gradient-x": "gradientX 3s ease infinite",
                "gradient-xy": "gradientXY 5s ease infinite",
                "shimmer": "shimmer 2.5s linear infinite",
                "shimmer-slow": "shimmer 4s linear infinite",
                "bounce-slow": "bounce 3s infinite",
                "wiggle": "wiggle 1s ease-in-out infinite",
                "glow-pulse": "glowPulse 2s ease-in-out infinite",
                "float-rotate": "floatRotate 8s ease-in-out infinite",
                "scale-pulse": "scalePulse 2s ease-in-out infinite",
                "border-beam": "borderBeam 2s linear infinite",
            },
            keyframes: {
                glow: {
                    "0%": {
                        boxShadow: "0 0 5px #00F5D4, 0 0 10px #00F5D4, 0 0 15px #00F5D4",
                    },
                    "100%": {
                        boxShadow: "0 0 10px #00F5D4, 0 0 20px #00F5D4, 0 0 30px #00F5D4",
                    },
                },
                slideUp: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                slideDown: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-20px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                fadeInUp: {
                    "0%": { 
                        opacity: "0",
                        transform: "translateY(30px)",
                    },
                    "100%": { 
                        opacity: "1",
                        transform: "translateY(0)",
                    },
                },
                float: {
                    "0%, 100%": {
                        transform: "translateY(0px) rotate(0deg)",
                    },
                    "50%": {
                        transform: "translateY(-20px) rotate(2deg)",
                    },
                },
                tilt: {
                    "0%, 100%": {
                        transform: "rotateY(-5deg) rotateX(2deg)",
                    },
                    "50%": {
                        transform: "rotateY(5deg) rotateX(-2deg)",
                    },
                },
                pulseGlow: {
                    "0%, 100%": {
                        boxShadow: "0 0 20px rgba(0, 245, 212, 0.3)",
                    },
                    "50%": {
                        boxShadow: "0 0 40px rgba(0, 245, 212, 0.6), 0 0 60px rgba(247, 37, 133, 0.3)",
                    },
                },
                gradientX: {
                    "0%, 100%": {
                        backgroundPosition: "0% 50%",
                    },
                    "50%": {
                        backgroundPosition: "100% 50%",
                    },
                },
                shimmer: {
                    "0%": {
                        backgroundPosition: "-200% 0",
                    },
                    "100%": {
                        backgroundPosition: "200% 0",
                    },
                },
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
                glowPulse: {
                    "0%, 100%": {
                        boxShadow: "0 0 20px rgba(0, 245, 212, 0.4)",
                        opacity: "1",
                    },
                    "50%": {
                        boxShadow: "0 0 40px rgba(0, 245, 212, 0.8), 0 0 60px rgba(247, 37, 133, 0.4)",
                        opacity: "0.9",
                    },
                },
                floatRotate: {
                    "0%, 100%": {
                        transform: "translateY(0px) rotate(0deg)",
                    },
                    "50%": {
                        transform: "translateY(-30px) rotate(180deg)",
                    },
                },
                scalePulse: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                },
                gradientXY: {
                    "0%, 100%": {
                        backgroundPosition: "0% 50%",
                    },
                    "25%": {
                        backgroundPosition: "100% 50%",
                    },
                    "50%": {
                        backgroundPosition: "100% 100%",
                    },
                    "75%": {
                        backgroundPosition: "0% 100%",
                    },
                },
                borderBeam: {
                    "0%": { offsetDistance: "0%" },
                    "100%": { offsetDistance: "100%" },
                },
            },
            boxShadow: {
                "neon": "0 0 20px rgba(0, 245, 212, 0.5), 0 0 40px rgba(0, 245, 212, 0.3)",
                "neon-pink": "0 0 20px rgba(247, 37, 133, 0.5), 0 0 40px rgba(247, 37, 133, 0.3)",
                "neon-purple": "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)",
                "neon-soft": "0 0 30px rgba(0, 245, 212, 0.15)",
                "neon-strong": "0 0 40px rgba(0, 245, 212, 0.6), 0 0 80px rgba(0, 245, 212, 0.3)",
                "glow": "0 0 40px rgba(0, 245, 212, 0.4), 0 0 80px rgba(247, 37, 133, 0.2)",
                "glow-lg": "0 0 60px rgba(0, 245, 212, 0.5), 0 0 120px rgba(247, 37, 133, 0.3)",
                "3d": "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 0 0 rgba(255, 255, 255, 0.05)",
                "inner-glow": "inset 0 0 20px rgba(0, 245, 212, 0.2)",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "shimmer": "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
                "glass-gradient": "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
                "glass-shine": "linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)",
            },
            backdropBlur: {
                xs: "2px",
                "3xl": "64px",
            },
            backdropSaturate: {
                120: "1.2",
                150: "1.5",
            },
            transitionDuration: {
                "400": "400ms",
                "600": "600ms",
            },
            scale: {
                "102": "1.02",
                "103": "1.03",
            },
            blur: {
                xs: "2px",
                "4xl": "72px",
                "5xl": "96px",
            },
        },
    },
    plugins: [],
};

export default config;