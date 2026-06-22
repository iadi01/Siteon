import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CARD_ACCENTS = [
  'from-[#FF5500]/15 via-transparent to-[#FF5500]/15',
  'from-white/5 via-transparent to-white/5',
  'from-[#FF5500]/10 via-transparent to-[#FF5500]/10',
];

const PILL_COLORS = [
  'bg-[#FF5500]/10 border-[#FF5500]/25 text-[#FF7733]',
  'bg-white/5 border-white/12 text-white/60',
  'bg-[#FF5500]/5 border-[#FF5500]/15 text-[#FF7733]/80',
];

const ProjectCard = ({ project, index }) => {
  const { id, name, tagline, description, tools, liveLink, image } = project;
  const cardImage = image;
  const gradientBg = CARD_ACCENTS[index % CARD_ACCENTS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card group overflow-hidden rounded-3xl flex flex-col justify-between h-full text-left"
    >
      <div>
        {/* Card image header */}
        <div className={`relative h-52 bg-gradient-to-tr ${gradientBg} flex items-center justify-center overflow-hidden`}>
          {/* Inner grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

          <img
            src={cardImage}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 select-none pointer-events-none opacity-80 group-hover:opacity-100"
          />

          {/* Tagline overlay */}
          <div className="absolute bottom-3 left-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 py-1.5 px-3 rounded-xl">
            <p className="text-[10px] font-bold text-zinc-350 truncate tracking-wide uppercase">
              {tagline}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-6">
          <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-[#FF5500] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-zinc-550 text-xs leading-relaxed mb-5 line-clamp-3">
            {description}
          </p>

          {/* Tool badges */}
          <div className="flex flex-wrap gap-1.5">
            {tools.slice(0, 3).map((tool, idx) => (
              <span
                key={idx}
                className={`text-[10px] font-bold border px-2.5 py-1 rounded-full uppercase ${PILL_COLORS[idx % PILL_COLORS.length]}`}
              >
                {tool}
              </span>
            ))}
            {tools.length > 3 && (
              <span className="text-[10px] font-bold bg-white/5 border border-white/10 text-zinc-500 px-2.5 py-1 rounded-full">
                +{tools.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 pt-4 border-t border-white/6 flex items-center justify-between gap-4">
        <Link
          to={`/portfolio/${id}`}
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#FF5500] hover:text-[#FF7733] transition-all gap-1 group/link"
        >
          View Case Study
          <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>

        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-zinc-650 hover:text-zinc-300 transition-colors gap-1"
        >
          Live link
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
