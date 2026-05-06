import React from 'react';
import useReveal from '../hooks/useReveal';

const Hero = () => {
  const [statusRef, statusIn] = useReveal();
  const [nameRef, nameIn] = useReveal();
  const [sideRef, sideIn] = useReveal();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <header
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-16 md:pt-[140px] md:pb-20"
    >
      <div className="relative z-10 max-w-page mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-20 items-end">
          <div>
            <div
              ref={statusRef}
              className={`reveal ${statusIn ? 'in' : ''} inline-flex items-center gap-2.5 mb-8`}
            >
              <span className="w-[7px] h-[7px] rounded-full bg-copper-500 animate-pulse-copper" />
              <span className="font-mono text-[12px] tracking-wider text-paper-700">
                Available for Work
              </span>
            </div>

            <h1
              ref={nameRef}
              className={`reveal stagger-1 ${nameIn ? 'in' : ''} font-serif font-light leading-[0.92] tracking-[-0.04em] text-ink`}
              style={{
                fontSize: 'clamp(56px, 11vw, 168px)',
                fontVariationSettings: '"opsz" 144, "SOFT" 50',
              }}
            >
              Joel
              <br />
              Mach
              <em
                className="italic font-light text-copper-500 not-italic"
                style={{
                  fontStyle: 'italic',
                  fontVariationSettings: '"opsz" 144, "SOFT" 100',
                }}
              >
                a
              </em>
              do
              <span
                className="italic text-copper-500"
                style={{ fontStyle: 'italic' }}
              >
                .
              </span>
            </h1>
          </div>

          <aside
            ref={sideRef}
            className={`reveal stagger-2 ${sideIn ? 'in' : ''} flex flex-col gap-7 lg:pb-6`}
          >
            <h2
              className="font-serif italic font-light text-copper-500"
              style={{
                fontSize: 'clamp(20px, 2.4vw, 30px)',
                fontVariationSettings: '"opsz" 72, "SOFT" 100',
              }}
            >
              AI Engineer
            </h2>

            <p
              className="font-serif font-light leading-[1.5] tracking-[-0.005em] text-paper-700"
              style={{
                fontSize: 'clamp(17px, 1.45vw, 21px)',
                fontVariationSettings: '"opsz" 24, "SOFT" 60',
              }}
            >
              I build AI systems for film production, fashion e-commerce, and streaming platforms from custom diffusion models to serverless GPU infrastructure. overall, i know programming in general and have experience building products for end users.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => scrollTo('work')}
                className="group inline-flex items-center gap-2.5 text-sm font-medium px-[22px] py-[14px] rounded-full bg-ink text-bg border border-transparent transition-colors duration-300 ease-editorial hover:bg-copper-500"
              >
                View Projects
                <svg
                  className="w-4 h-4 transition-transform duration-300 ease-editorial group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center text-sm font-medium px-[22px] py-[14px] rounded-full bg-transparent text-ink border border-paper-300 transition-colors duration-300 ease-editorial hover:border-ink"
              >
                Get in Touch
              </button>
            </div>
          </aside>
        </div>
      </div>
    </header>
  );
};

export default Hero;
