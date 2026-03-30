import React from 'react';
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

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">
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
