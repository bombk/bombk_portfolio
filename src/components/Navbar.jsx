import React from 'react';

const Navbar = ({ scrolled }) => {
    return (
        <nav className={`fixed top-0 w-full px-[5%] py-5 flex justify-between items-center z-[1000] transition-all duration-300 ${scrolled ? 'bg-background-dark/80 backdrop-blur-md py-4' : ''}`}>
            <div className="logo cursor-pointer" onClick={() => window.location.href = '#'}>
                <h2 className="font-bold text-3xl text-text-main flex items-center gap-2">
                    <span className="text-primary font-mono select-none">{"</>"}</span>
                    BBK
                </h2>
            </div>
            <ul className="hidden md:flex gap-8 list-none">
                <li><a href="#home" className="text-text-muted hover:text-text-main transition-colors duration-300 font-medium">Home</a></li>
                <li><a href="#about" className="text-text-muted hover:text-text-main transition-colors duration-300 font-medium">About</a></li>
                <li><a href="#skills" className="text-text-muted hover:text-text-main transition-colors duration-300 font-medium">Skills</a></li>
                <li><a href="#projects" className="text-text-muted hover:text-text-main transition-colors duration-300 font-medium">Projects</a></li>
                <li><a href="#contact" className="text-text-muted hover:text-text-main transition-colors duration-300 font-medium">Contact</a></li>
            </ul>
            <div className="nav-cta">
                <button className="btn-primary" onClick={() => window.location.href = '#contact'}>Hire Me</button>
            </div>
        </nav>
    );
};

export default Navbar;
