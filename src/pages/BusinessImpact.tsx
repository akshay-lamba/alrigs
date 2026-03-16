import { TrendingUp, TrendingDown, ArrowRight, Activity, Zap, BarChart3, Database, ShieldCheck, Users } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export default function BusinessImpact() {
  return (
    <div className="pt-20 pb-10 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-12">
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-gradient-blue mb-6">
              The Business Impact
            </h1>
            <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
              The Investment Thesis: Revenue, Costs, and Margin Expansion.
            </p>
          </div>
        </FadeIn>

        {/* 1. Revenue & 2. Costs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Revenue */}
          <FadeIn delay={0.1} className="glass-panel p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-glow to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-cyan-glow/10 flex items-center justify-center border border-cyan-glow/30 shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                <TrendingUp size={24} className="text-cyan-glow" />
              </div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-text-main">
                1. Revenue <span className="text-text-muted font-light text-xl">(The Top Line)</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">The Problem</h3>
                <p className="font-body text-text-main/80 leading-relaxed border-l border-white/10 pl-4">
                  Revenue growth is currently capped by human bandwidth and market response time.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-2">The Shift</h3>
                <p className="font-body text-text-main/80 leading-relaxed border-l border-accent-blue/50 pl-4">
                  The ARC Engine provides <strong className="text-text-main">Revenue Velocity</strong>. It uses AI Agents to identify leads, process transactions, and serve customers 24/7 at a scale no human team can match.
                </p>
              </div>
              <div className="bg-cyan-glow/5 border border-cyan-glow/20 p-4 rounded-sm">
                <h3 className="font-mono text-xs text-cyan-glow uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Zap size={14} /> The Win
                </h3>
                <p className="font-body text-text-main font-medium">
                  You capture more market share, faster.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Costs */}
          <FadeIn delay={0.2} className="glass-panel p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-royal to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-royal/10 flex items-center justify-center border border-royal/30 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <TrendingDown size={24} className="text-royal" />
              </div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-text-main">
                2. Costs <span className="text-text-muted font-light text-xl">(The Bottom Line)</span>
              </h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">The Problem</h3>
                <p className="font-body text-text-main/80 leading-relaxed border-l border-white/10 pl-4">
                  Growth usually requires hiring more people, which increases payroll, benefits, and management overhead.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs text-accent-blue uppercase tracking-widest mb-2">The Shift</h3>
                <p className="font-body text-text-main/80 leading-relaxed border-l border-accent-blue/50 pl-4">
                  <strong className="text-text-main">Cost Compression</strong>. The ARC Engine automates high-value knowledge work. It handles the "thinking tasks" that usually require a $100k+ salary, but it does it for the cost of compute.
                </p>
              </div>
              <div className="bg-royal/5 border border-royal/20 p-4 rounded-sm">
                <h3 className="font-mono text-xs text-royal uppercase tracking-widest mb-1 flex items-center gap-2">
                  <Zap size={14} /> The Win
                </h3>
                <p className="font-body text-text-main font-medium">
                  You decouple headcount from growth. You grow the business without growing the "bloat."
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* 3. Before vs After */}
        <FadeIn delay={0.3} className="mb-10">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-wide text-text-main mb-4">
              3. Before vs. After
            </h2>
            <p className="font-mono text-sm text-accent-blue uppercase tracking-widest">
              The Margin Expansion
            </p>
          </div>

          <div className="glass-panel overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/10 bg-obsidian/80">
              <div className="p-6 font-mono text-xs text-text-muted uppercase tracking-widest hidden md:block">Feature</div>
              <div className="p-6 font-mono text-xs text-text-muted uppercase tracking-widest border-t md:border-t-0 md:border-l border-white/10">Before ALRigs Continuum</div>
              <div className="p-6 font-mono text-xs text-accent-blue uppercase tracking-widest border-t md:border-t-0 md:border-l border-white/10 bg-accent-blue/5">After (The ARC Engine)</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors">
              <div className="p-6 font-display font-bold uppercase tracking-wide text-text-main flex items-center gap-3">
                <Activity size={18} className="text-text-muted" /> Growth Model
              </div>
              <div className="p-6 font-body text-text-main/60 md:border-l border-white/5 flex items-center">
                Linear (Costs rise with Revenue)
              </div>
              <div className="p-6 font-body text-text-main font-medium md:border-l border-white/5 bg-accent-blue/5 flex items-center">
                Decoupled (Revenue rises, Costs flatline)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors">
              <div className="p-6 font-display font-bold uppercase tracking-wide text-text-main flex items-center gap-3">
                <Database size={18} className="text-text-muted" /> Data Status
              </div>
              <div className="p-6 font-body text-text-main/60 md:border-l border-white/5 flex items-center">
                Liability (Stored in silos)
              </div>
              <div className="p-6 font-body text-text-main font-medium md:border-l border-white/5 bg-accent-blue/5 flex items-center">
                Asset (Fueling the ARC Engine)
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-white/5 hover:bg-white/5 transition-colors">
              <div className="p-6 font-display font-bold uppercase tracking-wide text-text-main flex items-center gap-3">
                <Users size={18} className="text-text-muted" /> Human Focus
              </div>
              <div className="p-6 font-body text-text-main/60 md:border-l border-white/5 flex items-center">
                Routine knowledge work
              </div>
              <div className="p-6 font-body text-text-main font-medium md:border-l border-white/5 bg-accent-blue/5 flex items-center">
                High-level strategy and relationships
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 hover:bg-white/5 transition-colors">
              <div className="p-6 font-display font-bold uppercase tracking-wide text-text-main flex items-center gap-3">
                <BarChart3 size={18} className="text-text-muted" /> Profit Margin
              </div>
              <div className="p-6 font-body text-text-main/60 md:border-l border-white/5 flex items-center">
                Static / Shrinking
              </div>
              <div className="p-6 font-body text-cyan-glow font-bold md:border-l border-white/5 bg-accent-blue/5 flex items-center drop-shadow-[0_0_8px_rgba(0,212,255,0.3)]">
                Expanding (The "Profit Wedge")
              </div>
            </div>
          </div>
        </FadeIn>

        {/* The Ultimate Lever Quote */}
        <FadeIn delay={0.4}>
          <div className="glass-panel p-8 md:p-12 text-center relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent" />
            <Zap size={48} className="text-accent-blue mx-auto mb-8 drop-shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
            <p className="font-display text-2xl md:text-4xl font-light text-text-main leading-relaxed italic mb-8">
              "Give me a lever long enough and a fulcrum on which to place it, and I shall move the world."
            </p>
            <p className="font-body text-lg text-text-main/80 max-w-2xl mx-auto border-t border-white/10 pt-8">
              The ARC Engine is the ultimate lever for modern business. It allows you to decouple growth from human headcount or expertise to an organization-level intelligence platform that knows everything about your business in real time.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
