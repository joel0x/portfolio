import React, { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ number, title, category, description, tags, size, delay, videoUrl, youtubeLink, instagramUrl, projectLink }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [tiltStyle, setTiltStyle] = useState({});
  const [isHovered, setIsHovered] = useState(false);
  const [isInViewportCenter, setIsInViewportCenter] = useState(false);
  const ref = useRef(null);
  const videoRef = useRef(null);
  const iframeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsInViewportCenter(true);
        } else {
          setIsInViewportCenter(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
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

  useEffect(() => {
    // Stop content when clicking outside
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsHovered(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // Load Instagram embed script for real posts immediately
    if (instagramUrl) {
      // Check if script already exists
      if (!document.querySelector('script[src="https://www.instagram.com/embed.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Process embeds after script loads
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process();
          }
        };
      } else {
        // Script already loaded, just process embeds
        if (window.instgrm) {
          window.instgrm.Embeds.process();
        }
      }
    }
  }, [instagramUrl]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Calculate tilt values
    const tiltX = ((y - 50) / 50) * 8; // -8 to 8 degrees
    const tiltY = ((x - 50) / 50) * -8; // -8 to 8 degrees

    setMousePosition({ x, y });
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleClick = () => {
    if (youtubeLink) {
      window.open(youtubeLink, '_blank');
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={`glass rounded-2xl sm:rounded-3xl overflow-hidden cursor-hover-target card-glow reveal ${isVisible ? 'active' : ''} ${size} ${youtubeLink ? 'cursor-pointer' : ''} relative w-full`}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        transitionDelay: `${delay}ms`,
        transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        ...tiltStyle
      }}
    >
      {/* Video Section - Visible at top, loads when in view */}
      {videoUrl && (
        <div className="w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {isInViewportCenter ? (
            <iframe
              ref={videoRef}
              src={`${videoUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoUrl.split('/').pop().split('?')[0]}&playsinline=1&enablejsapi=1`}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : (
            <div className="w-full h-full bg-gray-900 flex items-center justify-center">
              <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
            </div>
          )}
        </div>
      )}

      {/* Instagram Feed - Visible at top, loads immediately */}
      {instagramUrl && (
        <a
          href={`https://www.instagram.com/${instagramUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-black aspect-video flex items-center justify-center overflow-hidden group cursor-pointer block"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full h-full bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 flex flex-col items-center justify-center p-8 group-hover:opacity-90 transition-opacity">
            {/* Instagram Icon */}
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-1 mb-6">
              <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="text-center">
              <h3 className="text-white text-xl font-bold mb-2">View on Instagram</h3>
              <p className="text-gray-300 text-sm">Click to watch the AI Food Show</p>
            </div>

            {/* Play indicator */}
            <div className="mt-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white text-sm font-medium">Open Post →</span>
            </div>
          </div>
        </a>
      )}

      {/* Content Section */}
      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex items-start justify-between mb-4 sm:mb-6">
          <span className="text-xs font-mono text-gray-500">{number}</span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{category}</span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 leading-tight">
          {title}
        </h3>

        {projectLink && (
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-medium mb-2 sm:mb-3 underline break-all"
            onClick={(e) => e.stopPropagation()}
          >
            {projectLink}
          </a>
        )}

        <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
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

  const projects = [
    {
      number: '01',
      title: 'Mahabharata — JioHotstar',
      category: 'OTT Production',
      description: "Led AI pipeline architecture for mahabharat series. Built bulk generation systems and LipSync automation.",
      tags: ['LipSync', 'Bulk Gen', 'ComfyUI'],
      size: 'col-span-12 lg:col-span-6',
      videoUrl: 'https://www.youtube.com/embed/ELmlmlvkNF8',
      youtubeLink: 'https://youtu.be/ELmlmlvkNF8?si=71_cO7lOvY9_d5Bv'
    },
    {
      number: '02',
      title: 'Hanuman 3D Pipeline',
      category: 'Film VFX',
      description: 'Created end-to-end image-to-3D pipeline for film VFX teams to build complete scenes from concept art.',
      tags: ['Image-to-3D', 'VFX'],
      size: 'col-span-12 lg:col-span-6',
      videoUrl: 'https://www.youtube.com/embed/tnJaI2yKESM',
      youtubeLink: 'https://youtu.be/tnJaI2yKESM?si=bsSzy1m-iPUEA6bi'
    },
    {
      number: '03',
      title: 'AI Food Show',
      category: 'Content Creation',
      description: 'AI food show created for Hansal Mehta',
      tags: ['AI Video', 'Content'],
      size: 'col-span-12 lg:col-span-6',
      instagramUrl: 'p/DWQc2ZZquZQ'
    },
    {
      number: '04',
      title: 'Galleri5 AI Studio Backend',
      category: 'Platform Dev',
      description: 'Built backend infrastructure for AI generation platform serving thousands of users. REST APIs, async queues, and RunPod orchestration.',
      tags: ['FastAPI', 'RunPod', 'Redis'],
      size: 'col-span-12 lg:col-span-6',
      projectLink: 'https://aistudio.galleri5.com'
    },
    {
      number: '05',
      title: 'RunPod Serverless Infrastructure',
      category: 'Cloud Infra',
      description: 'Designed serverless GPU infrastructure with optimized cold-start times for cost-effective production deployment.',
      tags: ['Docker', 'GPU', 'API'],
      size: 'col-span-12 lg:col-span-6'
    },
    {
      number: '06',
      title: 'Rhea Chakraborty AI Avatar',
      category: 'Celebrity Tech',
      description: 'Built celebrity AI avatar with consistent character generation across different poses and contexts.',
      tags: ['AI Avatar', 'Flux'],
      size: 'col-span-12 lg:col-span-6',
      instagramUrl: 'itsmishtyy'
    },
    {
      number: '07',
      title: 'Production ComfyUI Workflows',
      category: 'AI Engineering',
      description: 'Developed modular ComfyUI workflows for face swap, virtual try-on, inpainting, and style transfer used in production.',
      tags: ['ComfyUI', 'VTON', 'Inpainting'],
      size: 'col-span-12 lg:col-span-6'
    },
    {
      number: '08',
      title: 'Video LoRA Training',
      category: 'Video AI',
      description: 'Trained character-consistent LoRAs on LTX and Wan video models for custom character generation and style transfers.',
      tags: ['LoRA', 'LTX', 'Wan'],
      size: 'col-span-12 lg:col-span-6'
    },
    {
      number: '09',
      title: 'Fashion Brand Fine-tuning',
      category: 'E-commerce',
      description: 'Fine-tuned Flux models with Ostris ai-toolkit and LoRA for fashion brands to generate product catalog images.',
      tags: ['Flux', 'Qwen', 'sdxl', 'E-commerce'],
      size: 'col-span-12 lg:col-span-6'
    }
  ];

  return (
    <section id="work" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div ref={ref} className={`mb-12 sm:mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4 block">Portfolio</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Recent projects
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
