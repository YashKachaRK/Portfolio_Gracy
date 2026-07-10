import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dot-pattern">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <Mail className="w-4 h-4" />
            <span>06 . Contact Info</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Let's Start a Project
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Centered Details & Socials Card */}
        <div className="flex justify-center">
          <div className="glassmorphism p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl relative max-w-4xl w-full text-left">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl rounded-full" />
            
            <div className="space-y-8">
              <div className="text-center space-y-3">
                <h3 className="text-2xl font-display font-bold text-white">Contact Details</h3>
                <p className="text-sm text-slate-400 leading-relaxed max-w-lg mx-auto">
                  Have a proposal, an idea, or just want to chat? Feel free to reach out directly through any of the channels below.
                </p>
              </div>

              {/* Detail Items grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/20 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-450 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-450 uppercase block">Email Me</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-violet-300 transition-colors break-all">{personalInfo.socials.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.socials.phone}`}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-450 uppercase block">Call / WhatsApp</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">{personalInfo.socials.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-500/20 hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-450 uppercase block">Based In</span>
                    <span className="text-sm font-semibold text-slate-200">{personalInfo.location || 'Rajkot, India'}</span>
                  </div>
                </div>
              </div>

              {/* Social Grid */}
              <div className="space-y-4 pt-8 border-t border-white/5 flex flex-col items-center">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connect Online</h4>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-slate-300 hover:text-white hover:border-violet-500/20 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <LinkedinIcon className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href={personalInfo.socials.behance}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-slate-300 hover:text-white hover:border-violet-500/20 hover:bg-white/10 transition-all cursor-pointer"
                  >
                    <span className="w-4 h-4 text-blue-500 font-extrabold text-sm flex items-center justify-center">Bē</span>
                    <span>Behance</span>
                    <ExternalLink className="w-3 h-3 text-slate-500" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
