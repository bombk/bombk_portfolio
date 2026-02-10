import React, { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const phrases = [
        "IT Engineer",
        "Full Stack Developer",
        "DevOps Enthusiast",
        "Problem Solver"
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % phrases.length;
            const fullText = phrases[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            setTypingSpeed(isDeleting ? 80 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed]);

    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-[5%] pt-24 pb-24 relative overflow-hidden matrix-bg">
            <div className="scanline"></div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10 w-full">
                <div className="hero-content relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 mb-6 neon-pulse">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                        <span className="text-[10px] font-bold tracking-widest text-primary uppercase">System.initialize_portfolio()</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none mb-8">
                        <span className="text-white opacity-90 block mb-2 text-2xl md:text-3xl font-normal">Hi, I am</span>
                        <span className="text-gradient drop-shadow-[0_0_15px_rgba(0,255,0,0.3)]">Er. Bom Bahadur BK</span>
                    </h1>

                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px w-12 bg-primary/30"></div>
                        <h2 className="text-2xl md:text-3xl font-medium text-text-muted">
                            a <span className="text-text-main border-r-2 border-primary pr-2 animate-pulse">{text}</span>
                        </h2>
                    </div>

                    <p className="text-lg text-text-muted/80 max-w-xl mb-12 leading-relaxed font-mono">
                        {">"} Passionate about building <span className="text-primary/90 underline decoration-primary/30 underline-offset-4">scalable web applications</span> and optimizing developer workflows.
                        Turning complex problems into elegant, efficient solutions.
                    </p>

                    <div className="flex flex-wrap gap-6">
                        <button className="btn-primary group">
                            <span className="flex items-center gap-2">
                                [ Execute_View_Projects ]
                            </span>
                        </button>
                        <button className="glass px-8 py-3 text-primary border-primary/30 hover:border-primary transition-all duration-300 font-bold uppercase tracking-widest text-sm relative group overflow-hidden">
                            <span className="relative z-10">Download_CV</span>
                            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full bg-primary/5 transition-all duration-300"></div>
                        </button>
                    </div>

                    <div className="mt-16 flex gap-8 items-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                        <div className="text-[10px] font-mono tracking-tighter leading-tight uppercase">
                            Environment: <br /> <span className="text-white">Production</span>
                        </div>
                        <div className="w-px h-8 bg-primary/20"></div>
                        <div className="text-[10px] font-mono tracking-tighter leading-tight uppercase">
                            Uptime: <br /> <span className="text-white">99.99%</span>
                        </div>
                        <div className="w-px h-8 bg-primary/20"></div>
                        <div className="text-[10px] font-mono tracking-tighter leading-tight uppercase">
                            OS: <br /> <span className="text-white">Neon-V1.0.1</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image hidden md:flex justify-end items-center relative z-10">
                    <div className="glass-card p-2 group max-w-lg relative overflow-hidden">
                        {/* Decorative neon corners */}
                        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>

                        <div className="relative overflow-hidden aspect-[3/4] bg-black/40">
                            <div className="absolute inset-0 bg-primary/5 mix-blend-overlay z-10 pointer-events-none"></div>
                            <img
                                src="/profile.jpg"
                                alt="Er. Bom Bahadur BK"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 drop-shadow-[0_0_20px_rgba(0,255,0,0.2)]"
                            />

                            {/* Card Tech Metadata */}
                            <div className="absolute top-4 right-4 z-20 font-mono text-[8px] text-primary/80 uppercase tracking-widest flex flex-col items-end gap-1">
                                <span className="bg-black/60 px-2 py-0.5 backdrop-blur-sm border border-primary/20">[ SYSTEM: ACTIVE ]</span>
                                <span className="bg-black/60 px-2 py-0.5 backdrop-blur-sm border border-primary/20">ROOT_ACCESS</span>
                            </div>

                            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                                <div className="w-1.5 h-1.5 bg-primary animate-pulse"></div>
                                <div className="w-1.5 h-1.5 bg-primary/40"></div>
                                <div className="w-1.5 h-1.5 bg-primary/40"></div>
                            </div>
                        </div>
                    </div>
                    {/* Floating decoration squares */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-primary/5 -z-10 rotate-12 group-hover:rotate-45 transition-transform duration-1000"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/5 -z-10 -rotate-12 group-hover:-rotate-45 transition-transform duration-1000"></div>
                </div>
            </div>

            {/* Bottom edge effect */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background-dark to-transparent z-20"></div>
        </section>
    );
};

export default Hero;
