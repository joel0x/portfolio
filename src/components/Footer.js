import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-ink text-paper-300 py-10 border-t border-paper-700">
      <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-copper-400" />
            <span className="text-paper-300">© 2026 Joel Machado. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group relative font-mono text-[11px] tracking-[0.18em] uppercase text-paper-400 hover:text-copper-400 transition-colors duration-200 ease-editorial"
          >
            Back to Top ↑
            <span className="absolute left-0 -bottom-1 h-px w-0 bg-copper-400 transition-[width] duration-300 ease-editorial group-hover:w-full" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
