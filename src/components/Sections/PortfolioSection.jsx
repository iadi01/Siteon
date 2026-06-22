import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Folder } from 'lucide-react';
import ProjectCard from '../UI/ProjectCard';
import { projectsData } from '../../data/projectsData';
import Button from '../UI/Button';

const PortfolioSection = ({ limit = 3 }) => {
  const displayedProjects = limit ? projectsData.slice(0, limit) : projectsData;

  return (
    <section className="relative py-28 px-6 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 glow-orange opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-80 h-80 glow-cyan opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl text-left"
          >
            <span className="tag-violet mb-5">
              <Folder className="w-3 h-3" />
              Our Case Studies
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight text-white mt-4 leading-[1.1]">
              Featured <br />
              <span className="gradient-text">Project Proof</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-zinc-500 text-sm md:text-base max-w-md text-left md:text-right"
          >
            Explore our real-world public web assets proving our ability to build functional code, fast responsive pages, and clean interactive layouts.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* Button */}
        {limit && projectsData.length > limit && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Button to="/portfolio" variant="secondary" className="px-8 py-4">
              See All {projectsData.length} Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
