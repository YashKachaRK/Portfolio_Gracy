import React from 'react';
import { Cpu, Award, Zap, Code, Palette } from 'lucide-react';
import { skills } from '../data/portfolioData';

// Custom inline SVG icons for design tools to avoid broken external links
const ToolIcon = ({ name }) => {
  if (name === 'Figma') {
    return (
      <svg className="w-8 h-8" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0C9.61 0 2 7.61 2 17C2 21.84 4.02 26.2 7.28 29.28C4.02 32.36 2 36.72 2 41.56C2 50.95 9.61 58.56 19 58.56C28.39 58.56 36 50.95 36 41.56V17C36 7.61 28.39 0 19 0Z" fill="none"/>
        <path d="M10.5 17C10.5 12.3 14.3 8.5 19 8.5C23.7 8.5 27.5 12.3 27.5 17C27.5 21.7 23.7 25.5 19 25.5C14.3 25.5 10.5 21.7 10.5 17Z" fill="#F24E1E"/>
        <path d="M10.5 41.5C10.5 36.8 14.3 33 19 33C23.7 33 27.5 36.8 27.5 41.5C27.5 46.2 23.7 50 19 50C14.3 50 10.5 46.2 10.5 41.5Z" fill="#1ABC9C"/>
        <path d="M2 17C2 21.7 5.8 25.5 10.5 25.5H19V8.5H10.5C5.8 8.5 2 12.3 2 17Z" fill="#F24E1E"/>
        <path d="M2 41.5C2 46.2 5.8 50 10.5 50H19V33H10.5C5.8 33 2 36.8 2 41.5Z" fill="#0ACF83"/>
        <path d="M19 25.5H27.5C32.2 25.5 36 21.7 36 17C36 12.3 32.2 8.5 27.5 8.5H19V25.5Z" fill="#FF7262"/>
        <path d="M19 41.5V33H27.5C32.2 33 36 36.8 36 41.5C36 46.2 32.2 50 27.5 50C27.5 50 19 50 19 41.5Z" fill="#1ABC9C"/>
      </svg>
    );
  }
  if (name === 'CorelDRAW') {
    return (
      <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="14" fill="#00A859" fillOpacity="0.1"/>
        <path d="M32 8L12 28L32 56L52 28L32 8Z" stroke="#00A859" strokeWidth="3" strokeLinejoin="round"/>
        <circle cx="32" cy="28" r="8" fill="#00A859"/>
        <line x1="32" y1="28" x2="32" y2="56" stroke="#00A859" strokeWidth="2"/>
        <line x1="12" y1="28" x2="52" y2="28" stroke="#00A859" strokeWidth="2"/>
      </svg>
    );
  }
  if (name === 'Adobe Photoshop') {
    return (
      <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="14" fill="#001C3A"/>
        <rect x="2" y="2" width="60" height="60" rx="12" stroke="#31A8FF" strokeWidth="3"/>
        <text x="32" y="42" fill="#31A8FF" fontSize="24" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Ps</text>
      </svg>
    );
  }
  if (name === 'Adobe Illustrator') {
    return (
      <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="14" fill="#261300"/>
        <rect x="2" y="2" width="60" height="60" rx="12" stroke="#FF9A00" strokeWidth="3"/>
        <text x="32" y="42" fill="#FF9A00" fontSize="24" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Ai</text>
      </svg>
    );
  }
  if (name === 'Canva') {
    return (
      <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="64" height="64" rx="14" fill="url(#canva-grad)"/>
        <text x="32" y="42" fill="#FFFFFF" fontSize="26" fontWeight="bold" fontFamily="sans-serif" fontStyle="italic" textAnchor="middle">C</text>
        <defs>
          <linearGradient id="canva-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7C2AE8"/>
            <stop offset="1" stopColor="#00C4CC"/>
          </linearGradient>
        </defs>
      </svg>
    );
  }
  return <Cpu className="w-8 h-8 text-violet-400" />;
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Visual glowing overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full gradient-bg-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <Zap className="w-4 h-4" />
            <span>02 . Skills &amp; Tools</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            My Creative Arsenal
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Software Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 px-2">
              <Code className="w-5 h-5 text-violet-400" /> Software &amp; Applications
            </h3>
            
            <div className="flex flex-col gap-4">
              {skills.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="glassmorphism p-5 rounded-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all hover:bg-white/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <ToolIcon name={tool.name} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-0.5">{tool.name}</h4>
                      <p className="text-xs text-slate-400">{tool.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Creative Skills */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2 px-2">
              <Palette className="w-5 h-5 text-cyan-400" /> Professional Design Disciplines
            </h3>

            <div className="glassmorphism p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full" />
              <p className="text-slate-350 text-sm leading-relaxed mb-6">
                Through academic projects and agency collaborations, I have built core capabilities 
                across both physical brand environments and digital application design:
              </p>

              {/* Tag Cloud */}
              <div className="flex flex-wrap gap-2.5">
                {skills.designSkills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600/10 border border-violet-500/20 text-violet-300 hover:bg-violet-600/20 hover:border-violet-400/30 transition-all hover:scale-105"
                  >
                    {skill}
                  </div>
                ))}
              </div>

              {/* Decorative callout */}
              <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Continuous Learning</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Regularly updating skills to match evolving UX design trends.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
