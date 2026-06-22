import React from 'react';
import { Share2, Sparkles, Compass, Megaphone, Laptop, BarChart3, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../UI/ServiceCard';
import Button from '../UI/Button';

export const servicesList = [
  { title: "Web Development", description: "High-performance custom web dev, responsive layouts, clean coding, React/NextJS integration.", icon: Laptop },
  { title: "App Development", description: "Custom mobile app dev (iOS/Android) using React Native, built for scale and retention.", icon: BarChart3 },
  { title: "Brand Design & ID", description: "Premium brand design, cohesive brand design id visual handbooks, and aesthetic assets.", icon: Compass },
  { title: "Content Marketing", description: "Strategic content marketing campaigns that drive organic traffic and convert prospects.", icon: Share2 },
  { title: "Social Media Ads", description: "High-performance ads, audience targeting, search marketing campaigns, and growth funnel scaling.", icon: Megaphone },
  { title: "Content Apps & Media", description: "Custom content app solutions, media batch production, reels direction, and creative strategy.", icon: Sparkles }
];

/* Big bold list items — like the reference image style */
const bigServices = [
  'Web Development',
  'App Development',
  'Brand Design & ID',
  'Content Marketing',
  'Social Media Ads',
  'Content Apps & Media',
];

const ServicesSection = ({ showAll = false }) => {
  const displayedServices = showAll ? servicesList : servicesList.slice(0, 6);

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 glow-orange opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-left"
          >
            <span className="tag-violet mb-5">
              <Sparkles className="w-3 h-3" />
              Core Offerings
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-black tracking-tight text-white mt-5 leading-[0.95]">
              Our Core<br />
              <span className="gradient-text">Digital Services</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/30 text-sm md:text-base max-w-sm text-left md:text-right"
          >
            We don't offer generic templates. We build custom roadmaps designed to optimize your brand, generate qualified leads, and grow revenue.
          </motion.p>
        </div>

        {/* ── Bold list style (matching reference image) ── */}
        <div className="mb-20 border-t border-white/6">
          {bigServices.map((name, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group flex items-center justify-between py-5 border-b border-white/5 cursor-default hover:bg-white/2 px-2 rounded-lg transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <span className="text-xs font-black text-white/15 group-hover:text-[#FF5500]/60 transition-colors font-display tracking-widest w-8">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white/70 group-hover:text-white transition-colors duration-300 uppercase tracking-tight">
                  {name}
                </span>
              </div>
              <div className="w-9 h-9 rounded-full border border-white/10 group-hover:border-[#FF5500] group-hover:bg-[#FF5500] flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Card Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedServices.map((service, index) => (
            <ServiceCard
              key={index}
              index={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>

        {/* Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 text-center"
          >
            <Button to="/services" variant="secondary" className="px-8 py-4">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
