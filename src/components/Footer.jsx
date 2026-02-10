import React from 'react';

const Footer = () => {
    return (
        <footer className="py-16 px-[5%] border-t border-white/5 text-center mt-20 relative">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30"></div>

            <div className="mb-10">
                <h2 className="font-bold text-5xl mb-6 flex justify-center items-center gap-2">
                    <span className="text-primary font-mono text-3xl">{"</>"}</span>
                    BBK
                </h2>
                <p className="text-text-muted max-w-md mx-auto leading-relaxed">Building the future of the web, one line at a time. Empowering businesses through elegant code and AI-driven solutions.</p>
            </div>

            <div className="flex justify-center gap-10 mb-12">
                <a href="https://www.linkedin.com/in/bom-bahadur-b-k-1b614a179/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors text-lg font-medium">LinkedIn</a>
                <a href="https://github.com/bombk" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors text-lg font-medium">GitHub</a>
                <a href="https://x.com/bombk" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors text-lg font-medium">Twitter</a>
            </div>

            <div className="text-sm text-text-muted/60 space-y-2">
                <p>&copy; {new Date().getFullYear()} Bom Bahadur BK. All rights reserved.</p>
                <p>Crafted with <span className="text-primary">❤️</span>, React, and Tailwind CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;
