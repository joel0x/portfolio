import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = ['home', 'work', 'contact'];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 100 && r.bottom >= 100;
      });
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[padding,border-color] duration-500 ease-editorial border-b bg-bg/70 backdrop-blur-md ${
        scrolled ? 'py-4 border-paper-200' : 'py-6 border-transparent'
      }`}
    >
      <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="group"
            aria-label="Joel Machado"
          />


          <div className="hidden md:flex items-center gap-9 text-sm">
            {['work', 'contact'].map((id) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className={`relative capitalize transition-colors duration-200 ease-editorial group ${
                    isActive ? 'text-ink' : 'text-paper-500 hover:text-ink'
                  }`}
                >
                  {id === 'work' ? 'Work' : 'Contact'}
                  <span
                    className={`absolute left-0 -bottom-1 h-px bg-copper-500 transition-[width] duration-300 ease-editorial ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <a
            href="mailto:joelmachado.work@gmail.com"
            className="hidden md:inline-block text-[13px] px-4 py-2 border border-ink rounded-full transition-colors duration-300 ease-editorial hover:bg-ink hover:text-bg"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
