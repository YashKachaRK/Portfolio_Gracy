import React from 'react';
import { Palette } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-white/5 bg-[#030612]/60 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        
        {/* Left Side: Brand Logo & Credits */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-violet-600 to-cyan-400 flex items-center justify-center shadow-lg">
            <Palette className="w-3.5 h-3.5 text-white" />
          </div>
          <p className="text-xs text-slate-450">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
