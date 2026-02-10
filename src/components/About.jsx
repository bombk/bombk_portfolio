import React from 'react';

const About = () => {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center px-[5%] py-24 bg-background-light/30">
            <div className="section-header mb-16">
                <h2 className="text-5xl font-bold mb-2">About <span className="text-gradient">Me</span></h2>
                <div className="w-16 h-1 bg-accent-gradient rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative group">
                    <div className="absolute -inset-4 bg-primary/20 blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-none"></div>
                    <img
                        src="/profile.jpg"
                        alt="Er. Bom Bahadur BK"
                        className="relative w-full aspect-[4/5] object-cover rounded-none border border-primary/20 shadow-2xl transition-all duration-500"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-primary/40 group-hover:border-primary transition-colors"></div>
                    <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors"></div>
                </div>

                <div className="about-text">
                    <h3 className="text-3xl font-semibold mb-6">Professional <span className="text-gradient">IT Engineer</span></h3>
                    <p className="text-text-muted text-lg mb-6 leading-relaxed">
                        I am a dedicated IT Engineer with a strong foundation in computer science and a passion for modern web technologies. My journey in tech is driven by a constant desire to learn and implement cutting-edge solutions.
                    </p>
                    <p className="text-text-muted text-lg mb-10 leading-relaxed">
                        With expertise in full-stack development and a keen interest in DevOps, I bridge the gap between robust backend systems and intuitive frontend experiences. I believe in writing clean, maintainable code and building products that make a difference.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <p className="text-lg"><span className="text-primary font-bold mr-2">Location:</span> Kathmandu, Nepal</p>
                            <p className="text-lg"><span className="text-primary font-bold mr-2">Email:</span> er.bombdrbk@gmail.com</p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-lg"><span className="text-primary font-bold mr-2">Freelance:</span> Available</p>
                            <p className="text-lg"><span className="text-primary font-bold mr-2">Interests:</span> AI, Web3, Cloud</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
