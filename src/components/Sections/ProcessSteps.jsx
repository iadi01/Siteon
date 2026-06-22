import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Eye, Code2, Rocket, ArrowRight, Plus, Minus } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the business, target audience, brand positioning, key benchmarks, and current online presence goals.',
    icon: Search,
    detail: ['Business audit', 'Audience research', 'Competitor analysis', 'Goal alignment'],
  },
  {
    number: '02',
    title: 'Strategy',
    description:
      'Map website structure, content direction, visual messaging hierarchy, and digital marketing outreach channels.',
    icon: Compass,
    detail: ['Sitemap & wireframe', 'Content framework', 'Channel planning', 'KPI definition'],
  },
  {
    number: '03',
    title: 'Design',
    description:
      'Create premium high-fidelity wireframes, UI layouts, interactive flows, typographic scales, and color schemes.',
    icon: Eye,
    detail: ['High-fidelity UI', 'Brand visual system', 'Interaction design', 'Design review'],
  },
  {
    number: '04',
    title: 'Build',
    description:
      'Develop responsive code templates using React, Tailwind CSS, clean components, fast load times, and structured SEO.',
    icon: Code2,
    detail: ['React + Tailwind', 'Performance optimized', 'SEO structured', 'Mobile-first'],
  },
  {
    number: '05',
    title: 'Launch & Improve',
    description:
      'Launch the production asset, connect domain analytics, review user interaction maps, and suggest conversion updates.',
    icon: Rocket,
    detail: ['Deployment', 'Analytics setup', 'A/B testing', 'Ongoing growth'],
  },
];

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(null);

  const toggle = (i) => setActiveStep(activeStep === i ? null : i);

  return (
    <section className="relative py-28 px-6 bg-[#0a0a0a] overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      {/* Orange glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] glow-orange opacity-15 pointer-events-none translate-x-1/3 -translate-y-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <span className="tag-violet mb-5">Our Workflow</span>
            <h2 className="text-5xl md:text-7xl font-display font-black tracking-tight text-white mt-5 leading-[0.95]">
              Simple<br />
              Process<br />
              <span className="gradient-text">To Start.</span>
            </h2>
          </div>
          <p className="text-[#888] text-base leading-relaxed max-w-md self-end">
            We follow a clean, structured process to ensure your launch is delivered on time, within scope, and matches your brand vision exactly.
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="divider-white mb-0" />

        {/* ── Accordion Steps ── */}
        <div>
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isOpen = activeStep === i;

            return (
              <div key={i}>
                <motion.button
                  onClick={() => toggle(i)}
                  className="w-full text-left group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between py-7 gap-6 cursor-pointer">
                    {/* Left: Number + Title */}
                    <div className="flex items-center gap-8 flex-1 min-w-0">
                      {/* Step number */}
                      <span
                        className={`text-sm font-black font-display tracking-widest flex-shrink-0 transition-colors duration-300 ${
                          isOpen ? 'text-[#FF5500]' : 'text-white/20 group-hover:text-white/40'
                        }`}
                      >
                        {step.number}
                      </span>

                      {/* Icon circle */}
                      <div
                        className={`w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? 'border-[#FF5500] bg-[#FF5500]/10'
                            : 'border-white/10 bg-white/3 group-hover:border-white/20'
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isOpen ? 'text-[#FF5500]' : 'text-white/40 group-hover:text-white/60'
                          }`}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-2xl sm:text-3xl md:text-4xl font-display font-black tracking-tight transition-colors duration-300 ${
                          isOpen ? 'text-white' : 'text-white/60 group-hover:text-white'
                        }`}
                      >
                        {step.title}
                      </h3>
                    </div>

                    {/* Right: Toggle icon */}
                    <div
                      className={`w-9 h-9 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? 'border-[#FF5500] bg-[#FF5500] text-white'
                          : 'border-white/10 text-white/30 group-hover:border-white/25 group-hover:text-white/60'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </motion.button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-[calc(1rem+3rem+3rem)] pr-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Description */}
                          <p className="text-[#888] text-base leading-relaxed">
                            {step.description}
                          </p>

                          {/* Detail pills */}
                          <div className="flex flex-wrap gap-2 items-start">
                            {step.detail.map((d, j) => (
                              <motion.span
                                key={j}
                                initial={{ opacity: 0, scale: 0.85 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: j * 0.06 }}
                                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#FF5500]/25 bg-[#FF5500]/8 text-[#FF7733] text-xs font-bold uppercase tracking-wider"
                              >
                                <ArrowRight className="w-3 h-3" />
                                {d}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Divider */}
                <div className="divider-white" />
              </div>
            );
          })}
        </div>

        {/* ── Bottom Stat Row ── */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-12 border-t border-white/6">
          {[
            { value: '5', label: 'Step Process' },
            { value: '100%', label: 'On-time Delivery' },
            { value: '0', label: 'Scope Surprises' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl md:text-5xl font-display font-black gradient-text mb-1">{s.value}</p>
              <p className="text-xs text-[#555] uppercase tracking-widest font-bold">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSteps;
