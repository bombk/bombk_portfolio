import React from 'react';

const Skills = () => {
    const skillCategories = [
          {
            title: "DevOps",
            skills: ["Linux","Kubernetes","Docker","Jenkins", "AWS", "CI/CD", "Windows Server", "Nginx", "Apache"]
        },
         {
            title: "Backend",
            skills: ["Python","Laravel","Django", "PostgreSQL", "Oracle DB", "MongoDB", "MySQL", "Redis"]
        },
        {
            title: "Frontend",
            skills: ["React", "Bootstrap", "TypeScript", "Tailwind CSS", "Next.js"]
        }
       
      
    ];

    return (
        <section id="skills" className="min-h-screen flex flex-col justify-center px-[5%] py-24">
            <div className="section-header mb-16">
                <h2 className="text-5xl font-bold mb-2">Technical <span className="text-gradient">Expertise</span></h2>
                <div className="w-16 h-1 bg-accent-gradient rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skillCategories.map((cat, idx) => (
                    <div key={idx} className="glass-card p-10 rounded-[2rem] hover:border-primary/50 transition-colors">
                        <h3 className="text-2xl font-bold mb-6 text-primary">{cat.title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {cat.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="glass px-4 py-2 text-sm rounded-full font-medium text-text-main/80">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
