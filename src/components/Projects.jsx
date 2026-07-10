import React, { useState } from 'react';
import { Sparkles, ArrowRight, BookOpen } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export default function Projects({ onOpenCaseStudy }) {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (projectId) => {
    setImageErrors((prev) => ({ ...prev, [projectId]: true }));
  };
  // Color presets for gradients behind cards if images are loading/missing
  const gradientPresets = {
    'sippe-coffee': 'from-amber-900/40 via-yellow-950/20 to-[#050816]',
    'nyra-skincare': 'from-rose-950/40 via-orange-950/20 to-[#050816]',
    'travel-journal': 'from-orange-900/40 via-amber-950/20 to-[#050816]',
    'icecream-inventory': 'from-violet-900/40 via-fuchsia-950/20 to-[#050816]',
  };

  return (
    <section id="featured" className="py-24 relative overflow-hidden bg-dot-pattern">
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>03 . Featured Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Branding Case Studies
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Selected identity designs merging market strategy with vector art and premium packaging layouts.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Large Grid of Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group glassmorphism rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between shadow-2xl relative transition-all duration-300 hover:scale-[1.02] hover:border-violet-500/25 hover:shadow-violet-900/10 cursor-pointer"
              onClick={() => onOpenCaseStudy(project.id)}
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                {/* Fallback Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradientPresets[project.id] || 'from-violet-950 to-indigo-950'} flex flex-col items-center justify-center p-6 text-center`}>
                  <BookOpen className="w-12 h-12 text-white/10 mb-3 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-semibold text-slate-400 group-hover:text-slate-300 transition-colors">Click to read case study</span>
                </div>

                {/* Cover Image */}
                {!imageErrors[project.id] && (
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover relative z-10 transition-transform duration-500 group-hover:scale-105"
                    onError={() => handleImageError(project.id)}
                  />
                )}

                {/* Project Tag */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#050816]/80 backdrop-blur-md border border-white/10 text-xs font-bold text-slate-200">
                  {project.category}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col justify-between flex-grow text-left">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tags and CTA */}
                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-slate-400 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read Button */}
                  <div className="flex items-center gap-1.5 text-xs font-bold text-violet-400 group-hover:text-violet-300 group-hover:translate-x-1 transition-all">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
