import React from "react";
import { FileText, GraduationCap, Download } from "lucide-react";
import { resume } from "../data/portfolioData";
export default function Resume() {
  return (
    <section
      id="resume"
      className="py-24 relative overflow-hidden bg-dot-pattern"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full gradient-bg-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <FileText className="w-4 h-4" />
            <span>05 . Qualifications &amp; History</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            My Professional Story
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mt-4 rounded-full" />
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Education Column */}
          <div className="lg:col-span-12 space-y-8">
            <h3 className="text-xl font-bold text-white flex items-center gap-2.5 px-2">
              <GraduationCap className="w-5 h-5 text-cyan-450" /> Education
            </h3>

            <div className="relative border-l-2 border-slate-800 ml-4 pl-8 space-y-8">
              {resume.education.map((edu, idx) => (
                <div key={idx} className="relative group">
                  <span className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-450 transition-all group-hover:bg-cyan-450 group-hover:scale-110" />

                  <div className="glassmorphism p-6 rounded-2xl border border-white/5 shadow-xl transition-all group-hover:border-cyan-500/25">
                    <span className="text-xs font-bold text-cyan-400">
                      {edu.duration}
                    </span>
                    <h4 className="text-lg font-bold text-white mt-1">
                      {edu.degree}
                    </h4>
                    <span className="text-sm font-semibold text-slate-350">
                      {edu.institution}
                    </span>
                    <p className="text-xs text-slate-400 leading-relaxed mt-3">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://drive.google.com/file/d/1alQyA3ZXX14E1Daf0kvcwILRS4MucJxD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold shadow-lg shadow-violet-500/20 hover:shadow-violet-500/35 hover:-translate-y-0.5 transition-all text-base cursor-pointer"
          >
            <Download className="w-5 h-5 group-hover:scale-105 transition-transform" />
            <span>📄 Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}
