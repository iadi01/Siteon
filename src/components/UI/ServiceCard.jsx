import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ index, title, description, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="glass-card group relative p-8 rounded-2xl flex flex-col justify-between h-full text-left overflow-hidden border border-white/6 hover:border-[#FF5500]/30 transition-all duration-300"
    >
      {/* Shimmer */}
      <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Watermark number */}
      <span className="absolute top-5 right-6 text-7xl font-display font-black text-white/3 group-hover:text-white/5 transition-colors select-none leading-none">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        {/* Icon */}
        <div className="icon-box mb-6 group-hover:bg-[#FF5500]/15 group-hover:border-[#FF5500]/35 transition-all duration-300">
          <Icon className="w-6 h-6 text-[#FF5500]" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-[#FF5500] transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/35 text-sm leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Learn more */}
      <Link
        to={`/contact?service=${encodeURIComponent(title)}`}
        className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-[#FF5500]/60 group-hover:text-[#FF5500] transition-all duration-300 group-hover:gap-2.5"
      >
        Learn More
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
