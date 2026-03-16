import { motion } from 'motion/react';
import { ShieldCheck, LockOpen, ArrowRight, Database, Cpu, Lightbulb, XCircle, Server } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { ProprietaryModelInfographic } from '../components/ProprietaryModelInfographic';

export default function Identity() {
  return (
    <div className="pt-32 pb-32 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase tracking-tight text-gradient-blue mb-6">
              Sovereign AI
            </h1>
            <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
              Stop Renting. Start Owning.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-text-main mb-8 leading-none">
              The Shift from <br />
              <span className="text-gradient-blue">Renting</span> to <br />
              Owning.
            </h2>
            <p className="font-body text-lg text-text-main/80 leading-relaxed mb-8">
              In the era of cloud computing, businesses became comfortable renting infrastructure. But intelligence is not infrastructure—it is your core competitive advantage. Renting AI means renting your brain to a vendor who learns from your data.
            </p>
            <p className="font-body text-lg text-text-main/80 leading-relaxed mb-8">
              ALRigs Continuum believes in Sovereign AI: the absolute ownership of your data, your models, and your intellectual property. We build bespoke AI ecosystems that live within your perimeter.
            </p>
            <ul className="space-y-4 font-mono text-sm text-text-muted uppercase tracking-widest">
              <li className="flex items-center gap-3">
                <ShieldCheck size={18} className="text-accent-blue drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]" /> Absolute Data Privacy
              </li>
              <li className="flex items-center gap-3">
                <Cpu size={18} className="text-cyan-glow drop-shadow-[0_0_5px_rgba(6,182,212,0.5)]" /> Proprietary Model Ownership
              </li>
              <li className="flex items-center gap-3">
                <Server size={18} className="text-royal drop-shadow-[0_0_5px_rgba(29,78,216,0.5)]" /> Embedded Model Architecture
              </li>
            </ul>
          </FadeIn>
          
          <FadeIn delay={0.2} className="h-full">
            <ProprietaryModelInfographic />
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="glass-panel p-12 text-center max-w-4xl mx-auto">
          <h3 className="font-display text-3xl font-bold uppercase tracking-wide text-gradient-blue mb-6">
            What is ALRigs Continuum?
          </h3>
          <p className="font-body text-xl text-text-main/80 leading-relaxed">
            ALRigs Continuum is not a SaaS product. We are architects of Sovereign Business AI. We deconstruct the AI stack, selecting the optimal open-source and commercial components to build a system that is uniquely yours. Your data never leaves your control. Your models learn only for you.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}
