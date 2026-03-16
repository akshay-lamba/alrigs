import { motion } from 'motion/react';
import { Users, Brain, Target, Compass, RefreshCw } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

export default function HumanUpgrade() {
  return (
    <div className="pt-20 pb-10 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-8">
            <h1 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight text-gradient-blue mb-4">
              The Human Upgrade
            </h1>
            <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
              Yes. Now we're at the real insight.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-10">
          <FadeIn delay={0.1}>
            <h2 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tight text-text-main mb-6 leading-none">
              The ALRigs <br />
              <span className="text-gradient-blue">Human Upgrade</span>
            </h2>
            <p className="font-body text-base text-text-main/80 leading-relaxed mb-4">
              AI agents execute in seconds. Analytics that once took a team a week now return in minutes, at a depth no human team could match. The machine is fast, precise, and tireless.
            </p>
            <p className="font-body text-base text-text-main/80 leading-relaxed mb-4">
              This creates a problem most organizations are not prepared for.
            </p>
            <p className="font-body text-base text-text-main/80 leading-relaxed mb-4">
              When the execution layer is effectively solved, the human becomes something different. Not a doer. Not even a manager of doers. A strategic operator of outcomes. Someone who reads what the machine has produced, makes the call, and sets the next objective. That is a fundamentally different job than the one most people showed up to work believing they had.
            </p>
            <p className="font-body text-base text-text-main/80 leading-relaxed mb-4">
              The mindset shift is significant. Humans who spent their careers building expertise in execution now need to build expertise in judgment. People who derived authority from holding information now operate in an environment where information is universally available. Functions that ran on process now run on decision quality.
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="glass-panel p-6">
            <p className="font-body text-base text-text-main/80 leading-relaxed mb-4">
              This is what the ALRigs Human Upgrade addresses. Not software training. Mindset retraining. Role retraining. Every layer of the organization — from leadership to the frontline — learns what it means to operate alongside a machine that is faster and more accurate than any process they have run before.
            </p>
            <div className="border-l-2 border-accent-blue pl-6 py-2 my-6">
              <p className="font-display text-xl font-bold text-text-main mb-2">
                The question is no longer how to get things done. The machine handles that.
              </p>
              <p className="font-display text-xl font-bold text-accent-blue">
                The question is what to do next. And that is entirely human.
              </p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div className="mb-12 text-center">
            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-wide text-gradient-blue mb-4">
              The ALRigs Human Upgrade
            </h3>
            <p className="font-mono text-sm text-text-muted uppercase tracking-widest">
              Training Plan
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Central flowing line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-glow via-accent-blue to-royal opacity-20 transform md:-translate-x-1/2 rounded-full" />
            
            {/* Animated flowing particle */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 w-1 h-32 bg-gradient-to-b from-transparent via-cyan-glow to-transparent transform md:-translate-x-1/2 rounded-full"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
            />

            {/* Phase 1 */}
            <div className="relative mb-12 md:mb-16">
              <FadeIn className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="hidden md:flex flex-1 justify-end text-right">
                  <div className="max-w-md">
                    <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">Phase 1</h3>
                    <p className="font-body text-text-main/80 leading-relaxed">
                      The critical lesson at this phase: the machine executes. You decide.
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-cyan-glow flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                  <Compass size={28} className="text-cyan-glow" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-glow opacity-50" />
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">
                      Orientation
                    </h2>
                    <p className="font-body text-text-main/80 leading-relaxed">
                      The entire organization learns what the ARC machine is, what it does, and what it does not do. No technical depth. Pure concept. The goal is a single shared mental model across every level — so that when the system goes live, nobody is encountering it for the first time.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Phase 2 */}
            <div className="relative mb-12 md:mb-16">
              <FadeIn className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="hidden md:flex flex-1 justify-start">
                  <div className="max-w-md">
                    <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">Phase 2</h3>
                    <p className="font-body text-text-main/80 leading-relaxed">
                      This is the hardest phase. It is where the mindset shift happens — or doesn't.
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-accent-blue flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                  <Users size={28} className="text-accent-blue" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1 h-full bg-accent-blue opacity-50 hidden md:block" />
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue opacity-50 md:hidden" />
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4 md:text-right">
                      Role Realignment
                    </h2>
                    <p className="font-body text-text-main/80 leading-relaxed md:text-right">
                      Every function works through what their job actually looks like when the execution layer is handled. What decisions are now theirs that the machine used to obscure inside process. What metrics they are now directly accountable for. What judgment calls the system will surface to them and what it expects back.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Phase 3 */}
            <div className="relative mb-12 md:mb-16">
              <FadeIn className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="hidden md:flex flex-1 justify-end text-right">
                  <div className="max-w-md">
                    <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">Phase 3</h3>
                    <p className="font-body text-text-main/80 leading-relaxed">
                      This is function-by-function. Marketing trains differently to operations. Finance trains differently to customer experience. The system is the same. The interface with it is not.
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-royal flex items-center justify-center shadow-[0_0_30px_rgba(29,78,216,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                  <Brain size={28} className="text-royal" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-royal opacity-50" />
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">
                      System Fluency
                    </h2>
                    <p className="font-body text-text-main/80 leading-relaxed">
                      People learn to work with the system in their specific context. How to query it. How to read its outputs. How to set the parameters it reasons within. How to escalate correctly when something requires human override.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Phase 4 */}
            <div className="relative mb-12 md:mb-16">
              <FadeIn className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-16">
                <div className="hidden md:flex flex-1 justify-start">
                  <div className="max-w-md">
                    <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">Phase 4</h3>
                    <p className="font-body text-text-main/80 leading-relaxed">
                      The organization stops managing process. It starts governing outcomes.
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-cyan-glow flex items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                  <Target size={28} className="text-cyan-glow" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-1 h-full bg-cyan-glow opacity-50 hidden md:block" />
                    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-glow opacity-50 md:hidden" />
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4 md:text-right">
                      Strategic Operation
                    </h2>
                    <p className="font-body text-text-main/80 leading-relaxed md:text-right">
                      Leadership and senior function heads learn to operate at the level the machine makes possible. Reading real-time analytics at a depth that was previously unavailable. Making faster decisions with higher confidence. Identifying where human judgment is genuinely required versus where it is habit.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Phase 5 */}
            <div className="relative">
              <FadeIn className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
                <div className="hidden md:flex flex-1 justify-end text-right">
                  <div className="max-w-md">
                    <h3 className="font-mono text-xs text-text-muted uppercase tracking-widest mb-2">Phase 5</h3>
                    <p className="font-body text-text-main/80 leading-relaxed">
                      The upgrade is not an event. It compounds.
                    </p>
                  </div>
                </div>
                
                <div className="relative z-10 w-16 h-16 rounded-full bg-obsidian border-2 border-accent-blue flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.4)] shrink-0 ml-0 md:ml-auto md:mr-auto">
                  <RefreshCw size={28} className="text-accent-blue" />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="glass-panel p-8 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-accent-blue opacity-50" />
                    <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-text-main mb-4">
                      Continuous Calibration
                    </h2>
                    <p className="font-body text-text-main/80 leading-relaxed">
                      The machine learns. Which means the humans operating it must keep pace. As the system deepens its understanding of the business, the humans directing it are expected to raise the quality of their inputs — sharper objectives, cleaner decision rules, higher-order questions.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
