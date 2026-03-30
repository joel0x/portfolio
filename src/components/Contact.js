import React, { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/10 to-transparent" />

      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center relative z-10">
        <div ref={ref} className={`reveal ${isVisible ? 'active' : ''}`}>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-6 block">Contact</span>

          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-8 leading-tight">
            Let's work together
          </h2>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Available for consulting, contract work, and full-time roles in generative AI and production infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:joelmachado.work@gmail.com"
              className="group px-12 py-6 bg-gradient-to-r from-primary-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-500/50 transition-all cursor-hover-target magnetic-btn flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/joelmachado"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-6 glass text-white font-semibold rounded-full hover:glass-strong transition-all cursor-hover-target magnetic-btn flex items-center gap-3 text-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
