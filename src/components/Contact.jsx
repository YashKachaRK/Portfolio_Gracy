import React, { useState } from 'react';
import { Mail, Phone, MapPin, ExternalLink, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const LinkedinIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    let errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    
    if (!formData.message.trim()) errs.message = 'Message cannot be empty';
    return errs;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-dot-pattern">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16 text-left">
          <div className="flex items-center gap-2 text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
            <Mail className="w-4 h-4" />
            <span>07 . Contact Info</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Let's Start a Project
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Left Column: Details & Socials */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-display font-bold text-white">Contact Details</h3>
              <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
                Have a proposal, an idea, or just want to chat? Drop a line, and I will get back to you within 24 hours.
              </p>

              {/* Detail Items */}
              <div className="space-y-4 pt-4">
                <a
                  href={`mailto:${personalInfo.socials.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-violet-500/20 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-450 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-450 uppercase block">Email Me</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-violet-300 transition-colors">{personalInfo.socials.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${personalInfo.socials.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-500/20 hover:bg-white/10 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-600/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-450 uppercase block">Call / WhatsApp</span>
                    <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">{personalInfo.socials.phone}</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-pink-500/20 hover:bg-white/10 transition-all group">
                  <div className="w-10 h-10 rounded-xl bg-pink-600/10 border border-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-450 uppercase block">Based In</span>
                    <span className="text-sm font-semibold text-slate-200">Mumbai, India</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Connect Online</h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-slate-300 hover:text-white hover:border-violet-500/20 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <LinkedinIcon className="w-4 h-4 text-sky-400" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>

                <a
                  href={personalInfo.socials.behance}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 text-xs font-semibold text-slate-300 hover:text-white hover:border-violet-500/20 hover:bg-white/10 transition-all cursor-pointer"
                >
                  <span className="w-4 h-4 text-blue-500 font-extrabold text-sm flex items-center justify-center">Bē</span>
                  <span>Behance</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glassmorphism p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-2xl rounded-full" />
              
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400 mb-2">
                    <CheckCircle2 className="w-8 h-8 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-sm text-slate-400 max-w-sm">
                    Thank you. Your message has been sent successfully. I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-bold text-slate-300 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl bg-[#0b0f24] border ${errors.name ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-violet-500'} text-slate-200 outline-none text-sm transition-all focus:bg-[#0d122d] focus:shadow-md focus:shadow-violet-900/10`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-400 flex items-center gap-1.5 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john.doe@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl bg-[#0b0f24] border ${errors.email ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-violet-500'} text-slate-200 outline-none text-sm transition-all focus:bg-[#0d122d] focus:shadow-md focus:shadow-violet-900/10`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-400 flex items-center gap-1.5 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-wider">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Hi Gracy, I'd like to collaborate on..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-4 rounded-xl bg-[#0b0f24] border ${errors.message ? 'border-red-500/40 focus:border-red-500' : 'border-white/5 focus:border-violet-500'} text-slate-200 outline-none text-sm transition-all focus:bg-[#0d122d] focus:shadow-md focus:shadow-violet-900/10 resize-none`}
                    />
                    {errors.message && (
                      <span className="text-xs text-red-400 flex items-center gap-1.5 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 hover:from-violet-500 hover:to-cyan-400 text-white font-bold transition-all hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50 cursor-pointer text-sm"
                  >
                    {loading ? (
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
