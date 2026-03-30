import React, { useEffect, useRef, useState } from 'react';

const MetricCard = ({ number, label, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  // Extract the numeric value from the number string (e.g., "8+" -> 8)
  const targetNumber = parseInt(number.replace(/\D/g, ''));
  const suffix = number.replace(/\d/g, '');

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

  // Animate counter when visible
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;
    const increment = targetNumber / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), targetNumber));
      } else {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, targetNumber]);

  return (
    <div
      ref={ref}
      className={`glass-strong rounded-3xl p-8 lg:p-10 text-center cursor-hover-target reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-gradient-purple font-display text-4xl lg:text-5xl font-bold mb-2">
        {isVisible ? count : 0}{suffix}
      </div>
      <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

const Metrics = () => {
  return (
    <section className="py-24 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard number="8+" label="Production Projects" delay={0} />
          <MetricCard number="50+" label="ComfyUI Workflows" delay={100} />
          <MetricCard number="3+" label="OTT Productions" delay={200} />
          <MetricCard number="100+" label="Shots Per Run" delay={300} />
        </div>
      </div>
    </section>
  );
};

export default Metrics;
