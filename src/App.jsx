import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

// Eagerly load Home (first paint)
import Home from './pages/Home';

// Lazy load all other pages for code-splitting (improves LCP + FCP)
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Process = lazy(() => import('./pages/Process'));
const Pricing = lazy(() => import('./pages/Pricing'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogDetail = lazy(() => import('./pages/BlogDetail'));
const Chatbot = lazy(() => import('./components/Chatbot'));

// Minimal loading fallback — keeps CLS at 0
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a]" role="status" aria-label="Loading page">
    <div className="w-8 h-8 border-2 border-[#FF5500]/30 border-t-[#FF5500] rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-zinc-100 select-none overflow-x-hidden relative">
        
        {/* Decorative Grid backdrop */}
        <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" aria-hidden="true" />

        {/* Global sticky navigation header */}
        <Navbar />

        {/* Main Content Areas */}
        <main className="flex-grow relative z-10" id="main-content">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<ProjectDetail />} />
              <Route path="/process" element={<Process />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              
              {/* Fallback to Home if unknown route */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global site-map footer */}
        <Footer />

        {/* Global AI Chatbot Assistant */}
        <Suspense fallback={null}>
          <Chatbot />
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
