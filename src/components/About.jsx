import React from 'react';
import { User, Award, Compass, Heart, Crosshair } from 'lucide-react';

const strengths = [
  {
    title: 'Empathy-driven UX',
    desc: 'Understanding user frustrations to create solutions that simplify daily tasks.',
    color: 'from-violet-500/20 to-violet-500/5',
    borderColor: 'border-violet-500/30'
  },
  {
    title: 'Pixel-perfect execution',
    desc: 'Translating concepts into clean, developer-ready mockups with complete specifications.',
    color: 'from-emerald-500/20 to-emerald-500/5',
    borderColor: 'border-emerald-500/30'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-dot-pattern">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <User className="w-4 h-4" />
            <span>01 . About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Behind the Pixels
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Who I Am & Journey */}
          <div className="lg:col-span-6 flex flex-col gap-8 text-slate-350 text-left">
            <div className="glassmorphism p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 blur-2xl rounded-full" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Compass className="w-5 h-5 text-violet-400" /> Who I Am &amp; My Journey
              </h3>
              <p className="leading-relaxed mb-4 text-slate-300">
                Hi, I'm Gracy. My design journey began with a curiosity for how art influences decisions. 
                I started by designing logos and visual branding, which quickly evolved into a passion 
                for user experience. I love taking complex, messy problems and distilling them into clean, 
                functional digital interfaces.
              </p>
              <p className="leading-relaxed text-slate-300">
                During my design education at NID, I spent hours studying typography, layout grids, 
                and packaging guidelines. I believe a good designer doesn't just make things look pretty; 
                they make systems that feel effortless.
              </p>
            </div>

            <div className="glassmorphism p-8 rounded-3xl border border-white/5 shadow-xl relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-500/5 blur-2xl rounded-full" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-cyan-400" /> What I Enjoy Designing
              </h3>
              <p className="leading-relaxed mb-4 text-slate-300">
                I thrive in the intersection of **UI/UX systems** and **brand packaging**. Whether it is 
                structuring standard responsive layouts in Figma, designing vector motifs in CorelDRAW, or 
                crafting physical labels that stand out on retail shelves, I enjoy visual work that creates 
                emotional connections.
              </p>
              <h3 className="text-xl font-bold text-white mt-6 mb-3 flex items-center gap-2">
                <Crosshair className="w-5 h-5 text-pink-450" /> Career Goal
              </h3>
              <p className="leading-relaxed text-slate-300">
                To work as a creative product strategist bridging digital experiences and brand identities. 
                I aim to build cohesive user experiences across both digital screens and physical product touchpoints.
              </p>
            </div>
          </div>

          {/* Right Column: Strengths Grid */}
          <div className="lg:col-span-6 flex flex-col gap-6 text-left">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2.5 px-2">
              <Award className="w-5 h-5 text-violet-400" /> My Design Strengths
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {strengths.map((strength) => (
                <div
                  key={strength.title}
                  className={`glassmorphism glassmorphism-hover p-6 rounded-3xl border ${strength.borderColor} bg-gradient-to-br ${strength.color} flex flex-col items-start`}
                >
                  <h4 className="text-lg font-bold text-white mb-2">{strength.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{strength.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
