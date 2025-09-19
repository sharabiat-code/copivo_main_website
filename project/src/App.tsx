import React, { useState, useEffect } from 'react';
import copivoLogo from '../favicon.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, Bot, Gauge, Layers, LineChart, Megaphone, Settings, ShieldCheck, Sparkles, Wallet, Menu, X, Star } from 'lucide-react';

const colors = {
  navy: "#1B4332",
  bg: "#FFFFFF",
  g1: "#52B788",
  g2: "#2D5A3D", 
  g3: "#1B4332",
  neutral: {
    50: "#fafafa",
    100: "#f4f4f5",
    200: "#e4e4e7",
    300: "#d4d4d8",
    400: "#a1a1aa",
    500: "#71717a",
    600: "#52525b",
    700: "#3f3f46",
    800: "#27272a",
    900: "#18181b"
  }
};

const gradient = `linear-gradient(135deg, ${colors.g1}, ${colors.g2}, ${colors.g3})`;
const subtleGradient = `linear-gradient(135deg, ${colors.g1}15, ${colors.g2}10, ${colors.g3}15)`;

const Section = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  theme = 'light',
  className = ""
}: { 
  id?: string; 
  title: string; 
  subtitle?: string; 
  children?: React.ReactNode; 
  theme?: 'light' | 'grid' | 'dark';
  className?: string;
}) => (
  <motion.section 
    id={id} 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 ${theme === 'dark' ? 'theme-dark' : theme === 'grid' ? 'theme-grid' : 'theme-light'} ${className}`}
  >
    <div className="mb-12 lg:mb-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]" 
        style={{ color: 'var(--fg)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl lg:text-2xl opacity-80 max-w-3xl" 
          style={{ color: 'var(--fg)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
    {children}
  </motion.section>
);

const Card = ({ icon, title, desc, delay = 0 }: { icon: React.ReactNode; title: string; desc: string; delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className="group relative rounded-3xl p-8 shadow-lg bg-white/80 backdrop-blur-xl border border-white/40 hover:shadow-2xl hover:shadow-black/5 transition-all duration-300"
  >
    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: subtleGradient }} />
    <div className="relative z-10">
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg" style={{ background: gradient }}>
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--fg)' }}>{title}</h3>
      <p className="text-base leading-7" style={{ color: 'var(--fg)', opacity: 0.7 }}>{desc}</p>
    </div>
  </motion.div>
);

const FloatingShell = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    className={`floating-shell ${className}`}
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: [0, -15, 0], opacity: 1 }}
    transition={{ 
      y: { duration: 8, repeat: Infinity, delay, ease: "easeInOut" },
      opacity: { duration: 0.6, delay: delay * 0.1 }
    }}
  >
    {children}
  </motion.div>
);

const ParallaxSection = ({
  title,
  lead,
  bullets,
  icon,
  flip = false,
}: {
  title: string
  lead: string
  bullets: string[]
  icon: React.ReactNode
  flip?: boolean
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className={`relative overflow-hidden rounded-3xl px-8 md:px-12 py-12 md:py-16 glass ${flip ? "md:flex-row-reverse" : ""} flex flex-col md:flex-row items-center gap-12 hover:shadow-2xl transition-shadow duration-500`}
  >
    {/* Enhanced floating accents */}
    <motion.div 
      aria-hidden 
      className="pointer-events-none absolute -z-10 -top-32 -right-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
      style={{ background: `radial-gradient(closest-side, ${colors.g1}40, transparent)` }}
      animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }} 
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }} 
    />
    <motion.div 
      aria-hidden 
      className="pointer-events-none absolute -z-10 -bottom-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
      style={{ background: `radial-gradient(closest-side, ${colors.g3}30, transparent)` }}
      animate={{ y: [0, 20, 0], rotate: [360, 180, 0] }} 
      transition={{ repeat: Infinity, duration: 25, ease: "linear", delay: 2 }} 
    />

    <motion.div 
      className="shrink-0"
      whileHover={{ scale: 1.1, rotate: 5 }}
      transition={{ duration: 0.2 }}
    >
      <div className="w-20 h-20 rounded-3xl grid place-items-center shadow-xl" style={{ background: gradient }}>
        <div className="text-white">{icon}</div>
      </div>
    </motion.div>

    <div className="max-w-2xl">
      <h3 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--fg)' }}>{title}</h3>
      <p className="text-xl md:text-2xl opacity-80 mb-8 leading-relaxed" style={{ color: 'var(--fg)' }}>{lead}</p>
      <ul className="grid sm:grid-cols-2 gap-4 text-base" style={{ color: 'var(--fg)' }}>
        {bullets.map((b, i) => (
          <motion.li 
            key={b} 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <span className="mt-2 inline-block w-3 h-3 rounded-full shrink-0" style={{ background: gradient }} />
            <span className="leading-relaxed">{b}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  </motion.div>
);

function BrandMark({ title = "Brand" }: { title?: string }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="h-10 w-28 rounded-xl bg-white border border-neutral-200 flex items-center justify-center shadow-sm"
    >
      <svg width="44" height="18" viewBox="0 0 44 18" fill="none" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#52B788"/>
            <stop offset="100%" stopColor="#2D5A3D"/>
          </linearGradient>
        </defs>
        <circle cx="9" cy="9" r="7" fill="url(#g1)"/>
        <rect x="20" y="4" width="20" height="10" rx="5" fill="#E8EEF7"/>
      </svg>
      <span className="sr-only">{title}</span>
    </motion.div>
  );
}

export default function CopivoLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0.8, 0.95]);
  
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: colors.bg }}>
      <style>{`
        :root { 
          --fg: #1B4332;
          --gradient-primary: linear-gradient(135deg, #52B788, #2D5A3D);
          --gradient-accent: linear-gradient(135deg, ${colors.g1}, ${colors.g2}, ${colors.g3});
        }
        
        .glass {
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,255,255,0.6);
          box-shadow: 0 20px 40px rgba(11,37,69,0.08);
          backdrop-filter: blur(20px);
        }
        
        .btn-primary { 
          background: var(--gradient-primary);
          color: white; 
          box-shadow: 0 10px 30px rgba(82,183,136,0.3);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .btn-primary:hover { 
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(82,183,136,0.4);
        }
        
        .btn-secondary {
          background: rgba(255,255,255,0.9);
          color: var(--fg);
          border: 2px solid rgba(11,37,69,0.1);
          backdrop-filter: blur(10px);
        }
        .btn-secondary:hover {
          background: rgba(255,255,255,1);
          border-color: rgba(27,67,50,0.2);
          transform: translateY(-2px);
        }
        
        .badge { 
          background: rgba(82,183,136,0.1); 
          color: #1B4332; 
          border: 1px solid rgba(82,183,136,0.2);
          backdrop-filter: blur(10px);
        }
        
        .brand { 
          background: var(--gradient-accent);
          -webkit-background-clip: text; 
          background-clip: text; 
          color: transparent; 
        }
        
        .theme-hero { 
          --fg: #1B4332; 
          background: linear-gradient(180deg, #ffffff 0%, #fafafa 100%);
        }
        
        .theme-light { --fg: #1B4332; }
        
        .theme-grid { 
          --fg: #1B4332; 
          background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(27,67,50,0.06) 2px, transparent 0),
            radial-gradient(circle at 75px 75px, rgba(27,67,50,0.04) 2px, transparent 0);
          background-size: 100px 100px, 100px 100px;
          background-position: 0 0, 50px 50px;
        }
        
        .theme-dark { 
          --fg: #ffffff; 
          background: linear-gradient(180deg, #1B4332 0%, #0F2A1F 100%);
        }
        .theme-dark .glass { 
          background: rgba(27, 67, 50, 0.7); 
          border-color: rgba(255,255,255,0.1); 
        }
        
        .floating-orb {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .text-gradient {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        input, textarea {
          transition: all 0.2s ease;
        }
        
        input:focus, textarea:focus {
          outline: none;
          box-shadow: 0 0 0 3px rgba(82,183,136,0.1);
          border-color: #52B788;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .floating-shell, .floating-orb {
            animation: none;
          }
        }
      `}</style>

      {/* ENHANCED NAVBAR */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50"
        style={{ opacity: headerOpacity }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 glass rounded-b-3xl m-2">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <img src={copivoLogo} alt="copivo" className="w-10 h-10 rounded-2xl shadow-lg object-cover" />
            <div>
              <div className="text-xl font-black leading-none" style={{ color: 'var(--fg)' }}>copivo</div>
              <div className="text-xs opacity-70" style={{ color: 'var(--fg)' }}>Power Your Next Pivot</div>
            </div>
          </motion.div>
          
          <nav className="hidden lg:flex items-center gap-8 text-base font-medium" style={{ color: 'var(--fg)' }}>
            {['services', 'approach', 'insights', 'faq', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="hover:opacity-70 transition-opacity capitalize"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
          
          <div className="flex items-center gap-4">
            <motion.a 
              href="#contact" 
              className="btn-primary rounded-full px-6 py-3 text-sm font-semibold inline-flex items-center gap-2 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in touch <ArrowRight size={16} />
            </motion.a>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/80 border border-white/60"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-2 right-2 glass rounded-2xl p-6 mt-2"
          >
            <nav className="flex flex-col gap-4">
              {['services', 'approach', 'insights', 'faq', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-lg font-medium capitalize py-2 border-b border-gray-200 last:border-0"
                  style={{ color: 'var(--fg)' }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </motion.header>

      {/* ENHANCED HERO */}
      <section className="relative overflow-hidden theme-hero min-h-screen flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-10"
            style={{ background: gradient }}
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5"
            style={{ background: gradient }}
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT COLUMN */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 badge px-4 py-2 rounded-full text-sm font-semibold mb-8"
            >
              <Sparkles size={16}/> 
              <span>Practical solutions, zero fluff</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} size={12} className="fill-current text-green-500" />
                ))}
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-[-0.02em] mb-8" 
              style={{ color: 'var(--fg)' }}
            >
              Copivo —{" "}
              <span className="brand">your pragmatic partner</span>{" "}
              for Accounting, Marketing & Development.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl opacity-80 leading-relaxed mb-10" 
              style={{ color: 'var(--fg)' }}
            >
              We help companies ship faster, stay compliant, and make decisions with clean data. No hype, just work that moves the business.
            </motion.p>
            
            {/* Enhanced focus pillars */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-4 mb-10"
            >
              {[
                {t:'Accounting',i:<Wallet size={20}/>,d:'COA, invoices, close'}, 
                {t:'Marketing',i:<Megaphone size={20}/>,d:'Positioning, content, perf'}, 
                {t:'Development',i:<Layers size={20}/>,d:'Web apps & internal tools'}
              ].map((k, i)=> (
                <motion.div 
                  key={k.t} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl px-5 py-4 flex items-center gap-4 glass hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-12 h-12 rounded-xl grid place-items-center shadow-lg" style={{background: gradient}}>
                    <div className="text-white">{k.i}</div>
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{color:'var(--fg)'}}>{k.t}</div>
                    <div className="text-sm opacity-70" style={{color:'var(--fg)'}}>{k.d}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Enhanced CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <motion.a 
                href="#services" 
                className="btn-primary rounded-full px-8 py-4 font-bold text-lg inline-flex items-center gap-3 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore services <ArrowRight size={20}/>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn-secondary rounded-full px-8 py-4 font-bold text-lg inline-flex items-center gap-3 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a conversation
              </motion.a>
            </motion.div>
            
            {/* Enhanced trusted by section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="text-base opacity-70 font-medium" style={{ color: 'var(--fg)' }}>Trusted by teams at</div>
              <div className="flex flex-wrap items-center gap-4">
                {/* Added external logos from user */}
                <img src="https://irsaa.com/wp-content/uploads/2020/02/56-1.jpg" alt="client-1" className="h-10 object-contain" />
                <img src="https://images.deliveryhero.io/image/hungerstation/restaurant/logo_ar/d6d4f1fd1202c6d569de26aa3484af2d.jpg" alt="client-2" className="h-10 object-contain" />
                <img src="https://www.odootec.com/web/image/57503-a4476d84/%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D8%AC%D9%8A%D9%88%D9%86%20%D9%84%D9%84%D9%85%D8%B7%D8%A7%D8%A8%D8%AE.jpg" alt="client-3" className="h-10 object-contain" />
                <img src="https://www.odootec.com/web/image/57493-32053f75/AlbadrSons3.jpg" alt="client-4" className="h-10 object-contain" />
                {/* Fallback BrandMarks for remaining slots */}
                <BrandMark key={4} title={`Client 5`} />
                <BrandMark key={5} title={`Client 6`} />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Enhanced floating elements */}
          <div className="relative h-[500px] lg:h-[600px]">
            <FloatingShell delay={0.2} className="absolute top-8 right-8 w-72">
              <div className="glass rounded-3xl p-6 shadow-2xl">
                <div className="text-lg font-bold mb-4" style={{ color: 'var(--fg)' }}>
                  Automation Dashboard
                  <span className="ml-3 text-sm opacity-60">(live)</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Email → CRM lead", icon: <Bot size={18}/>, status: "active" },
                    { label: "Order → Invoice", icon: <Settings size={18}/>, status: "processing" },
                    { label: "Sheet → BigQuery", icon: <LineChart size={18}/>, status: "completed" },
                  ].map((r, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/50"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white shadow-md" style={{ background: gradient }}>
                        {r.icon}
                      </div>
                      <span className="flex-1 font-medium" style={{ color: 'var(--fg)' }}>{r.label}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        r.status === 'active' ? 'bg-green-400' : 
                        r.status === 'processing' ? 'bg-yellow-400' : 'bg-blue-400'
                      }`} />
                    </motion.div>
                  ))}
                </div>
              </div>
            </FloatingShell>

            <FloatingShell delay={0.8} className="absolute left-4 top-32 w-80">
              <div className="glass rounded-3xl p-6 shadow-2xl">
                <div className="text-lg font-bold mb-4" style={{ color: 'var(--fg)' }}>Financial Health Score</div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[
                    { label: "Revenue", value: "↗ 12%", color: "text-green-700" },
                    { label: "Expenses", value: "↘ 3%", color: "text-green-600" },
                    { label: "Profit", value: "↗ 18%", color: "text-green-800" }
                  ].map((metric, i) => (
                    <div key={metric.label} className="text-center p-3 rounded-xl bg-white">
                      <div className="text-xs opacity-60 mb-1" style={{ color: 'var(--fg)' }}>{metric.label}</div>
                      <div className={`font-bold ${metric.color}`}>{metric.value}</div>
                    </div>
                  ))}
                </div>
                <div className="text-sm opacity-70" style={{ color: 'var(--fg)' }}>
                  Real-time insights from your integrated financial data
                </div>
              </div>
            </FloatingShell>

            <FloatingShell delay={1.2} className="absolute right-12 bottom-8 w-64">
              <div className="glass rounded-3xl p-6 shadow-2xl">
                <div className="text-lg font-bold mb-4" style={{ color: 'var(--fg)' }}>Growth Metrics</div>
                <div className="space-y-3">
                  {["MRR", "CAC", "LTV"].map((k, i) => (
                    <div key={k} className="flex justify-between items-center">
                      <span className="text-sm font-medium" style={{ color: 'var(--fg)' }}>{k}</span>
                      <div className="h-2 w-16 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full"
                          style={{ background: gradient }}
                          initial={{ width: 0 }}
                          animate={{ width: `${60 + i * 15}%` }}
                          transition={{ delay: 1.5 + i * 0.2, duration: 1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FloatingShell>
          </div>
        </div>
      </section>

      {/* ENHANCED SERVICES */}
      <Section 
        theme="grid" 
        id="services" 
        title="What we do" 
        subtitle="Comprehensive solutions designed to scale with your business"
      >
        <div className="space-y-12">
          <ParallaxSection
            title="Accounting Excellence"
            lead="Transform your financial operations with clean COA design, automated invoice flows, and bulletproof month-end processes that keep audits simple and stress-free."
            bullets={[
              "Strategic Chart of Accounts & revenue recognition alignment",
              "VAT-compliant invoicing with automated approval workflows",
              "Streamlined bank/AR/AP reconciliations with smart checklists",
              "Month-end close automation and comprehensive documentation",
            ]}
            icon={<Wallet size={24}/>} 
          />

          <ParallaxSection
            flip
            title="Strategic Marketing"
            lead="Build authentic connections with your audience through data-driven positioning, compelling content operations, and performance systems that actually drive growth."
            bullets={[
              "Deep ICP research & resonant messaging frameworks",
              "Content strategy with scalable production workflows",
              "Multi-channel acquisition with transparent attribution",
              "Performance optimization with actionable insights",
            ]}
            icon={<Megaphone size={24}/>} 
          />

          <ParallaxSection
            title="Modern Development"
            lead="Create powerful web applications and internal tools using React, TypeScript, and modern architecture. Beautiful UX meets enterprise-grade reliability."
            bullets={[
              "Comprehensive design system & component libraries",
              "Advanced authentication, RBAC, and audit capabilities",
              "Seamless CRM/ERP integrations without vendor lock-in",
              "Production-ready CI/CD with monitoring and alerts",
            ]}
            icon={<Layers size={24}/>} 
          />

          <ParallaxSection
            flip
            title="Intelligent Automation"
            lead="Eliminate repetitive tasks with smart automation that handles the routine while keeping humans in control of the exceptions."
            bullets={[
              "Intelligent email-to-CRM lead routing and scoring",
              "Order processing with automated validation and invoicing",
              "Real-time data pipelines from spreadsheets to warehouse",
              "Human oversight for edge cases and complex decisions",
            ]}
            icon={<Settings size={24}/>} 
          />

          <ParallaxSection
            title="Advanced Analytics"
            lead="Transform raw data into strategic insights with governed pipelines, clear KPI definitions, and dashboards your team will actually trust and use."
            bullets={[
              "Comprehensive data mapping and contract management",
              "Crystal-clear metric definitions with edge case handling",
              "Self-service dashboards with ownership transparency",
              "Complete documentation and knowledge transfer",
            ]}
            icon={<BarChart3 size={24}/>} 
          />

          <ParallaxSection
            flip
            title="Smart Governance"
            lead="Scale confidently with role-based controls, approval workflows, and audit trails that grow with your business without creating bottlenecks."
            bullets={[
              "Flexible role-based access and approval hierarchies",
              "Comprehensive audit trails and evidence management",
              "Strategic separation of duties and risk controls",
              "Practical policies over bureaucratic complexity",
            ]}
            icon={<ShieldCheck size={24}/>} 
          />
        </div>
      </Section>

      {/* ENHANCED APPROACH */}
      <Section theme="light" id="approach" title="How we work" subtitle="Transparent methodology with predictable outcomes and continuous value delivery.">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              t: "Discovery & Strategy", 
              d: "Deep-dive analysis of your current processes. Identify bottlenecks, map dependencies, and design a clear roadmap to your target state.",
              icon: <Gauge size={24} />
            },
            { 
              t: "Agile Development", 
              d: "Deliver value incrementally with weekly releases. Complete transparency with live demos, detailed documentation, and zero black boxes.",
              icon: <Sparkles size={24} />
            },
            { 
              t: "Scale & Optimize", 
              d: "Production-hardening, performance optimization, and comprehensive handoff. Your team owns it, we provide ongoing support.",
              icon: <ArrowRight size={24} />
            },
          ].map((s, i) => (
            <Card key={s.t} icon={s.icon} title={s.t} desc={s.d} delay={i * 0.2} />
          ))}
        </div>
      </Section>

      {/* ENHANCED INSIGHTS */}
      <Section theme="dark" id="insights" title="Strategic insights" subtitle="Battle-tested principles that drive real business outcomes.">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Define KPIs before dashboards",
              desc: "Beautiful dashboards collapse under debate without clear definitions. We document KPI specs with source tables, business logic, and edge cases before building anything.",
            },
            {
              title: "Automate the recurring, not the rare",
              desc: "Focus automation on high-frequency, well-defined processes. Keep complex edge cases manual with clear documentation. This approach maximizes reliability while minimizing maintenance overhead.",
            },
            {
              title: "Financial foundation enables growth",
              desc: "Clean accounting systems and compliant invoice workflows prevent costly rework during scaling. We establish solid financial infrastructure before aggressive growth initiatives.",
            },
            {
              title: "Data ownership is strategic",
              desc: "Vendor lock-in limits future flexibility. We prioritize open schemas, standard formats, and portable architectures so you maintain full control of your business intelligence.",
            },
          ].map((insight, i) => (
            <motion.div 
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
            >
              <h4 className="text-2xl font-bold mb-4" style={{ color: 'var(--fg)' }}>{insight.title}</h4>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--fg)', opacity: 0.8 }}>
                {insight.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ENHANCED FAQ */}
      <Section theme="light" id="faq" title="Straight answers" subtitle="Clear, honest responses to the questions that matter.">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { 
              q: "Do you guarantee specific results?", 
              a: "No. Business outcomes depend on many factors beyond our control. We guarantee transparent communication, quality delivery, and meeting agreed-upon milestones and specifications." 
            },
            { 
              q: "How do you handle existing technical debt?", 
              a: "We work within your current ecosystem and improve incrementally. No forced migrations or complete rewrites unless they provide clear business value and you approve the approach." 
            },
            { 
              q: "What's your typical engagement model?", 
              a: "Fixed-scope projects for well-defined deliverables, or monthly retainers for ongoing operations, maintenance, and iterative improvements. We adapt to your preferred working style." 
            },
            { 
              q: "Who actually does the work?", 
              a: "A small team of senior professionals with 10+ years of experience. No junior developers or offshore teams. You work directly with the people building your solutions." 
            },
          ].map((f, i) => (
            <motion.div 
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-xl font-bold mb-4" style={{ color: 'var(--fg)' }}>{f.q}</div>
              <div className="text-lg leading-relaxed opacity-80" style={{ color: 'var(--fg)' }}>{f.a}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ENHANCED CONTACT */}
      <Section theme="grid" id="contact" title="Start your transformation" subtitle="Tell us your challenges, we'll propose the smallest step that delivers maximum value.">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8"
          >
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-lg font-semibold" style={{ color: 'var(--fg)' }}>Name</label>
                <input 
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white text-lg focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all" 
                  placeholder="Your name" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-semibold" style={{ color: 'var(--fg)' }}>Email</label>
                <input 
                  type="email" 
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white text-lg focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all" 
                  placeholder="you@company.com" 
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-lg font-semibold" style={{ color: 'var(--fg)' }}>What challenges are you facing?</label>
                <textarea 
                  className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 bg-white min-h-[140px] text-lg focus:border-green-500 focus:ring-4 focus:ring-green-50 transition-all resize-vertical" 
                  placeholder="Describe your current pain points: slow month-end close, manual data entry, disconnected systems, unclear metrics..."
                />
              </div>
              
              <motion.button 
                type="button" 
                className="btn-primary rounded-full px-8 py-4 font-bold text-lg inline-flex items-center gap-3 w-full justify-center transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send inquiry <ArrowRight size={20}/>
              </motion.button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass rounded-3xl p-8"
          >
            <h4 className="text-2xl font-bold mb-6" style={{ color: 'var(--fg)' }}>Common starting points</h4>
            <ul className="space-y-4 text-lg mb-8" style={{ color: 'var(--fg)' }}>
              {[
                "Streamline month-end close from 2 weeks to 3 days",
                "Replace Excel reporting with real-time dashboards",
                "Build customer portal for orders and documentation", 
                "Automate lead routing from website to sales team",
                "Integrate payment processing with accounting system"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-2 w-2 h-2 rounded-full shrink-0" style={{ background: gradient }} />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <div className="rounded-2xl p-6 bg-white shadow-sm">
              <div className="font-bold text-lg mb-2" style={{ color: 'var(--fg)' }}>Honest expectations</div>
              <p className="opacity-80 leading-relaxed" style={{ color: 'var(--fg)' }}>
                We'll assess feasibility in our first conversation and propose a realistic timeline with clear milestones. No overpromises or surprise costs.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ENHANCED FOOTER */}
      <footer className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <div className="text-3xl font-black mb-2" style={{ color: 'var(--fg)' }}>copivo</div>
              <div className="text-lg opacity-70 mb-4" style={{ color: 'var(--fg)' }}>Power Your Next Pivot</div>
              <div className="text-sm opacity-60" style={{ color: 'var(--fg)' }}>
                © {new Date().getFullYear()} Copivo. All rights reserved.
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-lg font-semibold mb-2" style={{ color: 'var(--fg)' }}>Ready to transform?</div>
              <div className="text-base opacity-80" style={{ color: 'var(--fg)' }}>
                Built with precision, designed for results
              </div>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}