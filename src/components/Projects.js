import React, { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ number, title, category, description, tags, size, delay, videoUrl, youtubeLink, instagramUrl }) => {
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
          // Stop video/content when scrolled out of view
          setIsInViewportCenter(false);
          setIsHovered(false);
          if (videoRef.current) {
            videoRef.current.src = '';
          }
          if (iframeRef.current) {
            iframeRef.current.src = iframeRef.current.src; // Reload to reset
          }
        }
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px' // Play when card is in middle 60% of viewport
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
    // Load Instagram embed script for real posts
    if (instagramUrl && (isHovered || isInViewportCenter)) {
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

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, [instagramUrl, isHovered, isInViewportCenter]);

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
      className={`glass rounded-3xl p-8 lg:p-10 cursor-hover-target card-glow reveal ${isVisible ? 'active' : ''} ${size} ${youtubeLink ? 'cursor-pointer' : ''} relative overflow-hidden`}
      style={{
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`,
        transitionDelay: `${delay}ms`,
        transition: 'all 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
        ...tiltStyle
      }}
    >
      {/* Video Popup Overlay - Inside card */}
      {videoUrl && (isHovered || isInViewportCenter) && (
        <div className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full h-full relative">
            <iframe
              ref={videoRef}
              src={`${videoUrl}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=${videoUrl.split('/').pop().split('?')[0]}&playsinline=1&enablejsapi=1`}
              className="w-full h-full rounded-2xl shadow-2xl"
              allow="autoplay; encrypted-media; accelerometer; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>
        </div>
      )}

      {/* Instagram Feed Popup - Inside card - Dark Mode */}
      {instagramUrl && (isHovered || isInViewportCenter) && (
        <div
          className="absolute inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full h-full relative bg-black rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Instagram Header - Dark Mode */}
            <div className="bg-black border-b border-gray-800 px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px]">
                <div className="w-full h-full rounded-full bg-black"></div>
              </div>
              <div className="flex-1">
                <a
                  href={`https://www.instagram.com/${instagramUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm hover:underline text-white"
                  onClick={(e) => e.stopPropagation()}
                >
                  @{instagramUrl}
                </a>
              </div>
              <a
                href={`https://www.instagram.com/${instagramUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm font-semibold hover:text-blue-300"
                onClick={(e) => e.stopPropagation()}
              >
                View Profile
              </a>
            </div>

            {/* Instagram Real Content with Dark Background */}
            <div className="flex-1 bg-black overflow-y-auto overflow-x-hidden p-4 scrollbar-hide">
              <div className="max-w-md mx-auto overflow-x-hidden">
                {/* Instagram Embed Widget - Shows real posts */}
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/${instagramUrl}/`}
                  data-instgrm-version="14"
                  style={{
                    background: '#000',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(255,255,255,0.5),0 1px 10px 0 rgba(255,255,255,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: '99.375%'
                  }}
                >
                  <div style={{ padding: '40px' }}>
                    <a
                      href={`https://www.instagram.com/${instagramUrl}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        background: '#000',
                        lineHeight: 0,
                        padding: 0,
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                        display: 'block',
                        color: '#fff'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', padding: '3px' }}>
                          <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#000' }}></div>
                        </div>
                        <div style={{ color: '#fff', fontSize: '16px', fontWeight: 600 }}>@{instagramUrl}</div>
                        <div style={{ color: '#999', fontSize: '14px' }}>View this profile on Instagram</div>
                      </div>
                    </a>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-start justify-between mb-6">
        <span className="text-xs font-mono text-gray-500">{number}</span>
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{category}</span>
      </div>

      <h3 className="font-display text-2xl lg:text-3xl font-bold mb-3 leading-tight">
        {title}
      </h3>

      <p className="text-gray-400 leading-relaxed mb-6 text-sm">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-2 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-gray-300"
          >
            {tag}
          </span>
        ))}
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
      description: "Led AI pipeline architecture for India's biggest streaming series. Built bulk generation systems and multi-language LipSync automation at production scale.",
      tags: ['LipSync', 'Bulk Gen', 'ComfyUI'],
      size: 'col-span-12 lg:col-span-8',
      videoUrl: 'https://www.youtube.com/embed/ELmlmlvkNF8',
      youtubeLink: 'https://youtu.be/ELmlmlvkNF8?si=71_cO7lOvY9_d5Bv'
    },
    {
      number: '02',
      title: 'Rhea Chakraborty AI Avatar',
      category: 'Celebrity Tech',
      description: 'Built celebrity AI avatar with consistent character generation across different poses and contexts.',
      tags: ['AI Avatar', 'Flux'],
      size: 'col-span-12 lg:col-span-4',
      instagramUrl: 'itsmishtyy'
    },
    {
      number: '03',
      title: 'Hanuman 3D Pipeline',
      category: 'Film VFX',
      description: 'Created end-to-end image-to-3D pipeline for film VFX teams to build complete scenes from concept art.',
      tags: ['Image-to-3D', 'VFX'],
      size: 'col-span-12 lg:col-span-4',
      videoUrl: 'https://www.youtube.com/embed/tnJaI2yKESM',
      youtubeLink: 'https://youtu.be/tnJaI2yKESM?si=bsSzy1m-iPUEA6bi'
    },
    {
      number: '04',
      title: 'RunPod Serverless Infrastructure',
      category: 'Cloud Infra',
      description: 'Designed serverless GPU infrastructure with optimized cold-start times for cost-effective production deployment.',
      tags: ['Docker', 'GPU', 'API'],
      size: 'col-span-12 lg:col-span-8'
    },
    {
      number: '05',
      title: 'Galleri5 AI Studio Backend',
      category: 'Platform Dev',
      description: 'Built backend infrastructure for AI generation platform serving thousands of users. REST APIs, async queues, and RunPod orchestration.',
      tags: ['FastAPI', 'RunPod', 'Redis'],
      size: 'col-span-12 lg:col-span-6'
    },
    {
      number: '06',
      title: 'Production ComfyUI Workflows',
      category: 'AI Engineering',
      description: 'Developed modular ComfyUI workflows for face swap, virtual try-on, inpainting, and style transfer used in production.',
      tags: ['ComfyUI', 'VTON', 'Inpainting'],
      size: 'col-span-12 lg:col-span-6'
    },
    {
      number: '07',
      title: 'Video LoRA Training',
      category: 'Video AI',
      description: 'Trained character-consistent LoRAs on LTX and Wan video models for custom character generation at scale.',
      tags: ['LoRA', 'LTX', 'Wan'],
      size: 'col-span-12 lg:col-span-4'
    },
    {
      number: '08',
      title: 'Fashion Brand Fine-tuning',
      category: 'E-commerce',
      description: 'Fine-tuned Flux models with DreamBooth and LoRA for fashion brands to generate product catalog images.',
      tags: ['Flux', 'DreamBooth', 'E-commerce'],
      size: 'col-span-12 lg:col-span-8'
    }
  ];

  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div ref={ref} className={`mb-16 reveal ${isVisible ? 'active' : ''}`}>
          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4 block">Portfolio</span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Recent projects
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
