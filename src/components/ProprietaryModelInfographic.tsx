import { motion } from 'motion/react';
import { Database, Cpu, Lock, ShieldCheck, Server, CloudOff, XCircle } from 'lucide-react';

export function ProprietaryModelInfographic() {
  return (
    <div className="relative w-full h-full min-h-[450px] bg-obsidian rounded-xl overflow-hidden border border-deep-blue shadow-[0_0_40px_rgba(15,23,42,0.8)] flex flex-col">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Top Section: The Secure Perimeter */}
      <div className="relative flex-1 p-6 md:p-8 flex flex-col justify-center">
        <div className="absolute inset-4 border-2 border-dashed border-accent-blue/30 rounded-xl" />
        
        {/* Perimeter Label */}
        <div className="absolute top-1 left-8 bg-obsidian px-3 flex items-center gap-2 text-accent-blue font-mono text-xs uppercase tracking-widest">
          <ShieldCheck size={14} />
          <span>Sovereign Perimeter</span>
        </div>

        <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 mt-4 px-2 md:px-6 relative z-10">
          
          {/* 1. Private Data */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="w-16 h-16 rounded-full bg-deep-blue border border-cyan-glow/50 flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.2)] relative">
              <Database size={24} className="text-cyan-glow" />
              <motion.div 
                className="absolute inset-0 rounded-full border border-cyan-glow/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-display text-sm font-bold text-text-main uppercase tracking-wide">Private Data</div>
              <div className="font-mono text-[10px] text-text-muted mt-1">100% Retained</div>
            </div>
          </div>

          {/* Flow 1 (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-center relative h-8">
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-cyan-glow/20 via-accent-blue/50 to-royal/20" />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-cyan-glow shadow-[0_0_10px_#00F0FF]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Flow 1 (Mobile) */}
          <div className="flex md:hidden items-center justify-center relative w-2 h-8">
            <div className="absolute h-full w-[2px] bg-gradient-to-b from-cyan-glow/20 via-accent-blue/50 to-royal/20" />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-cyan-glow shadow-[0_0_10px_#00F0FF]"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* 2. Embedded Model */}
          <div className="flex flex-col items-center w-full md:w-1/3 relative">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-royal/20 to-obsidian border border-royal/50 flex items-center justify-center shadow-[0_0_30px_rgba(29,78,216,0.3)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, #1D4ED8 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
              <Cpu size={36} className="text-royal relative z-10" />
              
              {/* Scanning effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-accent-blue/50 shadow-[0_0_8px_#3B82F6]"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute bottom-1.5 right-1.5 bg-obsidian rounded-full p-0.5 border border-accent-blue/30">
                <Lock size={10} className="text-accent-blue" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="font-display text-sm font-bold text-text-main uppercase tracking-wide">Embedded Model</div>
              <div className="font-mono text-[10px] text-accent-blue mt-1">Proprietary Weights</div>
            </div>
          </div>

          {/* Flow 2 (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-center relative h-8">
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-royal/20 via-insight-violet/50 to-insight-violet/20" />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-insight-violet shadow-[0_0_10px_#8B5CF6]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            />
          </div>
          
          {/* Flow 2 (Mobile) */}
          <div className="flex md:hidden items-center justify-center relative w-2 h-8">
            <div className="absolute h-full w-[2px] bg-gradient-to-b from-royal/20 via-insight-violet/50 to-insight-violet/20" />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-insight-violet shadow-[0_0_10px_#8B5CF6]"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            />
          </div>

          {/* 3. Output */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="w-16 h-16 rounded-full bg-deep-blue border border-insight-violet/50 flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.2)] relative">
              <Server size={24} className="text-insight-violet" />
              <motion.div 
                className="absolute inset-0 rounded-full border border-insight-violet/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-display text-sm font-bold text-text-main uppercase tracking-wide">Business IP</div>
              <div className="font-mono text-[10px] text-text-muted mt-1">Un-copyable Moat</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section: External Dependencies Eliminated */}
      <div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 opacity-60 px-6 md:px-8 pb-6 md:pb-8">
        <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest text-center sm:text-left flex items-center gap-2">
          <CloudOff size={14} /> External Dependencies Eliminated
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-2 text-text-muted font-mono text-[10px] uppercase bg-white/5 px-2 py-1 rounded border border-white/10">
            <XCircle size={12} /> Public APIs
          </div>
          <div className="flex items-center gap-2 text-text-muted font-mono text-[10px] uppercase bg-white/5 px-2 py-1 rounded border border-white/10">
            <XCircle size={12} /> Shared Weights
          </div>
        </div>
      </div>
    </div>
  );
}
