import React, { useEffect, useRef, useState } from 'react';

const About = () => {
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
    <section id="about" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={ref} className={`grid lg:grid-cols-2 gap-16 lg:gap-24 items-start reveal ${isVisible ? 'active' : ''}`}>
          <div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4 block">About</span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Full-stack AI engineer specializing in production pipelines.
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-primary-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">Image Generation</h3>
              <p className="text-gray-400 leading-relaxed">
                I fine-tune Flux and Stable Diffusion models for specific brands and characters. Built ComfyUI workflows for face swap, virtual try-on, inpainting, and upscaling that run in production.
              </p>
            </div>

            <div className="border-l-2 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold mb-3">Video & LipSync</h3>
              <p className="text-gray-400 leading-relaxed">
                Set up LipSync operations for OTT dubbing and trained character-consistent LoRAs on LTX and Wan. Automated bulk generation to handle thousands of video assets efficiently.
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-xl font-semibold mb-3">Backend & Infra</h3>
              <p className="text-gray-400 leading-relaxed">
                Built RunPod serverless endpoints, Dockerized GPU workers, and REST APIs with async queues. Designed infrastructure that balances performance with cost at production scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
