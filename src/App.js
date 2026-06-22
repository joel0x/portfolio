import React, { useEffect, useState } from 'react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Marquee from './components/Marquee';
import WhatIDo from './components/WhatIDo';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Article from './components/Article';

const routeFor = (pathname) => {
  if (/^\/blogs\/?$/.test(pathname)) return { name: 'blogs' };
  const m = pathname.match(/^\/blogs\/([^/]+)\/?$/);
  if (m) return { name: 'article', slug: decodeURIComponent(m[1]) };
  return { name: 'home' };
};

function App() {
  const [route, setRoute] = useState(() => routeFor(window.location.pathname));

  useEffect(() => {
    const onPop = () => setRoute(routeFor(window.location.pathname));
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  if (route.name === 'article') {
    return (
      <div className="bg-bg text-ink min-h-screen">
        <Article slug={route.slug} />
      </div>
    );
  }

  if (route.name === 'blogs') {
    return (
      <div className="bg-bg text-ink min-h-screen">
        <Blogs />
      </div>
    );
  }

  return (
    <div className="bg-bg text-ink min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Metrics />
      <Marquee />
      <WhatIDo />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
