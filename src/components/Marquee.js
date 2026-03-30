import React from 'react';

const Marquee = () => {
  const items = [
    'Flux Fine-tuning',
    'ComfyUI Workflows',
    'LoRA Training',
    'RunPod Serverless',
    'LipSync Pipelines',
    '3D World Building',
    'AI Avatars',
    'Virtual Try-On',
    'Inpainting',
    'Bulk Gen Automation',
    'Docker · GPU Infra',
    'REST API Design',
  ];

  return (
    <div className="border-y border-white/10 bg-dark-900/50 backdrop-blur-sm overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="inline-flex items-center gap-3 px-8 py-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-60" />
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
