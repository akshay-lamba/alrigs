import { ShieldCheck, TrendingUp, TrendingDown, Maximize, LineChart } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'motion/react';

export default function ValueProposition() {
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-24 text-center">
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-gradient-blue mb-6">
              The Value Proposition
            </h1>
            <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
              The Investment Thesis: Revenue, Margins, and Equity Value.
            </p>
          </div>
        </FadeIn>

        <div className="relative max-w-5xl mx-auto">
          {/* Central flowing line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent-blue via-cyan-glow to-royal opacity-20 transform md:-translate-x-1/2 rounded-full" />
          
          {/* Animated flowing particle */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-glow to-transparent transform md:-translate-x-1/2 rounded-full"
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />

          {/* Section 1: Revenue */}
          <div className="relative mb-24 md:mb-32">
            <FadeIn className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="hidden md:flex flex-1 justify-end text-right">
                <div className="max-w-md">
                  <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">Top-Line Impact</h3>
                  <p className="font-body text-text-main/80 leading-relaxed">
                    Deploy intelligence that operates 24/7, capturing missed opportunities and accelerating output.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-accent-blue flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                <TrendingUp size={28} className="text-accent-blue" />
              </div>
              
              <div className="flex-1 w-full">
                <div className="glass-panel p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue opacity-50" />
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">
                    Revenue Acceleration
                  </h2>
                  <p className="font-body text-text-main/80 leading-relaxed mb-6">
                    Break the linear relationship between headcount and revenue. Sovereign AI agents handle infinite parallel workflows—from personalized client interactions to hyper-scaled outbound—allowing your business to capture market share at unprecedented velocity.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Section 2: Costs */}
          <div className="relative mb-24 md:mb-32">
            <FadeIn className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
              <div className="hidden md:flex flex-1 justify-start">
                <div className="max-w-md">
                  <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">Bottom-Line Impact</h3>
                  <p className="font-body text-text-main/80 leading-relaxed">
                    Replace perpetual SaaS rent and manual overhead with owned, automated infrastructure.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-cyan-glow flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                <TrendingDown size={28} className="text-cyan-glow" />
              </div>
              
              <div className="flex-1 w-full">
                <div className="glass-panel p-8 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-1 h-full bg-cyan-glow opacity-50 hidden md:block" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-glow opacity-50 md:hidden" />
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4 md:text-right">
                    Cost Collapse
                  </h2>
                  <p className="font-body text-text-main/80 leading-relaxed mb-6 md:text-right">
                    Stop paying "per-seat" or "per-token" to external vendors. By embedding open-source models within your perimeter, the marginal cost of intelligence drops to near zero. Automate routine operations and drastically reduce reliance on expensive manual labor.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Section 3: Margins */}
          <div className="relative mb-24 md:mb-32">
            <FadeIn className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="hidden md:flex flex-1 justify-end text-right">
                <div className="max-w-md">
                  <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">The Spread</h3>
                  <p className="font-body text-text-main/80 leading-relaxed">
                    When revenue scales infinitely and costs remain fixed, profitability compounds.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-royal flex items-center justify-center shadow-[0_0_30px_rgba(29,78,216,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                <Maximize size={28} className="text-royal" />
              </div>
              
              <div className="flex-1 w-full">
                <div className="glass-panel p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-royal opacity-50" />
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">
                    Margin Expansion
                  </h2>
                  <p className="font-body text-text-main/80 leading-relaxed mb-6">
                    This is the ultimate financial lever. As the Sovereign AI Engine absorbs more workflows, your operational leverage skyrockets. Businesses powered by proprietary AI consistently achieve margins 40-60% higher than their traditional industry peers.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Section 4: Enterprise Value */}
          <div className="relative mb-24 md:mb-32">
            <FadeIn className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
              <div className="hidden md:flex flex-1 justify-start">
                <div className="max-w-md">
                  <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">The Multiple</h3>
                  <p className="font-body text-text-main/80 leading-relaxed">
                    Transition from a traditional service company to a highly valued tech-enabled enterprise.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-insight-violet flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                <LineChart size={28} className="text-insight-violet" />
              </div>
              
              <div className="flex-1 w-full">
                <div className="glass-panel p-8 relative overflow-hidden group border-insight-violet/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-insight-violet/10 to-transparent opacity-50" />
                  <div className="absolute top-0 right-0 w-1 h-full bg-insight-violet opacity-100 hidden md:block" />
                  <div className="absolute top-0 left-0 w-1 h-full bg-insight-violet opacity-100 md:hidden" />
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-4 md:text-right">
                    Enterprise Value
                  </h2>
                  <p className="font-body text-text-main/90 leading-relaxed mb-6 md:text-right">
                    You are investing in a proprietary asset that stays on your balance sheet. A business with an un-copyable AI moat and expanded margins is a <strong className="text-insight-violet">Premium Acquisition</strong> target, commanding software-like valuation multiples rather than traditional service multiples.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Section 5: Risks */}
          <div className="relative">
            <FadeIn className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="hidden md:flex flex-1 justify-end text-right">
                <div className="max-w-md">
                  <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">The Moat</h3>
                  <p className="font-body text-text-main/80 leading-relaxed">
                    Protecting the asset. True value requires absolute control over the underlying engine.
                  </p>
                </div>
              </div>
              
              <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-accent-blue flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                <ShieldCheck size={28} className="text-accent-blue" />
              </div>
              
              <div className="flex-1 w-full">
                <div className="glass-panel p-8 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue opacity-50" />
                  <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">
                    Risk Mitigation
                  </h2>
                  <p className="font-body text-text-main/80 leading-relaxed mb-6">
                    A business built on rented APIs is fragile. By deploying Sovereign AI, you eliminate vendor lock-in, prevent data leakage to competitors, and immunize your operations against third-party pricing hikes or deprecations. You own the code, the weights, and the IP.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </div>
  );
}
