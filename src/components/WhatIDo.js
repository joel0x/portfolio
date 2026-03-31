import React, { useEffect, useRef, useState } from 'react';

const ServiceCard = ({ icon, title, description, number, delay }) => {
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
    <div
      ref={ref}
      className={`relative glass p-10 lg:p-12 rounded-2xl cursor-hover-target group overflow-hidden reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Gradient top border on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

      <div className="mb-5">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/20 to-purple-500/20 border border-primary-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <div dangerouslySetInnerHTML={{ __html: icon }} />
        </div>
      </div>
      <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>

      {/* Large number in background */}
      <div className="absolute bottom-6 right-6 text-8xl font-mono text-white/5 group-hover:text-primary-500/10 transition-colors duration-500">
        {number}
      </div>
    </div>
  );
};

const WhatIDo = () => {
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
    <section id="what" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={ref} className={`mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4 block">Services</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            What I can do for you
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon='<svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>'
            title="AI Infrastructure"
            description="Serverless GPU endpoints on RunPod. Docker containers, REST APIs, and async queues."
            number="01"
            delay={0}
          />
          <ServiceCard
            icon='<svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>'
            title="Video Production"
            description="LipSync on bulk video generation. Character-consistent video generation. Bulk automation to process thousands of assets."
            number="02"
            delay={100}
          />
          <ServiceCard
            icon='<svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>'
            title="3D Scene Building"
            description="Turn concept images into complete 3D environments. Full pipelines for VFX teams working on film and commercial projects."
            number="03"
            delay={200}
          />
          <ServiceCard
            icon='<svg class="w-8 h-8 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>'
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
