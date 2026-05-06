import React from 'react';

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

const Marquee = () => {
  const loop = [...items, ...items];
  return (
    <div className="border-y border-paper-200 bg-paper-100 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
        {loop.map((item, i) => (
          <div key={i} className="inline-flex items-center gap-3 px-8 py-4">
            <span className="w-1.5 h-1.5 rounded-full bg-copper-500 opacity-80" />
            <span className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper-500">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
