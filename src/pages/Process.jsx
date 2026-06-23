import React, { useEffect } from 'react';
import ProcessSteps from '../components/Sections/ProcessSteps';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 bg-[#0a0a0a]">
      <SEO
        title="Our 5-Step Digital Strategy Process"
        description="Learn how Siteon's step-by-step digital process works: Discover, Strategy, Design, Build, and Launch. Transparency and scope clarity guaranteed."
        keywords="digital presence agency process, custom website design steps, social media campaign workflow, growth marketing project milestones"
      />
      {/* Page Header */}
      <div className="relative py-24 border-b border-white/5 overflow-hidden text-center px-6">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-orange-sm opacity-35 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <span className="tag-violet mb-4">
            How We Partner
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white mt-5 leading-tight">
            Our <span className="gradient-text">Process</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg mt-5 max-w-xl mx-auto">
            We prioritize absolute scope clarity and transparent milestone stages. Here is how we turn your business goals into digital platforms.
          </p>
        </div>
      </div>

      {/* Timeline Steps */}
      <ProcessSteps />

      {/* Workflow Commitments Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#111]/10 relative text-left">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag-violet mb-5">Our Standards</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-5">
              Our 4 Project <span className="gradient-text">Commitments</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4">
              We do not just build layouts; we create high-performance business engines. Here is how we ensure project success and absolute trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#FF5500]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center mb-6">
                <span className="text-[#FF5500] text-xl font-bold font-display">1</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Weekly Staging Demos</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                You will receive a private staging link at the end of every week to see the design and codebase grow in real-time. No mystery, full transparency.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#FF5500]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <span className="text-white text-xl font-bold font-display">2</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Scope-Locked Pricing</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Every detail is ironed out in our initial strategy phase. Once we sign the contract, the price is fully locked—meaning zero hidden fees or surprise adjustments.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#FF5500]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center mb-6">
                <span className="text-[#FF5500] text-xl font-bold font-display">3</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">Direct Engineer Access</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                No middleman managers or account executives. You speak directly with the web dev and brand design engineers building your project via a dedicated Slack channel.
              </p>
            </div>

            <div className="glass-card p-8 rounded-3xl border border-white/5 hover:border-[#FF5500]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                <span className="text-white text-xl font-bold font-display">4</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">100% Code Ownership</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                We believe in complete freedom. Upon project launch, all source repositories, digital assets, and hosting credentials are legally transferred to your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agency Comparison Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a] relative text-left">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] glow-orange-sm opacity-10 pointer-events-none translate-x-1/3 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag-violet mb-5">Why Siteon Wins</span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-5">
              The Siteon <span className="gradient-text">Difference</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4">
              Here is how our modern, hand-coded development and transparent process stack up against standard options.
            </p>
          </div>

          <div className="overflow-x-auto rounded-3xl border border-white/5 glass-card">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-white/5 bg-white/2">
                  <th className="p-6 text-sm font-black uppercase text-white/50 tracking-wider">Features & Metrics</th>
                  <th className="p-6 text-sm font-black uppercase text-[#FF5500] tracking-wider bg-[#FF5500]/5">Siteon Global Agency</th>
                  <th className="p-6 text-sm font-black uppercase text-zinc-400 tracking-wider">Traditional Agencies / Freelancers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-6 text-sm font-bold text-white">Delivery Timeline</td>
                  <td className="p-6 text-sm text-white/80 font-semibold bg-[#FF5500]/2">2 - 4 Weeks (Agile sprints)</td>
                  <td className="p-6 text-sm text-zinc-400">2 - 3 Months (Heavy back & forth)</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-white">Development Tech Stack</td>
                  <td className="p-6 text-sm text-white/80 font-semibold bg-[#FF5500]/2">Hand-coded React, NextJS & CSS (No bloat)</td>
                  <td className="p-6 text-sm text-zinc-400">Bloated WordPress templates, element builders</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-white">Core Web Vitals PageSpeed</td>
                  <td className="p-6 text-sm text-white/80 font-semibold bg-[#FF5500]/2">Guaranteed 95+ (Green scores)</td>
                  <td className="p-6 text-sm text-zinc-400">Slow 40 - 60 scores (Unoptimized resources)</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-white">Code & Asset Ownership</td>
                  <td className="p-6 text-sm text-white/80 font-semibold bg-[#FF5500]/2">100% legal transfer on completion</td>
                  <td className="p-6 text-sm text-zinc-400">Locked in proprietary subscriptions / templates</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-white">Pricing Model</td>
                  <td className="p-6 text-sm text-white/80 font-semibold bg-[#FF5500]/2">Scope-locked, transparent flat fee</td>
                  <td className="p-6 text-sm text-zinc-400">Unpredicted hourly bills & maintenance costs</td>
                </tr>
                <tr>
                  <td className="p-6 text-sm font-bold text-white">Project Communication</td>
                  <td className="p-6 text-sm text-white/80 font-semibold bg-[#FF5500]/2">Direct channel to engineers (Slack/WhatsApp)</td>
                  <td className="p-6 text-sm text-zinc-400">Account managers, sales agents (Slow updates)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 border-t border-white/5 bg-[#0a0a0a] relative text-left">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 glow-orange opacity-10 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          
          <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-12 text-center">
            Process <span className="gradient-text">Frequently Asked Questions</span>
          </h2>

          <div className="space-y-8">
            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-2">
                How long does a standard website design project take?
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Typically, a custom single-page landing site takes between 1 to 2 weeks, while larger multi-page projects or platforms take 3 to 4 weeks. This includes planning, coding, and review iterations.
              </p>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-2">
                Will I own the source code and files?
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Absolutely. Once the project is complete and final assets are signed off, we hand over 100% of the repository ownership, raw files, credentials, and digital designs directly to you.
              </p>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-3xl">
              <h3 className="text-lg font-bold text-white mb-2">
                What support do you offer after launching?
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Every launch package includes 30 days of complimentary technical support to fix bugs, configure settings, and monitor load statistics. Extended monthly updates are available under our growth packages.
              </p>
            </div>
          </div>

        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Process;
