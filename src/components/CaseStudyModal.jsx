import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Copy, Check, ChevronRight, ChevronLeft, BookOpen, Layers, 
  ZoomIn, ZoomOut, Image as ImageIcon 
} from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export default function CaseStudyModal({ projectId, onClose }) {
  const [copiedColor, setCopiedColor] = useState(null);
  const [activeSection, setActiveSection] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isPlaying = false; // Slideshow play/pause state placeholder
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  const project = featuredProjects.find((p) => p.id === projectId);

  const getSectionImages = (sectionId) => {
    if (!project) return [];

    if (project.caseStudy?.sectionImages && project.caseStudy.sectionImages[sectionId]) {
      return project.caseStudy.sectionImages[sectionId];
    }

    if (project.id === 'sippe-coffee') {
      switch (sectionId) {
        case 'overview':
          return ['/image/Sippe_page-0001.jpg', '/image/Sippe_page-0002.jpg'];
        case 'moodboard':
          return ['/image/Sippe_page-0004.jpg'];
        case 'logo':
          return ['/image/Sippe_page-0003.jpg'];
        case 'colors':
          return ['/image/Sippe_page-0005.jpg'];
        case 'typography':
          return ['/image/Sippe_page-0006.jpg'];
        case 'packaging':
          return ['/image/Sippe_page-0007.jpg', '/image/Sippe_page-0015.jpg'];
        case 'menu':
          return ['/image/Sippe_page-0008.jpg'];
        case 'mockups':
          return [
            '/image/Sippe_page-0012.jpg',
            '/image/Sippe_page-0013.jpg',
            '/image/Sippe_page-0014.jpg',
            '/image/Sippe_page-0015.jpg'
          ];
        case 'social-media':
          return [
            '/image/Sippe_page-0009.jpg',
            '/image/Sippe_page-0010.jpg',
            '/image/Sippe_page-0011.jpg'
          ];
        default:
          return [];
      }
    }

    if (project.id === 'nyra-skincare') {
      switch (sectionId) {
        case 'overview':
          return ['/image/NYARA/NYRA_page-0001.jpg'];
        case 'brand-story':
          return ['/image/NYARA/NYRA_page-0002.jpg'];
        case 'logo':
          return ['/image/NYARA/NYRA_page-0003.jpg', '/image/NYARA/NYRA_page-0004.jpg'];
        case 'colors':
          return ['/image/NYARA/NYRA_page-0005.jpg', '/image/NYARA/NYRA_page-0008.jpg'];
        case 'typography':
          return ['/image/NYARA/NYRA_page-0006.jpg'];
        case 'packaging':
          return ['/image/NYARA/NYRA_page-0007.jpg'];
        case 'labels':
          return ['/image/NYARA/NYRA_page-0008.jpg'];
        case 'social-media':
          return ['/image/NYARA/NYRA_page-0010.jpg', '/image/NYARA/NYRA_page-0011.jpg'];
        default:
          return [];
      }
    }

    if (project.id === 'travel-journal') {
      switch (sectionId) {
        case 'overview':
          return ['/image/Travel Memory/1.png'];
        case 'moodboard':
          return ['/image/Travel Memory/2.png'];
        case 'colors':
          return ['/image/Travel Memory/3.png'];
        case 'packaging':
          return ['/image/Travel Memory/4.png'];
        case 'mockups':
          return ['/image/Travel Memory/4.png'];
        default:
          return [];
      }
    }



    return [];
  };

  const renderSectionImages = (sectionId) => {
    const images = getSectionImages(sectionId);
    if (!images || images.length === 0) return null;

    const allImages = project.caseStudy?.images || [];

    return (
      <div className={`mt-6 grid gap-6 ${
        images.length === 1 
          ? 'grid-cols-1' 
          : images.length === 2 
            ? 'grid-cols-1 sm:grid-cols-2' 
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
      }`}>
        {images.map((img, idx) => {
          const globalIdx = allImages.indexOf(img);
          return (
            <div 
              key={img} 
              className="relative rounded-2xl overflow-hidden border border-white/5 bg-[#03050c] shadow-lg group hover:border-violet-500/30 transition-all cursor-zoom-in"
              onClick={() => {
                if (globalIdx !== -1) {
                  setCurrentSlide(globalIdx);
                  setIsLightboxOpen(true);
                  setZoomScale(1);
                }
              }}
            >
              <img 
                src={img} 
                alt={`${project.title} - ${sectionId} image ${idx + 1}`} 
                className="w-full h-auto object-contain hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    // Disable body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const copyToClipboard = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 1500);
  };

  const caseStudy = project?.caseStudy;

  const numberedSectionIds = caseStudy ? [
    'overview',
    caseStudy.research && 'research',
    caseStudy.brandStory && 'brand-story',
    caseStudy.designPhilosophy && 'philosophy',
    caseStudy.moodboard && 'moodboard',
    caseStudy.logo && 'logo',
    caseStudy.colorPalette && 'colors',
    caseStudy.typography && 'typography',
    caseStudy.packaging && 'packaging',
    caseStudy.labels && 'labels',
    caseStudy.menu && 'menu',
    caseStudy.printAssets && 'print-assets',
    caseStudy.mockups && 'mockups',
    caseStudy.socialMedia && 'social-media',
    caseStudy.brandApplications && 'applications',
    caseStudy.finalBranding && 'final-wrap',
  ].filter(Boolean) : [];

  const getSectionNumberStr = (sectionId) => {
    const idx = numberedSectionIds.indexOf(sectionId);
    if (idx === -1) return '';
    const num = idx + 1;
    return num < 10 ? `0${num}.` : `${num}.`;
  };

  useEffect(() => {
    let interval;
    if (isPlaying && caseStudy?.images) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % caseStudy.images.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, caseStudy?.images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!caseStudy?.images) return;
      if (e.key === 'ArrowRight') {
        setCurrentSlide((prev) => (prev + 1) % caseStudy.images.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev - 1 + caseStudy.images.length) % caseStudy.images.length);
      } else if (e.key === 'Escape') {
        if (isLightboxOpen) {
          setIsLightboxOpen(false);
          setZoomScale(1);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [caseStudy?.images, isLightboxOpen, onClose]);

  // Set default active section to overview
  useEffect(() => {
    setActiveSection('overview');
  }, [caseStudy]);

  // Determine sections based on available data keys
  const sections = caseStudy ? [
    { id: 'overview', label: caseStudy.overviewLabel || 'Overview' },
    { id: 'problem-goal', label: caseStudy.problemGoalLabel || 'Problem & Goal' },
    caseStudy.research && { id: 'research', label: caseStudy.researchLabel || 'Research' },
    caseStudy.brandStory && { id: 'brand-story', label: caseStudy.brandStoryLabel || 'Brand Story' },
    caseStudy.designPhilosophy && { id: 'philosophy', label: caseStudy.philosophyLabel || 'Design Philosophy' },
    caseStudy.moodboard && { id: 'moodboard', label: caseStudy.moodboardLabel || 'Moodboard' },
    caseStudy.logo && { id: 'logo', label: caseStudy.logoLabel || 'Logo Design' },
    caseStudy.colorPalette && { id: 'colors', label: caseStudy.colorsLabel || 'Colors & Palette' },
    caseStudy.typography && { id: 'typography', label: caseStudy.typographyLabel || 'Typography' },
    caseStudy.packaging && { id: 'packaging', label: caseStudy.packagingLabel || 'Packaging' },
    caseStudy.labels && { id: 'labels', label: caseStudy.labelsLabel || 'Labels & Details' },
    caseStudy.menu && { id: 'menu', label: caseStudy.menuLabel || 'Menu & Print' },
    caseStudy.printAssets && { id: 'print-assets', label: caseStudy.printAssetsLabel || 'Print Assets' },
    caseStudy.mockups && { id: 'mockups', label: caseStudy.mockupsLabel || 'Mockups' },
    caseStudy.socialMedia && { id: 'social-media', label: caseStudy.socialMediaLabel || 'Social Media' },
    caseStudy.brandApplications && { id: 'applications', label: caseStudy.brandApplicationsLabel || 'Applications' },
    caseStudy.finalBranding && { id: 'final-wrap', label: caseStudy.finalLabel || 'Final Branding' },
  ].filter(Boolean) : [];

  const scrollToAnchor = (id) => {
    const el = document.getElementById(`cs-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(id);
    }
  };

  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816]/90 backdrop-blur-md p-4 md:p-8"
    >
      {/* Background click to close */}
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose} />

      {/* Main Drawer Shell */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 15 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.95, opacity: 0, y: 15 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="relative w-full h-full max-w-6xl md:h-[90vh] bg-[#090d22] border border-white/5 rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col"
      >
        {/* Header bar */}
        <div className="sticky top-0 bg-[#090d22]/80 backdrop-blur-md border-b border-white/5 py-4 px-6 flex justify-between items-center z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-wider bg-violet-600/10 px-3 py-1 rounded-full border border-violet-500/20">
              {project.category}
            </span>
            <ChevronRight className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-semibold text-slate-400 hidden sm:inline">Case Study Details</span>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-all"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Columns */}
        <div className="flex-1 overflow-hidden flex">
          {/* Left Column: Sticky Index Navigator (Desktop) */}
          <aside className="hidden lg:block w-64 bg-[#06091b] border-r border-white/5 p-6 overflow-y-auto text-left">
            <div className="flex items-center gap-2 mb-6 px-2">
              <BookOpen className="w-4 h-4 text-violet-400" />
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Index</span>
            </div>
            <nav className="flex flex-col gap-1">
              {sections.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToAnchor(sec.id)}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm font-semibold transition-all ${
                    activeSection === sec.id
                      ? 'bg-violet-600/15 text-violet-300 border-l-2 border-violet-500'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Right Column: Case Study Contents */}
          <div className="flex-1 overflow-y-auto p-6 md:p-12 space-y-12 text-left">
            {/* Project Header Banner */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{project.title}</h1>
              <p className="text-lg text-slate-350 italic font-medium">{project.tagline}</p>
              <div className="w-20 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 rounded-full" />
            </div>

            {/* Overview */}
            <section id="cs-overview" className="scroll-mt-8 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('overview')}</span> Overview
              </h2>
              <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-base">
                {caseStudy.overview}
              </div>
              {renderSectionImages('overview')}
            </section>

            {/* Problem & Goal */}
            <section id="cs-problem-goal" className="scroll-mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 md:p-8 rounded-2xl bg-red-950/10 border border-red-900/20 space-y-3">
                <h3 className="text-lg font-bold text-red-300">The Problem</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{caseStudy.problem}</p>
              </div>
              <div className="p-6 md:p-8 rounded-2xl bg-emerald-950/10 border border-emerald-900/20 space-y-3">
                <h3 className="text-lg font-bold text-emerald-300">The Goal</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{caseStudy.goal}</p>
              </div>
            </section>

            {/* Research */}
            {caseStudy.research && (
              <section id="cs-research" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('research')}</span> {caseStudy.researchLabel || 'Research & Insights'}
                </h2>
                <div className="glassmorphism p-6 md:p-8 rounded-3xl border border-white/5 space-y-4">
                  <ul className="space-y-3 text-slate-300">
                    {caseStudy.research.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {renderSectionImages('research')}
              </section>
            )}

            {/* Brand Story (NYRA Skincare specific) */}
            {caseStudy.brandStory && (
              <section id="cs-brand-story" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('brand-story')}</span> Brand Story
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.brandStory}
                </div>
                {renderSectionImages('brand-story')}
              </section>
            )}

            {/* Design Philosophy (Aarya Jewellers specific) */}
            {caseStudy.designPhilosophy && (
              <section id="cs-philosophy" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('philosophy')}</span> Design Philosophy
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.designPhilosophy}
                </div>
                {renderSectionImages('philosophy')}
              </section>
            )}

            {/* Moodboard */}
            {caseStudy.moodboard && (
              <section id="cs-moodboard" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('moodboard')}</span> Moodboard Vibe
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudy.moodboard.map((item, idx) => (
                    <div key={idx} className="glassmorphism p-5 rounded-2xl border border-white/5 flex flex-col items-center justify-center text-center">
                      <span className="text-sm font-semibold text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
                {renderSectionImages('moodboard')}
              </section>
            )}

            {/* Logo */}
            {caseStudy.logo && (
              <section id="cs-logo" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('logo')}</span> Logo Design Concept
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.logo}
                </div>
                {renderSectionImages('logo')}
              </section>
            )}

            {/* Color Palette */}
            {caseStudy.colorPalette && (
              <section id="cs-colors" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('colors')}</span> {caseStudy.colorsLabel || 'Colors & Branding Palette'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  {caseStudy.colorPalette.map((color) => (
                    <div key={color.hex} className="glassmorphism rounded-2xl border border-white/5 overflow-hidden flex flex-col">
                      <div className="h-24 w-full" style={{ backgroundColor: color.hex }} />
                      <div className="p-4 space-y-1">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{color.name}</span>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-bold text-white uppercase">{color.hex}</span>
                          <button
                            onClick={() => copyToClipboard(color.hex)}
                            className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                            title="Copy HEX code"
                          >
                            {copiedColor === color.hex ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 leading-normal">{color.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {renderSectionImages('colors')}
              </section>
            )}

            {/* Typography */}
            {caseStudy.typography && (
              <section id="cs-typography" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('typography')}</span> Typography Systems
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 space-y-4">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Primary Typeface</h4>
                    <p className="text-lg font-bold text-white">{caseStudy.typography.primary}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Secondary Typeface</h4>
                    <p className="text-lg font-bold text-white">{caseStudy.typography.secondary}</p>
                  </div>
                </div>
                {renderSectionImages('typography')}
              </section>
            )}

            {/* Packaging */}
            {caseStudy.packaging && (
              <section id="cs-packaging" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('packaging')}</span> Packaging Identity
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.packaging}
                </div>
                {renderSectionImages('packaging')}
              </section>
            )}

            {/* Labels (NYRA Skincare specific) */}
            {caseStudy.labels && (
              <section id="cs-labels" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('labels')}</span> Product Labels
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.labels}
                </div>
                {renderSectionImages('labels')}
              </section>
            )}

            {/* Menu (Sippe Coffee specific) */}
            {caseStudy.menu && (
              <section id="cs-menu" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('menu')}</span> Menu &amp; Physical Collateral
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.menu}
                </div>
                {renderSectionImages('menu')}
              </section>
            )}

            {/* Print Assets (Aarya Jewellers specific) */}
            {caseStudy.printAssets && (
              <section id="cs-print-assets" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('print-assets')}</span> Print Collaterals
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.printAssets}
                </div>
                {renderSectionImages('print-assets')}
              </section>
            )}

            {/* Mockups */}
            {caseStudy.mockups && (
              <section id="cs-mockups" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('mockups')}</span> {caseStudy.mockupsLabel || 'Brand Mockups'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {caseStudy.mockups.map((item, idx) => (
                    <div key={idx} className="glassmorphism p-6 rounded-2xl border border-white/5 flex gap-3 items-center">
                      <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
                {renderSectionImages('mockups')}
              </section>
            )}

            {/* Social Media */}
            {caseStudy.socialMedia && (
              <section id="cs-social-media" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('social-media')}</span> {caseStudy.socialMediaLabel || 'Social Media & Grid Strategy'}
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.socialMedia}
                </div>
                {renderSectionImages('social-media')}
              </section>
            )}

            {/* Brand Applications (NYRA Skincare & Aarya Jewellers specific) */}
            {caseStudy.brandApplications && (
              <section id="cs-applications" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('applications')}</span> {caseStudy.brandApplicationsLabel || 'Brand Applications'}
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/5 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.brandApplications}
                </div>
                {renderSectionImages('applications')}
              </section>
            )}

            {/* Final Branding / Conclusion */}
            {caseStudy.finalBranding && (
              <section id="cs-final-wrap" className="scroll-mt-8 space-y-4">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <span className="text-violet-400 font-normal text-lg">{getSectionNumberStr('final-wrap')}</span> {caseStudy.finalLabel || 'Final Branding Impact'}
                </h2>
                <div className="p-6 md:p-8 rounded-2xl bg-violet-950/10 border border-violet-900/20 text-slate-300 leading-relaxed text-sm">
                  {caseStudy.finalBranding}
                </div>
                {renderSectionImages('final-wrap')}
              </section>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox full-screen overlay */}
      <AnimatePresence>
        {isLightboxOpen && caseStudy.images && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-60 bg-[#020208]/98 backdrop-blur-lg flex flex-col justify-between p-4 md:p-6 select-none"
          >
            {/* Lightbox Header */}
            <div className="flex justify-between items-center w-full pb-4 border-b border-white/5">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-violet-400" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">
                  {project.title} - Slide {currentSlide + 1} of {caseStudy.images.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomScale(prev => Math.max(0.5, prev - 0.25))}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomScale(1)}
                  className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  title="Reset Zoom"
                >
                  {Math.round(zoomScale * 100)}%
                </button>
                <button
                  onClick={() => setZoomScale(prev => Math.min(3, prev + 0.25))}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <div className="w-[1px] h-6 bg-white/10 mx-2" />
                <button
                  onClick={() => {
                    setIsLightboxOpen(false);
                    setZoomScale(1);
                  }}
                  className="p-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg shadow-violet-600/30 cursor-pointer"
                  aria-label="Close presentation view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Body */}
            <div className="flex-grow relative flex items-center justify-center overflow-hidden my-4">
              {/* Navigation Left */}
              <button
                onClick={() => {
                  setCurrentSlide(prev => (prev - 1 + caseStudy.images.length) % caseStudy.images.length);
                  setZoomScale(1);
                }}
                className="absolute left-4 p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:scale-105 transition-all z-10 cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
              </button>

              {/* Slide Image Container */}
              <div className="w-full h-full flex items-center justify-center overflow-auto p-4">
                <motion.img
                  key={currentSlide}
                  src={caseStudy.images[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  style={{ transform: `scale(${zoomScale})` }}
                  className="max-w-[90vw] max-h-[70vh] object-contain rounded-lg shadow-2xl transition-transform duration-200 ease-out origin-center"
                />
              </div>

              {/* Navigation Right */}
              <button
                onClick={() => {
                  setCurrentSlide(prev => (prev + 1) % caseStudy.images.length);
                  setZoomScale(1);
                }}
                className="absolute right-4 p-4 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 hover:scale-105 transition-all z-10 cursor-pointer"
              >
                <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>

            {/* Lightbox Footer (filmstrip) */}
            <div className="w-full max-w-4xl mx-auto py-2 border-t border-white/5 overflow-x-auto select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex justify-start sm:justify-center gap-2">
              {caseStudy.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentSlide(idx);
                    setZoomScale(1);
                  }}
                  className={`relative flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    currentSlide === idx 
                      ? 'border-violet-500 scale-105 shadow-lg shadow-violet-500/25' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
