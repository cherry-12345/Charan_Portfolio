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
                    {/* Gradient Orbs */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px] animate-floating-glow" />
                    <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-neon-pink/15 rounded-full blur-[100px] animate-float-slow" />
                    <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-purple-500/15 rounded-full blur-[100px] animate-float-delayed" />
                    
                    {/* Noise Texture */}
                    <div className="noise-overlay" />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 retro-grid opacity-[0.02]" />
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
