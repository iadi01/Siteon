import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin, Sparkles } from 'lucide-react';
import { blogData } from '../data/blogData';
import SEO from '../components/SEO';
import CTASection from '../components/CTASection';
import Button from '../components/UI/Button';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find current post, default to first if not found
  const post = blogData.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-32 pb-24 text-center px-6 bg-[#0a0a0a] min-h-screen">
        <h1 className="text-2xl font-bold text-white mb-4">Article Not Found</h1>
        <p className="text-white/40 mb-8">The requested article could not be located in our system.</p>
        <Link to="/blog" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#FF5500] gap-1">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>
    );
  }

  const currentIdx = blogData.findIndex((p) => p.id === post.id);
  const nextPost = blogData[(currentIdx + 1) % blogData.length];

  return (
    <div className="pt-20 bg-[#0a0a0a] text-left">
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords={post.keywords.join(', ')}
        type="article"
        article={{
          title: post.title,
          excerpt: post.excerpt,
          keywords: post.keywords,
          dateISO: '2026-06-22'
        }}
      />

      {/* Back button row */}
      <div className="max-w-4xl mx-auto px-6 pt-6">
        <Link
          to="/blog"
          className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-white/40 hover:text-[#FF5500] transition-colors gap-1.5 group"
        >
          <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
          Back to Blog Insights
        </Link>
      </div>

      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <span className="tag-violet mb-6">
          <Sparkles className="w-3 h-3 mr-1" />
          Strategic Guide
        </span>
        <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white mt-4 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Post meta details */}
        <div className="flex flex-wrap items-center gap-6 text-white/30 text-xs pb-8 border-b border-white/6">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#FF5500]" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#FF5500]" />
            {post.readTime}
          </span>
          <span className="text-[#FF7733] font-bold uppercase tracking-wider bg-[#FF5500]/5 px-2.5 py-0.5 rounded-md border border-[#FF5500]/15">
            Verified SEO Strategy
          </span>
        </div>
      </section>

      {/* Article Content Layout */}
      <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Body content */}
        <div className="lg:col-span-8 space-y-8">
          <div
            className="prose prose-invert max-w-none text-white/70 text-sm md:text-base leading-relaxed space-y-6 blog-content-wrapper"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Keyword tags footer */}
          <div className="pt-10 border-t border-white/5 mt-12">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/30 mb-4">Target Search Keywords</h4>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="text-[9px] font-bold bg-white/3 border border-white/8 text-white/50 px-3 py-1.5 rounded-full uppercase"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          {/* Author info card */}
          <div className="glass-card p-6 rounded-3xl text-left">
            <h3 className="text-xs font-display font-bold uppercase tracking-widest text-[#FF5500] mb-4 pb-2 border-b border-white/5">
              Author Profile
            </h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FF5500] flex items-center justify-center font-black text-white text-base">
                AS
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-none">Aditya Sharma</p>
                <p className="text-white/30 text-[10px] uppercase font-bold mt-1">SEO Specialist</p>
              </div>
            </div>
            <p className="text-white/40 text-[11px] leading-relaxed">
              Aditya designs modern responsive websites and develops targeted social media campaigns to scale local brands and startups.
            </p>
          </div>

          {/* Social share */}
          <div className="glass-card p-6 rounded-3xl text-left">
            <h3 className="text-xs font-display font-bold uppercase tracking-widest text-white/30 mb-4 pb-2 border-b border-white/5">
              Share Article
            </h3>
            <div className="flex gap-2.5">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com' },
                { Icon: Twitter, href: 'https://twitter.com' },
                { Icon: Facebook, href: 'https://facebook.com' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/3 border border-white/8 flex items-center justify-center text-white/40 hover:text-[#FF5500] hover:border-[#FF5500]/30 transition-all"
                >
                  <social.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Up Next Article recommendation */}
      <section className="bg-white/3 border-t border-white/5 py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-white/30">
              Read Next
            </span>
            <h4 className="text-2xl font-display font-bold text-white mt-1">
              {nextPost.name || nextPost.title}
            </h4>
          </div>
          <Button to={`/blog/${nextPost.id}`} variant="secondary" className="px-6 py-3">
            Read Next Article
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default BlogDetail;
