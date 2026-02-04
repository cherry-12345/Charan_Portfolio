import ScrollProgress from '@/components/ScrollProgress';
import PageLoader from '@/components/PageLoader';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Timeline from '@/components/Timeline';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <PageLoader />
            <ScrollProgress />
            <main className="relative overflow-hidden">
                {/* Premium Animated Background */}
                <div className="fixed inset-0 pointer-events-none">
                    {/* Gradient Orbs - Reduced blur for better performance */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/15 rounded-full blur-[80px] animate-floating-glow" />
                    <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-neon-pink/10 rounded-full blur-[80px] animate-float-slow" />
                    <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-purple-500/10 rounded-full blur-[80px] animate-float-delayed" />
                    
                    {/* Noise Texture */}
                    <div className="noise-overlay" />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 retro-grid opacity-[0.015]" />
                </div>

                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Timeline />
                <Certifications />
                <Contact />
                <Footer />
            </main>
        </>
    );
}
