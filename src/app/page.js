"use client";

import { useState, useEffect, useRef } from 'react';
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Code2,
  Palette,
  Database,
  Sparkles,
  ArrowRight,
  Check,
  ExternalLink,
  Eye,
} from 'lucide-react';

/* ═══════════════════════════════════════════
   GLOBAL CSS – keyframes + utility classes
   ═══════════════════════════════════════════ */
const STYLES = `
  /* ── fonts ── */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap');

  /* ── blob drifts ── */
  @keyframes blob1 {
    0%,100% { transform: translate(0,0) scale(1); }
    33%     { transform: translate(-30px,20px) scale(1.05); }
    66%     { transform: translate(20px,-25px) scale(0.95); }
  }
  @keyframes blob2 {
    0%,100% { transform: translate(0,0) scale(1); }
    40%     { transform: translate(25px,30px) scale(1.08); }
    70%     { transform: translate(-20px,-15px) scale(0.92); }
  }
  @keyframes blob3 {
    0%,100% { transform: translate(0,0) scale(1); }
    50%     { transform: translate(-15px,-30px) scale(1.1); }
  }

  /* ── shimmer sweep across buttons ── */
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }

  /* ── CTA glow breathe ── */
  @keyframes glowPulse {
    0%,100% { box-shadow: 0 0 14px rgba(6,182,212,.32), 0 4px 22px rgba(6,182,212,.22); }
    50%     { box-shadow: 0 0 28px rgba(6,182,212,.52), 0 4px 28px rgba(6,182,212,.34); }
  }

  /* ── gentle vertical float ── */
  @keyframes floatY {
    0%,100% { transform: translateY(0); }
    50%     { transform: translateY(-7px); }
  }

  /* ── gradient colour-shift ── */
  @keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  /* ── pulsing ring behind profile ── */
  @keyframes ringPulse {
    0%   { transform: scale(1);    opacity: .55; }
    100% { transform: scale(1.55); opacity: 0;   }
  }

  /* ── scroll-reveal: slide up ── */
  @keyframes revealUp {
    from { opacity:0; transform:translateY(38px); }
    to   { opacity:1; transform:translateY(0);    }
  }

  /* ── scroll-reveal: slide from left ── */
  @keyframes revealLeft {
    from { opacity:0; transform:translateX(-42px); }
    to   { opacity:1; transform:translateX(0);     }
  }

  /* ── scroll-reveal: slide from right ── */
  @keyframes revealRight {
    from { opacity:0; transform:translateX(42px); }
    to   { opacity:1; transform:translateX(0);    }
  }

  /* ── scroll-reveal: scale pop ── */
  @keyframes revealPop {
    from { opacity:0; transform:scale(.88); }
    to   { opacity:1; transform:scale(1);   }
  }

  /* ── typing cursor blink ── */
  @keyframes caretBlink {
    0%,100% { opacity:1; }
    50%     { opacity:0; }
  }

  /* ── grid-dot pulse (background decoration) ── */
  @keyframes dotPulse {
    0%,100% { opacity:.08; transform:scale(1); }
    50%     { opacity:.18; transform:scale(1.4); }
  }

  /* ── utility animation classes ── */
  .anim-blob1 { animation: blob1 7s ease-in-out infinite; }
  .anim-blob2 { animation: blob2 9s ease-in-out infinite; }
  .anim-blob3 { animation: blob3 11s ease-in-out infinite; }

  /* ── reveal base (hidden until JS adds .visible) ── */
  .reveal        { opacity:0; transition: opacity .72s cubic-bezier(.22,.68,0,1.2), transform .72s cubic-bezier(.22,.68,0,1.2); }
  .reveal.visible { opacity:1; transform:translateY(0) translateX(0) scale(1) !important; }

  /* default directions – overridden per element */
  .reveal-up            { transform: translateY(38px); }
  .reveal-left          { transform: translateX(-42px); }
  .reveal-right         { transform: translateX(42px); }
  .reveal-pop           { transform: scale(.88); }

  /* ── primary CTA ── */
  .btn-primary {
    position:relative; overflow:hidden;
    background: linear-gradient(135deg,#0891b2,#06b6d4,#14b8a6,#0891b2);
    background-size:200% 200%;
    animation: gradientShift 3s ease infinite, glowPulse 2.4s ease-in-out infinite;
    transition: transform .3s cubic-bezier(.22,.68,0,1.2), filter .3s;
  }
  .btn-primary::before {
    content:''; position:absolute; inset:0;
    background: linear-gradient(90deg,transparent 0%,rgba(255,255,255,.18) 50%,transparent 100%);
    background-size:200% 100%;
    animation: shimmer 2.2s linear infinite;
    pointer-events:none;
  }
  .btn-primary:hover  { transform:translateY(-2px) scale(1.04); filter:brightness(1.15); }
  .btn-primary:active { transform:translateY(0)    scale(.98);  }

  /* ── outline CTA ── */
  .btn-outline {
    position:relative; overflow:hidden;
    border:1px solid rgba(6,182,212,.4);
    color:#67e8f9; background:rgba(6,182,212,.07);
    transition: all .35s cubic-bezier(.22,.68,0,1.2);
  }
  .btn-outline::before {
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,transparent 40%,rgba(6,182,212,.12) 60%,transparent 100%);
    opacity:0; transition:opacity .4s;
  }
  .btn-outline:hover         { border-color:rgba(6,182,212,.75); background:rgba(6,182,212,.14); transform:translateY(-2px); box-shadow:0 0 20px rgba(6,182,212,.25),inset 0 1px 0 rgba(255,255,255,.08); }
  .btn-outline:hover::before { opacity:1; }
  .btn-outline:active        { transform:translateY(0); }

  /* ── social pill ── */
  .social-pill {
    transition: all .35s cubic-bezier(.22,.68,0,1.2);
    background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.12); color:#e0e7ff;
  }
  .social-pill:hover { background:linear-gradient(135deg,rgba(6,182,212,.25),rgba(20,184,166,.25)); border-color:rgba(6,182,212,.5); transform:translateY(-2px) scale(1.06); box-shadow:0 4px 18px rgba(6,182,212,.3); }

  /* ── nav icon ── */
  .nav-icon { transition:all .3s cubic-bezier(.22,.68,0,1.2); color:#94a3b8; }
  .nav-icon:hover { color:#06b6d4; transform:translateY(-2px) scale(1.18); filter:drop-shadow(0 2px 6px rgba(6,182,212,.4)); }

  /* ── project overlay buttons ── */
  .proj-btn {
    transition:all .3s cubic-bezier(.22,.68,0,1.2);
    background:rgba(255,255,255,.15); backdrop-filter:blur(6px);
    border:1px solid rgba(255,255,255,.22); color:#fff;
  }
  .proj-btn:hover { background:rgba(255,255,255,.3); transform:scale(1.14); box-shadow:0 2px 14px rgba(0,0,0,.28); }

  /* ── footer nav link ── */
  .footer-link { position:relative; color:#64748b; transition:color .3s; }
  .footer-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:linear-gradient(90deg,#06b6d4,#14b8a6); transition:width .35s cubic-bezier(.22,.68,0,1.2); }
  .footer-link:hover { color:#67e8f9; }
  .footer-link:hover::after { width:100%; }

  /* ── skill bar animated fill ── */
  .skill-bar-fill { width:0 !important; transition: width 1.1s cubic-bezier(.22,.68,0,1.2); }
  .skill-bar-fill.animate { /* width set via inline style in JS */ }

  /* ── card tilt shadow ── */
  .card-hover {
    transition: transform .4s cubic-bezier(.22,.68,0,1.2), box-shadow .4s cubic-bezier(.22,.68,0,1.2);
  }
  .card-hover:hover { transform:translateY(-7px); }

  /* ── typing caret ── */
  .caret {
    display:inline-block; width:3px; height:.85em;
    background:#67e8f9; margin-left:4px; vertical-align:middle;
    animation: caretBlink .9s step-end infinite;
    border-radius:2px;
  }

  /* ── subtle grid-dot background ── */
  .dot-grid {
    position:absolute; inset:0; pointer-events:none; z-index:0;
    background-image: radial-gradient(circle, rgba(6,182,212,.13) 1px, transparent 1px);
    background-size:40px 40px;
    mask-image: radial-gradient(ellipse 70% 60% at center, black 30%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at center, black 30%, transparent 100%);
  }
`;

/* ═══════════════════════════════════════════
   HOOK – IntersectionObserver reveal
   ═══════════════════════════════════════════ */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ═══════════════════════════════════════════
   HOOK – animate skill bars when in view
   ═══════════════════════════════════════════ */
function useSkillBarReveal() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true); },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, animate];
}

/* ═══════════════════════════════════════════
   HOOK – typing effect for hero name
   ═══════════════════════════════════════════ */
function useTyping(text, speed = 62) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) { clearInterval(timer); setDone(true); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return [displayed, done];
}

/* ═══════════════════════════════════════════
   APP
   ═══════════════════════════════════════════ */
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* typing name */
  const [typedName, typingDone] = useTyping('Farhan Tolkar', 68);

  /* scroll spy – UNCHANGED logic */
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          if (scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  /* ── data – UNCHANGED ── */
  const projects = [
    { title:'RedBus',            description:'UI/UX design focused on clean layoutsand smooth user flow.',    image:'./Redbus.png',    tags:['Tailwind CSS','HTML'] },
    { title:'Zomato App Clone',  description:'UI/UX design focused on clean layoutsand smooth user flow.',  image:'./Zomato.png',    tags:['Figma','UI Design'] },
    { title:'Travel Dashboard',  description:'UI/UX design focused on clean layoutsand smooth user flow.',  image:'./Travel.png',    tags:['Figma','UI Design'] },
    { title:'Snapdeal Clone',    description:'UI/UX design focused on clean layoutsand smooth user flow.',  image:'./snapdeal.png',  tags:['Tailwind CSS , HTML'] },
    { title:'Gozoop Social',     description:'UI/UX design focused on clean layoutsand smooth user flow.',      image:'./gozoop.png',    tags:['Figma','UI Design'] },
  ];

  const skills = [
    { name:'Tailwind CSS',      level:75, icon:<Code2    className="w-5 h-5"/> },
    { name:'HTML & CSS',        level:80, icon:<Code2    className="w-5 h-5"/> },
    { name:'WordPress',         level:80, icon:<Palette  className="w-5 h-5"/> },
    { name:'JavaScript',        level:80, icon:<Palette  className="w-5 h-5"/> },
    { name:'Figma',             level:85, icon:<Code2    className="w-5 h-5"/> },
    { name:'React & Next.js',   level:25, icon:<Database className="w-5 h-5"/> },
    { name:'UI/UX Design',      level:89, icon:<Palette  className="w-5 h-5"/> },
    { name:'Node.js & Express', level:20, icon:<Database className="w-5 h-5"/> },
  ];

  /* gradient text reusable style */
  const gTxt = { background:'linear-gradient(135deg,#67e8f9,#14b8a6,#fb923c)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' };

  /* ── section reveal refs ── */
  const [aboutRef,   aboutVis]   = useReveal(0.12);
  const [cardsRef,   cardsVis]   = useReveal(0.1);
  const [journeyRef, journeyVis] = useReveal(0.15);
  const [projRef,    projVis]    = useReveal(0.08);
  const [skillsRef,  skillsVis]  = useSkillBarReveal();
  const [featsRef,   featsVis]   = useReveal(0.15);
  const [contactRef, contactVis] = useReveal(0.12);

  /* ═══ RENDER ═══ */
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily:"'Inter',system-ui,sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* ════════════════ NAV ════════════════ */}
      <nav className="fixed top-0 w-full z-50" style={{ background:'rgba(15,23,42,0.55)', backdropFilter:'blur(20px)', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold hover:scale-105 transition-transform" style={{ fontFamily:"'Syne',sans-serif" }}>
              <span style={gTxt}>FT</span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {['home','about','projects','skills','contact'].map((s) => (
                <button key={s} onClick={() => scrollToSection(s)} className="capitalize font-medium relative group" style={{ color: activeSection===s?'#67e8f9':'#94a3b8', transition:'color .3s' }}>
                  {s}
                  <span className="absolute -bottom-1 left-0 h-0.5 rounded-full" style={{ background:'linear-gradient(90deg,#06b6d4,#14b8a6,#fb923c)', width: activeSection===s?'100%':'0%', transition:'width .4s cubic-bezier(.22,.68,0,1.2)' }} />
                </button>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-4">
              {[
                { href:'https://github.com/farhantolkar22-bit', Icon:Github },
                { href:'https://www.linkedin.com/in/farhan-tolkar-a15447379/', Icon:Linkedin },
                { href:'mailto:farhantolkar22@gmail.com', Icon:Mail },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="nav-icon"><Icon className="w-5 h-5" /></a>
              ))}
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden nav-icon">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4" style={{ borderTop:'1px solid rgba(255,255,255,0.08)' }}>
              {['home','about','projects','skills','contact'].map((s) => (
                <button key={s} onClick={() => scrollToSection(s)} className="block w-full text-left py-2 capitalize text-gray-400 hover:text-cyan-300 transition-colors">{s}</button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ════════════════ HERO ════════════════ */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden" style={{ background:'linear-gradient(135deg,#0c1220 0%,#0f172a 40%,#1a2332 70%,#0c1220 100%)' }}>

        {/* subtle grid dots */}
        <div className="dot-grid" />

        {/* animated blobs */}
        <div className="absolute top-16 right-16 w-96 h-96 rounded-full anim-blob1" style={{ background:'radial-gradient(circle,rgba(6,182,212,0.35),transparent 70%)' }} />
        <div className="absolute bottom-12 left-12 w-80 h-80 rounded-full anim-blob2" style={{ background:'radial-gradient(circle,rgba(20,184,166,0.28),transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full anim-blob3" style={{ background:'radial-gradient(circle,rgba(251,146,60,0.18),transparent 70%)' }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* ── left column ── */}
            <div className="space-y-6" style={{ animation:'revealUp .85s cubic-bezier(.22,.68,0,1.2) both' }}>

              {/* badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ background:'rgba(6,182,212,0.12)', color:'#67e8f9', border:'1px solid rgba(6,182,212,0.2)' }}>
                
              </div>

              {/* ── TYPING HEADING ── */}
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white" style={{ fontFamily:"'Syne',sans-serif" }}>
                I'm{' '}
                <span style={{ background:'linear-gradient(135deg,#67e8f9,#14b8a6,#fb923c)', backgroundSize:'200% 200%', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', animation:'gradientShift 4s ease infinite' }}>
                  {typedName}
                </span>
                {!typingDone && <span className="caret" />}
              </h1>

              <p className="text-xl md:text-2xl font-light" style={{ color:'#7dd3fc', animation:'revealUp .7s .18s cubic-bezier(.22,.68,0,1.2) both' }}>
                Full Stack Developer &amp; Creative Problem Solver
              </p>
              <p className="text-lg leading-relaxed" style={{ color:'#94a3b8', animation:'revealUp .7s .32s cubic-bezier(.22,.68,0,1.2) both' }}>
                I craft beautiful UIs built with HTML, CSS, Tailwind CSS, JavaScript, Figma Design, Canva &amp; WordPress.
              </p>

              {/* buttons – staggered */}
              <div className="flex flex-wrap gap-4 pt-2" style={{ animation:'revealUp .7s .46s cubic-bezier(.22,.68,0,1.2) both' }}>
                <button onClick={() => scrollToSection('projects')} className="btn-primary px-8 py-4 text-white rounded-xl font-semibold flex items-center gap-2 group">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button onClick={() => scrollToSection('contact')} className="btn-outline px-8 py-4 rounded-xl font-semibold relative z-10">
                  Contact Me
                </button>
              </div>

              {/* stats – staggered */}
              <div className="flex items-center gap-8 pt-4" style={{ animation:'revealUp .7s .6s cubic-bezier(.22,.68,0,1.2) both' }}>
                {[['6+','Months Exp'],['10+','Projects'],].map(([num, label], i) => (
                  <div key={label} className="flex items-center gap-4">
                    {i > 0 && <div className="w-px h-10" style={{ background:'rgba(255,255,255,0.12)' }} />}
                    <div>
                      <div className="text-3xl font-bold text-white" style={{ fontFamily:"'Syne',sans-serif" }}>{num}</div>
                      <div className="text-sm" style={{ color:'#94a3b8' }}>{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── PROFILE IMAGE (right) – delayed scale-in ── */}
            <div className="relative flex items-center justify-center" style={{ animation:'revealPop .8s .25s cubic-bezier(.22,.68,0,1.2) both' }}>
              {/* gradient border shell */}
              <div className="absolute rounded-2xl" style={{ inset:'0', background:'linear-gradient(135deg,#06b6d4,#14b8a6,#fb923c,#06b6d4)', backgroundSize:'300% 300%', animation:'gradientShift 3s ease infinite', padding:'3px', zIndex:0, width:'100%', height:'100%' }}>
                <div className="w-full h-full rounded-2xl" style={{ background:'#0f172a' }} />
              </div>
              {/* pulse ring */}
              <div className="absolute rounded-2xl" style={{ inset:'2px', border:'1px solid rgba(6,182,212,0.35)', animation:'ringPulse 2.8s ease-out infinite', zIndex:1 }} />

              {/* image */}
              <div className="relative z-10 w-72 h-72 rounded-2xl overflow-hidden" style={{ boxShadow:'0 8px 50px rgba(6,182,212,0.3)' }}>
                <img src="./farhan.png" alt="Farhan Tolkar – Developer" className="w-full h-full object-cover" style={{ transition:'transform .5s cubic-bezier(.22,.68,0,1.2)' }}
                  onMouseEnter={e => e.currentTarget.style.transform='scale(1.06)'}
                  onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}
                />
              </div>

              {/* floating badges */}
              <div className="absolute z-20 px-3 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-1.5" style={{ top:'-12px', right:'-16px', background:'linear-gradient(135deg,#06b6d4,#14b8a6)', boxShadow:'0 4px 14px rgba(6,182,212,0.4)', animation:'floatY 3s ease-in-out infinite' }}>
                <Sparkles className="w-3 h-3" /> Open to work
              </div>
              <div className="absolute z-20 px-3 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-1.5" style={{ bottom:'-12px', left:'-16px', background:'linear-gradient(135deg,#fb923c,#f59e0b)', boxShadow:'0 4px 14px rgba(251,146,60,0.4)', animation:'floatY 3.6s ease-in-out infinite 0.4s' }}>
                <Code2 className="w-3 h-3" /> 10+ Projects
              </div>

              {/* blobs behind */}
              <div className="absolute rounded-full opacity-20 blur-3xl anim-blob2" style={{ top:'16px', right:'-24px', width:'208px', height:'208px', background:'#06b6d4' }} />
              <div className="absolute rounded-full opacity-15 blur-3xl anim-blob1" style={{ bottom:'-24px', left:'-24px', width:'176px', height:'176px', background:'#14b8a6' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ ABOUT ════════════════ */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">

          {/* heading – reveal */}
          <div ref={aboutRef} className={`text-center mb-16 reveal reveal-up ${aboutVis?'visible':''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily:"'Syne',sans-serif" }}>
              About <span style={gTxt}>Me</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Passionate developer with a keen eye for design and a love for creating exceptional digital experiences</p>
          </div>

          {/* 3 cards – staggered reveal */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { Icon:Code2,    title:'Clean Code',      desc:'Writing maintainable, scalable code following best practices and modern standards.',  accent:'#0891b2' },
              { Icon:Palette,  title:'Beautiful Design', desc:'Creating intuitive, accessible interfaces that users love to interact with.',        accent:'#14b8a6' },
              { Icon:Database, title:'UI / UX',          desc:'Full Figma design with prototype. WordPress for websites & blogs.',                  accent:'#fb923c' },
            ].map(({ Icon, title, desc, accent }, i) => (
              <div
                key={title}
                className={`reveal reveal-up card-hover p-8 bg-white rounded-2xl border border-gray-100`}
                style={{
                  boxShadow:'0 2px 12px rgba(0,0,0,0.04)',
                  transitionDelay: cardsVis ? `${i*120}ms` : '0ms',
                  opacity: cardsVis ? 1 : 0,
                  transform: cardsVis ? 'translateY(0)' : 'translateY(38px)',
                  transition:'opacity .7s cubic-bezier(.22,.68,0,1.2), transform .7s cubic-bezier(.22,.68,0,1.2), box-shadow .4s',
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow=`0 14px 36px ${accent}25`}
                onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.04)'}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ background:`${accent}15` }}>
                  <Icon className="w-6 h-6" style={{ color:accent }} />
                </div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* journey banner – reveal */}
          <div ref={journeyRef} className={`reveal reveal-up ${journeyVis?'visible':''}`}>
            <div className="rounded-2xl p-8 md:p-12 text-white relative overflow-hidden" style={{ background:'linear-gradient(135deg,#0c1220 0%,#0f172a 45%,#1a2332 100%)' }}>
              {/* subtle inner dots */}
              <div className="dot-grid" style={{ opacity:.5 }} />
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4" style={{ fontFamily:"'Syne',sans-serif" }}>My Journey</h3>
                  <p className="leading-relaxed mb-4" style={{ color:'#7dd3fc' }}>With over 6 months of hands-on experience, I've worked with startups and enterprises to bring digital visions to life.</p>
                  <p className="leading-relaxed" style={{ color:'#94a3b8' }}>I specialise in modern technologies like React, Node.js, HTML, Tailwind CSS and JavaScript. When I'm not coding, I contribute to open source and write technical articles.</p>
                </div>
                <div className="space-y-4">
                  {['Full Stack Development','UI/UX Design','API Development','Server Management'].map((item, i) => (
                    <div key={item} className="flex items-center gap-3" style={{ color:'#94a3b8', opacity: journeyVis?1:0, transform: journeyVis?'translateX(0)':'translateX(24px)', transition:`opacity .6s ${i*100}ms cubic-bezier(.22,.68,0,1.2), transform .6s ${i*100}ms cubic-bezier(.22,.68,0,1.2)` }}>
                      <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0" style={{ background:'rgba(6,182,212,0.18)' }}>
                        <Check className="w-4 h-4" style={{ color:'#67e8f9' }} />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ PROJECTS ════════════════ */}
      <section id="projects" className="py-24 px-6" style={{ background:'linear-gradient(180deg,#f8fafc 0%,#f1f5f9 100%)' }}>
        <div className="container mx-auto max-w-7xl">

          <div ref={projRef} className={`text-center mb-16 reveal reveal-up ${projVis?'visible':''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily:"'Syne',sans-serif" }}>
              Featured <span style={gTxt}>Projects</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">A showcase of my recent work and successful collaborations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover"
                style={{
                  boxShadow:'0 2px 10px rgba(0,0,0,0.05)',
                  opacity: projVis ? 1 : 0,
                  transform: projVis ? 'translateY(0)' : 'translateY(42px)',
                  transition:`opacity .7s ${i*100}ms cubic-bezier(.22,.68,0,1.2), transform .7s ${i*100}ms cubic-bezier(.22,.68,0,1.2), box-shadow .4s`,
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 18px 44px rgba(6,182,212,0.16)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 10px rgba(0,0,0,0.05)'}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background:'linear-gradient(to top,rgba(12,18,32,0.88),rgba(12,18,32,0.4))' }}>
                    <button className="proj-btn p-3 rounded-lg" title="View Project"><Eye className="w-5 h-5" /></button>
                    <button className="proj-btn p-3 rounded-lg" title="Open Live"><ExternalLink className="w-5 h-5" /></button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="px-3 py-1 rounded-full text-xs font-medium" style={{ background:'linear-gradient(135deg,#ecfdf5,#cffafe)', color:'#0891b2' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ SKILLS ════════════════ */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">

          <div className={`text-center mb-16 reveal reveal-up ${skillsVis?'visible':''}`} style={{ opacity:skillsVis?1:0, transform:skillsVis?'translateY(0)':'translateY(38px)', transition:'opacity .7s cubic-bezier(.22,.68,0,1.2), transform .7s cubic-bezier(.22,.68,0,1.2)' }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily:"'Syne',sans-serif" }}>
              Skills &amp; <span style={gTxt}>Expertise</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Constantly learning and adapting to the latest technologies</p>
          </div>

          {/* skill bars – animate width on scroll */}
          <div ref={skillsRef} className="grid md:grid-cols-2 gap-5 mb-16">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="p-5 bg-white rounded-xl border border-gray-100 card-hover"
                style={{
                  boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
                  opacity: skillsVis ? 1 : 0,
                  transform: skillsVis ? 'translateY(0)' : 'translateY(28px)',
                  transition:`opacity .65s ${i*90}ms cubic-bezier(.22,.68,0,1.2), transform .65s ${i*90}ms cubic-bezier(.22,.68,0,1.2), box-shadow .4s`,
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 24px rgba(6,182,212,0.14)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 8px rgba(0,0,0,0.04)'}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div style={{ color:'#0891b2' }}>{skill.icon}</div>
                    <span className="font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color:'#0891b2' }}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{
                    width: skillsVis ? `${skill.level}%` : '0%',
                    background:'linear-gradient(90deg,#06b6d4,#14b8a6,#fb923c)',
                    transition:`width 1.1s ${i*90}ms cubic-bezier(.22,.68,0,1.2)`,
                  }} />
                </div>
              </div>
            ))}
          </div>

          {/* feature cards */}
          <div ref={featsRef} className="grid md:grid-cols-3 gap-6">
            {[
              { emoji:'⚡', title:'Fast Performance', desc:'Optimized for speed and efficiency' },
              { emoji:'📱', title:'Responsive Design', desc:'Perfect on any device or screen size' },
              { emoji:'🔒', title:'Secure & Scalable',  desc:'Built with best practices in mind' },
            ].map(({ emoji, title, desc }, i) => (
              <div
                key={title}
                className="text-center p-8 rounded-2xl border border-gray-100 card-hover"
                style={{
                  background:'linear-gradient(135deg,#f0fdff,#fff)',
                  boxShadow:'0 2px 8px rgba(0,0,0,0.04)',
                  opacity: featsVis ? 1 : 0,
                  transform: featsVis ? 'translateY(0)' : 'translateY(34px)',
                  transition:`opacity .7s ${i*130}ms cubic-bezier(.22,.68,0,1.2), transform .7s ${i*130}ms cubic-bezier(.22,.68,0,1.2), box-shadow .4s`,
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow='0 12px 30px rgba(6,182,212,0.15)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 8px rgba(0,0,0,0.04)'}
              >
                <div className="text-4xl mb-3" style={{ display:'inline-block', animation:'floatY 2.5s ease-in-out infinite' }}>{emoji}</div>
                <h3 className="text-lg font-bold mb-1">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ CONTACT ════════════════ */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden" style={{ background:'linear-gradient(135deg,#0c1220 0%,#0f172a 40%,#1a2332 100%)' }}>
        <div className="dot-grid" style={{ opacity:.4 }} />
        <div className="absolute rounded-full blur-3xl anim-blob2" style={{ top:'0', right:'0', width:'384px', height:'384px', opacity:'0.12', background:'#14b8a6' }} />
        <div className="absolute rounded-full blur-3xl anim-blob1" style={{ bottom:'0', left:'0', width:'320px', height:'320px', opacity:'0.1', background:'#06b6d4' }} />

        <div ref={contactRef} className="container mx-auto max-w-4xl relative z-10">
          <div className={`text-center mb-14 reveal reveal-up ${contactVis?'visible':''}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white" style={{ fontFamily:"'Syne',sans-serif" }}>Let's Work Together</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color:'#7dd3fc' }}>Have a project in mind? I'd love to hear about it.</p>
          </div>

          <div className={`reveal reveal-up ${contactVis?'visible':''}`} style={{ transitionDelay:'150ms' }}>
            <div className="rounded-2xl p-8 md:p-10" style={{ background:'rgba(255,255,255,0.05)', backdropFilter:'blur(14px)', border:'1px solid rgba(255,255,255,0.1)' }}>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { Icon:Mail,   label:'Email',    value:'farhantolkar22@gmail.com' },
                  { Icon:Phone,  label:'Phone',    value:'8010491875' },
                  { Icon:MapPin, label:'Location', value:'Mumbai, India' },
                ].map(({ Icon, label, value }, i) => (
                  <div key={label} className="flex items-center gap-4" style={{ opacity:contactVis?1:0, transform:contactVis?'translateY(0)':'translateY(20px)', transition:`opacity .6s ${200+i*120}ms cubic-bezier(.22,.68,0,1.2), transform .6s ${200+i*120}ms cubic-bezier(.22,.68,0,1.2)` }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background:'rgba(6,182,212,0.14)' }}>
                      <Icon className="w-5 h-5" style={{ color:'#67e8f9' }} />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider mb-0.5" style={{ color:'#7dd3fc' }}>{label}</div>
                      <div className="text-white font-medium text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 flex justify-center gap-4" style={{ borderTop:'1px solid rgba(255,255,255,0.08)' }}>
                {[
                  { href:'https://github.com/farhantolkar22-bit', Icon:Github,   label:'GitHub' },
                  { href:'https://www.linkedin.com/in/farhan-tolkar-a15447379/', Icon:Linkedin, label:'LinkedIn' },
                  { href:'mailto:farhantolkar22@gmail.com',       Icon:Mail,     label:'Email' },
                ].map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-pill flex items-center gap-2 px-5 py-2.5 rounded-lg">
                    <Icon className="w-4 h-4" /><span className="text-sm font-medium">{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="py-5 px-6" style={{ background:'#080e1a', borderTop:'1px solid rgba(255,255,255,0.05)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold" style={{ ...gTxt, fontFamily:"'Syne',sans-serif" }}>FT</span>
              <span className="text-gray-600 text-xs">© {new Date().getFullYear()} Farhan Tolkar. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-6">
              {['Home','About','Projects','Skills','Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="footer-link text-xs">{item}</button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {[
                { href:'https://github.com/farhantolkar22-bit', Icon:Github },
                { href:'https://www.linkedin.com/in/farhan-tolkar-a15447379/', Icon:Linkedin },
                { href:'mailto:farhantolkar22@gmail.com', Icon:Mail },
              ].map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="nav-icon"><Icon className="w-4 h-4" /></a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}