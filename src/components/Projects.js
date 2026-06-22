import React, { useEffect } from 'react';
import useReveal from '../hooks/useReveal';

const youtubeId = (url) => {
  if (!url) return '';
  return url.split('/').pop().split('?')[0];
};

const ProjectCard = ({
  number,
  title,
  category,
  description,
  tags,
  size,
  delay,
  videoUrl,
  youtubeLink,
  instagramUrl,
  projectLink,
}) => {
  const [ref, shown] = useReveal(0.2);
  const id = youtubeId(videoUrl);

  useEffect(() => {
    if (!instagramUrl) return;
    const exists = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    if (!exists) {
      const s = document.createElement('script');
      s.src = 'https://www.instagram.com/embed.js';
      s.async = true;
      s.onload = () => window.instgrm && window.instgrm.Embeds.process();
      document.body.appendChild(s);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [instagramUrl]);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} ${size} bg-paper-50 border border-paper-200 rounded-sm overflow-hidden transition-[transform,border-color] duration-500 ease-editorial hover:-translate-y-1 hover:border-paper-400`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {videoUrl && (
        <div className="relative w-full aspect-video bg-paper-900 overflow-hidden">
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${id}&playsinline=1`}
            className="absolute inset-0 w-full h-full border-0"
            allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
            allowFullScreen
            title={title}
          />
          {youtubeLink && (
            <a
              href={youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 z-10 font-mono text-[11px] tracking-wider uppercase text-paper-50 bg-paper-900/70 hover:bg-copper-500 px-2.5 py-1 rounded-full transition-colors duration-200 ease-editorial backdrop-blur-sm"
            >
              Open ↗
            </a>
          )}
        </div>
      )}

      {instagramUrl && (
        <a
          href={`https://www.instagram.com/${instagramUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="block w-full aspect-video bg-paper-200 overflow-hidden group"
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-8 transition-colors duration-300 ease-editorial group-hover:bg-paper-300">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-copper-300 via-copper-400 to-copper-500 p-1 mb-6">
              <div className="w-full h-full rounded-xl bg-paper-50 flex items-center justify-center">
                <svg className="w-12 h-12 text-ink" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-ink text-xl font-serif font-normal mb-2">View on Instagram</h3>
              <p className="text-paper-500 text-sm">Click to watch the AI Food Show</p>
            </div>
            <div className="mt-6 px-6 py-2 bg-paper-50 rounded-full border border-paper-300">
              <span className="text-ink text-sm font-medium">Open Post →</span>
            </div>
          </div>
        </a>
      )}

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <span className="font-mono text-xs tracking-[0.1em] text-paper-500">{number}</span>
          <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-paper-500">
            {category}
          </span>
        </div>

        <h3
          className="font-serif font-normal leading-[1.15] tracking-[-0.02em] text-ink mb-2 sm:mb-3"
          style={{
            fontSize: 'clamp(20px, 2.4vw, 28px)',
            fontVariationSettings: '"opsz" 72',
          }}
        >
          {title}
        </h3>

        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-copper-500 hover:text-copper-400 text-xs sm:text-sm font-medium mb-2 sm:mb-3 underline break-all"
            onClick={(e) => e.stopPropagation()}
          >
            {projectLink}
          </a>
        )}

        <p className="text-[15px] leading-[1.6] text-paper-500 mb-4 sm:mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-wider px-3 py-1.5 border border-paper-300 rounded-full text-paper-700 bg-bg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [headRef, headIn] = useReveal();

  const projects = [
    {
      number: '01',
      title: 'Galleri5 AI Studio Backend',
      category: 'Platform Dev',
      description: 'Built AI agents and overall orchestration for AI video generation. REST APIs, async queues, and AKS scaling.',
      tags: ['FastAPI', 'AKS', 'Redis'],
      size: 'col-span-12 lg:col-span-6',
      projectLink: 'https://aistudio.galleri5.com',
    },
    {
      number: '02',
      title: 'Hanuman 3D Pipeline',
      category: 'Film VFX',
      description: 'Created end-to-end image-to-3D pipeline for film VFX teams to build complete scenes from concept art.',
      tags: ['Image-to-3D', 'VFX'],
      size: 'col-span-12 lg:col-span-6',
      videoUrl: 'https://www.youtube.com/embed/tnJaI2yKESM',
      youtubeLink: 'https://youtu.be/tnJaI2yKESM?si=bsSzy1m-iPUEA6bi',
    },
    {
      number: '03',
      title: 'AI Food Show',
      category: 'Content Creation',
      description: 'AI food show created for Hansal Mehta',
      tags: ['AI Video', 'Content'],
      size: 'col-span-12 lg:col-span-6',
      instagramUrl: 'p/DWQc2ZZquZQ',
    },
    {
      number: '04',
      title: 'Mahabharata — JioHotstar',
      category: 'OTT Production',
      description: 'Led AI pipeline architecture for mahabharat series. Built bulk generation systems and LipSync automation.',
      tags: ['LipSync', 'Bulk Gen', 'ComfyUI'],
      size: 'col-span-12 lg:col-span-6',
      videoUrl: 'https://www.youtube.com/embed/ELmlmlvkNF8',
      youtubeLink: 'https://youtu.be/ELmlmlvkNF8?si=71_cO7lOvY9_d5Bv',
    },
    {
      number: '05',
      title: 'RunPod Serverless Infrastructure',
      category: 'Cloud Infra',
      description: 'Designed serverless GPU infrastructure with optimized cold-start times for cost-effective production deployment.',
      tags: ['Docker', 'GPU', 'API'],
      size: 'col-span-12 lg:col-span-6',
    },
    {
      number: '06',
      title: 'Rhea Chakraborty AI Avatar',
      category: 'Celebrity Tech',
      description: 'Built celebrity AI avatar with consistent character generation across different poses and contexts.',
      tags: ['AI Avatar', 'Flux'],
      size: 'col-span-12 lg:col-span-6',
      instagramUrl: 'itsmishtyy',
    },
    {
      number: '07',
      title: 'Production ComfyUI Workflows',
      category: 'AI Engineering',
      description: 'Developed modular ComfyUI workflows for face swap, virtual try-on, inpainting, and style transfer used in production.',
      tags: ['ComfyUI', 'VTON', 'Inpainting'],
      size: 'col-span-12 lg:col-span-6',
    },
    {
      number: '08',
      title: 'Video LoRA Training',
      category: 'Video AI',
      description: 'Trained character-consistent LoRAs on LTX and Wan video models for custom character generation and style transfers.',
      tags: ['LoRA', 'LTX', 'Wan'],
      size: 'col-span-12 lg:col-span-6',
    },
    {
      number: '09',
      title: 'Fashion Brand Fine-tuning',
      category: 'E-commerce',
      description: 'Fine-tuned Flux models with Ostris ai-toolkit and LoRA for fashion brands to generate product catalog images.',
      tags: ['Flux', 'Qwen', 'sdxl', 'E-commerce'],
      size: 'col-span-12 lg:col-span-6',
    },
  ];

  return (
    <section id="work" className="py-20 md:py-32 lg:py-40 bg-paper-100">
      <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
        <div ref={headRef} className={`reveal ${headIn ? 'in' : ''} mb-12 sm:mb-16`}>
          <span className="eyebrow block mb-4">Portfolio</span>
          <h2
            className="font-serif font-light leading-[1.05] tracking-[-0.025em] text-ink"
            style={{
              fontSize: 'clamp(36px, 5vw, 64px)',
              fontVariationSettings: '"opsz" 96, "SOFT" 50',
            }}
          >
            Recent projects
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.number} {...p} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
