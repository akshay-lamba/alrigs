import { motion } from 'motion/react';
import { Database, Cpu, Lock, ShieldCheck, Server, CloudOff, XCircle, BarChart3, Network, Workflow } from 'lucide-react';

export function ProprietaryModelInfographic() {
  return (
    <div className="relative w-full h-full min-h-[450px] bg-charcoal rounded-xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)] flex flex-col">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-20" />
      
      {/* Top Section: The Secure Perimeter */}
      <div className="relative flex-1 p-6 md:p-8 flex flex-col justify-center">
        <div className="absolute inset-4 border-2 border-dashed border-gold/30 rounded-xl" />
        
        {/* Perimeter Label */}
        <div className="absolute top-1 left-8 bg-charcoal px-3 flex items-center gap-2 text-gold font-mono text-xs uppercase tracking-widest">
          <ShieldCheck size={14} />
          <span>Structural Methodology</span>
        </div>

        <div className="flex-1 flex flex-col md:flex-row items-center justify-between gap-6 mt-4 px-2 md:px-6 relative z-10">
          
          {/* 1. Baseline */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="w-16 h-16 rounded-full bg-obsidian border border-white/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] relative">
              <Database size={24} className="text-white" />
              <motion.div 
                className="absolute inset-0 rounded-full border border-white/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-display text-sm font-bold text-text-main uppercase tracking-wide">Organizational Baseline</div>
              <div className="font-mono text-[10px] text-text-muted mt-1">Current State Analysis</div>
            </div>
          </div>

          {/* Flow 1 (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-center relative h-8">
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-white/20 via-gold/50 to-gold/20" />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#FFFFFF]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>
          
          {/* Flow 1 (Mobile) */}
          <div className="flex md:hidden items-center justify-center relative w-2 h-8">
            <div className="absolute h-full w-[2px] bg-gradient-to-b from-white/20 via-gold/50 to-gold/20" />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#FFFFFF]"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </div>

          {/* 2. Analytical Engine */}
          <div className="flex flex-col items-center w-full md:w-1/3 relative">
            <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-gold/20 to-obsidian border border-gold/50 flex items-center justify-center shadow-[0_0_30px_rgba(197,160,89,0.2)] relative overflow-hidden">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at center, #C5A059 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
              <Network size={36} className="text-gold relative z-10" />
              
              {/* Scanning effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-[2px] bg-gold/50 shadow-[0_0_8px_#C5A059]"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="absolute bottom-1.5 right-1.5 bg-obsidian rounded-full p-0.5 border border-gold/30">
                <Workflow size={10} className="text-gold" />
              </div>
            </div>
            <div className="mt-4 text-center">
              <div className="font-display text-sm font-bold text-text-main uppercase tracking-wide">Analytical Engine</div>
              <div className="font-mono text-[10px] text-gold mt-1">Strategic Realignment</div>
            </div>
          </div>

          {/* Flow 2 (Desktop) */}
          <div className="hidden md:flex flex-1 items-center justify-center relative h-8">
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-gold/20 via-white/50 to-white/20" />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_#C5A059]"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            />
          </div>
          
          {/* Flow 2 (Mobile) */}
          <div className="flex md:hidden items-center justify-center relative w-2 h-8">
            <div className="absolute h-full w-[2px] bg-gradient-to-b from-gold/20 via-white/50 to-white/20" />
            <motion.div 
              className="absolute w-3 h-3 rounded-full bg-gold shadow-[0_0_10px_#C5A059]"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.75 }}
            />
          </div>

          {/* 3. Output */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="w-16 h-16 rounded-full bg-obsidian border border-white/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)] relative">
              <BarChart3 size={24} className="text-white" />
              <motion.div 
                className="absolute inset-0 rounded-full border border-white/30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-display text-sm font-bold text-text-main uppercase tracking-wide">Quantifiable Impact</div>
              <div className="font-mono text-[10px] text-text-muted mt-1">Structural Stability</div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Section: External Dependencies Eliminated */}
      <div className="mt-auto pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 opacity-60 px-6 md:px-8 pb-6 md:pb-8">
        <div className="font-mono text-[10px] text-text-muted uppercase tracking-widest text-center sm:text-left flex items-center gap-2">
          <CloudOff size={14} /> Inefficiencies Eliminated
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="flex items-center gap-2 text-text-muted font-mono text-[10px] uppercase bg-white/5 px-2 py-1 rounded border border-white/10">
            <XCircle size={12} /> Redundant Processes
          </div>
          <div className="flex items-center gap-2 text-text-muted font-mono text-[10px] uppercase bg-white/5 px-2 py-1 rounded border border-white/10">
            <XCircle size={12} /> Unmeasured Risk
          </div>
        </div>
      </div>
    </div>
  );
}
