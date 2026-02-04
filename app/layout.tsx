import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
    title: "Charan Katkam | AI & Machine Learning Engineer",
    description: "Computer Science undergraduate specializing in NLP, supervised learning, and AI-driven automation. Building intelligent systems that solve real engineering problems.",
    keywords: ["AI", "Machine Learning", "NLP", "Full Stack Developer", "Next.js", "Python", "TensorFlow", "PyTorch"],
    authors: [{ name: "Charan Katkam" }],
    openGraph: {
        title: "Charan Katkam | AI & Machine Learning Engineer",
        description: "Computer Science undergraduate specializing in NLP, supervised learning, and AI-driven automation.",
        type: "website",
        locale: "en_US",
        siteName: "Charan Katkam Portfolio",
    },
    twitter: {
        card: "summary_large_image",
        title: "Charan Katkam | AI & Machine Learning Engineer",
        description: "Building intelligent systems with AI, ML, and modern web technologies.",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="min-h-screen cursor-none">
                <CustomCursor />
                {children}
            </body>
        </html>
    );
}
