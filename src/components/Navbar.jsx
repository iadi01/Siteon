import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './UI/Button';
import brandLogo from '../assets/brand_logo.png';

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
      } ${
        isScrolled || isOpen
          ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/6'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 bg-[#0a0a0a] z-40 flex flex-col p-8 pt-28 border-t border-white/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 glow-orange opacity-15 pointer-events-none" />

            <div className="flex flex-col gap-1 relative z-10">
              {navLinks.map((link, i) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  style={{ animationDelay: `${i * 0.05}s` }}
                  className={({ isActive }) =>
                    `text-3xl font-display font-black tracking-tight py-3 px-4 rounded-xl transition-all animate-fade-in-up ${
                      isActive
                        ? 'text-[#FF5500]'
                        : 'text-white/60 hover:text-white'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-10 relative z-10">
              <Button to="/contact" variant="primary" className="w-full py-4 text-base">
                Start a Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
