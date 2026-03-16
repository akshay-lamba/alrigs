import { motion } from 'motion/react';
import { Database, Cpu, Network, Layers, ArrowRight, ShieldCheck, TrendingUp, TrendingDown, Maximize, LockOpen, Infinity as InfinityIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 min-h-screen flex items-center grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/50 via-transparent to-obsidian pointer-events-none" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-text-main mb-8 whitespace-nowrap">
              Sovereign | Business | AI
            </h1>
            <p className="font-body text-lg md:text-xl text-text-main/80 max-w-2xl leading-relaxed mb-12 border-l-2 border-accent-blue pl-6 shadow-[-4px_0_15px_-5px_rgba(212,175,55,0.2)]">
              A bespoke AI ecosystem engineered for the enterprise perimeter. Creating controlled velocity in revenue and cost to drive structural margin expansion.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/identity" className="relative overflow-hidden bg-deep-blue/50 backdrop-blur-md border border-royal/50 text-text-main font-display font-bold uppercase tracking-widest px-8 py-4 hover:bg-royal/30 hover:border-cyan-glow/50 transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] rounded-sm group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                Explore Sovereign AI <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/arc-engine" className="glass-panel text-text-main font-display font-bold uppercase tracking-widest px-8 py-4 hover:bg-white/5 transition-colors flex items-center justify-center">
                View Schematics
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The 4 Pillars Summary */}
      <section className="py-10 px-6 relative border-t border-white/5 bg-obsidian/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
              <div>
                <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wide text-gradient-blue mb-4">
                  The Holistic View
                </h2>
                <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
                  Five Pillars of Sovereign AI
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FadeIn delay={0.1}>
              <Link to="/identity" className="glass-panel p-8 h-full flex flex-col group hover:bg-white/5 transition-colors cursor-pointer block">
                <ShieldCheck size={32} className="text-accent-blue mb-6 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-widest">Pillar 01</div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">Sovereign AI</h3>
                <p className="font-body text-text-main/60 mb-8">Stop renting intelligence. Start owning it. Discover the philosophy behind true data sovereignty and the shift from OpEx to CapEx.</p>
                <div className="mt-auto font-mono text-xs text-accent-blue flex items-center gap-2 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={14} />
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Link to="/arc-engine" className="glass-panel p-8 h-full flex flex-col group hover:bg-white/5 transition-colors cursor-pointer block">
                <Database size={32} className="text-accent-blue mb-6 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-widest">Pillar 02</div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">The ARC Engine</h3>
                <p className="font-body text-text-main/60 mb-8">The 'How'. Explore the formula: Context + Depth + Velocity². Dive into the Learning Layer and Verification mechanisms.</p>
                <div className="mt-auto font-mono text-xs text-accent-blue flex items-center gap-2 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={14} />
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Link to="/business-impact" className="glass-panel p-8 h-full flex flex-col group hover:bg-white/5 transition-colors cursor-pointer block">
                <TrendingUp size={32} className="text-accent-blue mb-6 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-widest">Pillar 03</div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">The Business Impact</h3>
                <p className="font-body text-text-main/60 mb-8">Practical outcomes. Learn how to scale without headcount and understand exactly what's in it for your daily operations.</p>
                <div className="mt-auto font-mono text-xs text-accent-blue flex items-center gap-2 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={14} />
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Link to="/value-proposition" className="glass-panel p-8 h-full flex flex-col group hover:bg-white/5 transition-colors cursor-pointer block">
                <Maximize size={32} className="text-accent-blue mb-6 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-widest">Pillar 04</div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">The Value Proposition</h3>
                <p className="font-body text-text-main/60 mb-8">The P&L Impact. CFO, CEO, and Board-specific value. Understand the financial logic of structural margin expansion.</p>
                <div className="mt-auto font-mono text-xs text-accent-blue flex items-center gap-2 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={14} />
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.5} className="md:col-span-2 lg:col-span-1">
              <Link to="/human-upgrade" className="glass-panel p-8 h-full flex flex-col group hover:bg-white/5 transition-colors cursor-pointer block">
                <div className="relative w-10 h-10 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-tr from-royal/40 via-accent-blue/40 to-cyan-glow/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  <InfinityIcon size={32} style={{ stroke: "url(#glassy-blue)" }} className="relative z-10 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                </div>
                <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-widest">Pillar 05</div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">The Human Upgrade</h3>
                <p className="font-body text-text-main/60 mb-8">The mindset shift. From execution to judgment. Learn how roles evolve when the machine handles the process.</p>
                <div className="mt-auto font-mono text-xs text-accent-blue flex items-center gap-2 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  Read More <ArrowRight size={14} />
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
