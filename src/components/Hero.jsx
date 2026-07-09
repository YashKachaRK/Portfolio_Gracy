import React, { useState } from 'react';
import { ArrowDown, Mail, Palette } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const [avatarError, setAvatarError] = useState(false);
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-grid-pattern"
    >
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full gradient-bg-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Area */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Greeting Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-semibold mb-6 animate-pulse-slow">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            Available for Freelance & Full-time Roles
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-violet-400 via-indigo-200 to-cyan-300 bg-clip-text text-transparent drop-shadow-sm">
              {personalInfo.name}
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-medium text-slate-300 mb-6">
            {personalInfo.title}
          </h2>

          {/* Introduction Paragraph */}
          <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mb-10">
            {personalInfo.bio} Let's transform your ideas into functional art.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#featured"
              onClick={(e) => scrollToSection(e, 'featured')}
              className="group flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:-translate-y-0.5 transition-all text-base"
            >
              View Portfolio
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 hover:border-white/20 transition-all text-base"
            >
              Contact Me
              <Mail className="w-5 h-5 text-slate-400" />
            </a>
          </div>
        </div>

        {/* Visual Showcase (Avatar / Illustration / Tech Sphere) */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full flex items-center justify-center">
            {/* Background glowing rings */}
            <div className="absolute inset-0 rounded-full border border-white/5 animate-spin-slow" />
            <div className="absolute inset-6 rounded-full border border-violet-500/10 animate-spin-slow [animation-direction:reverse]" />
            <div className="absolute inset-12 rounded-full bg-gradient-to-tr from-violet-600/20 to-cyan-500/20 blur-md pointer-events-none" />

            {/* Glowing spot behind avatar */}
            <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-700 p-1 shadow-2xl shadow-violet-500/30 overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#0b0f24] overflow-hidden flex items-center justify-center relative">
                {/* Visual graphic design elements inside avatar container */}
                <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-cyan-400/20 blur-2xl animate-pulse-slow" />
                <div className="absolute bottom-1/4 right-1/4 w-28 h-28 bg-purple-500/25 blur-2xl animate-pulse-slow [animation-delay:2s]" />
                {!avatarError ? (
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover scale-105 transition-all relative z-10"
                    onError={() => setAvatarError(true)}
                  />
                ) : (
                  /* Fallback Vector Graphic */
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-br from-violet-950/40 to-[#050816]">
                    <Palette className="w-16 h-16 text-violet-400 mb-3 animate-bounce" />
                    <span className="text-xl font-bold font-display text-white">Visual Artist</span>
                    <span className="text-xs text-slate-400 mt-1">&amp; UI/UX Creator</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 right-12 bg-[#0d1127]/90 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl animate-float">
              <div className="w-6 h-6 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 text-xs font-bold">F</div>
              <span className="text-xs font-bold text-slate-200">Figma</span>
            </div>

            <div className="absolute top-1/2 -left-8 bg-[#0d1127]/90 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl animate-float-delayed">
              <div className="w-6 h-6 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 text-xs font-bold">CD</div>
              <span className="text-xs font-bold text-slate-200">CorelDRAW</span>
            </div>

            <div className="absolute -bottom-2 left-1/3 bg-[#0d1127]/90 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl animate-float">
              <div className="w-6 h-6 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold">PS</div>
              <span className="text-xs font-bold text-slate-200">Photoshop</span>
            </div>

            <div className="absolute top-1/3 -right-6 bg-[#0d1127]/90 border border-white/10 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-xl animate-float-delayed">
              <div className="w-6 h-6 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 text-xs font-bold">Ai</div>
              <span className="text-xs font-bold text-slate-200">Illustrator</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
