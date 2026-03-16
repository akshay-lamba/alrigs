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
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-midnight/30 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-deep-blue/50 blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }} />
        <div className="absolute top-[30%] left-[40%] w-[40%] h-[40%] rounded-full bg-royal/20 blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }} />
        <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] rounded-full bg-accent-blue/10 blur-[100px] mix-blend-screen animate-pulse" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-obsidian/60 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center">
              <InfinityIcon size={32} className="text-accent-blue group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)]" strokeWidth={1.5} />
            </div>
            <span className="font-display font-bold text-xl tracking-[0.15em] uppercase text-text-main group-hover:text-accent-blue transition-colors">
              ALRigs Continuum
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-8 font-mono text-[10px] xl:text-xs tracking-widest uppercase text-text-muted">
            <Link to="/identity" className={`hover:text-accent-blue transition-colors ${pathname === '/identity' ? 'text-accent-blue' : ''}`}>Sovereign AI</Link>
            <Link to="/arc-engine" className={`hover:text-accent-blue transition-colors ${pathname === '/arc-engine' ? 'text-accent-blue' : ''}`}>The ARC Engine</Link>
            <Link to="/business-impact" className={`hover:text-accent-blue transition-colors ${pathname === '/business-impact' ? 'text-accent-blue' : ''}`}>Business Impact</Link>
            <Link to="/value-proposition" className={`hover:text-accent-blue transition-colors ${pathname === '/value-proposition' ? 'text-accent-blue' : ''}`}>Value Proposition</Link>
          </div>
          <a href="mailto:info@alrigs.com" className="hidden md:flex items-center gap-2 border border-accent-blue/50 px-5 py-2 font-mono text-xs uppercase tracking-widest text-accent-blue hover:bg-accent-blue hover:text-white transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)] rounded-sm bg-accent-blue/5 backdrop-blur-sm">
            Contact Us <ArrowRight size={14} />
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-obsidian/80 backdrop-blur-md py-12 px-6 mt-auto relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <InfinityIcon size={24} className="text-accent-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" strokeWidth={1.5} />
              <span className="font-display font-bold tracking-[0.15em] uppercase text-text-main">
                ALRigs Continuum
              </span>
            </div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-widest">
              &copy; {new Date().getFullYear()} ALRigs Continuum. Sovereign | Business | AI.
            </div>
          </div>
          
          <div className="flex flex-col gap-2 font-mono text-xs text-text-muted uppercase tracking-widest text-left md:text-right">
            <p className="text-text-main font-bold">Company Name: ALRigs AI Continuum</p>
            <p>Registered in DIFC, Dubai, UAE</p>
            <p>Phone: <a href="tel:+971504504283" className="hover:text-accent-blue transition-colors">+971 50 4504283</a></p>
            <p>Email: <a href="mailto:info@alrigs.com" className="hover:text-accent-blue transition-colors">info@alrigs.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
