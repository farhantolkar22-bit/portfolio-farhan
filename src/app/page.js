'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Github, Linkedin, Mail, Phone, MapPin,
  Code2, Palette, Database, Sparkles, ArrowRight,
  Check, ExternalLink, Eye, Download, Send, Star,
  Briefcase, Award, Users, Coffee, Rocket, Zap,
} from 'lucide-react';

/* ═══════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════ */
const NAV_LINKS = ['home', 'about', 'projects', 'skills', 'testimonials', 'contact'];

const SOCIAL_LINKS = [
  { href: 'https://github.com/farhantolkar22-bit', Icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/farhan-tolkar-a15447379/', Icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:farhantolkar22@gmail.com', Icon: Mail, label: 'Email' },
];

const PROJECTS = [
  { title: 'RedBus', description: 'Modern bus booking platform with seamless user experience and real-time updates.', image: './Redbus.png', tags: ['Tailwind CSS', 'HTML'], category: 'Web Design' },
  { title: 'Zomato App Clone', description: 'Food delivery app redesign focusing on intuitive navigation and visual appeal.', image: './Zomato.png', tags: ['Figma', 'UI Design'], category: 'UI/UX' },
  { title: 'Travel Dashboard', description: 'Comprehensive travel management system with analytics and booking features.', image: './Travel.png', tags: ['Figma', 'UI Design'], category: 'Dashboard' },
  { title: 'Snapdeal Clone', description: 'E-commerce platform with advanced filtering and smooth checkout process.', image: './snapdeal.png', tags: ['Tailwind CSS', 'HTML'], category: 'E-commerce' },
  { title: 'Gozoop Social', description: 'Social media management dashboard with engagement analytics and scheduling.', image: './gozoop.png', tags: ['Figma', 'UI Design'], category: 'Social Media' },
];

const SKILLS = [
  { name: 'Tailwind CSS', level: 75, Icon: Code2, color: '#06b6d4' },
  { name: 'HTML & CSS', level: 80, Icon: Code2, color: '#e34c26' },
  { name: 'WordPress', level: 80, Icon: Palette, color: '#21759b' },
  { name: 'JavaScript', level: 80, Icon: Palette, color: '#f7df1e' },
  { name: 'Figma', level: 85, Icon: Code2, color: '#f24e1e' },
  { name: 'React & Next.js', level: 25, Icon: Database, color: '#61dafb' },
  { name: 'UI/UX Design', level: 89, Icon: Palette, color: '#ff6b6b' },
  { name: 'Node.js & Express', level: 20, Icon: Database, color: '#68a063' },
];

const ABOUT_CARDS = [
  { Icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, scalable code following best practices and modern standards.', accent: '#0891b2' },
  { Icon: Palette, title: 'Beautiful Design', desc: 'Creating intuitive, accessible interfaces that users love to interact with.', accent: '#14b8a6' },
  { Icon: Database, title: 'UI / UX', desc: 'Full Figma design with prototype. WordPress for websites & blogs.', accent: '#fb923c' },
];

const JOURNEY_ITEMS = ['Full Stack Development', 'UI/UX Design', 'API Development', 'Server Management'];

const CONTACT_INFO = [
  { Icon: Mail, label: 'Email', value: 'farhantolkar22@gmail.com' },
  { Icon: Phone, label: 'Phone', value: '8010491875' },
  { Icon: MapPin, label: 'Location', value: 'Mumbai, India' },
];

const FEATURE_CARDS = [
  { emoji: '⚡', title: 'Fast Performance', desc: 'Optimized for speed and efficiency' },
  { emoji: '📱', title: 'Responsive Design', desc: 'Perfect on any device or screen size' },
  { emoji: '🔒', title: 'Secure & Scalable', desc: 'Built with best practices in mind' },
];

const TESTIMONIALS = [
  { name: 'Sarah Johnson', role: 'CEO, TechStart', text: 'Farhan delivered an exceptional website that exceeded our expectations. Professional and timely!', rating: 5 },
  { name: 'Michael Chen', role: 'Product Manager', text: 'Outstanding UI/UX work. The designs are both beautiful and functional. Highly recommended!', rating: 5 },
  { name: 'Emily Rodriguez', role: 'Marketing Director', text: 'Great attention to detail and excellent communication throughout the project. Will work again!', rating: 5 },
];

const STATS = [
  { Icon: Users, value: '2025', label: 'Started Journey', color: '#14b8a6' },
  { Icon: Briefcase, value: '10+', label: 'Projects Completed', color: '#06b6d4' },
  { Icon: Award, value: '6+', label: 'Months Experience', color: '#fb923c' },
  { Icon: Coffee, value: '3', label: 'Years Program', color: '#f59e0b' },
];

/* ═══════════════════════════════════════════
   HOOKS
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

function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);
  return position;
}

/* ═══════════════════════════════════════════
   GLOBAL CSS
   ═══════════════════════════════════════════ */
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Syne:wght@700;800&display=swap');

  * { scroll-behavior: smooth; }

  @keyframes blob1 {
    0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
    33%     { transform: translate(-30px,20px) scale(1.05) rotate(120deg); }
    66%     { transform: translate(20px,-25px) scale(0.95) rotate(240deg); }
  }
  @keyframes blob2 {
    0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
    40%     { transform: translate(25px,30px) scale(1.08) rotate(160deg); }
    70%     { transform: translate(-20px,-15px) scale(0.92) rotate(320deg); }
  }
  @keyframes blob3 {
    0%,100% { transform: translate(0,0) scale(1) rotate(0deg); }
    50%     { transform: translate(-15px,-30px) scale(1.1) rotate(180deg); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes glowPulse {
    0%,100% { box-shadow: 0 0 20px rgba(6,182,212,.4), 0 8px 32px rgba(6,182,212,.3); }
    50%     { box-shadow: 0 0 40px rgba(6,182,212,.6), 0 12px 40px rgba(6,182,212,.4); }
  }
  @keyframes floatY {
    0%,100% { transform: translateY(0); }
    50%     { transform: translateY(-12px); }
  }
  @keyframes gradientShift {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes ringPulse {
    0%   { transform: scale(1);    opacity: .6; }
    100% { transform: scale(1.8); opacity: 0; }
  }
  @keyframes revealUp {
    from { opacity:0; transform:translateY(48px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes revealPop {
    from { opacity:0; transform:scale(.85); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes caretBlink {
    0%,100% { opacity:1; }
    50%     { opacity:0; }
  }
  @keyframes slideInLeft {
    from { opacity:0; transform:translateX(-60px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity:0; transform:translateX(60px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes scaleIn {
    from { opacity:0; transform:scale(0.8); }
    to   { opacity:1; transform:scale(1); }
  }
  @keyframes rotateIn {
    from { opacity:0; transform:rotate(-10deg) scale(0.9); }
    to   { opacity:1; transform:rotate(0) scale(1); }
  }
  @keyframes borderGlow {
    0%,100% { border-color: rgba(6,182,212,0.3); }
    50%     { border-color: rgba(6,182,212,0.8); }
  }
  @keyframes iconFloat {
    0%,100% { transform: translateY(0) rotate(0deg); }
    25%     { transform: translateY(-8px) rotate(5deg); }
    75%     { transform: translateY(-4px) rotate(-5deg); }
  }
  @keyframes textShine {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes cardHover {
    0% { transform: translateY(0) rotateX(0); }
    100% { transform: translateY(-8px) rotateX(2deg); }
  }

  .anim-blob1 { animation: blob1 12s ease-in-out infinite; }
  .anim-blob2 { animation: blob2 15s ease-in-out infinite; }
  .anim-blob3 { animation: blob3 18s ease-in-out infinite; }

  .reveal        { opacity:0; transition: opacity .9s cubic-bezier(.22,.68,0,1.2), transform .9s cubic-bezier(.22,.68,0,1.2); }
  .reveal.visible { opacity:1 !important; transform:translateY(0) translateX(0) scale(1) !important; }
  .reveal-up     { transform: translateY(48px); }

  .btn-primary {
    position:relative; overflow:hidden;
    background: linear-gradient(135deg,#0891b2,#06b6d4,#14b8a6,#0891b2);
    background-size:300% 300%;
    animation: gradientShift 4s ease infinite;
    transition: all .4s cubic-bezier(.22,.68,0,1.2);
  }
  .btn-primary::before {
    content:''; position:absolute; inset:0;
    background: linear-gradient(90deg,transparent 0%,rgba(255,255,255,.25) 50%,transparent 100%);
    background-size:200% 100%;
    animation: shimmer 2.5s linear infinite;
    pointer-events:none;
  }
  .btn-primary::after {
    content:''; position:absolute; inset:-2px;
    background: linear-gradient(45deg, #06b6d4, #14b8a6, #fb923c, #06b6d4);
    background-size: 300% 300%;
    border-radius: inherit;
    z-index: -1;
    animation: gradientShift 4s ease infinite;
    opacity: 0;
    transition: opacity .4s;
  }
  .btn-primary:hover::after { opacity: 1; }
  .btn-primary:hover  { 
    transform:translateY(-4px) scale(1.05); 
    box-shadow: 0 12px 40px rgba(6,182,212,.4), 0 0 40px rgba(6,182,212,.3);
  }
  .btn-primary:active { transform:translateY(-2px) scale(1.02); }

  .btn-outline {
    position:relative; overflow:hidden;
    border:2px solid rgba(6,182,212,.4);
    color:#67e8f9; background:rgba(6,182,212,.05);
    transition: all .4s cubic-bezier(.22,.68,0,1.2);
  }
  .btn-outline::before {
    content:''; position:absolute; inset:0;
    background:linear-gradient(135deg,rgba(6,182,212,.15),rgba(20,184,166,.15));
    opacity:0; transition:opacity .4s;
  }
  .btn-outline::after {
    content:''; position:absolute; top:50%; left:50%;
    width:0; height:0; border-radius:50%;
    background:radial-gradient(circle, rgba(6,182,212,.3), transparent 70%);
    transform:translate(-50%,-50%);
    transition: width .6s, height .6s;
  }
  .btn-outline:hover::after { width:300px; height:300px; }
  .btn-outline:hover { 
    border-color:rgba(6,182,212,.9); 
    background:rgba(6,182,212,.18); 
    transform:translateY(-4px); 
    box-shadow:0 8px 30px rgba(6,182,212,.35);
    color:#fff;
  }
  .btn-outline:hover::before { opacity:1; }
  .btn-outline:active { transform:translateY(-2px); }

  .social-pill {
    transition: all .4s cubic-bezier(.22,.68,0,1.2);
    background:rgba(255,255,255,.08); 
    border:1px solid rgba(255,255,255,.15); 
    color:#e0e7ff;
    position: relative;
    overflow: hidden;
  }
  .social-pill::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(6,182,212,.4), transparent 70%);
    transform: translate(-50%, -50%);
    transition: width .5s, height .5s;
  }
  .social-pill:hover::before { width: 200px; height: 200px; }
  .social-pill:hover { 
    background:linear-gradient(135deg,rgba(6,182,212,.3),rgba(20,184,166,.3)); 
    border-color:rgba(6,182,212,.7); 
    transform:translateY(-4px) scale(1.08); 
    box-shadow:0 8px 24px rgba(6,182,212,.4);
  }

  .nav-icon { 
    transition:all .4s cubic-bezier(.22,.68,0,1.2); 
    color:#94a3b8;
    position: relative;
  }
  .nav-icon::before {
    content: '';
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(6,182,212,.2), transparent 70%);
    opacity: 0;
    transition: opacity .4s;
  }
  .nav-icon:hover::before { opacity: 1; }
  .nav-icon:hover { 
    color:#06b6d4; 
    transform:translateY(-4px) scale(1.25) rotate(5deg); 
    filter:drop-shadow(0 4px 12px rgba(6,182,212,.6));
  }

  .proj-btn {
    transition:all .4s cubic-bezier(.22,.68,0,1.2);
    background:rgba(255,255,255,.2); 
    backdrop-filter:blur(10px);
    border:1px solid rgba(255,255,255,.3); 
    color:#fff;
    position: relative;
    overflow: hidden;
  }
  .proj-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255,255,255,.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width .5s, height .5s;
  }
  .proj-btn:hover::before { width: 150px; height: 150px; }
  .proj-btn:hover { 
    background:rgba(255,255,255,.4); 
    transform:scale(1.2) rotate(5deg); 
    box-shadow:0 4px 20px rgba(0,0,0,.4);
  }

  .footer-link { 
    position:relative; 
    color:#64748b; 
    transition:color .4s;
  }
  .footer-link::after { 
    content:''; 
    position:absolute; 
    bottom:-4px; 
    left:0; 
    width:0; 
    height:2px; 
    background:linear-gradient(90deg,#06b6d4,#14b8a6,#fb923c); 
    transition:width .4s cubic-bezier(.22,.68,0,1.2);
  }
  .footer-link:hover { color:#67e8f9; transform:translateY(-2px); }
  .footer-link:hover::after { width:100%; }

  .card-hover { 
    transition: all .5s cubic-bezier(.22,.68,0,1.2);
    position: relative;
  }
  .card-hover::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(6,182,212,.1), rgba(20,184,166,.1));
    opacity: 0;
    border-radius: inherit;
    transition: opacity .5s;
  }
  .card-hover:hover::before { opacity: 1; }
  .card-hover:hover { 
    transform:translateY(-12px) rotateX(5deg); 
    box-shadow: 0 20px 60px rgba(6,182,212,.25);
  }

  .caret {
    display:inline-block; 
    width:3px; 
    height:.9em;
    background:#67e8f9; 
    margin-left:4px; 
    vertical-align:middle;
    animation: caretBlink 1s step-end infinite;
    border-radius:2px;
    box-shadow: 0 0 8px rgba(103,232,249,.6);
  }

  .dot-grid {
    position:absolute; 
    inset:0; 
    pointer-events:none; 
    z-index:0;
    background-image: radial-gradient(circle, rgba(6,182,212,.15) 1px, transparent 1px);
    background-size:40px 40px;
    mask-image: radial-gradient(ellipse 70% 60% at center, black 30%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 70% 60% at center, black 30%, transparent 100%);
  }

  .skill-card {
    position: relative;
    overflow: hidden;
  }
  .skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent);
    transition: left .6s;
  }
  .skill-card:hover::before { left: 100%; }

  .project-card {
    position: relative;
    overflow: hidden;
  }
  .project-card::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(6,182,212,.0), rgba(6,182,212,.2));
    opacity: 0;
    transition: opacity .5s;
  }
  .project-card:hover::after { opacity: 1; }

  .testimonial-card {
    position: relative;
    overflow: hidden;
  }
  .testimonial-card::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(from 0deg, transparent, rgba(6,182,212,.1), transparent 30%);
    animation: rotate 4s linear infinite;
    opacity: 0;
  }
  .testimonial-card:hover::before { opacity: 1; }
  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }

  .stat-card {
    position: relative;
    transition: all .5s cubic-bezier(.22,.68,0,1.2);
  }
  .stat-card::before {
    content: '';
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #06b6d4, #14b8a6, #fb923c, #06b6d4);
    background-size: 300% 300%;
    border-radius: inherit;
    z-index: -1;
    opacity: 0;
    animation: gradientShift 3s ease infinite;
    transition: opacity .5s;
  }
  .stat-card:hover::before { opacity: 1; }
  .stat-card:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 0 12px 40px rgba(6,182,212,.3);
  }

  .gradient-text {
    background: linear-gradient(135deg,#67e8f9,#14b8a6,#fb923c);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 3s ease infinite;
  }

  .shine-text {
    background: linear-gradient(90deg, #67e8f9 0%, #fff 50%, #67e8f9 100%);
    background-size: 200% 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: textShine 3s linear infinite;
  }

  .floating-element {
    animation: floatY 4s ease-in-out infinite;
  }

  .hover-lift {
    transition: transform .3s cubic-bezier(.22,.68,0,1.2);
  }
  .hover-lift:hover {
    transform: translateY(-8px);
  }

  .image-wrapper {
    position: relative;
    overflow: hidden;
  }
  .image-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255,255,255,.1) 50%, transparent 70%);
    background-size: 200% 200%;
    opacity: 0;
    transition: opacity .5s;
  }
  .image-wrapper:hover::before {
    opacity: 1;
    animation: shimmer 1.5s infinite;
  }

  @media (max-width: 768px) {
    .card-hover:hover {
      transform: translateY(-6px);
    }
  }
`;

/* ═══════════════════════════════════════════
   SHARED STYLE OBJECT – gradient text
   ═══════════════════════════════════════════ */
const gTxt = {
  background: 'linear-gradient(135deg,#67e8f9,#14b8a6,#fb923c)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

/* ═══════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════ */
export default function Page() {
  /* ── state ── */
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [typedName, typingDone] = useTyping('Farhan Tolkar', 68);
  const mousePos = useMousePosition();
  const [scrollY, setScrollY] = useState(0);

  /* ── scroll tracking ── */
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const scrollPosition = window.scrollY + 100;
      for (const section of NAV_LINKS) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── helper ── */
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  /* ── section reveal refs ── */
  const [aboutRef, aboutVis] = useReveal(0.12);
  const [cardsRef, cardsVis] = useReveal(0.1);
  const [journeyRef, journeyVis] = useReveal(0.15);
  const [projRef, projVis] = useReveal(0.08);
  const [skillsRef, skillsVis] = useSkillBarReveal();
  const [featsRef, featsVis] = useReveal(0.15);
  const [testimonialsRef, testimonialsVis] = useReveal(0.12);
  const [statsRef, statsVis] = useReveal(0.12);
  const [contactRef, contactVis] = useReveal(0.12);

  /* ═══ RENDER ═══ */
  return (
    <div className="min-h-screen bg-white text-gray-900" style={{ fontFamily: "'Inter',system-ui,sans-serif" }}>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />

      {/* Cursor follower effect */}
      <div 
        className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          width: '40px',
          height: '40px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.15), transparent 70%)',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
        }}
      />

      {/* ════════════════ NAV ════════════════ */}
      <nav 
        className="fixed top-0 w-full z-50 transition-all duration-300"
        style={{ 
          background: scrollY > 50 ? 'rgba(15,23,42,0.9)' : 'rgba(15,23,42,0.7)', 
          backdropFilter: 'blur(20px)', 
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          boxShadow: scrollY > 50 ? '0 8px 32px rgba(0,0,0,0.2)' : 'none',
        }}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* logo */}
            <button 
              onClick={() => scrollTo('home')} 
              className="text-2xl font-bold hover:scale-110 transition-all duration-300" 
              style={{ fontFamily: "'Syne',sans-serif" }}
            >
              <span className="gradient-text">FT</span>
            </button>

            {/* desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((s) => (
                <button 
                  key={s} 
                  onClick={() => scrollTo(s)} 
                  className="capitalize font-medium relative group" 
                  style={{ 
                    color: activeSection === s ? '#67e8f9' : '#94a3b8', 
                    transition: 'all .3s' 
                  }}
                >
                  {s}
                  <span 
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full transition-all duration-400" 
                    style={{ 
                      background: 'linear-gradient(90deg,#06b6d4,#14b8a6,#fb923c)', 
                      width: activeSection === s ? '100%' : '0%',
                    }} 
                  />
                  <span 
                    className="absolute -bottom-1 left-0 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-400" 
                    style={{ 
                      background: 'linear-gradient(90deg,#06b6d4,#14b8a6,#fb923c)', 
                      width: '100%',
                      filter: 'blur(4px)',
                    }} 
                  />
                </button>
              ))}
            </div>

            {/* desktop socials */}
            <div className="hidden md:flex items-center gap-4">
              {SOCIAL_LINKS.map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="nav-icon">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* mobile toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden nav-icon">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              {NAV_LINKS.map((s) => (
                <button 
                  key={s} 
                  onClick={() => scrollTo(s)} 
                  className="block w-full text-left py-3 capitalize text-gray-400 hover:text-cyan-300 hover:pl-4 transition-all duration-300"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ════════════════ HERO ════════════════ */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden" 
        style={{ background: 'linear-gradient(135deg,#0c1220 0%,#0f172a 40%,#1a2332 70%,#0c1220 100%)' }}
      >
        <div className="dot-grid" />

        {/* enhanced blobs */}
        <div className="absolute top-16 right-16 w-96 h-96 rounded-full anim-blob1" style={{ background: 'radial-gradient(circle,rgba(6,182,212,0.4),transparent 70%)' }} />
        <div className="absolute bottom-12 left-12 w-80 h-80 rounded-full anim-blob2" style={{ background: 'radial-gradient(circle,rgba(20,184,166,0.35),transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full anim-blob3" style={{ background: 'radial-gradient(circle,rgba(251,146,60,0.25),transparent 70%)' }} />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* left */}
            <div className="space-y-6" style={{ animation: 'revealUp 1s cubic-bezier(.22,.68,0,1.2) both' }}>
              <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-2" 
                style={{ 
                  background: 'rgba(6,182,212,0.15)', 
                  border: '1px solid rgba(6,182,212,0.3)',
                  color: '#67e8f9',
                  animation: 'scaleIn 0.8s cubic-bezier(.22,.68,0,1.2) both 0.3s'
                }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Available for Freelance
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
                I&apos;m{' '}
                <span className="shine-text">
                  {typedName}
                </span>
                {!typingDone && <span className="caret" />}
              </h1>

              <p className="text-xl md:text-2xl font-light" style={{ color: '#7dd3fc', animation: 'slideInLeft .9s .3s cubic-bezier(.22,.68,0,1.2) both' }}>
                Full Stack Developer &amp; Creative Problem Solver
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#94a3b8', animation: 'slideInLeft .9s .45s cubic-bezier(.22,.68,0,1.2) both' }}>
                I craft beautiful, responsive UIs built with HTML, CSS, Tailwind CSS, JavaScript, Figma Design, Canva &amp; WordPress.
              </p>

              {/* buttons */}
              <div className="flex flex-wrap gap-4 pt-4" style={{ animation: 'scaleIn .9s .6s cubic-bezier(.22,.68,0,1.2) both' }}>
                <button onClick={() => scrollTo('projects')} className="btn-primary px-8 py-4 text-white rounded-xl font-semibold flex items-center gap-2 group">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
                <button onClick={() => scrollTo('contact')} className="btn-outline px-8 py-4 rounded-xl font-semibold relative z-10 group">
                  <span className="flex items-center gap-2">
                    Contact Me
                    <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>

            </div>

            {/* right – enhanced profile */}
            <div className="relative flex items-center justify-center" style={{ animation: 'rotateIn 1s .4s cubic-bezier(.22,.68,0,1.2) both' }}>
              {/* gradient border shell */}
              <div className="absolute rounded-2xl" style={{ inset: '0', background: 'linear-gradient(135deg,#06b6d4,#14b8a6,#fb923c,#06b6d4)', backgroundSize: '300% 300%', animation: 'gradientShift 4s ease infinite', padding: '4px', zIndex: 0, width: '100%', height: '100%' }}>
                <div className="w-full h-full rounded-2xl" style={{ background: '#0f172a' }} />
              </div>
              {/* multiple pulse rings */}
              <div className="absolute rounded-2xl" style={{ inset: '2px', border: '2px solid rgba(6,182,212,0.4)', animation: 'ringPulse 3s ease-out infinite', zIndex: 1 }} />
              <div className="absolute rounded-2xl" style={{ inset: '2px', border: '2px solid rgba(20,184,166,0.4)', animation: 'ringPulse 3s ease-out infinite 1s', zIndex: 1 }} />
              {/* image */}
              <div className="image-wrapper relative z-10 w-72 h-72 rounded-2xl overflow-hidden" style={{ boxShadow: '0 12px 60px rgba(6,182,212,0.4)' }}>
                <img 
                  src="./farhan.png" 
                  alt="Farhan Tolkar" 
                  className="w-full h-full object-cover transition-all duration-500" 
                  style={{ filter: 'brightness(1.05) contrast(1.1)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)';
                    e.currentTarget.style.filter = 'brightness(1.15) contrast(1.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'brightness(1.05) contrast(1.1)';
                  }}
                />
              </div>
              {/* enhanced floating badges */}
              <div className="absolute z-20 px-4 py-2 rounded-lg text-xs font-bold text-white flex items-center gap-2" style={{ top: '-16px', right: '-20px', background: 'linear-gradient(135deg,#06b6d4,#14b8a6)', boxShadow: '0 6px 20px rgba(6,182,212,0.5)', animation: 'floatY 3s ease-in-out infinite' }}>
                <Sparkles className="w-4 h-4 animate-spin" style={{ animationDuration: '3s' }} /> 
                <span>Open to work</span>
              </div>
              <div className="absolute z-20 px-4 py-2 rounded-lg text-xs font-bold text-white flex items-center gap-2" style={{ bottom: '-16px', left: '-20px', background: 'linear-gradient(135deg,#fb923c,#f59e0b)', boxShadow: '0 6px 20px rgba(251,146,60,0.5)', animation: 'floatY 3.6s ease-in-out infinite 0.4s' }}>
                <Rocket className="w-4 h-4" style={{ animation: 'iconFloat 2s ease-in-out infinite' }} /> 
                <span>10+ Projects</span>
              </div>
              {/* enhanced bg blobs */}
              <div className="absolute rounded-full opacity-25 blur-3xl anim-blob2" style={{ top: '16px', right: '-24px', width: '240px', height: '240px', background: '#06b6d4' }} />
              <div className="absolute rounded-full opacity-20 blur-3xl anim-blob1" style={{ bottom: '-24px', left: '-24px', width: '200px', height: '200px', background: '#14b8a6' }} />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ STATS SECTION ════════════════ */}
      <section className="py-16 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1a2332 100%)' }}>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map(({ Icon, value, label, color }, i) => (
              <div
                key={label}
                className="stat-card text-center p-6 rounded-2xl"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  opacity: statsVis ? 1 : 0,
                  transform: statsVis ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.8s, transform 0.8s',
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center floating-element" style={{ background: `${color}20`, animationDelay: `${i * 0.2}s` }}>
                  <Icon className="w-8 h-8" style={{ color }} />
                </div>
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: "'Syne',sans-serif" }}>{value}</div>
                <div className="text-sm" style={{ color: '#94a3b8' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ ABOUT ════════════════ */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* heading */}
          <div ref={aboutRef} className={`text-center mb-16 reveal reveal-up ${aboutVis ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Passionate developer with a keen eye for design and a love for creating exceptional digital experiences</p>
          </div>

          {/* 3 cards */}
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16">
            {ABOUT_CARDS.map(({ Icon, title, desc, accent }, i) => (
              <div
                key={title}
                className="card-hover p-8 bg-white rounded-2xl border border-gray-100"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  opacity: cardsVis ? 1 : 0,
                  transform: cardsVis ? 'translateY(0)' : 'translateY(48px)',
                  transitionProperty: 'opacity, transform, box-shadow',
                  transitionDuration: '.8s, .8s, .5s',
                  transitionTimingFunction: 'cubic-bezier(.22,.68,0,1.2), cubic-bezier(.22,.68,0,1.2), ease',
                  transitionDelay: cardsVis ? `${i * 150}ms` : '0ms',
                }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 floating-element" style={{ background: `${accent}15`, animationDelay: `${i * 0.3}s` }}>
                  <Icon className="w-7 h-7" style={{ color: accent }} />
                </div>
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* enhanced journey banner */}
          <div ref={journeyRef} className={`reveal reveal-up ${journeyVis ? 'visible' : ''}`}>
            <div className="rounded-2xl p-10 md:p-14 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c1220 0%,#0f172a 45%,#1a2332 100%)' }}>
              <div className="dot-grid" style={{ opacity: 0.6 }} />
              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-4xl font-bold mb-6 gradient-text" style={{ fontFamily: "'Syne',sans-serif" }}>My Journey</h3>
                  <p className="leading-relaxed mb-4 text-lg" style={{ color: '#7dd3fc' }}>
                    With over 6 months of hands-on experience, I&apos;ve worked with startups and enterprises to bring digital visions to life.
                  </p>
                  <p className="leading-relaxed" style={{ color: '#94a3b8' }}>
                    I specialise in modern technologies like React, Node.js, HTML, Tailwind CSS and JavaScript. When I&apos;m not coding, I contribute to open source and write technical articles.
                  </p>
                  <div className="mt-6 flex gap-4">
                    <button className="flex items-center gap-2 text-cyan-300 hover:text-white transition-all group">
                      <Zap className="w-5 h-5 group-hover:animate-pulse" />
                      <span className="text-sm font-medium">Learn More</span>
                    </button>
                  </div>
                </div>
                <div className="space-y-4">
                  {JOURNEY_ITEMS.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 p-4 rounded-xl hover-lift"
                      style={{
                        background: 'rgba(6,182,212,0.08)',
                        border: '1px solid rgba(6,182,212,0.2)',
                        color: '#94a3b8',
                        opacity: journeyVis ? 1 : 0,
                        transform: journeyVis ? 'translateX(0)' : 'translateX(30px)',
                        transition: 'all 0.7s',
                        transitionDelay: `${i * 120}ms`,
                      }}
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(6,182,212,0.25)' }}>
                        <Check className="w-5 h-5" style={{ color: '#67e8f9' }} />
                      </div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ PROJECTS ════════════════ */}
      <section id="projects" className="py-24 px-6" style={{ background: 'linear-gradient(180deg,#f8fafc 0%,#f1f5f9 100%)' }}>
        <div className="container mx-auto max-w-7xl">
          <div ref={projRef} className={`text-center mb-16 reveal reveal-up ${projVis ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">A showcase of my recent work and successful collaborations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className="project-card group bg-white rounded-2xl overflow-hidden border border-gray-100"
                style={{
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  opacity: projVis ? 1 : 0,
                  transform: projVis ? 'translateY(0)' : 'translateY(50px)',
                  transitionProperty: 'opacity, transform, box-shadow',
                  transitionDuration: '.8s, .8s, .5s',
                  transitionTimingFunction: 'cubic-bezier(.22,.68,0,1.2), cubic-bezier(.22,.68,0,1.2), ease',
                  transitionDelay: `${i * 120}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 24px 60px rgba(6,182,212,0.2)';
                  e.currentTarget.style.transform = 'translateY(-12px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-115 transition-all duration-700" />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold" style={{ background: 'rgba(6,182,212,0.9)', color: 'white' }}>
                    {project.category}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500" style={{ background: 'linear-gradient(to top,rgba(12,18,32,0.95),rgba(12,18,32,0.5))' }}>
                    <button className="proj-btn p-4 rounded-xl" title="View Project">
                      <Eye className="w-6 h-6" />
                    </button>
                    <button className="proj-btn p-4 rounded-xl" title="Open Live">
                      <ExternalLink className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-600 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs font-medium hover-lift"
                        style={{ background: 'linear-gradient(135deg,#ecfdf5,#cffafe)', color: '#0891b2' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="btn-primary px-10 py-4 text-white rounded-xl font-semibold flex items-center gap-2 mx-auto group">
              View All Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* ════════════════ SKILLS ════════════════ */}
      <section id="skills" className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* heading */}
          <div
            className="text-center mb-16"
            style={{
              opacity: skillsVis ? 1 : 0,
              transform: skillsVis ? 'translateY(0)' : 'translateY(48px)',
              transition: 'all 0.8s',
            }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4" style={{ fontFamily: "'Syne',sans-serif" }}>
              Skills &amp; <span className="gradient-text">Expertise</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Constantly learning and adapting to the latest technologies</p>
          </div>

          {/* skill bars */}
          <div ref={skillsRef} className="grid md:grid-cols-2 gap-6 mb-16">
            {SKILLS.map((skill, i) => (
              <div
                key={i}
                className="skill-card p-6 bg-white rounded-xl border border-gray-100"
                style={{
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                  opacity: skillsVis ? 1 : 0,
                  transform: skillsVis ? 'translateY(0)' : 'translateY(32px)',
                  transition: 'all 0.7s',
                  transitionDelay: `${i * 100}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 12px 32px ${skill.color}25`;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="floating-element" style={{ color: skill.color, animationDelay: `${i * 0.2}s` }}>
                      <skill.Icon className="w-6 h-6" />
                    </div>
                    <span className="font-semibold text-lg">{skill.name}</span>
                  </div>
                  <span className="text-sm font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full relative"
                    style={{
                      width: skillsVis ? `${skill.level}%` : '0%',
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}cc)`,
                      transition: 'width 1.2s cubic-bezier(.22,.68,0,1.2)',
                      transitionDelay: `${i * 100}ms`,
                      boxShadow: `0 0 10px ${skill.color}40`,
                    }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 2s linear infinite',
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* feature cards */}
          <div ref={featsRef} className="grid md:grid-cols-3 gap-8">
            {FEATURE_CARDS.map(({ emoji, title, desc }, i) => (
              <div
                key={title}
                className="card-hover text-center p-10 rounded-2xl border border-gray-100"
                style={{
                  background: 'linear-gradient(135deg,#f0fdff,#fff)',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                  opacity: featsVis ? 1 : 0,
                  transform: featsVis ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s',
                  transitionDelay: `${i * 150}ms`,
                }}
              >
                <div className="text-5xl mb-4 floating-element" style={{ animationDelay: `${i * 0.3}s` }}>{emoji}</div>
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ════════════════ CONTACT ════════════════ */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0c1220 0%,#0f172a 40%,#1a2332 100%)' }}>
        <div className="dot-grid" style={{ opacity: 0.5 }} />
        <div className="absolute rounded-full blur-3xl anim-blob2" style={{ top: '0', right: '0', width: '450px', height: '450px', opacity: '0.15', background: '#14b8a6' }} />
        <div className="absolute rounded-full blur-3xl anim-blob1" style={{ bottom: '0', left: '0', width: '380px', height: '380px', opacity: '0.12', background: '#06b6d4' }} />

        <div ref={contactRef} className="container mx-auto max-w-4xl relative z-10">
          <div className={`text-center mb-16 reveal reveal-up ${contactVis ? 'visible' : ''}`}>
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: "'Syne',sans-serif" }}>
              Let&apos;s Work Together
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#7dd3fc' }}>
              Have a project in mind? I&apos;d love to hear about it and help bring your vision to life.
            </p>
          </div>

          <div
            style={{
              opacity: contactVis ? 1 : 0,
              transform: contactVis ? 'translateY(0)' : 'translateY(48px)',
              transition: 'all 0.8s',
              transitionDelay: '200ms',
            }}
          >
            <div className="rounded-2xl p-10 md:p-12" style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.15)' }}>
              {/* info row - FIXED VERSION */}
              <div className="grid md:grid-cols-3 gap-8 mb-10">
                {CONTACT_INFO.map(({ Icon, label, value }, i) => (
                  <div
                    key={label}
                    className="hover-lift flex items-center gap-4 p-4 rounded-xl"
                    style={{
                      background: 'rgba(6,182,212,0.08)',
                      border: '1px solid rgba(6,182,212,0.2)',
                      opacity: contactVis ? 1 : 0,
                      transform: contactVis ? 'translateY(0)' : 'translateY(24px)',
                      transition: 'all 0.7s',
                      transitionDelay: `${300 + i * 150}ms`,
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 floating-element" style={{ background: 'rgba(6,182,212,0.2)', animationDelay: `${i * 0.3}s` }}>
                      <Icon className="w-6 h-6" style={{ color: '#67e8f9' }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs uppercase tracking-wider mb-1" style={{ color: '#7dd3fc' }}>{label}</div>
                      <div className="text-white font-medium text-sm break-all">{value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* social pills */}
              <div className="pt-10 flex flex-wrap justify-center gap-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                {SOCIAL_LINKS.map(({ href, Icon, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="social-pill flex items-center gap-3 px-6 py-3 rounded-lg">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{label}</span>
                  </a>
                ))}
              </div>

              {/* CTA button */}
              <div className="text-center mt-10">
                <button className="btn-primary px-12 py-5 text-white rounded-xl font-semibold flex items-center gap-3 mx-auto group text-lg">
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FOOTER ════════════════ */}
      <footer className="py-8 px-6" style={{ background: '#080e1a', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold gradient-text" style={{ fontFamily: "'Syne',sans-serif" }}>FT</span>
              <span className="text-gray-600 text-sm">© {new Date().getFullYear()} Farhan Tolkar. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-8">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollTo(item.toLowerCase())} className="footer-link text-sm font-medium">
                  {item}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ href, Icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="nav-icon">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center mt-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p className="text-gray-600 text-sm">
              Built with <span className="text-red-400">❤</span> using React & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}