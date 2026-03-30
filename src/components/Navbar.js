import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ['home', 'work', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-900/80 backdrop-blur-xl py-4 shadow-lg shadow-black/20' : 'py-6'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold cursor-hover-target group"
          >
            {/* <span className="text-gradient-purple group-hover:opacity-80 transition-opacity">JM</span> */}
          </button>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('work')}
              className={`relative text-sm font-medium transition-all duration-300 ${
                activeSection === 'work'
                  ? 'text-white scale-105'
                  : 'text-gray-400 hover:text-white hover:scale-105'
              }`}
            >
              Work
              {activeSection === 'work' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" />
              )}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`relative text-sm font-medium transition-all duration-300 ${
                activeSection === 'contact'
                  ? 'text-white scale-105'
                  : 'text-gray-400 hover:text-white hover:scale-105'
              }`}
            >
              Contact
              {activeSection === 'contact' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full" />
              )}
            </button>
          </div>

          {/* CTA */}
          <a
            href="mailto:joelmachado.work@gmail.com"
            className="hidden md:block px-6 py-3 bg-gradient-to-r from-primary-500 to-purple-500 text-white text-sm font-semibold rounded-full hover:shadow-xl hover:shadow-primary-500/50 hover:scale-105 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
