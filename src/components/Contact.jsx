import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center px-[5%] py-24">
            <div className="section-header mb-16">
                <h2 className="text-5xl font-bold mb-2">Get In <span className="text-gradient">Touch</span></h2>
                <div className="w-16 h-1 bg-accent-gradient rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
                <div>
                    <h3 className="text-4xl font-bold mb-6 leading-tight">Let's build <br /><span className="text-gradient">something great</span></h3>
                    <p className="text-text-muted text-lg mb-12 leading-relaxed max-w-md">
                        Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities and innovative ideas.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-center gap-6">
                            <div className="glass w-16 h-16 flex items-center justify-center rounded-2xl text-2xl shadow-lg shadow-primary/10">
                                📧
                            </div>
                            <div>
                                <p className="text-text-muted text-sm uppercase tracking-widest font-bold">Email Me</p>
                                <p className="text-lg font-semibold">er.bombdrbk@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="glass w-16 h-16 flex items-center justify-center rounded-2xl text-2xl shadow-lg shadow-primary/10">
                                📍
                            </div>
                            <div>
                                <p className="text-text-muted text-sm uppercase tracking-widest font-bold">Location</p>
                                <p className="text-lg font-semibold">Kathmandu, Nepal</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
                    <form className="relative z-10 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-muted ml-4 uppercase tracking-wider">Your Name</label>
                                <input type="text" placeholder="John Doe" className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-text-muted ml-4 uppercase tracking-wider">Email Address</label>
                                <input type="email" placeholder="john@example.com" className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-muted ml-4 uppercase tracking-wider">Your Message</label>
                            <textarea rows="5" placeholder="Tell me about your project..." className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors resize-none"></textarea>
                        </div>
                        <button className="btn-primary w-full py-5 text-lg shadow-xl shadow-primary/20">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
