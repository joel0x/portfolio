import React, { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';

const MetricCard = ({ number, label, delay }) => {
  const [ref, shown] = useReveal(0.2);
  const [count, setCount] = useState(0);

  const target = parseInt(number.replace(/\D/g, ''), 10);
  const suffix = number.replace(/\d/g, '');

  useEffect(() => {
    if (!shown) return;
    const duration = 2000;
    const steps = 60;
    const stepMs = duration / steps;
    const inc = target / steps;
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      if (i <= steps) {
        setCount(Math.min(Math.floor(inc * i), target));
      } else {
        clearInterval(t);
      }
    }, stepMs);
    return () => clearInterval(t);
  }, [shown, target]);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'in' : ''} text-center px-6 py-10 lg:p-10 border border-paper-200 rounded-sm bg-paper-50`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="font-serif font-light leading-none tracking-[-0.03em] text-ink mb-2"
        style={{
          fontSize: 'clamp(36px, 4vw, 56px)',
          fontVariationSettings: '"opsz" 96',
        }}
      >
        {shown ? count : 0}
        <em className="italic text-copper-500" style={{ fontStyle: 'italic' }}>
          {suffix}
        </em>
      </div>
      <div className="font-mono text-[11px] tracking-[0.12em] uppercase text-paper-500">
        {label}
      </div>
    </div>
  );
};

const Metrics = () => (
  <section className="py-20 md:py-24">
    <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <MetricCard number="8+" label="Production Projects" delay={0} />
        <MetricCard number="50+" label="ComfyUI Workflows" delay={100} />
        <MetricCard number="3+" label="OTT Productions" delay={200} />
        <MetricCard number="100+" label="Shots Per Run" delay={300} />
      </div>
    </div>
  </section>
);

export default Metrics;
