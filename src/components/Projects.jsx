import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "CloudScale Platform",
            desc: "A high-performance cloud monitoring dashboard with real-time metrics and alerts.",
            tags: ["React", "Go", "Kubernetes"],
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "AI Analysis Tool",
            desc: "Leveraging LLMs to perform automated code reviews and security audits.",
            tags: ["Python", "FastAPI", "OpenAI"],
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
            link: "#"
        },
        {
            title: "E-Commerce Engine",
            desc: "A headless commerce solution built for scalability and lightning-fast performance.",
            tags: ["Next.js", "GraphQL", "Stripe"],
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            link: "#"
        }
    ];

    return (
        <section id="projects" className="min-h-screen flex flex-col justify-center px-[5%] py-24 bg-background-light/30">
            <div className="section-header mb-16">
                <h2 className="text-5xl font-bold mb-2">Recent <span className="text-gradient">Projects</span></h2>
                <div className="w-16 h-1 bg-accent-gradient rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((proj, idx) => (
                    <div key={idx} className="glass-card flex flex-col rounded-[2rem] overflow-hidden group">
                        <div className="h-60 overflow-hidden relative">
                            <img
                                src={proj.image}
                                alt={proj.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent"></div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex gap-3 mb-4 flex-wrap">
                                {proj.tags.map((tag, tIdx) => (
                                    <span key={tIdx} className="text-[10px] tracking-widest uppercase font-bold text-primary">{tag}</span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{proj.title}</h3>
                            <p className="text-text-muted mb-8 line-clamp-3 leading-relaxed">{proj.desc}</p>
                            <div className="mt-auto">
                                <a href={proj.link} className="text-gradient font-bold inline-flex items-center gap-2 hover:gap-4 transition-all duration-300">
                                    View Full Case Study <span>➜</span>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
