import React from 'react';
import useReveal from '../hooks/useReveal';

const ServiceCard = ({ title, description, number, delay }) => {
  const [ref, shown] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} group relative p-8 lg:p-10 border border-paper-200 bg-paper-50 rounded-sm overflow-hidden transition-colors duration-500 ease-editorial hover:bg-paper-100`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-copper-500 transform scale-x-0 origin-left transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
      <span className="block font-mono text-xs tracking-[0.12em] text-copper-500 mb-5">
        {number}
      </span>
      <h3
        className="font-serif font-normal leading-[1.2] tracking-[-0.015em] text-ink mb-3"
        style={{ fontSize: '24px', fontVariationSettings: '"opsz" 48' }}
      >
        {title}
      </h3>
      <p className="text-[15px] leading-[1.6] text-paper-500">{description}</p>
      <span
        className="absolute bottom-5 right-6 font-mono text-[80px] leading-none text-paper-200 transition-colors duration-500 ease-editorial group-hover:text-copper-500/20 select-none pointer-events-none"
        aria-hidden
      >
        {number}
      </span>
    </div>
  );
};

const WhatIDo = () => {
  const [headRef, headIn] = useReveal();

  return (
    <section id="what" className="py-20 md:py-32 lg:py-40">
      <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
        <div ref={headRef} className={`reveal ${headIn ? 'in' : ''} mb-12 md:mb-16`}>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          <ServiceCard
            title="AI Infrastructure"
            description="Serverless GPU endpoints on RunPod. Docker containers, REST APIs, and azure kubernetes services."
            number="01"
            delay={0}
          />
          <ServiceCard
            title="Video Production"
            description="LipSync on bulk video generation. Character-consistent video generation. Bulk automation to process thousands of assets."
            number="02"
            delay={100}
          />
          <ServiceCard
            title="3D Scene Building"
            description="Turn concept images into complete 3D environments. Full pipelines for VFX teams working on film and commercial projects."
            number="03"
            delay={200}
          />
          <ServiceCard
            title="Image Generation"
            description="Custom diffusion models trained on your brand or characters. ComfyUI workflows for face swap, virtual try-on, inpainting, and upscaling."
            number="04"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
