import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Send, ShieldAlert, Sparkles, Check } from 'lucide-react';
import Button from '../components/UI/Button';
import SEO from '../components/SEO';

const CONTACT_SHEET_URL = "https://script.google.com/macros/s/AKfycbzyHpzl-b4Nl7tenWfUWOM8lghoTMTeU1DiBu3PL-At3nLrPPhDJwYXEHLgc-Ar-ejV/exec";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    serviceNeeded: '',
    projectBudget: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(location.search);
    const pkg = params.get('package');
    if (pkg) {
      if (pkg === 'starter') {
        setFormData(prev => ({ ...prev, serviceNeeded: 'Social Media Management', projectBudget: '$200 - $400' }));
      } else if (pkg === 'growth') {
        setFormData(prev => ({ ...prev, serviceNeeded: 'Website Design', projectBudget: '$800 - $1,000' }));
      } else if (pkg === 'premium') {
        setFormData(prev => ({ ...prev, serviceNeeded: 'Digital Growth Consulting', projectBudget: '$3,000+' }));
      }
    }

    const vibe = params.get('vibe');
    const goal = params.get('goal');
    const color = params.get('color');
    if (vibe || goal || color) {
      const vibeLabel = vibe === 'bold' ? 'Bold & Disruptive' : vibe === 'minimal' ? 'Minimalist & Luxury' : 'Futuristic & Tech';
      const goalLabel = goal === 'local' ? 'Dominate Local Market' : goal === 'global' ? 'Global Reach & Scaling' : 'Artistic Brand Story';
      const colorLabel = color ? color.charAt(0).toUpperCase() + color.slice(1) : '';
      
      setFormData(prev => ({
        ...prev,
        serviceNeeded: 'Website Design',
        message: `Hello! I generated my website mockup style in the Siteon Brand Vibe Lab:\n- Aesthetic Vibe: ${vibeLabel}\n- Target Goal: ${goalLabel}${colorLabel ? `\n- Color Accent: ${colorLabel}` : ''}\n\nI would love to get a consultation to bring this visual direction to life.`
      }));
    }

    const serviceParam = params.get('service');
    if (serviceParam) {
      setFormData(prev => ({
        ...prev,
        message: `Hi, I am interested in the ${serviceParam} service. I would like to get more details and discuss a potential project.`
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    if (CONTACT_SHEET_URL) {
      const payload = {
        name: formData.name,
        businessName: formData.businessName,
        phone: `Budget: ${formData.projectBudget}`,
        email: formData.email,
        serviceNeeded: formData.serviceNeeded,
        message: `${formData.message}\n\n[Submitted from Contact Form]`
      };

      fetch(CONTACT_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
      .then(() => {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          businessName: '',
          serviceNeeded: '',
          projectBudget: '',
          message: ''
        });
      })
      .catch((err) => {
        console.error('Error posting contact form to Google Sheets:', err);
        // Fallback to success to keep standard user experience positive
        setFormStatus('success');
      });
    } else {
      setTimeout(() => {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          businessName: '',
          serviceNeeded: '',
          projectBudget: '',
          message: ''
        });
      }, 1500);
    }
  };
  return (
    <div className="pt-20 bg-[#0a0a0a] text-left">
      <SEO
        title="Start Your Digital Growth Project"
        description="Get in touch with Siteon Agency. Request a custom quote proposal for web design, social media management, content strategy, or paid ads."
        keywords="website design company contact, digital growth agency consultation, request custom website quote, social media ads agency proposal"
      />
      {/* Page Header */}
      <div className="relative py-24 border-b border-white/5 overflow-hidden text-center px-6">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-orange-sm opacity-35 pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <span className="tag-violet mb-4">
            Get Started
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white mt-5 leading-tight">
            Let's Start Your <span className="gradient-text">Growth Plan</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg mt-5 max-w-xl mx-auto">
            Fill out the form below to request a project quote, or reach out directly via official email or WhatsApp details.
          </p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Side details */}
        <div className="lg:col-span-5 space-y-8">
          
          <div>
            <h2 className="text-2xl font-display font-bold text-white mb-2">
              Direct Contact
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Skip the forms? Reach out directly to Aditya Sharma (Aadi) to discuss scope, pricing, or project consults.
            </p>
          </div>

          {/* Details Card */}
          <div className="glass-card p-6 md:p-8 rounded-3xl space-y-6">
            <h3 className="text-sm font-display font-bold uppercase tracking-wider text-[#FF5500]">
              Agency Representative
            </h3>
            
            <div className="space-y-4">
              {/* Name */}
              <div className="border-b border-white/6 pb-3">
                <span className="text-[10px] uppercase font-bold text-zinc-400 block">Name</span>
                <span className="text-white font-bold">Aditya Sharma / Aadi</span>
              </div>

              {/* Email */}
              <div className="border-b border-white/6 pb-3 flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">Email Address</span>
                  <a href="mailto:adityasharma10@amityonline.com" className="text-white hover:text-[#FF7733] transition-colors font-bold">
                    adityasharma10@amityonline.com
                  </a>
                </div>
                <Mail className="w-4 h-4 text-zinc-400 mt-1" />
              </div>

              {/* Phone / Whatsapp */}
              <div className="border-b border-white/6 pb-3 flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">Phone / WhatsApp</span>
                  <a href="https://wa.me/919006814060" className="text-white hover:text-[#FF7733] transition-colors font-bold">
                    +91 90068 14060
                  </a>
                </div>
                <Phone className="w-4 h-4 text-zinc-400 mt-1" />
              </div>

              {/* Location */}
              <div className="border-b border-white/6 pb-3 flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400 block">Headquarters</span>
                  <span className="text-white font-bold">Jamshedpur, Jharkhand, India</span>
                </div>
                <MapPin className="w-4 h-4 text-zinc-400 mt-1" />
              </div>
            </div>

            {/* Social Links buttons */}
            <div className="pt-4 flex flex-wrap gap-3">
              <a
                href="https://aadi-sharma.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold bg-white/3 border border-white/8 text-white/70 hover:text-white hover:border-[#FF5500]/30 transition-all px-3 py-1.5 rounded-lg gap-1"
              >
                Personal Website
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
              <a
                href="https://www.linkedin.com/in/iadi0/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold bg-white/3 border border-white/8 text-white/70 hover:text-white hover:border-[#FF5500]/30 transition-all px-3 py-1.5 rounded-lg gap-1"
              >
                LinkedIn
                <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              </a>
            </div>

          </div>

          {/* Scope details */}
          <div className="rounded-3xl border border-[#FF5500]/20 bg-[#FF5500]/5 p-6 flex items-start gap-4">
            <ShieldAlert className="w-5 h-5 text-[#FF5500] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-white">100% Scope Guarantee</h4>
              <p className="text-zinc-400 text-xs mt-1 leading-relaxed">
                We lock detailed project deliverables upfront. No sudden invoice changes, no hidden maintenance fees, and transparent code handover.
              </p>
            </div>
          </div>

        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 rounded-3xl relative overflow-hidden">
            {/* Grid inside card */}
            <div className="absolute inset-0 grid-bg opacity-5 pointer-events-none" />

            {/* Success modal */}
            {formStatus === 'success' ? (
              <div className="relative z-10 py-16 text-center flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/25 flex items-center justify-center text-[#FF5500] mb-6 shadow-sm animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  Project Request Sent!
                </h3>
                <p className="text-zinc-400 text-sm max-w-md mb-8 leading-relaxed">
                  Thank you for submitting your details. Aditya Sharma (Aadi) will review your project scope parameters and reach out within 24 hours to schedule a Zoom/Google Meet.
                </p>
                <Button onClick={() => setFormStatus('idle')} variant="secondary" className="px-6 py-2.5">
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#FF5500]" />
                  <span className="text-sm font-bold text-white">Request Custom Quote Proposal</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-400 mb-2">
                      Your Name <span className="text-[#FF5500]">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Aditya Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-white/3 border border-white/8 text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]/25 transition-all min-h-[48px] placeholder-white/20"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="email" className="text-xs font-bold text-zinc-400 mb-2">
                      Email Address <span className="text-[#FF5500]">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-white/3 border border-white/8 text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]/25 transition-all min-h-[48px] placeholder-white/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="businessName" className="text-xs font-bold text-zinc-400 mb-2">
                      Business Name
                    </label>
                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="e.g. Siteon Agency"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="bg-white/3 border border-white/8 text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]/25 transition-all min-h-[48px] placeholder-white/20"
                    />
                  </div>

                  {/* Service Needed */}
                  <div className="flex flex-col text-left">
                    <label htmlFor="serviceNeeded" className="text-xs font-bold text-zinc-400 mb-2">
                      Service Needed <span className="text-[#FF5500]">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="serviceNeeded"
                        name="serviceNeeded"
                        required
                        value={formData.serviceNeeded}
                        onChange={handleChange}
                        className="w-full bg-[#111] border border-white/8 text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]/25 transition-all min-h-[48px] appearance-none"
                      >
                        <option value="">Select Service...</option>
                        <option value="Social Media Management">Social Media Management</option>
                        <option value="Content Creation">Content Creation</option>
                        <option value="Branding and Strategy">Branding and Strategy</option>
                        <option value="Paid Ads Planning">Paid Ads Planning</option>
                        <option value="Website Design">Website Design</option>
                        <option value="Digital Growth Consulting">Digital Growth Consulting</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Budget */}
                <div className="flex flex-col text-left">
                  <label htmlFor="projectBudget" className="text-xs font-bold text-zinc-400 mb-2">
                    Project Budget <span className="text-[#FF5500]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="projectBudget"
                      name="projectBudget"
                      required
                      value={formData.projectBudget}
                      onChange={handleChange}
                      className="w-full bg-[#111] border border-white/8 text-white rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]/25 transition-all min-h-[48px] appearance-none"
                    >
                      <option value="">Select Budget Range...</option>
                      <option value="Under $200">Under $200</option>
                      <option value="$200 - $400">$200 - $400</option>
                      <option value="$400 - $800">$400 - $800</option>
                      <option value="$800 - $1,000">$800 - $1,000</option>
                      <option value="$1,000 - $1,500">$1,000 - $1,500</option>
                      <option value="$1,500 - $3,000">$1,500 - $3,000</option>
                      <option value="$3,000+">$3,000+</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-zinc-400">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col text-left">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-400 mb-2">
                    Project Details & Message <span className="text-[#FF5500]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    placeholder="Describe your project goals, timelines, reference links, and what you would like Siteon to build..."
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/3 border border-white/8 text-white rounded-xl p-4 text-sm focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]/25 transition-all min-h-[100px] placeholder-white/20"
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  variant="primary"
                  disabled={formStatus === 'submitting'}
                  className="w-full py-4 text-base"
                >
                  {formStatus === 'submitting' ? (
                    <>
                      <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin mr-2" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Send Project Request
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
