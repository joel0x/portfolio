import React, { useEffect, useState } from 'react';

const sections = [
  { name: 'Hero' },
  { name: 'Metrics' },
  { name: 'Work' },
  { name: 'Skills' },
  { name: 'Contact' },
];

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = winPx ? (scrollPx / winPx) * 100 : 0;
      setProgress(pct);
      setActive(Math.min(Math.floor((pct / 100) * sections.length), sections.length - 1));
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-px bg-paper-200">
        <div
          className="h-full bg-copper-500 transition-[width] duration-300 ease-editorial"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="fixed top-4 right-6 z-[60] hidden lg:flex items-center gap-2">
        {sections.map((s, i) => (
          <div key={s.name} className="relative group">
            <div
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ease-editorial ${
                i <= active ? 'bg-copper-500 scale-100' : 'bg-paper-300 scale-75'
              }`}
            />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-[0.12em] uppercase text-paper-500 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {s.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ScrollProgress;
