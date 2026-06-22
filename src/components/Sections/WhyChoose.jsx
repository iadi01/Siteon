import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../UI/Button';
import growthImg from '../../assets/growth_illustration.png';

const REASONS = [
  {
    icon: ShieldCheck,
    title: 'Clear Scope Locking',
    sub: 'Fixed deliverables, zero surprise bills or hidden costs.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
  },
  {
    icon: Target,
    title: 'Revenue Alignment',
    sub: 'Built to generate leads, not just look pretty.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
  },
  {
    icon: TrendingUp,
    title: 'Growth-Focused',
    sub: 'Every decision optimized for measurable business growth.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
  },
];

const WhyChoose = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 glow-violet opacity-25 pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-80 h-80 glow-pink opacity-20 pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 text-left"
        >
          <span className="tag-violet mb-6">About Siteon</span>

          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mt-5 mb-6 leading-[1.1]">
            Perfect for Online<br />
            <span className="gradient-text">Digital Growth</span>
          </h2>

          <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-4">
            We help small businesses, restaurants, creators, and ecommerce stores scale up.
            Instead of template layouts that slow conversions, we customize every page detail
            so your audience finds what they need instantly.
          </p>

          <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8">
            From social strategy direction to hand-coded React websites, we coordinate all
            digital outlets in one unified scope that takes your brand to the next level.
          </p>

          {/* Reason cards */}
          <div className="flex flex-col gap-4 mb-10">
            {REASONS.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/3 border border-white/6 hover:bg-white/5 hover:border-violet-500/20 transition-all duration-300 group"
                >
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${reason.bg}`}>
                    <Icon className={`w-4 h-4 ${reason.color}`} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{reason.title}</h4>
                    <p className="text-xs text-zinc-500">{reason.sub}</p>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-zinc-700 group-hover:text-violet-400 transition-colors ml-auto mt-0.5 flex-shrink-0" />
                </motion.div>
              );
            })}
          </div>

          <Button to="/services" variant="primary" className="px-8 py-4">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>

        {/* Right Visual */}
        <div className="lg:col-span-6 flex justify-center relative">
          {/* Glow behind image */}
          <div className="absolute inset-0 glow-violet opacity-20 blur-3xl" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[460px] aspect-square flex items-center justify-center rounded-3xl border border-white/8 bg-white/3 overflow-hidden p-3"
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <img
              src={growthImg}
              alt="Siteon Growth"
              className="w-full h-full object-cover rounded-2xl animate-float select-none pointer-events-none drop-shadow-[0_20px_40px_rgba(124,58,237,0.3)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
