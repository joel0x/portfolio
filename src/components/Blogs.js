import React from 'react';
import useReveal from '../hooks/useReveal';

const posts = [
  {
    title: 'How to create mute animation similar to YouTube using react native?',
    url: 'https://medium.com/@joelmachado649/how-to-create-mute-animation-similar-to-youtube-using-react-native-24a695dae330',
    date: 'April 15, 2024',
    publication: 'Medium',
    description:
      'Walkthrough of replicating the YouTube-style mute toggle animation in a React Native app.',
    tags: ['React Native', 'Animation', 'UI'],
  },
  {
    title:
      'Host your website in Firebase easily (Explained all different types of errors you may face)',
    url: 'https://medium.com/@joelmachado649/host-your-website-in-firebase-easily-explained-all-different-types-of-errors-you-may-face-89ef67847eda',
    date: 'March 16, 2024',
    publication: 'Medium',
    description:
      'A complete Firebase Hosting setup with common error troubleshooting and redirect configuration.',
    tags: ['Firebase', 'Hosting', 'DevOps'],
  },
  {
    title: 'Only blog you need for learning everything about authentication from scratch',
    url: 'https://medium.com/@joelmachado649/only-blog-you-need-for-learning-everything-about-authentication-from-scratch-f1b0bb9fd58f',
    date: 'July 22, 2023',
    publication: 'Medium',
    description:
      'Comprehensive authentication guide spanning basic methods through OAuth implementation.',
    tags: ['Auth', 'Security', 'OAuth'],
  },
  {
    title: 'Style transfer in Gen AI and what can be done',
    url: 'https://medium.com/@joelmachado649/style-transfer-in-gen-ai-and-what-can-be-done-fb75b9343f5f',
    date: '2023',
    publication: 'Medium',
    description:
      'Exploring style transfer techniques in generative AI and their practical applications.',
    tags: ['Gen AI', 'Style Transfer'],
  },
  {
    title: 'Sentiment Analysis in detail with an example!',
    url: 'https://medium.com/@joelmachado649/sentiment-analysis-in-detail-with-an-example-d47cdaefa689',
    date: 'September 2, 2023',
    publication: 'Medium',
    description:
      'A deep dive into sentiment analysis fundamentals with practical Python examples.',
    tags: ['NLP', 'Python', 'ML'],
  },
  {
    title: 'Events in Solidity: Create Interactive Smart Contracts',
    url: 'https://medium.com/coinsbench/eventin-solidity-create-interactive-smart-contracts-2e2b133a92c6',
    date: 'June 9, 2023',
    publication: 'CoinsBench',
    description:
      'How Solidity events power communication between smart contracts and off-chain consumers.',
    tags: ['Solidity', 'Smart Contracts', 'Web3'],
  },
  {
    title: 'The Game-Changing Fusion of Spatial Analytics with AI!',
    url: 'https://medium.com/@joelmachado649/the-game-changing-fusion-of-spatial-analytics-with-ai-393954f30dc',
    date: 'May 2, 2023',
    publication: 'Medium',
    description:
      'How spatial analytics combined with AI is reshaping decision-making across industries.',
    tags: ['Spatial Analytics', 'AI'],
  },
  {
    title: 'Solidity cryptographic functions',
    url: 'https://medium.com/coinsbench/soidity-cryptographic-functions-338730519213',
    date: 'March 31, 2023',
    publication: 'CoinsBench',
    description:
      'A tour of Solidity’s built-in cryptographic primitives and where to use them safely.',
    tags: ['Solidity', 'Cryptography', 'Security'],
  },
  {
    title: 'Blockchain and counterfeit drugs',
    url: 'https://medium.com/coinsbench/blockchain-and-counterfeit-drugs-9093f447b295',
    date: 'March 26, 2023',
    publication: 'CoinsBench',
    description:
      'Using blockchain provenance to fight counterfeit pharmaceuticals across the supply chain.',
    tags: ['Blockchain', 'Healthcare'],
  },
  {
    title: 'Solidity function to implement a trustless escrow system',
    url: 'https://medium.com/@joelmachado649/solidity-function-to-implement-a-trustless-escrow-system-where-funds-are-held-in-escrow-until-db187e12f16b',
    date: 'March 26, 2023',
    publication: 'Medium',
    description:
      'Implementing a trustless escrow in Solidity where funds release only when conditions are met.',
    tags: ['Solidity', 'Escrow', 'Web3'],
  },
];

const BlogCard = ({ post, index }) => {
  const [ref, shown] = useReveal(0.15);

  return (
    <a
      ref={ref}
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal ${shown ? 'in' : ''} group block bg-paper-50 border border-paper-200 rounded-sm p-6 sm:p-8 lg:p-10 transition-[transform,border-color] duration-500 ease-editorial hover:-translate-y-1 hover:border-paper-400`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between mb-4 sm:mb-6 gap-4">
        <span className="font-mono text-xs tracking-[0.1em] text-paper-500">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-paper-500 text-right">
          {post.publication} · {post.date}
        </span>
      </div>

      <h3
        className="font-serif font-normal leading-[1.15] tracking-[-0.02em] text-ink mb-3 sm:mb-4 group-hover:text-copper-500 transition-colors duration-300 ease-editorial"
        style={{
          fontSize: 'clamp(20px, 2.4vw, 28px)',
          fontVariationSettings: '"opsz" 72',
        }}
      >
        {post.title}
      </h3>

      <p className="text-[15px] leading-[1.6] text-paper-500 mb-5 sm:mb-6">
        {post.description}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] tracking-wider px-3 py-1.5 border border-paper-300 rounded-full text-paper-700 bg-bg"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-[11px] tracking-wider uppercase text-copper-500 group-hover:text-copper-400 transition-colors duration-200 ease-editorial">
          Read ↗
        </span>
      </div>
    </a>
  );
};

const Blogs = () => {
  const [headRef, headIn] = useReveal();

  const goHome = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', '/');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };

  return (
    <main className="min-h-screen bg-bg text-ink">
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 border-b border-transparent bg-bg/70 backdrop-blur-md">
        <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <a
              href="/"
              onClick={goHome}
              className="font-mono text-[12px] tracking-[0.2em] uppercase text-paper-500 hover:text-ink transition-colors duration-200 ease-editorial"
            >
              ← Joel Machado
            </a>
            <a
              href="mailto:joelmachado.work@gmail.com"
              className="hidden md:inline-block text-[13px] px-4 py-2 border border-ink rounded-full transition-colors duration-300 ease-editorial hover:bg-ink hover:text-bg"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </nav>

      <section className="pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
          <div ref={headRef} className={`reveal ${headIn ? 'in' : ''} max-w-3xl`}>
            <span className="eyebrow block mb-4">Writing</span>
            <h1
              className="font-serif font-light leading-[1.02] tracking-[-0.03em] text-ink mb-6"
              style={{
                fontSize: 'clamp(44px, 7vw, 96px)',
                fontVariationSettings: '"opsz" 96, "SOFT" 50',
              }}
            >
              Blog
              <span className="italic text-copper-500" style={{ fontStyle: 'italic' }}>
                .
              </span>
            </h1>
            <p
              className="font-serif font-light leading-[1.5] tracking-[-0.005em] text-paper-700 max-w-2xl"
              style={{
                fontSize: 'clamp(17px, 1.45vw, 21px)',
                fontVariationSettings: '"opsz" 24, "SOFT" 60',
              }}
            >
              Notes from across the stack — generative AI, Web3, mobile, and the
              infrastructure that holds it all together. Originally published on{' '}
              <a
                href="https://medium.com/@joelmachado649"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper-500 hover:text-copper-400 underline"
              >
                Medium
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 lg:pb-40">
        <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {posts.map((post, i) => (
              <BlogCard key={post.url} post={post} index={i} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink text-paper-300 py-10 border-t border-paper-700">
        <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-sm">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-copper-400" />
              <span className="text-paper-300">
                © 2026 Joel Machado. All rights reserved.
              </span>
            </div>
            <a
              href="/"
              onClick={goHome}
              className="group relative font-mono text-[11px] tracking-[0.18em] uppercase text-paper-400 hover:text-copper-400 transition-colors duration-200 ease-editorial"
            >
              Back to Portfolio →
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-copper-400 transition-[width] duration-300 ease-editorial group-hover:w-full" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Blogs;
