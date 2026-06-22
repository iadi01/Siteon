import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function AnimatedNumber({ target, duration = 1800, started }) {
  const [display, setDisplay] = useState('0');
  const suffix = target.replace(/[0-9]/g, '');
  const numeric = parseInt(target.replace(/\D/g, ''), 10);

  useEffect(() => {
    if (!started || !numeric) { setDisplay(target); return; }
    let start = 0;
    const step = numeric / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= numeric) { setDisplay(`${numeric}${suffix}`); clearInterval(timer); }
      else setDisplay(`${Math.floor(start)}${suffix}`);
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{display}</span>;
}

const Stats = () => {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStarted(true); }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const statsList = [
    { value: '7+', label: 'Live Projects', sub: 'Real-world client launches', icon: '🚀' },
    { value: '6', label: 'Core Services', sub: 'End-to-end digital solutions', icon: '⚡' },
    { value: '5', label: 'Step Process', sub: 'Discover → Launch framework', icon: '🎯' },
    { value: '100%', label: 'Clear Scope', sub: 'No hidden surprises ever', icon: '✓' },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="divider-glow" />
      <div className="relative bg-[#111]/80 border-y border-white/5 py-14 backdrop-blur-sm">
        <div className="absolute inset-0 glow-orange opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/5">
            {statsList.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center px-6 py-6 group cursor-default"
              >
                <div className="absolute inset-0 bg-[#FF5500]/0 group-hover:bg-[#FF5500]/4 rounded-xl transition-all duration-300 pointer-events-none" />
                <span className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300 inline-block">{stat.icon}</span>
                <span className="text-4xl md:text-5xl font-display font-black gradient-text mb-1">
                  <AnimatedNumber target={stat.value} started={started} />
                </span>
                <span className="text-sm font-bold text-white/70 mb-1 tracking-wide">{stat.label}</span>
                <span className="text-xs text-white/25 leading-relaxed max-w-[160px]">{stat.sub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <div className="divider-glow" />
    </section>
  );
};

export default Stats;
