import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="gradient-mesh" />
      <div className="grain" />

      {/* Content */}
      <div
        className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-12 md:pt-20"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full mb-4 md:mb-12 opacity-0 animate-fade-in">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-xs font-medium text-gray-300 tracking-wide">Available for Work</span>
          </div>

          {/* Main Heading with Creative Typography */}
          <h1 className="font-display font-black leading-[0.9] mb-4 md:mb-12">
            <div className="text-5xl md:text-7xl lg:text-8xl text-white opacity-0 animate-slide-up" style={{ fontFamily: "'Rush Zone', sans-serif" }}>
              Joel Machado
            </div>
          </h1>

          {/* Subtitle */}
          <div className="max-w-3xl mx-auto mb-6 md:mb-12 opacity-0 animate-slide-up stagger-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-gradient-purple">
              AI Engineer
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              I build AI systems for film production, fashion e-commerce, and streaming platforms—from custom diffusion models to serverless GPU infrastructure that scales.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 animate-slide-up stagger-3">
            <button
              onClick={() => scrollToSection('work')}
              className="group px-10 py-5 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all cursor-hover-target magnetic-btn flex items-center gap-3"
            >
              View Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-10 py-5 glass text-white font-semibold rounded-full hover:glass-strong transition-all cursor-hover-target magnetic-btn"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
