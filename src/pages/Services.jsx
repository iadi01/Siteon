import React, { useEffect } from 'react';
import { ShieldCheck, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ServicesSection from '../components/Sections/ServicesSection';
import CTASection from '../components/CTASection';

const valueProps = [
  {
    title: 'Data-Driven Decisions',
    description: "We don't guess what content or layouts convert. We look at user traffic analytics, CTRs, and client booking funnels to build strategy.",
    icon: Zap,
    accent: 'text-[#FF5500]',
    bg: 'bg-[#FF5500]/10 border-[#FF5500]/20',
  },
  {
    title: 'Clean Modern Architecture',
    description: 'Our sites are hand-coded using modern clean React and Tailwind structures. No heavy page builders, meaning fast load speeds and stable code.',
    icon: ShieldCheck,
    accent: 'text-white',
    bg: 'bg-white/5 border-white/10',
  },
  {
    title: 'Client-Centric Collaboration',
    description: 'We work directly with you. Every project is scope-locked with transparent deliverables, milestone timelines, and zero surprise fees.',
    icon: Users,
    accent: 'text-[#FF7733]',
    bg: 'bg-[#FF7733]/10 border-[#FF7733]/20',
  },
];

import SEO from '../components/SEO';

const Services = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-20 bg-[#0a0a0a]">
      <SEO
        title="Website & Social Media Services"
        description="Explore Siteon's professional digital services, including custom website design, responsive website development, Instagram growth strategy, branding identity design, and online marketing."
        keywords="website design services, social media marketing services, digital marketing content, e-commerce website design, local business website design, startup website design services"
      />

      {/* Page Header */}
      <div className="relative py-24 overflow-hidden text-center px-6 border-b border-white/5">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-orange opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 glow-orange-sm opacity-15 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto relative z-10"
        >
          <span className="tag-violet mb-6">Our Offerings</span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white mt-5 leading-tight">
            Detailed <span className="gradient-text">Services</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg mt-5 max-w-xl mx-auto">
            From coding premium high-performance web pages to structuring comprehensive brand messaging, we help your business capture the local online market.
          </p>
        </motion.div>
      </div>

      {/* Services Grid */}
      <ServicesSection showAll={true} />

      {/* Philosophy Section */}
      <section className="py-28 px-6 bg-[#0a0a0a] relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 glow-orange-sm opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="tag-violet mb-5">Why Partner With Us</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-5">
              Our Core Growth <span className="gradient-text">Philosophy</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((prop, idx) => {
              const IconComp = prop.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass-card p-8 rounded-3xl text-left"
                >
                  <div className={`icon-box mb-6 border ${prop.bg}`}>
                    <IconComp className={`w-6 h-6 ${prop.accent}`} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3">{prop.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{prop.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;
