import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Star, ArrowUpRight } from 'lucide-react';
import Button from '../UI/Button';
import heroImg from '../../assets/hero_illustration.webp';

/* ─── Floating badge ─── */
const FloatingBadge = ({ icon: Icon, label, value, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
    className={`absolute glass-card rounded-2xl px-4 py-3 flex items-center gap-3 shadow-xl z-20 ${className}`}
  >
    <div className="w-9 h-9 rounded-xl bg-[#FF5500]/15 border border-[#FF5500]/30 flex items-center justify-center flex-shrink-0">
      <Icon className="w-4 h-4 text-[#FF5500]" />
    </div>
    <div>
      <p className="text-xs text-zinc-400 leading-none mb-0.5">{label}</p>
      <p className="text-sm font-bold text-white leading-none">{value}</p>
    </div>
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-24 px-6 overflow-hidden bg-[#0a0a0a]">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div className="noise-overlay" aria-hidden="true" />

      {/* Orange ambient glow */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] glow-orange opacity-25 pointer-events-none -translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] glow-orange-sm opacity-20 pointer-events-none translate-x-1/4 translate-y-1/4" />

      {/* Thin border circle decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

        {/* ── LEFT: Content ── */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          {/* Top tag row */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="tag-violet">
              <Sparkles className="w-3 h-3" />
              Top-Rated Digital Agency
            </span>
            <span className="text-xs text-white/25 font-bold uppercase tracking-widest">Est. 2024</span>
          </motion.div>

          {/* ── BOLD HEADLINE — editorial style like the image ── */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black tracking-tight text-white mb-6 leading-[0.92] text-left"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
          >
            TURNING<br />
            <span className="text-[#FF5500]">IDEAS</span><br />
            INTO<br />
            <span className="relative inline-block">
              REALITY
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#FF5500] rounded-full" />
            </span>
          </motion.h1>

          {/* Sub description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-lg mb-10 mt-6"
          >
            Siteon is a global agency offering premium web dev, custom app dev, bold brand design ID, content marketing, high-performance ads, and app content solutions that scale the growth of brands.
          </motion.p>

          {/* Buttons row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-start gap-4 w-full sm:w-auto"
          >
            <Button to="/contact" variant="primary" className="w-full sm:w-auto px-8 py-4 text-base">
              Start a Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button to="/portfolio" variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base">
              See Our Work
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </motion.div>

          {/* ── Stats strip ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-10 mt-14 pt-10 border-t border-white/6 w-full"
          >
            {[
              { value: '20+', label: 'Clients Served' },
              { value: '95%', label: 'Satisfaction' },
              { value: '5', label: 'Step Process' },
            ].map((s, i) => (
              <div key={i} className="text-left">
                <p className="text-3xl font-display font-black text-white">{s.value}</p>
                <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold mt-0.5">{s.label}</p>
              </div>
            ))}

            {/* Trusted brands logos row */}
            <div className="ml-auto hidden sm:flex items-center gap-3">
              {['A','B','C','D'].map((l, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-xs font-black text-white/50 ${['bg-[#FF5500]/20','bg-white/5','bg-white/5','bg-[#FF5500]/10'][i]}`}>{l}</div>
              ))}
              <div className="flex">
                {[...Array(5)].map((_,i) => <Star key={i} className="w-3 h-3 text-amber-400 fill-amber-400" />)}
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT: Visual ── */}
        <div className="lg:col-span-5 flex justify-center relative">
          {/* Orange ring glow */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-[#FF5500]/6 border border-[#FF5500]/10 animate-pulse-slow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

          {/* Floating badges */}
          <FloatingBadge icon={TrendingUp} label="Growth Rate" value="+240% avg" className="top-4 -left-4 lg:-left-10" />
          <FloatingBadge icon={Star} label="Client Rating" value="5.0 / 5.0" className="bottom-8 -right-4 lg:-right-6" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 80 }}
            className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] flex items-center justify-center"
          >
            {/* Gradient ring border */}
            <div className="absolute inset-0 rounded-full p-[2px]" style={{ background: 'conic-gradient(from 0deg, #FF5500, #FF8800, transparent, #FF5500)' }}>
              <div className="w-full h-full rounded-full bg-[#0a0a0a]" />
            </div>

            <img
              src={heroImg}
              alt="Siteon Digital Growth"
              className="relative z-10 w-[140%] h-[140%] object-contain animate-float select-none pointer-events-none"
              style={{ filter: 'drop-shadow(0 20px 40px rgba(255,85,0,0.3))' }}
            />
          </motion.div>
        </div>

      </div>

      {/* ── Bottom Marquee ── */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-white/5 bg-[#111]/80 py-3">
        <div className="flex animate-marquee whitespace-nowrap">
          {[
            '✦ Social Media Management',
            '✦ Website Design',
            '✦ Brand Strategy',
            '✦ Content Creation',
            '✦ Paid Ads Planning',
            '✦ Digital Consulting',
            '✦ Social Media Management',
            '✦ Website Design',
            '✦ Brand Strategy',
            '✦ Content Creation',
            '✦ Paid Ads Planning',
            '✦ Digital Consulting',
          ].map((item, i) => (
            <span key={i} className="text-xs font-black text-white/25 px-8 uppercase tracking-widest">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
