import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './UI/Button';
import brandLogo from '../assets/brand_logo.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Process', path: '/process' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3' : 'py-5'
      } backdrop-blur-xl border-b border-white/6`}
      style={{ backgroundColor: 'rgba(10, 10, 10, 0.98)' }}
    >
      <div className="relative z-50 max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ── Brand Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <img
            src={brandLogo}
            alt="Siteon Logo"
            className="w-9 h-9 object-contain group-hover:scale-110 transition-all duration-300 drop-shadow-[0_2px_8px_rgba(255,85,0,0.3)]"
          />
          <span className="text-xl font-display font-black tracking-tight text-white group-hover:text-[#FF5500] transition-colors duration-300">
            Siteon
          </span>
        </Link>

        {/* ── Desktop Nav ── */}
        <div className="hidden md:flex items-center gap-1 bg-white/4 border border-white/8 px-2 py-1.5 rounded-full backdrop-blur-sm">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-[#FF5500] shadow-sm shadow-orange-500/30'
                    : 'text-white/50 hover:text-white hover:bg-white/6'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="hidden md:block">
          <Button to="/contact" variant="primary">
            Get Started
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>

        {/* ── Mobile Toggle ── */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 rounded-lg bg-white/5 border border-white/8 text-white/60 hover:text-white hover:bg-white/10 focus:outline-none transition-all cursor-pointer"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col p-6 pt-24 overflow-y-auto"
            style={{ backgroundColor: '#050505' }}
          >
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full noise-overlay opacity-20 pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#FF5500]/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-10 -left-20 w-64 h-64 bg-[#FF5500]/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="flex-1 flex flex-col justify-center relative z-10 my-4 min-h-[max-content]">
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        `group flex items-center justify-between text-4xl sm:text-5xl font-display font-black tracking-tight py-4 border-b ${
                          isActive
                            ? 'text-[#FF5500] border-[#FF5500]/30'
                            : 'text-white/70 border-white/10 hover:text-white hover:border-white/30'
                        } transition-all`
                      }
                    >
                      {link.label}
                      <ArrowRight className={`w-6 h-6 sm:w-8 sm:h-8 transform -rotate-45 transition-all duration-300 ${isActive ? 'opacity-100 text-[#FF5500]' : 'opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0'}`} />
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="relative z-10 mt-auto pt-8"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-1.5">Socials</span>
                  <div className="flex gap-4">
                    <a href="#" aria-label="Instagram" className="text-sm font-semibold text-white/70 hover:text-[#FF5500] transition-colors">IG</a>
                    <a href="#" aria-label="LinkedIn" className="text-sm font-semibold text-white/70 hover:text-[#FF5500] transition-colors">IN</a>
                    <a href="#" aria-label="Twitter/X" className="text-sm font-semibold text-white/70 hover:text-[#FF5500] transition-colors">X</a>
                  </div>
                </div>
                <div className="flex flex-col text-right">
                  <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold mb-1.5">Say Hello</span>
                  <a href="mailto:hello@siteon.com" aria-label="Email us at hello@siteon.com" className="text-sm font-semibold text-white/70 hover:text-[#FF5500] transition-colors">
                    hello@siteon.com
                  </a>
                </div>
              </div>
              <Button to="/contact" variant="primary" className="w-full py-4 text-base flex justify-center" onClick={() => setIsOpen(false)}>
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
