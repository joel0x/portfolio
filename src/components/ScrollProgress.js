import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { name: 'Hero', color: 'from-blue-500 via-cyan-400' },
    { name: 'Metrics', color: 'from-cyan-400 via-teal-400' },
    { name: 'Work', color: 'from-teal-400 via-green-400' },
    { name: 'Skills', color: 'from-green-400 via-purple-500' },
    { name: 'Contact', color: 'from-purple-500 via-pink-500' }
  ];

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;
      setScrollProgress(scrolled);

      // Calculate active section based on scroll position
      const sectionIndex = Math.min(
        Math.floor((scrolled / 100) * sections.length),
        sections.length - 1
      );
      setActiveSection(sectionIndex);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <>
      {/* Main progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5">
        <div
          className={`h-full bg-gradient-to-r ${sections[activeSection]?.color} to-pink-500 transition-all duration-300 ease-out shadow-lg`}
          style={{
            width: `${scrollProgress}%`,
            boxShadow: '0 0 20px rgba(167, 139, 250, 0.6)'
          }}
        />
      </div>

      {/* Section indicators */}
      <div className="fixed top-4 right-6 z-[60] hidden lg:flex items-center gap-2">
        {sections.map((section, index) => (
          <div key={index} className="relative group">
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index <= activeSection
                  ? 'bg-gradient-to-r from-primary-500 to-purple-500 scale-100'
                  : 'bg-white/20 scale-75'
              }`}
              style={{
                boxShadow: index <= activeSection ? '0 0 10px rgba(167, 139, 250, 0.8)' : 'none'
              }}
            />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 text-xs text-white/60 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {section.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ScrollProgress;
