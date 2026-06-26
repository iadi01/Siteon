import React from 'react';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../UI/Button';

const tiers = [
  {
    name: 'Starter Package',
    description: 'For small businesses, creators, and freelancers starting their online digital presence journey.',
    price: '₹2,500',
    priceDetail: 'Starting price',
    features: [
      'Basic website layout direction',
      'Profile optimization audit',
      '15 customized content ideas',
      'Lead capture CTA setup',
      'Email support response guarantee',
    ],
    ctaText: 'Get Started',
    ctaTo: '/contact?package=starter',
    highlighted: false,
    tag: 'Self-Start',
    Icon: Sparkles,
    accentColor: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10 border-cyan-500/25',
    glowColor: 'rgba(6,182,212,0.1)',
  },
  {
    name: 'Growth Package',
    description: 'For established local brands and startups requiring professional, conversion-focused assets.',
    price: '₹5,000',
    priceDetail: 'Starting price',
    features: [
      'Bespoke landing page design',
      'Social media strategy direction',
      '30-day comprehensive content calendar',
      'Interactive portfolio showcases',
      'Lead generation funnels',
      'Standard SEO optimization',
    ],
    ctaText: 'Start Growth Plan',
    ctaTo: '/contact?package=growth',
    highlighted: true,
    tag: '⚡ Most Popular',
    Icon: Zap,
    accentColor: 'text-violet-400',
    accentBg: 'bg-violet-500/10 border-violet-500/25',
    glowColor: 'rgba(124,58,237,0.2)',
  },
  {
    name: 'Premium Package',
    description: 'For growth-minded brands demanding full visual authority, custom web apps, and complete strategy.',
    price: '₹10,000',
    priceDetail: 'Starting price',
    features: [
      'Full multipage custom website design',
      'Corporate brand guidelines book',
      'Bespoke content & creative direction',
      'Regular digital growth consulting',
      'Paid campaign planning & ad assets',
      'Priority support & analytics setup',
    ],
    ctaText: 'Build Full Presence',
    ctaTo: '/contact?package=premium',
    highlighted: false,
    tag: 'Complete Suite',
    Icon: Crown,
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-500/10 border-amber-500/25',
    glowColor: 'rgba(245,158,11,0.1)',
  },
];

const PricingCards = () => {
  return (
    <section className="relative py-28 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] glow-orange opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="tag-violet mb-5">Our Investment Plans</span>
          <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mt-5">
            Tailored <span className="gradient-text">Pricing & Packages</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-4">
            We operate on a clear-scope, value-driven pricing model. Start with our transparent baseline packages and scale up as your business grows.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
          {tiers.map((tier, index) => {
            const TierIcon = tier.Icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative rounded-3xl flex flex-col justify-between p-8 transition-all duration-500 overflow-hidden ${
                  tier.highlighted
                    ? 'bg-[#111] border-2 border-[#FF5500]/55 shadow-[0_0_60px_rgba(255,85,0,0.18)] lg:-translate-y-4'
                    : 'glass-card'
                }`}
              >
                {/* Shimmer layer for highlighted card */}
                {tier.highlighted && (
                  <div className="absolute inset-0 animate-shimmer pointer-events-none" />
                )}

                {/* Top glow spot inside highlighted card */}
                {tier.highlighted && (
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 glow-orange opacity-40 pointer-events-none" />
                )}

                {/* Tag + Icon */}
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                    tier.highlighted
                      ? 'bg-[#FF5500]/20 border-[#FF5500]/30 text-[#FF7733]'
                      : `${tier.accentBg} ${tier.accentColor}`
                  }`}>
                    {tier.tag}
                  </span>
                  <div className={`w-9 h-9 rounded-xl border flex items-center justify-center ${tier.accentBg}`}>
                    <TierIcon className={`w-4 h-4 ${tier.accentColor}`} />
                  </div>
                </div>

                {/* Package details */}
                <div className="text-left relative z-10">
                  <h3 className={`text-xl font-display font-bold mb-2 ${tier.highlighted ? 'text-white' : 'text-white'}`}>
                    {tier.name}
                  </h3>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6 min-h-[48px]">
                    {tier.description}
                  </p>

                  {/* Price label */}
                  <div className={`mb-6 pb-6 border-b ${tier.highlighted ? 'border-[#FF5500]/20' : 'border-white/6'}`}>
                    <span className={`text-3xl font-display font-extrabold ${tier.highlighted ? 'gradient-text' : 'text-white'}`}>
                      {tier.price}
                    </span>
                    <p className="text-[11px] text-zinc-400 mt-1">{tier.priceDetail}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3.5 mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-white/60 text-sm">
                        <span className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${tier.accentBg}`}>
                          <Check className={`w-3 h-3 ${tier.accentColor}`} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  to={tier.ctaTo}
                  variant={tier.highlighted ? 'primary' : 'secondary'}
                  className="w-full py-4 relative z-10"
                >
                  {tier.ctaText}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
