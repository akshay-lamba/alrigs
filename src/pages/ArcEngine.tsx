import { Database, Cpu, Network, Layers, Activity, ShieldCheck, CheckCircle2, FileText, Lock } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { motion } from 'motion/react';

export default function ArcEngine() {
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-gradient-blue mb-6">
              The ARC Engine
            </h1>
            <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
              The 'How': Context + Depth + Velocity²
            </p>
          </div>
        </FadeIn>

        <div className="mb-32">
          <FadeIn delay={0.1}>
            <div className="glass-panel p-8 md:p-12 text-center relative overflow-hidden mb-16 max-w-4xl mx-auto">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent-blue to-transparent" />
              <Activity size={48} className="text-accent-blue mx-auto mb-6 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wide text-gradient-blue mb-6">
                The Formula
              </h2>
              <div className="font-mono text-2xl md:text-4xl text-accent-blue tracking-widest mb-6 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]">
                C + D + V² = ARC
              </div>
              <p className="font-body text-lg text-text-main/80 leading-relaxed">
                Context (C) grounded in your proprietary data. Depth (D) achieved through specialized Small Language Models (SLMs) and Vector DBs. Velocity squared (V²) driven by autonomous AI Agents executing tasks at machine speed whilst creating audit artifacts in parallel!
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Knowledge Layer",
                desc: "SLMs / RAG",
                icon: <Database size={24} />,
                details: "Proprietary data ingestion and contextual grounding. The foundation of your sovereign intelligence."
              },
              {
                title: "Memory Layer",
                desc: "Vector DBs",
                icon: <Layers size={24} />,
                details: "High-dimensional semantic storage and retrieval. Ensuring the system remembers past interactions and decisions."
              },
              {
                title: "Action Layer",
                desc: "AI Agents",
                icon: <Cpu size={24} />,
                details: "Autonomous task execution and tool utilization. Moving beyond chat to actual business process automation."
              },
              {
                title: "Command Layer",
                desc: "Agent Orchestration",
                icon: <Network size={24} />,
                details: "Multi-agent coordination and workflow routing. The central nervous system managing complex, multi-step operations."
              }
            ].map((layer, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="glass-panel p-8 h-full flex flex-col group hover:bg-white/5 transition-colors cursor-crosshair">
                  <div className="text-accent-blue mb-6 opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                    {layer.icon}
                  </div>
                  <div className="font-mono text-xs text-text-muted mb-2 uppercase tracking-widest">
                    Layer 0{i + 1}
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-text-main mb-2">
                    {layer.title}
                  </h3>
                  <div className="font-mono text-sm text-accent-blue mb-6">
                    [{layer.desc}]
                  </div>
                  <p className="font-body text-sm text-text-main/60 mt-auto">
                    {layer.details}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Trust & Verification Section */}
        <div className="mb-32">
          <FadeIn delay={0.2} className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-wide text-text-main mb-4">
              Trust & Verification
            </h2>
            <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
              Absolute Certainty by Design
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Infographic 1: Strict Verification */}
            <FadeIn delay={0.3} className="glass-panel p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Elements */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-32 h-32 opacity-20 pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-accent-blue rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-cyan-glow/50 rounded-full"
                />
                <ShieldCheck size={48} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-accent-blue" />
              </div>

              <div className="relative z-10 pr-32">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-blue/10 border border-accent-blue/30 mb-6">
                  <CheckCircle2 size={24} className="text-accent-blue" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">
                  Strict Verification Protocols
                </h3>
                <p className="font-body text-lg text-text-main/80 leading-relaxed mb-6">
                  Trust is paramount. The ARC Engine employs strict verification protocols, including citation tracking, confidence scoring, and automated hallucination checks. Every action taken by the Action Layer is logged and auditable.
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-accent-blue uppercase tracking-widest">
                  <FileText size={14} /> Citation Tracking Active
                </div>
              </div>
            </FadeIn>

            {/* Infographic 2: Foundational Architecture */}
            <FadeIn delay={0.4} className="glass-panel p-8 md:p-12 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-bl from-cyan-glow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Animated Elements */}
              <div className="absolute top-1/2 right-8 -translate-y-1/2 w-32 h-32 opacity-20 pointer-events-none">
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-cyan-glow/20 rounded-lg blur-xl"
                />
                <div className="absolute inset-0 border border-cyan-glow/30 rounded-lg grid grid-cols-2 grid-rows-2 gap-1 p-2">
                  <div className="bg-cyan-glow/20 rounded-sm" />
                  <div className="bg-cyan-glow/40 rounded-sm" />
                  <div className="bg-cyan-glow/30 rounded-sm" />
                  <div className="bg-cyan-glow/50 rounded-sm" />
                </div>
                <Lock size={32} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-glow drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
              </div>

              <div className="relative z-10 pr-32">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-glow/10 border border-cyan-glow/30 mb-6">
                  <Database size={24} className="text-cyan-glow" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">
                  Foundational Grounding
                </h3>
                <p className="font-body text-lg text-text-main/80 leading-relaxed mb-6">
                  However, the foundational architecture makes this concern moot since the grounding of SLMs, Vector DBs, RAGs, Agents, etc. are only on customer strategy, business processes, tactical data, etc.
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-cyan-glow uppercase tracking-widest">
                  <Layers size={14} /> 100% Proprietary Context
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={0.5} className="border-l-2 border-accent-blue pl-8 py-4 shadow-[-4px_0_15px_-5px_rgba(59,130,246,0.2)]">
            <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-text-main mb-4">
              The Learning Layer
            </h3>
            <p className="font-body text-lg text-text-main/80 leading-relaxed">
              The ARC Engine is not static. It features a continuous feedback loop where human-in-the-loop corrections and successful task completions are fed back into the Knowledge and Memory layers. The system gets smarter, faster, and more aligned with your specific business logic every day.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
