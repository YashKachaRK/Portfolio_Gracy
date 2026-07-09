import React, { useState } from 'react';
import { Smartphone, Layout, ListFilter, Compass, GitMerge } from 'lucide-react';
import { uiuxProjects } from '../data/portfolioData';

const FigmaIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 17C10.5 12.3 14.3 8.5 19 8.5C23.7 8.5 27.5 12.3 27.5 17C27.5 21.7 23.7 25.5 19 25.5C14.3 25.5 10.5 21.7 10.5 17Z" fill="#F24E1E"/>
    <path d="M10.5 41.5C10.5 36.8 14.3 33 19 33C23.7 33 27.5 36.8 27.5 41.5C27.5 46.2 23.7 50 19 50C14.3 50 10.5 46.2 10.5 41.5Z" fill="#1ABC9C"/>
    <path d="M2 17C2 21.7 5.8 25.5 10.5 25.5H19V8.5H10.5C5.8 8.5 2 12.3 2 17Z" fill="#F24E1E"/>
    <path d="M2 41.5C2 46.2 5.8 50 10.5 50H19V33H10.5C5.8 33 2 36.8 2 41.5Z" fill="#0ACF83"/>
    <path d="M19 25.5H27.5C32.2 25.5 36 21.7 36 17C36 12.3 32.2 8.5 27.5 8.5H19V25.5Z" fill="#FF7262"/>
  </svg>
);

// Map icons to UIUX categories
const getCategoryIcon = (title) => {
  if (title.includes('Mobile')) return <Smartphone className="w-5 h-5" />;
  if (title.includes('Web')) return <Layout className="w-5 h-5" />;
  if (title.includes('Dashboard')) return <ListFilter className="w-5 h-5" />;
  if (title.includes('Wireframe')) return <GitMerge className="w-5 h-5" />;
  return <Compass className="w-5 h-5" />;
};

export default function UIUXProjects() {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (title) => {
    setImageErrors((prev) => ({ ...prev, [title]: true }));
  };
  return (
    <section id="uiux" className="py-24 relative overflow-hidden bg-dot-pattern">
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <FigmaIcon className="w-4 h-4" />
            <span>04 . UI/UX Interface Showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Digital Experience Design
          </h2>
          <p className="text-slate-400 text-sm mt-2 max-w-xl">
            Responsive frameworks and application designs crafted meticulously in <strong className="text-violet-300">Figma</strong>, focusing on user journeys and accessibility.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          {/* Side Info card */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="glassmorphism p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 blur-2xl rounded-full" />
              
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-450 mb-6">
                <FigmaIcon className="w-6 h-6" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                Designed in Figma
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {uiuxProjects.description}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-450 leading-relaxed">
                    <strong>Auto-Layout &amp; Variables:</strong> Build components that dynamically scale to fit multiple device screens.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <p className="text-xs text-slate-450 leading-relaxed">
                    <strong>Atomic Design Systems:</strong> Construct components starting from base tokens (color, type) up to templates.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of UI/UX categories */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {uiuxProjects.items.map((item) => (
              <div
                key={item.title}
                className="group glassmorphism rounded-2xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-violet-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-violet-950/10"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-white/5">
                  {!imageErrors[item.title] ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      onError={() => handleImageError(item.title)}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 via-indigo-950/20 to-[#050816] flex flex-col items-center justify-center p-6 text-center">
                      <Layout className="w-12 h-12 text-white/10 mb-2" />
                      <span className="text-xs text-slate-500">Image failed to load</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d22] via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                        {getCategoryIcon(item.title)}
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-6">
                      {item.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.highlights.map((hl) => (
                        <span
                          key={hl}
                          className="text-[10px] font-semibold text-slate-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md"
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
