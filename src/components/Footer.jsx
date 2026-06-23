import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import brandLogo from '../assets/brand_logo.webp';

const Footer = () => {
  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Process', path: '/process' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/iadi0/' },
    { name: 'Portfolio', url: 'https://aadi-sharma.dev/' },
    { name: 'WhatsApp', url: 'https://wa.me/919006814060' },
  ];

  return (
    <footer className="relative bg-[#080808] border-t border-white/5 pt-20 pb-10 overflow-hidden text-left">
      {/* Background accents */}
      <div className="absolute -bottom-32 -right-32 w-96 h-96 glow-orange opacity-10 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Big brand name — like Humane footer in the reference image */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10 overflow-hidden">
        <p className="font-display font-black text-white/4 select-none pointer-events-none"
          style={{ fontSize: 'clamp(4rem, 15vw, 12rem)', lineHeight: 0.85, letterSpacing: '-0.04em' }}>
          SITEON
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 relative z-10">

        {/* Brand Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <Link to="/" className="flex items-center gap-2.5 group mb-6">
            <img
              src={brandLogo}
              alt="Siteon Logo"
              className="w-9 h-9 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,85,0,0.3)]"
            />
            <span className="text-xl font-display font-black tracking-tight text-white group-hover:text-[#FF5500] transition-colors duration-300">
              Siteon
            </span>
          </Link>

          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
            Siteon helps brands build a better online presence through premium websites, viral content, bold branding, and digital growth strategies.
          </p>

          <span className="tag-violet">Turning Ideas Into Digital Reality</span>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6">Agency Links</h4>
          <ul className="space-y-3">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-zinc-400 hover:text-[#FF5500] text-sm transition-colors duration-200 hover:translate-x-1 inline-block font-medium">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h4 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-6">Get In Touch</h4>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-zinc-400 text-sm">
              <div className="w-7 h-7 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5 text-[#FF5500]" />
              </div>
              <a href="mailto:adityasharma10@amityonline.com" aria-label="Send email to Aditya Sharma" className="hover:text-[#FF5500] transition-colors text-xs">
                adityasharma10@amityonline.com
              </a>
            </li>
            <li className="flex items-center gap-3 text-zinc-400 text-sm">
              <div className="w-7 h-7 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
              </div>
              <a href="tel:+919006814060" aria-label="Call +91 90068 14060" className="hover:text-[#FF5500] transition-colors">+91 90068 14060</a>
            </li>
            <li className="flex items-start gap-3 text-zinc-400 text-sm">
              <div className="w-7 h-7 rounded-lg bg-[#FF5500]/10 border border-[#FF5500]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
              </div>
              <span>Jamshedpur, Jharkhand, India</span>
            </li>
          </ul>

          <div className="flex flex-wrap gap-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full border border-white/8 bg-white/3 text-zinc-400 hover:text-[#FF5500] hover:border-[#FF5500]/30 hover:bg-[#FF5500]/8 text-xs font-bold inline-flex items-center gap-1 transition-all duration-200"
              >
                {social.name} <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="divider-glow mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400 text-xs">
          <p>Copyright © 2026 Siteon. All rights reserved.</p>
          <p>Designed &amp; Developed by <span className="text-[#FF5500] font-bold">Aadi Sharma</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
