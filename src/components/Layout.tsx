import { Link, Outlet, useLocation } from 'react-router-dom';
import { ArrowRight, Infinity as InfinityIcon } from 'lucide-react';
import { useEffect } from 'react';

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-obsidian text-text-main selection:bg-accent-blue/30 selection:text-accent-blue overflow-x-hidden flex flex-col relative">
      {/* Ambient Flowing Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <svg width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="glassy-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-midnight/30 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-deep-blue/50 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }} />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-royal/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-accent-blue/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-obsidian/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-royal/40 via-accent-blue/40 to-cyan-glow/40 rounded-full blur-md animate-pulse" />
              <InfinityIcon size={32} style={{ stroke: "url(#glassy-blue)" }} className="relative z-10 group-hover:rotate-180 transition-transform duration-700 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            </div>
            <span className="font-display font-bold text-xl tracking-[0.15em] uppercase text-text-main group-hover:text-accent-blue transition-colors">
              ALRigs Continuum
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-6 font-mono text-[10px] xl:text-xs tracking-widest uppercase text-text-muted">
            <Link to="/identity" className={`hover:text-accent-blue transition-colors ${pathname === '/identity' ? 'text-accent-blue' : ''}`}>Sovereign AI</Link>
            <Link to="/arc-engine" className={`hover:text-accent-blue transition-colors ${pathname === '/arc-engine' ? 'text-accent-blue' : ''}`}>The ARC Engine</Link>
            <Link to="/business-impact" className={`hover:text-accent-blue transition-colors ${pathname === '/business-impact' ? 'text-accent-blue' : ''}`}>Business Impact</Link>
            <Link to="/value-proposition" className={`hover:text-accent-blue transition-colors ${pathname === '/value-proposition' ? 'text-accent-blue' : ''}`}>Value Proposition</Link>
            <Link to="/human-upgrade" className={`hover:text-accent-blue transition-colors ${pathname === '/human-upgrade' ? 'text-accent-blue' : ''}`}>Human Upgrade</Link>
          </div>
          <a href="mailto:contact@alrigs.com" className="hidden md:flex items-center gap-2 border border-accent-blue/50 px-5 py-2 font-mono text-xs uppercase tracking-widest text-accent-blue hover:bg-accent-blue hover:text-obsidian transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] rounded-sm bg-accent-blue/5 backdrop-blur-sm">
            Contact Us <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-obsidian/80 backdrop-blur-md py-6 px-6 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-royal/40 via-accent-blue/40 to-cyan-glow/40 rounded-full blur-sm animate-pulse" />
                <InfinityIcon size={24} style={{ stroke: "url(#glassy-blue)" }} className="relative z-10 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
              </div>
              <span className="font-display font-bold tracking-[0.15em] uppercase text-text-main">
                ALRigs Continuum
              </span>
            </div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
              &copy; {new Date().getFullYear()} ALRigs Continuum. Sovereign | Business | AI.
            </div>
          </div>
          
          <div className="flex flex-col gap-2 font-mono text-xs text-text-muted uppercase tracking-widest text-left md:text-right">
            <p className="text-text-main font-bold">ALRigs Continuum</p>
            <p>US | Middle East | India | Australia | Africa</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
