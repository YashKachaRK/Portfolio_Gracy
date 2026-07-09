import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CaseStudyModal from './components/CaseStudyModal';
import UIUXProjects from './components/UIUXProjects';
import GraphicDesign from './components/GraphicDesign';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Monitor browser back/forward buttons (hash routing helper)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const id = hash.replace('#project/', '');
        setSelectedCaseStudy(id);
      } else {
        setSelectedCaseStudy(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const openCaseStudy = (id) => {
    window.location.hash = `project/${id}`;
    setSelectedCaseStudy(id);
  };

  const closeCaseStudy = () => {
    // Reset to empty hash or section anchor
    window.location.hash = 'featured';
    setSelectedCaseStudy(null);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col antialiased selection:bg-[#7C3AED]/30 selection:text-[#22D3EE]">
      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero />

        {/* About details */}
        <About />

        {/* Software capability charts & design skills */}
        <Skills />

        {/* Featured Branding projects (Case Study triggers) */}
        <Projects onOpenCaseStudy={openCaseStudy} />

        {/* UI/UX Digital Figma Projects */}
        <UIUXProjects />

        {/* Graphic Design items sorted by software tools */}
        <GraphicDesign />

        {/* Education, Experience and Credentials */}
        <Resume />

        {/* Connect Form and credentials */}
        <Contact />
      </main>

      {/* Footer credits and social buttons */}
      <Footer />

      {/* Full-Screen Case Study Modal Drawer */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <CaseStudyModal
            projectId={selectedCaseStudy}
            onClose={closeCaseStudy}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
