import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 border-t border-white/10 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-sm font-medium text-gray-500">
            © 2026 Joel Machado. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="text-sm font-medium text-gray-500 hover:text-white transition-colors cursor-hover-target link-underline"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
