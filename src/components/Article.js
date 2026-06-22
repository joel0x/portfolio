import React, { useEffect } from 'react';
import posts from '../data/posts.json';

const navigate = (e, href) => {
  e.preventDefault();
  if (window.location.pathname === href) return;
  window.history.pushState({}, '', href);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

const Article = ({ slug }) => {
  const idx = posts.findIndex((p) => p.slug === slug);
  const post = idx >= 0 ? posts[idx] : null;
  const next = post ? posts[(idx + 1) % posts.length] : null;

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title.replace(/\.$/, '')} — Joel Machado`;
    return () => {
      document.title = 'Joel Machado';
    };
  }, [post]);

  if (!post) {
    return (
      <main className="min-h-screen bg-bg text-ink flex flex-col items-center justify-center px-6 text-center">
        <h1
          className="font-serif font-light text-ink mb-6"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
        >
          Post not found
        </h1>
        <a
          href="/blogs"
          onClick={(e) => navigate(e, '/blogs')}
          className="font-mono text-[12px] tracking-[0.2em] uppercase text-copper-500 hover:text-copper-400"
        >
          ← Back to all posts
        </a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-bg text-ink">
      <nav className="fixed top-0 left-0 right-0 z-50 py-6 border-b border-paper-200 bg-bg/85 backdrop-blur-md">
        <div className="max-w-page mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            <a
              href="/blogs"
              onClick={(e) => navigate(e, '/blogs')}
              className="font-mono text-[12px] tracking-[0.2em] uppercase text-paper-500 hover:text-ink transition-colors duration-200 ease-editorial"
            >
              ← All Posts
            </a>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper-500 hover:text-copper-500 transition-colors duration-200 ease-editorial"
            >
              View on {post.publication} ↗
            </a>
          </div>
        </div>
      </nav>

      <article className="pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-[760px] mx-auto px-5 sm:px-8">
          <div className="mb-10 md:mb-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-paper-500">
                {post.publication}
              </span>
              <span className="w-1 h-1 rounded-full bg-paper-300" />
              <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-paper-500">
                {post.date}
              </span>
            </div>
            <h1
              className="font-serif font-light leading-[1.05] tracking-[-0.025em] text-ink mb-6"
              style={{
                fontSize: 'clamp(34px, 5.4vw, 64px)',
                fontVariationSettings: '"opsz" 96, "SOFT" 50',
              }}
            >
              {post.title.replace(/\.$/, '')}
              <span
                className="italic text-copper-500"
                style={{ fontStyle: 'italic' }}
              >
                .
              </span>
            </h1>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[11px] tracking-wider px-3 py-1.5 border border-paper-300 rounded-full text-paper-700 bg-paper-50"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div
            className="prose-article"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          <div className="mt-16 pt-10 border-t border-paper-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.18em] uppercase text-paper-500 hover:text-copper-500 transition-colors duration-200 ease-editorial"
            >
              Originally published on {post.publication} ↗
            </a>
            {next && (
              <a
                href={`/blogs/${next.slug}`}
                onClick={(e) => navigate(e, `/blogs/${next.slug}`)}
                className="group max-w-md text-left"
              >
                <span className="block font-mono text-[10px] tracking-[0.2em] uppercase text-paper-500 mb-1">
                  Next →
                </span>
                <span className="block font-serif text-lg text-ink group-hover:text-copper-500 transition-colors duration-200 ease-editorial leading-snug">
                  {next.title.replace(/\.$/, '')}
                </span>
              </a>
            )}
          </div>
        </div>
      </article>

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
              href="/blogs"
              onClick={(e) => navigate(e, '/blogs')}
              className="group relative font-mono text-[11px] tracking-[0.18em] uppercase text-paper-400 hover:text-copper-400 transition-colors duration-200 ease-editorial"
            >
              All Posts →
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Article;
