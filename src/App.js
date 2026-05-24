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

const isBlogsPath = (pathname) => /^\/blogs\/?$/.test(pathname);

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  if (isBlogsPath(path)) {
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
