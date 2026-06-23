import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/UI/ProjectCard';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';
import { Sparkles, Award, Sliders, RotateCcw, ArrowRight, Check, Layout, Compass, ShieldCheck } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  const [quizStep, setQuizStep] = useState(1);
  const [selectedVibe, setSelectedVibe] = useState('bold');
  const [selectedGoal, setSelectedGoal] = useState('local');
  const [accentColor, setAccentColor] = useState('orange');
  const [glowIntensity, setGlowIntensity] = useState(60);
  const [borderRadius, setBorderRadius] = useState(16);

  const colors = [
    { id: 'orange', name: 'Neon Orange', hex: '#FF5500', text: 'text-[#FF5500]', bg: 'bg-[#FF5500]', border: 'border-[#FF5500]', glow: 'shadow-[#FF5500]/50' },
    { id: 'violet', name: 'Electric Violet', hex: '#8B5CF6', text: 'text-[#8B5CF6]', bg: 'bg-[#8B5CF6]', border: 'border-[#8B5CF6]', glow: 'shadow-[#8B5CF6]/50' },
    { id: 'emerald', name: 'Emerald Green', hex: '#10B981', text: 'text-[#10B981]', bg: 'bg-[#10B981]', border: 'border-[#10B981]', glow: 'shadow-[#10B981]/50' },
    { id: 'cyan', name: 'Cyber Cyan', hex: '#06B6D4', text: 'text-[#06B6D4]', bg: 'bg-[#06B6D4]', border: 'border-[#06B6D4]', glow: 'shadow-[#06B6D4]/50' }
  ];

  const currentAccent = colors.find(c => c.id === accentColor) || colors[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Design', value: 'web' },
    { label: 'Utilities & Apps', value: 'utility' },
    { label: 'Civic & Community', value: 'civic' }
  ];

  const getProjectCategory = (id) => {
    switch (id) {
      case 'git-aura':
        return ['web', 'utility'];
      case 'weather-app':
        return ['utility'];
      case 'luxury-furniture':
        return ['web'];
      case 'boutique-website':
        return ['web'];
      case 'restaurant-website':
        return ['web'];
      case 'trip-budget-calculator':
        return ['utility'];
      case 'teamjams':
        return ['web', 'civic'];
      default:
        return ['web'];
    }
  };

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'all') return true;
    const projectCats = getProjectCategory(project.id);
    return projectCats.includes(filter);
  });

  return (
    <div className="pt-20 bg-[#0a0a0a]">
      <SEO
        title="Featured Client Projects Portfolio"
        description="Browse Siteon's portfolio website design projects. Verify our production web assets, interactive features, API integrations, and custom layouts."
        keywords="portfolio website design, custom website design, web development agency showcase, responsive web layouts, local business website proof"
      />
      {/* Page Header */}
      <div className="relative py-24 border-b border-white/5 overflow-hidden text-center px-6">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-orange-sm opacity-30 pointer-events-none" />
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <span className="tag-violet mb-4">
            Our Work Showcase
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white mt-5 leading-tight">
            Portfolio <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg mt-5 max-w-xl mx-auto">
            Review our 7 live projects demonstrating modern front-end layouts, API integrations, clean styling, and conversion-focused structures.
          </p>
        </div>
      </div>

      {/* Category filters bar */}
      <section className="py-8 border-b border-white/5 bg-[#111]/30 px-6 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                filter === cat.value
                  ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/25'
                  : 'bg-white/3 border border-white/8 text-white/50 hover:text-white hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-zinc-400 text-lg">No projects match the selected category.</p>
          </div>
        )}
      </section>

      {/* Interactive Brand Vibe Lab Section */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#0a0a0a] relative text-left overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-96 h-96 glow-orange opacity-15 pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 glow-orange-sm opacity-10 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="tag-violet mb-5">
              <Sparkles className="w-3.5 h-3.5 mr-1.5 inline text-[#FF5500]" />
              Siteon Design Studio
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-5">
              Brand Vibe <span className="gradient-text">Lab</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base mt-4">
              Take our 3-step design quiz to dynamically generate a tailored, custom-coded website theme mockup for your brand.
            </p>
          </div>

          {/* Progress Bar (Only visible during steps 1-3) */}
          {quizStep < 4 && (
            <div className="max-w-md mx-auto mb-12">
              <div className="flex justify-between text-xs text-white/50 mb-2 font-mono">
                <span>Quiz Progress</span>
                <span>Step {quizStep} of 3</span>
              </div>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#FF5500] to-[#FF7733] transition-all duration-500"
                  style={{ width: `${(quizStep / 3) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 1: CHOOSE AESTHETIC VIBE */}
          {quizStep === 1 && (
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                01. Choose Your Brand's Visual Aesthetic
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                {[
                  {
                    id: 'bold',
                    label: 'Bold & Disruptive',
                    desc: 'High-contrast typography, thick layouts, intense glows, and modern startup aesthetics.',
                    icon: Sparkles,
                    colorHex: '#FF5500'
                  },
                  {
                    id: 'minimal',
                    label: 'Minimalist & Luxury',
                    desc: 'Spacious margins, elegant serif headings, clean lines, and sophisticated neutral glows.',
                    icon: Award,
                    colorHex: '#D4AF37'
                  },
                  {
                    id: 'tech',
                    label: 'Futuristic & Tech',
                    desc: 'Monospace code elements, glowing wireframe meshes, technical HUD borders, and glass overlays.',
                    icon: Sliders,
                    colorHex: '#06B6D4'
                  }
                ].map((vibe) => {
                  const VibeIcon = vibe.icon;
                  const isSelected = selectedVibe === vibe.id;
                  return (
                    <button
                      key={vibe.id}
                      onClick={() => setSelectedVibe(vibe.id)}
                      className={`glass-card p-6 rounded-3xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] ${
                        isSelected
                          ? 'border-[#FF5500] bg-[#FF5500]/5 shadow-lg shadow-[#FF5500]/10 scale-[1.02]'
                          : 'border-white/5 bg-white/2 text-white/60 hover:border-white/15'
                      }`}
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                          isSelected ? 'bg-[#FF5500]/20 text-[#FF5500]' : 'bg-white/5 text-white/50'
                        }`}>
                          <VibeIcon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">{vibe.label}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">{vibe.desc}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-end">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#FF5500] bg-[#FF5500] text-white' : 'border-white/20 bg-transparent'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <button
                onClick={() => setQuizStep(2)}
                className="py-3.5 px-8 rounded-full bg-[#FF5500] hover:bg-[#FF7733] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#FF5500]/20 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
              >
                Continue to Goal
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* STEP 2: CHOOSE TARGET GOAL */}
          {quizStep === 2 && (
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                02. What Is Your Brand's Primary Target?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 text-left">
                {[
                  {
                    id: 'local',
                    label: 'Dominate Local Market',
                    desc: 'Promote local visibility in Jamshedpur & Jharkhand with optimized regional landing sections.',
                    icon: Compass
                  },
                  {
                    id: 'global',
                    label: 'Global Reach & Scaling',
                    desc: 'Build high-performance SaaS platforms or e-commerce checkout paths engineered for page speed.',
                    icon: Layout
                  },
                  {
                    id: 'identity',
                    label: 'Artistic Brand Story',
                    desc: 'Exquisite custom visuals, motion elements, and creative presentation sections that build authority.',
                    icon: Award
                  }
                ].map((goal) => {
                  const GoalIcon = goal.icon;
                  const isSelected = selectedGoal === goal.id;
                  return (
                    <button
                      key={goal.id}
                      onClick={() => setSelectedGoal(goal.id)}
                      className={`glass-card p-6 rounded-3xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] ${
                        isSelected
                          ? 'border-[#FF5500] bg-[#FF5500]/5 shadow-lg shadow-[#FF5500]/10 scale-[1.02]'
                          : 'border-white/5 bg-white/2 text-white/60 hover:border-white/15'
                      }`}
                    >
                      <div>
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                          isSelected ? 'bg-[#FF5500]/20 text-[#FF5500]' : 'bg-white/5 text-white/50'
                        }`}>
                          <GoalIcon className="w-5 h-5" />
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">{goal.label}</h4>
                        <p className="text-xs text-zinc-400 leading-relaxed">{goal.desc}</p>
                      </div>
                      <div className="mt-4 flex items-center justify-end">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#FF5500] bg-[#FF5500] text-white' : 'border-white/20 bg-transparent'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => setQuizStep(1)}
                  className="py-3.5 px-6 rounded-full bg-white/3 border border-white/8 text-white/60 hover:text-white hover:border-white/20 font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={() => setQuizStep(3)}
                  className="py-3.5 px-8 rounded-full bg-[#FF5500] hover:bg-[#FF7733] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#FF5500]/20 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  Continue to Color
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CHOOSE ACCENT COLOR */}
          {quizStep === 3 && (
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-8">
                03. Select Your Brand's Neon Color Accent
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 text-center justify-center">
                {colors.map((color) => {
                  const isSelected = accentColor === color.id;
                  return (
                    <button
                      key={color.id}
                      onClick={() => setAccentColor(color.id)}
                      className={`glass-card p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col items-center gap-4 ${
                        isSelected
                          ? 'border-[#FF5500] bg-[#FF5500]/5 scale-[1.05]'
                          : 'border-white/5 bg-white/2 hover:border-white/15'
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-black/85 relative"
                        style={{ backgroundColor: color.hex, boxShadow: isSelected ? `0 0 15px ${color.hex}` : 'none' }}
                      >
                        {isSelected && <Check className="w-5 h-5 text-black stroke-[3]" />}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white">{color.name}</p>
                        <p className="text-[10px] text-zinc-400 uppercase tracking-widest mt-0.5">{color.hex}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => setQuizStep(2)}
                  className="py-3.5 px-6 rounded-full bg-white/3 border border-white/8 text-white/60 hover:text-white hover:border-white/20 font-bold text-sm tracking-wide transition-all duration-300 cursor-pointer"
                >
                  Back
                </button>
                <button
                  onClick={() => setQuizStep(4)}
                  className="py-3.5 px-8 rounded-full bg-[#FF5500] hover:bg-[#FF7733] text-white font-bold text-sm tracking-wide shadow-xl shadow-[#FF5500]/20 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                >
                  Generate Mockup
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: MOCKUP PREVIEW & DESIGN SANDBOX */}
          {quizStep === 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: macOS Browser Preview */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div className="text-left mb-2">
                  <p className="text-[#FF5500] text-xs font-mono uppercase tracking-widest">Live Preview</p>
                  <h3 className="text-xl font-bold text-white mt-1">Interactive Vibe Mockup</h3>
                </div>

                <div className="relative w-full">
                  {/* Glowing ambient spot behind the mockup (controlled by slider) */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full opacity-40 blur-3xl pointer-events-none transition-all duration-300 z-0"
                    style={{
                      backgroundColor: currentAccent.hex,
                      filter: `blur(${30 + glowIntensity / 2}px)`,
                      transform: `translate(-50%, -50%) scale(${0.8 + glowIntensity / 200})`
                    }}
                  />

                  {/* Browser Window Frame */}
                  <div
                    className="glass-card relative border border-white/10 overflow-hidden shadow-2xl shadow-black/90 z-10 transition-all duration-300"
                    style={{ borderRadius: `${borderRadius}px` }}
                  >
                    {/* macOS Top Bar */}
                    <div className="bg-[#151515]/95 px-4 py-3 flex items-center gap-2 border-b border-white/5">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                        <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                      </div>
                      <div className="mx-auto w-1/2 bg-black/40 rounded-md py-0.5 text-center text-[9px] text-zinc-400 font-mono">
                        siteon.agency/sandbox-preview
                      </div>
                    </div>

                    {/* Simulated website landing area */}
                    <div
                      className={`relative aspect-[16/10] w-full flex flex-col p-6 sm:p-8 justify-between select-none overflow-hidden transition-all duration-500 text-left bg-black`}
                    >
                      {/* Vibe Specific Background Details */}
                      {selectedVibe === 'tech' && (
                        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />
                      )}
                      {selectedVibe === 'bold' && (
                        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-neutral-900 opacity-80" />
                      )}
                      {selectedVibe === 'minimal' && (
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#111111_0%,_#050505_100%)] opacity-95" />
                      )}

                      {/* Header */}
                      <div className="flex justify-between items-center relative z-10 border-b border-white/5 pb-3">
                        <span className="text-white text-xs font-display font-extrabold tracking-tight">
                          BRAND<span style={{ color: currentAccent.hex }}>.VIBE</span>
                        </span>
                        <div className="flex items-center gap-3 text-[10px] text-white/50 font-mono">
                          <span>Home</span>
                          <span>Services</span>
                          <span
                            className="px-2 py-0.5 rounded text-[8px] font-bold text-white border"
                            style={{ borderColor: `${currentAccent.hex}30`, backgroundColor: `${currentAccent.hex}15`, borderRadius: `${borderRadius/2}px` }}
                          >
                            Live
                          </span>
                        </div>
                      </div>

                      {/* Core Content: Headline & Subhead */}
                      <div className="my-auto relative z-10 max-w-lg">
                        {/* Monospace Code tag for tech vibe */}
                        {selectedVibe === 'tech' && (
                          <div className="font-mono text-[9px] text-white/35 mb-2.5">
                            <span className="text-[#FF5500]">import</span> &#123; ClientGrowth &#125; <span className="text-[#FF5500]">from</span> <span style={{ color: currentAccent.hex }}>'siteon-core'</span>;
                          </div>
                        )}

                        {/* Title Copy logic */}
                        <h4
                          className={`text-white leading-tight mb-3 transition-all duration-300 ${
                            selectedVibe === 'bold'
                              ? 'font-sans font-black uppercase tracking-tighter text-2xl sm:text-3xl md:text-4xl'
                              : selectedVibe === 'minimal'
                              ? 'font-serif text-xl sm:text-2xl italic font-semibold text-center'
                              : 'font-mono text-lg sm:text-xl font-bold tracking-wide'
                          }`}
                        >
                          {selectedGoal === 'local' && (
                            selectedVibe === 'tech'
                              ? `const zone = "jsr"; // Jamshedpur Dominance`
                              : selectedVibe === 'minimal'
                              ? "Refined local digital experiences crafted with care."
                              : "DOMINATE JAMSHEDPUR WITH ZERO FRICTION."
                          )}
                          {selectedGoal === 'global' && (
                            selectedVibe === 'tech'
                              ? `await GlobalDeploy({ region: "all" });`
                              : selectedVibe === 'minimal'
                              ? "Sophisticated systems engineered to scale globally."
                              : "SCALE GLOBALLY. DEPLOY INSTANTLY."
                          )}
                          {selectedGoal === 'identity' && (
                            selectedVibe === 'tech'
                              ? `System.render({ creativeArt: true });`
                              : selectedVibe === 'minimal'
                              ? "A quiet testament to timeless artistic design."
                              : "THE LOUDEST BRAND IN THE DIGITAL ROOM."
                          )}
                        </h4>

                        <p
                          className={`text-zinc-400 text-[10px] sm:text-xs leading-relaxed max-w-sm ${
                            selectedVibe === 'minimal' ? 'text-center mx-auto' : ''
                          }`}
                        >
                          This mockup represents your brand archetype. It is fully custom-coded with responsive breakpoints, performance frameworks, and SEO guidelines.
                        </p>
                      </div>

                      {/* CTA Buttons */}
                      <div className={`flex gap-3 relative z-10 mt-2 ${selectedVibe === 'minimal' ? 'justify-center' : ''}`}>
                        <button
                          className="px-4 py-2 text-[10px] font-bold text-black transition-all duration-300 cursor-pointer shadow-md"
                          style={{
                            backgroundColor: currentAccent.hex,
                            boxShadow: `0 2px 10px ${currentAccent.hex}25`,
                            borderRadius: `${borderRadius / 2}px`
                          }}
                        >
                          Launch Product
                        </button>
                        <button
                          className="px-4 py-2 text-[10px] font-bold text-white border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                          style={{ borderRadius: `${borderRadius / 2}px` }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Sandbox Controls & Vibe Pitch */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <div className="glass-card p-6 rounded-3xl border border-white/5 bg-[#111]/30">
                  <div className="flex items-center gap-2.5 mb-4">
                    <div className="px-2.5 py-1 rounded-md text-[9px] font-bold bg-[#FF5500]/10 border border-[#FF5500]/25 text-[#FF5500] uppercase font-mono tracking-wide">
                      Archetype Result
                    </div>
                    <span className="text-zinc-400 text-xs">|</span>
                    <span className="text-white/70 text-xs font-bold font-mono">
                      {selectedVibe.toUpperCase()} + {selectedGoal.toUpperCase()}
                    </span>
                  </div>

                  {/* Dynamic description of results */}
                  <h4 className="text-white font-bold text-lg mb-2">
                    {selectedVibe === 'bold' && "The Disruptive Challenger"}
                    {selectedVibe === 'minimal' && "The Elegant Authority"}
                    {selectedVibe === 'tech' && "The Technical Innovator"}
                  </h4>
                  <p className="text-zinc-400 text-xs leading-relaxed mb-6">
                    {selectedVibe === 'bold' &&
                      "Your brand thrives on attention, standing out with high-impact color accents and modern animations. Ideal for Jamshedpur startups looking to make a massive splash instantly."}
                    {selectedVibe === 'minimal' &&
                      "Your brand speaks through luxury, simplicity, and premium layouts. This visual theme is tailored to high-end consulting, boutiques, and organizations that demand pure sophistication."}
                    {selectedVibe === 'tech' &&
                      "Your brand is engineered for performance, presenting data sheets, monospace elements, and grid layouts. Ideal for technical startups, tools, and developer platforms."}
                  </p>

                  <div className="space-y-6 pt-6 border-t border-white/5">
                    {/* Control 1: Glow Intensity */}
                    <div>
                      <div className="flex justify-between text-xs text-white/50 mb-2 font-mono">
                        <span>Glow Spotlight Intensity</span>
                        <span className="text-[#FF5500] font-bold">{glowIntensity}%</span>
                      </div>
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={glowIntensity}
                        onChange={(e) => setGlowIntensity(Number(e.target.value))}
                        className="w-full accent-[#FF5500] cursor-pointer"
                      />
                    </div>

                    {/* Control 2: Border roundedness */}
                    <div>
                      <div className="flex justify-between text-xs text-white/50 mb-2 font-mono">
                        <span>Border Roundedness</span>
                        <span className="text-[#FF5500] font-bold">{borderRadius}px</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="24"
                        value={borderRadius}
                        onChange={(e) => setBorderRadius(Number(e.target.value))}
                        className="w-full accent-[#FF5500] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Call-to-action buttons */}
                <div className="flex flex-col gap-3">
                  <Link
                    to={`/contact?vibe=${selectedVibe}&goal=${selectedGoal}&color=${currentAccent.id}`}
                    className="w-full py-4 rounded-full bg-[#FF5500] hover:bg-[#FF7733] text-black font-bold text-xs tracking-wider uppercase transition-all duration-300 text-center shadow-xl shadow-[#FF5500]/15"
                  >
                    Build My Custom Vibe Website
                  </Link>
                  <button
                    onClick={() => {
                      setQuizStep(1);
                      setSelectedVibe('bold');
                      setSelectedGoal('local');
                      setAccentColor('orange');
                      setGlowIntensity(60);
                      setBorderRadius(16);
                    }}
                    className="w-full py-3.5 rounded-full border border-white/8 bg-white/2 hover:bg-white/5 text-white/70 hover:text-white font-bold text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset & Take Quiz Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>



      <CTASection />
    </div>
  );
};

export default Portfolio;
