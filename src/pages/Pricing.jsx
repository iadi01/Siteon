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
          <table className="w-full text-white/70 text-sm border-collapse bg-white/3 backdrop-blur-md block md:table">
            <thead className="hidden md:table-header-group">
              <tr className="border-b border-white/8 bg-white/5">
                <th className="p-5 text-left font-bold text-white">Features</th>
                <th className="p-5 text-center font-bold text-white/60">Starter</th>
                <th className="p-5 text-center font-bold text-[#FF5500]">Growth</th>
                <th className="p-5 text-center font-bold text-[#FF5500]">Premium</th>
              </tr>
            </thead>
            <tbody className="block md:table-row-group">
              {/* Row 1 */}
              <tr className="border-b border-white/5 hover:bg-white/2 transition-colors flex flex-col md:table-row">
                <td className="p-4 md:p-5 font-semibold text-white/90 bg-white/5 md:bg-transparent text-base md:text-sm">Responsive Layout</td>
                <td className="p-3 px-4 md:p-5 text-white/50 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-white/40 text-xs uppercase tracking-wider mt-0.5">Starter</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Yes (Basic)</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Growth</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Yes (Custom)</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Premium</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Yes (Advanced)</span>
                </td>
              </tr>
              {/* Row 2 */}
              <tr className="border-b border-white/5 hover:bg-white/2 transition-colors flex flex-col md:table-row">
                <td className="p-4 md:p-5 font-semibold text-white/90 bg-white/5 md:bg-transparent text-base md:text-sm">Social Media Strategy</td>
                <td className="p-3 px-4 md:p-5 text-white/50 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-white/40 text-xs uppercase tracking-wider mt-0.5">Starter</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Audits Only</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Growth</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Weekly Guide</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Premium</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Full Execution</span>
                </td>
              </tr>
              {/* Row 3 */}
              <tr className="border-b border-white/5 hover:bg-white/2 transition-colors flex flex-col md:table-row">
                <td className="p-4 md:p-5 font-semibold text-white/90 bg-white/5 md:bg-transparent text-base md:text-sm">SEO & Tagging</td>
                <td className="p-3 px-4 md:p-5 text-white/30 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-white/40 text-xs uppercase tracking-wider mt-0.5">Starter</span> 
                  <span className="md:text-center block w-full text-right md:text-center">—</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Growth</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Standard</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Premium</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Comprehensive</span>
                </td>
              </tr>
              {/* Row 4 */}
              <tr className="border-b border-white/5 hover:bg-white/2 transition-colors flex flex-col md:table-row">
                <td className="p-4 md:p-5 font-semibold text-white/90 bg-white/5 md:bg-transparent text-base md:text-sm">Conversion Funnels</td>
                <td className="p-3 px-4 md:p-5 text-white/50 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-white/40 text-xs uppercase tracking-wider mt-0.5">Starter</span> 
                  <span className="md:text-center block w-full text-right md:text-center">CTA Button</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Growth</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Interactive form</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Premium</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Bespoke dynamic forms</span>
                </td>
              </tr>
              {/* Row 5 */}
              <tr className="hover:bg-white/2 transition-colors flex flex-col md:table-row">
                <td className="p-4 md:p-5 font-semibold text-white/90 bg-white/5 md:bg-transparent text-base md:text-sm">Growth Consulting</td>
                <td className="p-3 px-4 md:p-5 text-white/30 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-white/40 text-xs uppercase tracking-wider mt-0.5">Starter</span> 
                  <span className="md:text-center block w-full text-right md:text-center">—</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/30 flex justify-between md:table-cell border-b border-white/5 md:border-none">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Growth</span> 
                  <span className="md:text-center block w-full text-right md:text-center">—</span>
                </td>
                <td className="p-3 px-4 md:p-5 text-white/80 flex justify-between md:table-cell">
                  <span className="md:hidden font-bold text-[#FF5500]/70 text-xs uppercase tracking-wider mt-0.5">Premium</span> 
                  <span className="md:text-center block w-full text-right md:text-center">Bi-Weekly Strategy Calls</span>
                </td>
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
