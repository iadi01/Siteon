import React, { useEffect } from 'react';
import Hero from '../components/Sections/Hero';
import Stats from '../components/Sections/Stats';
import ServicesSection from '../components/Sections/ServicesSection';
import PortfolioSection from '../components/Sections/PortfolioSection';
import ProcessSteps from '../components/Sections/ProcessSteps';
import WhyChoose from '../components/Sections/WhyChoose';
import PricingCards from '../components/Sections/PricingCards';
import CTASection from '../components/CTASection';

import SEO from '../components/SEO';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-brand-dark">
      <SEO
        title="Social Media & Digital Growth Agency"
        description="Siteon helps brands dominate online with premium website design, custom website development, social media management, content creation, branding, and digital growth."
        keywords="website design agency, social media agency, content creation agency, digital growth agency, branding agency, website development agency, small business website design, responsive website design, local business website, startup website design, lead generation agency"
      />
      <Hero />
      <Stats />
      
      {/* Services summary section */}
      <section id="services-section" className="content-auto" aria-label="Our Services">
        <ServicesSection showAll={false} />
      </section>
      
      {/* Portfolio featured list */}
      <section id="portfolio-section" className="content-auto" aria-label="Our Portfolio">
        <PortfolioSection limit={3} />
      </section>

      {/* 5-step process timeline */}
      <section id="process-section" className="content-auto" aria-label="Our Process">
        <ProcessSteps />
      </section>

      {/* Why Choose Siteon / About Section */}
      <section id="why-choose-section" className="content-auto" aria-label="Why Choose Siteon">
        <WhyChoose />
      </section>

      {/* Pricing cards */}
      <section id="pricing-section" className="content-auto" aria-label="Pricing Plans">
        <PricingCards />
      </section>

      {/* Reusable CTA */}
      <CTASection />
    </div>
  );
};

export default Home;
