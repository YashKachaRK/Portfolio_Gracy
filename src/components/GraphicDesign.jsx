import React, { useState } from 'react';
import { Palette, PenTool, Image, Share2 } from 'lucide-react';
import { graphicDesign } from '../data/portfolioData';

const tabs = [
  { id: 'coreldraw', label: 'CorelDRAW', icon: PenTool, color: 'text-green-400 bg-green-500/10 border-green-500/20' },
  { id: 'photoshop', label: 'Photoshop', icon: Image, color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
  { id: 'illustrator', label: 'Illustrator', icon: Palette, color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
  { id: 'canva', label: 'Canva', icon: Share2, color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
];

export default function GraphicDesign() {
  const [activeTab, setActiveTab] = useState('coreldraw');
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (tab, idx) => {
    setImageErrors((prev) => ({ ...prev, [`${tab}-${idx}`]: true }));
  };

  const activeItems = graphicDesign[activeTab] || [];

  return (
    <section id="graphics" className="py-24 relative overflow-hidden bg-dot-pattern">
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12 text-left">
          <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <Palette className="w-4 h-4" />
            <span>05 . Graphic Design Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Visual Arts &amp; Print Assets
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            A comprehensive gallery of layouts, advertisements, vector assets, and creatives organized by the tool utilized.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/20 border border-violet-500/20 scale-102'
                    : 'bg-white/5 border border-white/5 text-slate-450 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of graphics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activeItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative aspect-square rounded-2xl border border-white/5 bg-slate-900 overflow-hidden flex flex-col justify-end shadow-xl hover:border-violet-500/20 transition-all duration-300 cursor-pointer"
            >
              {/* Product Art */}
              {!imageErrors[`${activeTab}-${idx}`] ? (
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  onError={() => handleImageError(activeTab, idx)}
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-indigo-950/20 to-[#050816] flex flex-col items-center justify-center p-6 text-center">
                  <Palette className="w-12 h-12 text-white/10 mb-2" />
                  <span className="text-xs text-slate-500">Image failed to load</span>
                </div>
              )}

              {/* Cover shadow mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/55 to-transparent transition-opacity duration-300 opacity-60 group-hover:opacity-90" />

              {/* Text Card content */}
              <div className="relative z-10 p-6 text-left transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-[11px] text-slate-450 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Tool badge identifier */}
              <div className="absolute top-4 right-4 z-20">
                <div className={`px-2.5 py-0.5 rounded-full border text-[10px] font-bold ${tabs.find(t => t.id === activeTab)?.color}`}>
                  {tabs.find(t => t.id === activeTab)?.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
