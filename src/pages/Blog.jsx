import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Calendar, Clock, ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { blogData } from '../data/blogData';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKeyword, setSelectedKeyword] = useState('all');
  const [visibleCount, setVisibleCount] = useState(9);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setVisibleCount(9);
  }, [searchQuery, selectedKeyword]);

  // Extract unique keywords for filtering
  const allKeywords = ['all', ...new Set(blogData.flatMap((post) => post.keywords))];

  // Filter posts based on search query and keyword selection
  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesKeyword =
      selectedKeyword === 'all' || post.keywords.includes(selectedKeyword);

    return matchesSearch && matchesKeyword;
  });

  return (
    <div className="pt-20 bg-[#0a0a0a] text-left">
      <SEO
        title="SEO & Marketing Blog"
        description="Read Siteon Agency's latest insights on website design, social media strategy, reels marketing, brand identity, and growth marketing."
        keywords="website design agency blog, social media growth tips, branding strategy articles, reels content planning guides, local business marketing insights"
      />

      {/* Page Header */}
      <div className="relative py-24 border-b border-white/5 overflow-hidden text-center px-6">
        <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-orange-sm opacity-35 pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <span className="tag-violet mb-4">
            <BookOpen className="w-3.5 h-3.5 mr-1" />
            Agency Insights & Guides
          </span>
          <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white mt-5 leading-tight">
            Our Digital <span className="gradient-text">Growth Blog</span>
          </h1>
          <p className="text-white/40 text-base sm:text-lg mt-5 max-w-xl mx-auto">
            Practical strategies, creative content ideas, and design tips to scale your business, optimize conversions, and grow your digital brand.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <section className="py-8 border-b border-white/5 bg-[#111]/30 px-6 sticky top-[65px] z-20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/3 border border-white/8 text-white rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-[#FF5500] focus:ring-1 focus:ring-[#FF5500]/25 transition-all placeholder-white/20 min-h-[46px]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-white/30" />
          </div>

          {/* Keyword tags */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none justify-start md:justify-end">
            <span className="text-xs text-white/30 uppercase font-black tracking-widest hidden lg:inline mr-2">Filters:</span>
            {allKeywords.slice(0, 7).map((kw) => (
              <button
                key={kw}
                onClick={() => setSelectedKeyword(kw)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  selectedKeyword === kw
                    ? 'bg-[#FF5500] text-white shadow-lg shadow-[#FF5500]/25'
                    : 'bg-white/3 border border-white/8 text-white/50 hover:text-white hover:border-white/20'
                }`}
              >
                {kw === 'all' ? 'All Posts' : kw}
              </button>
            ))}
          </div>
        </div>
      </section>

          {/* Blog Cards Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto min-h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(0, visibleCount).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.05 }}
              className="glass-card group overflow-hidden rounded-3xl flex flex-col justify-between h-full text-left"
            >
              <div className="p-6 md:p-8">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-white/30 text-xs mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-[#FF5500] transition-colors duration-300 line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>

                {/* Excerpt */}
                <p className="text-white/40 text-xs leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Top keywords pills */}
                <div className="flex flex-wrap gap-1.5">
                  {post.keywords.slice(0, 2).map((kw, idx) => (
                    <span
                      key={idx}
                      className="text-[9px] font-bold border border-white/8 bg-white/3 text-white/50 px-2.5 py-1 rounded-full uppercase"
                    >
                      {kw}
                    </span>
                  ))}
                  {post.keywords.length > 2 && (
                    <span className="text-[9px] font-bold bg-[#FF5500]/10 border border-[#FF5500]/20 text-[#FF7733] px-2.5 py-1 rounded-full">
                      +{post.keywords.length - 2} keywords
                    </span>
                  )}
                </div>
              </div>

              {/* Read button */}
              <div className="px-6 md:px-8 pb-6 md:pb-8 pt-4 border-t border-white/6 flex items-center justify-between">
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#FF5500] hover:text-[#FF7733] transition-all gap-1 group/link"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredPosts.length > visibleCount && (
          <div className="mt-14 text-center">
            <button
              onClick={() => setVisibleCount(filteredPosts.length)}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-[#FF5500] hover:border-[#FF5500] transition-all duration-300 shadow-md cursor-pointer inline-flex items-center gap-2"
            >
              <span>See More Articles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/30 text-lg">No articles match your search criteria.</p>
          </div>
        )}
      </section>

      <CTASection />
    </div>
  );
};

export default Blog;
