import React, { useEffect } from 'react';
import PricingCards from '../components/Sections/PricingCards';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const Pricing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-[#0a0a0a]">
      <SEO
        title="Custom Investment Packages & Plans"
        description="Choose the right digital services tier: Starter, Growth, or Premium. We offer custom-quoted deliverables with no surprise charges."
        keywords="affordable website design, social media management services pricing, custom website design quotes, digital branding packages"
      />
      {/* Page Header */}
      <div className="relative py-24 border-b border-white/5 overflow-hidden text-center px-6">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-orange-sm opacity-35 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <span className="tag-violet mb-4">
            Simple Investment
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white mt-5 leading-tight">
            Pricing & <span className="gradient-text">Packages</span>
          </h1>
          <p className="text-white/40 text-base sm:text-lg mt-5 max-w-xl mx-auto">
            Choose the tier that matches your business growth stage. We provide customized deliverables with zero long-term lock-in contracts.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <PricingCards />

      {/* Feature Comparison Table */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-left relative z-10 bg-transparent">
        <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-10 text-center">
          Package <span className="gradient-text">Feature Comparison</span>
        </h2>

        <div className="overflow-x-auto shadow-2xl rounded-3xl border border-white/8">
          <table className="w-full text-white/70 text-sm border-collapse bg-white/3 backdrop-blur-md">
            <thead>
              <tr className="border-b border-white/8 bg-white/5">
                <th className="p-5 text-left font-bold text-white">Features</th>
                <th className="p-5 text-center font-bold text-white/60">Starter</th>
                <th className="p-5 text-center font-bold text-[#FF5500]">Growth</th>
                <th className="p-5 text-center font-bold text-[#FF5500]">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="p-5 font-semibold text-white/90">Responsive Layout</td>
                <td className="p-5 text-center text-white/50">Yes (Basic)</td>
                <td className="p-5 text-center text-white/80">Yes (Custom)</td>
                <td className="p-5 text-center text-white/80">Yes (Advanced)</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="p-5 font-semibold text-white/90">Social Media Strategy</td>
                <td className="p-5 text-center text-white/50">Audits Only</td>
                <td className="p-5 text-center text-white/80">Weekly Guide</td>
                <td className="p-5 text-center text-white/80">Full Execution</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="p-5 font-semibold text-white/90">SEO & Tagging</td>
                <td className="p-5 text-center text-white/20">—</td>
                <td className="p-5 text-center text-white/80">Standard</td>
                <td className="p-5 text-center text-white/80">Comprehensive</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/2 transition-colors">
                <td className="p-5 font-semibold text-white/90">Conversion Funnels</td>
                <td className="p-5 text-center text-white/50">CTA Button</td>
                <td className="p-5 text-center text-white/80">Interactive form</td>
                <td className="p-5 text-center text-white/80">Bespoke dynamic forms</td>
              </tr>
              <tr className="hover:bg-white/2 transition-colors">
                <td className="p-5 font-semibold text-white/90">Growth Consulting</td>
                <td className="p-5 text-center text-white/20">—</td>
                <td className="p-5 text-center text-white/20">—</td>
                <td className="p-5 text-center text-white/80">Bi-Weekly Strategy Calls</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Pricing;
