import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Rocket } from 'lucide-react';
import Button from './UI/Button';

const CTASection = () => {
  return (
    <section className="relative py-28 overflow-hidden px-6 bg-[#0a0a0a]">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] glow-orange opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl border border-white/8 bg-[#111] overflow-hidden"
          style={{ boxShadow: '0 0 80px rgba(255,85,0,0.08), inset 0 1px 0 rgba(255,255,255,0.04)' }}
        >
          {/* Orange top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5500] to-transparent" />

          {/* Grid bg inside card */}
          <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

          {/* Center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 glow-orange opacity-20 pointer-events-none" />

          <div className="relative z-10 p-12 md:p-20 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 tag-violet mb-8"
            >
              <Rocket className="w-3 h-3" />
              Ready to Launch?
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mb-6 leading-[0.95]"
            >
              LET'S BUILD<br />
              SOMETHING<br />
              <span className="gradient-text">TOGETHER.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/35 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            >
              Partner with Siteon to transform your social presence, craft premium websites,
              and run growth strategies that deliver real business value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button to="/contact" variant="primary" className="w-full sm:w-auto px-10 py-4 text-base">
                Start a Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button to="/portfolio" variant="secondary" className="w-full sm:w-auto px-10 py-4 text-base">
                See Our Work
              </Button>
            </motion.div>

            {/* Feature dots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 mt-12"
            >
              {['✦ Zero hidden fees', '✦ Fast turnaround', '✦ 100% ownership', '✦ Ongoing support'].map((feat, i) => (
                <span key={i} className="text-xs font-bold text-zinc-400 uppercase tracking-widest">{feat}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
