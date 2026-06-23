import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Check, ArrowLeft, ArrowRight, Layers, FileCode, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import Button from '../components/UI/Button';
import CTASection from '../components/CTASection';
import SEO from '../components/SEO';

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Fallback to GitAura if not found
  const project = projectsData.find((p) => p.id === id) || projectsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { name, tagline, description, problem, solution, tools, features, liveLink, colorTheme, imagePlaceholder, image } = project;

  // Alternate illustrations for case study header visual
  const currentIdx = projectsData.findIndex((p) => p.id === project.id);
  const detailImage = image;
  const nextProject = projectsData[(currentIdx + 1) % projectsData.length];

  return (
    <div className="pt-20 bg-[#0a0a0a] text-left">
      <SEO
        title={`${name} — Case Study`}
        description={tagline || description}
        keywords={`${tools.join(', ')}, website design company proof, custom website case study`}
      />
      {/* Back button row */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white/40 hover:text-[#FF5500] transition-colors gap-1.5 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      {/* Case Study Banner */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Banner Details */}
        <div className="lg:col-span-7">
          <span className="tag-violet mb-4">
            Project Showcase / Case Study
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-4 mb-3 leading-tight">
            {name}
          </h1>
          <p className="text-xl text-[#FF7733] font-medium mb-6">
            {tagline}
          </p>
          <p className="text-white/40 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button href={liveLink} variant="primary" className="px-6 py-3.5">
              Visit Live Project
              <ExternalLink className="w-4 h-4 ml-1.5" />
            </Button>
            <Button to="/contact" variant="secondary" className="px-6 py-3.5">
              Start Project Like This
            </Button>
          </div>
        </div>

        {/* Dynamic visual box */}
        <div className="lg:col-span-5 relative h-72 lg:h-96 rounded-3xl border border-white/8 overflow-hidden bg-white/3 shadow-2xl flex items-center justify-center">
          {/* Subtle Grid overlay */}
          <div className="absolute inset-0 grid-bg opacity-15" />
          
          {/* Ambient Glow */}
          <div className={`absolute inset-0 bg-gradient-to-tr ${colorTheme} opacity-5`} />

          {/* 3D clay image banner */}
          <img
            src={detailImage}
            alt={name}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        </div>

      </section>

      {/* Case Study contents */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Case Study descriptions */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Problem Card */}
          <div className="glass-card p-8 rounded-3xl border-l-4 border-l-[#FF5500]">
            <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#FF5500]" />
              The Problem Statement
            </h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              {problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="glass-card p-8 rounded-3xl border-l-4 border-l-[#FF5500]/80">
            <h2 className="text-xl md:text-2xl font-display font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FF5500]" />
              Our Tactical Solution
            </h2>
            <p className="text-white/40 text-sm md:text-base leading-relaxed">
              {solution}
            </p>
          </div>

          {/* Features check grid */}
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
              <FileCode className="w-5.5 h-5.5 text-[#FF5500]" />
              Key Features Implemented
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <li key={idx} className="glass-card p-5 rounded-2xl flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/25 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#FF7733]">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-white/80 text-sm font-semibold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Right Side: metadata box */}
        <div className="lg:col-span-4">
          <div className="glass-card p-6 md:p-8 rounded-3xl sticky top-24">
            <h3 className="text-sm font-display font-bold uppercase tracking-wider text-white mb-4 pb-4 border-b border-white/6">
              Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2 mb-8">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold bg-white/5 border border-white/8 text-white/50 px-3.5 py-1.5 rounded-full uppercase"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-white/40">Client / Concept</span>
                <span className="text-white/80 font-bold">{name} Showpiece</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-white/40">Industry</span>
                <span className="text-white/80 font-bold">Web Development & App Tools</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-3">
                <span className="text-white/40">Development Scope</span>
                <span className="text-white/80 font-bold">100% Fully Responsive SPA</span>
              </div>
            </div>
            
            <div className="mt-8 pt-4">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full justify-center inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#FF5500] bg-[#FF5500]/10 border border-[#FF5500]/25 hover:bg-[#FF5500]/15 transition-all py-3 rounded-2xl gap-1.5"
              >
                Launch Live Site
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Case Study recommendation footer */}
      <section className="bg-white/3 border-t border-white/5 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-white/30">
              Up Next
            </span>
            <h4 className="text-2xl font-display font-bold text-white mt-1">
              Case Study: {nextProject.name}
            </h4>
          </div>
          <Button to={`/portfolio/${nextProject.id}`} variant="secondary" className="px-6 py-3">
            Read Next Case Study
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default ProjectDetail;
