import React from 'react';
import useReveal from '../hooks/useReveal';

const services = [
  {
    title: 'AI Infrastructure',
    description:
      'Serverless GPU endpoints on RunPod. Docker containers, REST APIs, and azure kubernetes services.',
    tags: ['RunPod', 'Docker', 'AKS', 'REST APIs'],
  },
  {
    title: 'Web & Mobile Apps',
    description:
      'Full web and mobile apps built end to end. Frontend, backend, payments, and deployment, shipped to real users.',
    tags: ['React', 'Mobile', 'Payments', 'Backend'],
  },
  {
    title: 'AI Video Production',
    description:
      'AI video pipelines for film and OTT. Generated shots that keep characters consistent, AI lip-sync for multi-language dubbing, and automation that renders thousands of clips in a single run.',
    tags: ['LipSync', 'Character LoRA', 'Bulk Gen'],
  },
  {
    title: '3D Scene Building',
    description:
      'Turn concept images into complete 3D environments. Full pipelines for VFX teams working on film and commercial projects.',
    tags: ['Image-to-3D', 'Scenes', 'VFX'],
  },
];

const Tags = ({ tags, dark }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((t) => (
      <span
        key={t}
        className={`font-mono text-[11px] tracking-[0.06em] uppercase px-3 py-1.5 rounded-full border ${
          dark ? 'border-paper-700 text-paper-200' : 'border-paper-200 text-paper-700'
        }`}
      >
        {t}
      </span>
    ))}
  </div>
);

const WhatIDo = () => {
  const [headRef, headIn] = useReveal();
  const [bodyRef, bodyIn] = useReveal();

  return (
    <section id="what" className="py-20 md:py-32 lg:py-40">
      <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
        <div ref={headRef} className={`reveal ${headIn ? 'in' : ''} mb-10 md:mb-16`}>
          <span className="eyebrow block mb-4">Services</span>
          <h2
            className="font-serif font-light leading-[1.05] tracking-[-0.025em] text-ink"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontVariationSettings: '"opsz" 96, "SOFT" 50',
            }}
          >
            What I can do for you
          </h2>
        </div>

        <div ref={bodyRef} className={`reveal ${bodyIn ? 'in' : ''} border-b border-paper-200`}>
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative border-t border-paper-200 grid lg:grid-cols-12 gap-x-10 gap-y-4 py-8 md:py-10 lg:py-12"
            >
              <div className="absolute -top-px left-0 right-0 h-px bg-copper-500 scale-x-0 origin-left transition-transform duration-700 ease-editorial group-hover:scale-x-100" />
              <div className="lg:col-span-6 flex items-baseline gap-4 md:gap-6">
                <h3
                  className="font-serif text-ink leading-[1.1] tracking-[-0.02em]"
                  style={{
                    fontSize: 'clamp(26px, 3.4vw, 48px)',
                    fontVariationSettings: '"opsz" 96, "SOFT" 50',
                    fontWeight: 300,
                  }}
                >
                  {s.title}
                </h3>
              </div>
              <div className="lg:col-span-6 lg:pt-2">
                <p className="text-[15px] md:text-base leading-[1.65] text-paper-500 mb-5 max-w-[52ch]">
                  {s.description}
                </p>
                <Tags tags={s.tags} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
