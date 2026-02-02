import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Progress bar
      const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(progress);

      // Scroll to top button
      setShowScrollTop(window.scrollY > 500);

      // Navbar shadow
      setNavbarScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleMobileMenu = () => {
    alert('Mobile menu - implement as needed');
  };

  return (
    <div className="pattern-bg">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #ffffff;
          color: #1a1a2e;
        }

        .font-display {
          font-family: 'Playfair Display', serif;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Enhanced Light Gradient Background */
        .light-gradient-bg {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          position: relative;
          overflow: hidden;
        }

        .light-gradient-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(102, 126, 234, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(240, 147, 251, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(118, 75, 162, 0.2) 0%, transparent 50%);
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        /* Advanced Pattern Background */
        .pattern-bg {
          background-color: #ffffff;
          background-image: 
            radial-gradient(circle at 25px 25px, rgba(102, 126, 234, 0.05) 2%, transparent 0%),
            radial-gradient(circle at 75px 75px, rgba(118, 75, 162, 0.05) 2%, transparent 0%);
          background-size: 100px 100px;
          position: relative;
        }

        .pattern-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(102, 126, 234, 0.02) 100%);
          pointer-events: none;
        }

        /* Animated Gradient Text */
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientFlow 6s ease infinite;
        }

        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Enhanced Reveal Animation */
        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
            filter: blur(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        .reveal {
          opacity: 0;
          animation: revealUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        /* Enhanced Card with Gradient Border */
        .card-light {
          background: #ffffff;
          position: relative;
          border-radius: 1rem;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-light::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0.3;
          transition: opacity 0.5s ease;
        }

        .card-light:hover::before {
          opacity: 1;
        }

        .card-light:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 
            0 20px 60px rgba(102, 126, 234, 0.3),
            0 0 40px rgba(240, 147, 251, 0.2);
        }

        /* Gradient Button with Animation */
        .btn-primary-light {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          color: white;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          animation: gradientFlow 6s ease infinite;
        }

        .btn-primary-light::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s ease;
        }

        .btn-primary-light:hover::before {
          left: 100%;
        }

        .btn-primary-light:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 
            0 15px 40px rgba(102, 126, 234, 0.5),
            0 0 30px rgba(240, 147, 251, 0.3);
        }

        .btn-primary-light:active {
          transform: translateY(-1px) scale(1.02);
        }

        /* Gradient Outline Button */
        .btn-outline-light {
          position: relative;
          background: white;
          color: #667eea;
          transition: all 0.4s ease;
          overflow: hidden;
        }

        .btn-outline-light::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          background-size: 200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: gradientFlow 6s ease infinite;
        }

        .btn-outline-light::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
        }

        .btn-outline-light:hover::after {
          opacity: 1;
        }

        .btn-outline-light:hover {
          color: white;
          transform: translateY(-3px);
          box-shadow: 0 15px 35px rgba(102, 126, 234, 0.3);
        }

        /* Animated Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
          background-size: 200% 100%;
          z-index: 9999;
          transition: width 0.1s ease;
          animation: gradientSlide 3s linear infinite;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }

        @keyframes gradientSlide {
          0% { background-position: 0% 0%; }
          100% { background-position: 200% 0%; }
        }

        /* Enhanced Project Card Overlay */
        .project-overlay {
          background: linear-gradient(to top, 
            rgba(102, 126, 234, 0.98) 0%, 
            rgba(118, 75, 162, 0.95) 50%,
            rgba(240, 147, 251, 0.9) 100%);
          opacity: 0;
          transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-content {
          transform: translateY(30px);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-content {
          transform: translateY(0);
        }

        /* Gradient Border Image */
        .gradient-border-image {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
        }

        .gradient-border-image::before {
          content: '';
          position: absolute;
          inset: -3px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb, #667eea);
          background-size: 300% 300%;
          border-radius: 1.5rem;
          z-index: -1;
          animation: borderGlow 4s ease infinite;
        }

        @keyframes borderGlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Floating Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-2deg); }
        }

        .float {
          animation: float 6s ease-in-out infinite;
        }

        /* Service Icon with Gradient */
        .service-icon {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .service-icon::before {
          content: '';
          position: absolute;
          inset: -5px;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          border-radius: inherit;
          opacity: 0;
          filter: blur(20px);
          transition: opacity 0.5s ease;
          z-index: -1;
        }

        .service-card:hover .service-icon {
          transform: scale(1.15) rotate(5deg);
        }

        .service-card:hover .service-icon::before {
          opacity: 0.7;
        }

        /* Enhanced Skill Badge */
        .skill-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.6rem 1.2rem;
          background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
          border-radius: 9999px;
          font-size: 0.875rem;
          font-weight: 600;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .skill-badge::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #667eea, #764ba2, #f093fb);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .skill-badge span {
          position: relative;
          z-index: 1;
          color: #667eea;
          transition: color 0.4s ease;
        }

        .skill-badge:hover::before {
          opacity: 1;
        }

        .skill-badge:hover span {
          color: white;
        }

        .skill-badge:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        /* Scroll Indicator */
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-15px); }
          60% { transform: translateY(-8px); }
        }

        .scroll-indicator {
          animation: bounce 2s infinite;
          filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.5));
        }

        /* Enhanced Navbar */
        .navbar-light {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(102, 126, 234, 0.1);
          transition: all 0.3s ease;
        }

        .navbar-light.scrolled {
          box-shadow: 
            0 4px 30px rgba(102, 126, 234, 0.15),
            0 0 20px rgba(240, 147, 251, 0.1);
        }

        /* Stats Animation */
        @keyframes countUp {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.8);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }

        .stat-number {
          animation: countUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        /* Image Hover with Gradient Overlay */
        .image-hover {
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .image-hover::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(240, 147, 251, 0.2));
          opacity: 0;
          transition: opacity 0.6s ease;
        }

        .image-hover:hover {
          transform: scale(1.08);
        }

        .image-hover:hover::after {
          opacity: 1;
        }

        /* Section Title with Animated Underline */
        .section-title {
          position: relative;
          display: inline-block;
          padding-bottom: 1rem;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 5px;
          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
          background-size: 200% 100%;
          border-radius: 3px;
          animation: gradientSlide 3s linear infinite;
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.5);
        }

        /* Decorative Blob */
        .blob {
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          animation: blobMorph 8s ease-in-out infinite;
        }

        @keyframes blobMorph {
          0%, 100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          25% { border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%; }
          50% { border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%; }
          75% { border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%; }
        }

        /* Pulse Effect */
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.1); opacity: 0.8; }
        }

        .pulse-ring {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Grid Animation */
        .grid-animate > * {
          opacity: 0;
          animation: gridItemFade 0.6s ease forwards;
        }

        @keyframes gridItemFade {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .grid-animate > *:nth-child(1) { animation-delay: 0.1s; }
        .grid-animate > *:nth-child(2) { animation-delay: 0.2s; }
        .grid-animate > *:nth-child(3) { animation-delay: 0.3s; }
        .grid-animate > *:nth-child(4) { animation-delay: 0.4s; }
        .grid-animate > *:nth-child(5) { animation-delay: 0.5s; }
        .grid-animate > *:nth-child(6) { animation-delay: 0.6s; }

        /* Shimmer Effect */
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        /* Enhanced Link Underline */
        .nav-link {
          position: relative;
          overflow: hidden;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #667eea, #764ba2, #f093fb);
          transform: translateX(-100%);
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-link:hover::after {
          transform: translateX(0);
        }
      `}</style>

      {/* Progress Bar */}
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 navbar-light ${navbarScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="#" className="text-2xl font-bold gradient-text hover:scale-110 transition-transform font-display">
              FT
            </a>

            <nav className="hidden md:flex gap-8 font-medium text-sm">
              <a href="#intro" className="nav-link text-gray-700 hover:text-gray-900 transition-colors">
                Home
              </a>
              <a href="#about" className="nav-link text-gray-700 hover:text-gray-900 transition-colors">
                About
              </a>
              <a href="#projects" className="nav-link text-gray-700 hover:text-gray-900 transition-colors">
                Projects
              </a>
              <a href="#services" className="nav-link text-gray-700 hover:text-gray-900 transition-colors">
                Services
              </a>
              <a href="#contact" className="nav-link text-gray-700 hover:text-gray-900 transition-colors">
                Contact
              </a>
            </nav>

            <a href="#contact" className="hidden md:block btn-primary-light px-6 py-2.5 rounded-full text-sm font-semibold">
              Let's Talk
            </a>

            <button className="md:hidden text-gray-700" onClick={handleMobileMenu}>
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="intro" className="light-gradient-bg min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          
          <div className="reveal">
            <div className="inline-block mb-6 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full border-2 border-white/50 shadow-lg">
              <span className="text-gray-700 text-sm font-semibold">👋 Welcome to my portfolio</span>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 reveal delay-100">
            <span className="text-white drop-shadow-2xl">Farhan</span><br/>
            <span className="text-white drop-shadow-2xl">Tolkar</span>
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-4 font-bold reveal delay-200 drop-shadow-lg">
            Creative Designer & Developer
          </p>

          <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed reveal delay-300 drop-shadow">
            Crafting digital experiences that blend beautiful design with powerful functionality. 
            Specialized in creating responsive web applications that users love.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal delay-400">
            <a href="#projects" className="btn-primary-light px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-2xl">
              View My Work
              <i className="fas fa-arrow-right"></i>
            </a>

            <a href="#contact" className="btn-outline-light px-8 py-4 rounded-full font-semibold shadow-2xl">
              Get In Touch
            </a>
          </div>

          <div className="mt-20 scroll-indicator reveal delay-500">
            <i className="fas fa-chevron-down text-white text-2xl"></i>
          </div>
        </div>

        {/* Enhanced Decorative Elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-white/20 blob filter blur-3xl opacity-50 float"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-white/20 blob filter blur-3xl opacity-50 float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 blob filter blur-3xl opacity-30 float" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-100/50 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-100/50 to-transparent blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column - Image */}
            <div className="reveal">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-3xl transform rotate-3 blur-sm"></div>
                <div className="gradient-border-image relative">
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop" 
                         alt="Farhan Tolkar"
                         className="w-full h-[600px] object-cover image-hover" />
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border-2 border-transparent"
                     style={{ background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #667eea, #764ba2) border-box' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full pulse-ring"></div>
                    <span className="text-sm font-bold text-gray-900">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="reveal delay-200">
              <h2 className="text-4xl lg:text-5xl font-display font-bold mb-6 section-title text-gray-900">
                About Me
              </h2>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a passionate web developer and designer with over 6 Months of experience in creating 
                stunning digital experiences. My expertise lies in building responsive, user-friendly 
                applications that not only look great but also deliver exceptional performance.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                I specialize in modern web technologies including HTML, CSS, Tailwind CSS, JavaScript, React combined 
                with a strong eye for UI/UX design. Every project is an opportunity to push boundaries 
                and create something remarkable.
              </p>

              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">Core Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['HTML', 'WordPress', 'Tailwind CSS', 'UI/UX Design', 'Figma', 'C Programming'].map((skill) => (
                    <div key={skill} className="skill-badge"><span>{skill}</span></div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="stat-number delay-100 text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="text-3xl font-bold gradient-text">7+</div>
                  <div className="text-sm text-gray-600 mt-1 font-semibold">Projects</div>
                </div>
                <div className="stat-number delay-200 text-center p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50">
                  <div className="text-3xl font-bold gradient-text">6M</div>
                  <div className="text-sm text-gray-600 mt-1 font-semibold">Experience</div>
                </div>
                <div className="stat-number delay-300 text-center p-4 rounded-xl bg-gradient-to-br from-pink-50 to-blue-50">
                  <div className="text-3xl font-bold gradient-text">100%</div>
                  <div className="text-sm text-gray-600 mt-1 font-semibold">Satisfaction</div>
                </div>
                <div className="stat-number delay-400 text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="text-3xl font-bold gradient-text">4+</div>
                  <div className="text-sm text-gray-600 mt-1 font-semibold">Awards</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-purple-50/30 to-blue-50/30 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-200/30 blob filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-blue-200/30 blob filter blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 section-title text-gray-900">
              Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work spanning web development, UI/UX design, and creative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-animate">

            {/* Project Cards */}
            {[
              {
                title: 'Zomato App Clone',
                category: 'UI/UX',
                description: 'UI/UX design focused on clean layouts and smooth user flow',
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
              },
              {
                title: 'Snapdeal Website Clone',
                category: 'UI/UX',
                description: 'UI/UX design focused on clean layouts and smooth user flow',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
              },
              {
                title: 'GOZOO Website Clone',
                category: 'UI/UX',
                description: 'UI/UX design focused on clean layouts and smooth user flow',
                image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop'
              },
              {
                title: 'Travels Website Clone',
                category: 'UI/UX',
                description: 'UI/UX design focused on clean layouts and smooth user flow',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
              },
              {
                title: 'RedBus Clone',
                category: 'HTML/CSS',
                description: 'Booking seats, Travels Adventure Booking',
                image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
                tags: ['HTML', 'CSS']
              },
              {
                title: 'Zara Website Clone',
                category: 'UI/UX',
                description: 'Branded Clothes for Mens, Womens, Kids',
                image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop',
                tags: ['Laravel', 'MySQL', 'Vue.js']
              }
            ].map((project, index) => (
              <div key={index} className="project-card group relative rounded-2xl overflow-hidden card-light cursor-pointer">
                <img src={project.image} 
                     alt={project.title}
                     className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
                
                <div className="project-overlay absolute inset-0 flex flex-col justify-end p-8">
                  <div className="project-content text-white">
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 opacity-90 flex items-center gap-2">
                      <i className={`fas fa-${project.category === 'HTML/CSS' ? 'code' : 'paint-brush'}`}></i> {project.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/90 mb-4 text-sm">{project.description}</p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">{tag}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-100/40 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-100/40 to-transparent blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 section-title text-gray-900">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive services tailored to bring your digital vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-animate">

            {/* Service Cards */}
            {[
              {
                icon: 'code',
                title: 'Web Development',
                description: 'Building responsive, performant web applications using modern frameworks and best practices for optimal user experience.',
                tags: ['HTML', 'Tailwind CSS', 'JavaScript'],
                gradient: 'from-blue-500 via-blue-600 to-purple-600',
                tagGradient: 'from-blue-50 to-purple-50',
                tagColor: 'text-blue-700',
                hoverColor: 'hover:text-blue-600'
              },
              {
                icon: 'palette',
                title: 'UI/UX Design',
                description: 'Creating beautiful, intuitive interfaces that prioritize user experience and drive engagement through thoughtful design.',
                tags: ['Figma', 'Canva'],
                gradient: 'from-purple-500 via-purple-600 to-pink-600',
                tagGradient: 'from-purple-50 to-pink-50',
                tagColor: 'text-purple-700',
                hoverColor: 'hover:text-purple-600'
              },
              {
                icon: 'mobile-alt',
                title: 'WordPress',
                description: 'Using Drag-and-Drop making website, smooth animations, and intuitive interfaces.',
                tags: ['Websites/Blogs'],
                gradient: 'from-green-500 via-green-600 to-teal-600',
                tagGradient: 'from-green-50 to-teal-50',
                tagColor: 'text-green-700',
                hoverColor: 'hover:text-green-600'
              }
            ].map((service, index) => (
              <div key={index} className="service-card card-light rounded-2xl p-8 cursor-pointer group">
                <div className={`service-icon w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 text-2xl shadow-xl`}>
                  <i className={`fas fa-${service.icon}`}></i>
                </div>
                <h3 className={`text-xl font-bold mb-3 text-gray-900 ${service.hoverColor} transition-colors`}>{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className={`text-xs px-3 py-1.5 bg-gradient-to-r ${service.tagGradient} ${service.tagColor} rounded-full border border-${service.tagColor.split('-')[1]}-100 font-semibold`}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 lg:py-32 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200/30 blob filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-200/30 blob filter blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4 section-title text-gray-900">
            Let's Work Together
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'm always open to discussing new opportunities and creative collaborations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* Contact Cards */}
            {[
              {
                icon: 'phone',
                title: 'Phone',
                description: 'Give me a call',
                contact: '+1 (234) 567-890',
                href: 'tel:+1234567890',
                gradient: 'from-green-500 via-green-600 to-emerald-600',
                hoverColor: 'group-hover:text-green-600'
              },
              {
                icon: 'envelope',
                title: 'Email',
                description: 'Send me an email',
                contact: 'contact@farhantolkar.com',
                href: 'mailto:contact@farhantolkar.com',
                gradient: 'from-red-500 via-pink-600 to-purple-600',
                hoverColor: 'group-hover:text-pink-600'
              },
              {
                icon: 'github',
                iconType: 'fab',
                title: 'GitHub',
                description: 'Check out my open source work',
                contact: '@farhantolkar22-bit',
                href: 'https://github.com/farhantolkar22-bit',
                gradient: 'from-gray-800 via-gray-900 to-black',
                hoverColor: 'group-hover:text-gray-900',
                external: true
              },
              {
                icon: 'linkedin-in',
                iconType: 'fab',
                title: 'LinkedIn',
                description: "Let's connect professionally",
                contact: '@farhan-tolkar',
                href: 'https://linkedin.com/in/farhan-tolkar',
                gradient: 'from-blue-600 via-blue-700 to-blue-800',
                hoverColor: 'group-hover:text-blue-600',
                external: true
              }
            ].map((contact, index) => (
              <a key={index} href={contact.href} 
                 {...(contact.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                 className="group card-light rounded-2xl p-8 text-left">
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${contact.gradient} text-white text-xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-xl`}>
                    <i className={`${contact.iconType || 'fas'} fa-${contact.icon}`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-1 text-gray-900">{contact.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                    <p className="text-sm font-mono text-gray-500">{contact.contact}</p>
                  </div>
                  <i className={`fas fa-arrow-right text-gray-400 ${contact.hoverColor} group-hover:translate-x-1 transition-all`}></i>
                </div>
              </a>
            ))}

          </div>

          {/* CTA */}
          <div className="card-light rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-blue-50/50"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Ready to start a project?</h3>
              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                I'm currently available for freelance work and always interested in hearing about new opportunities.
              </p>
              <a href="mailto:contact@farhantolkar.com" className="btn-primary-light px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 shadow-2xl">
                <i className="fas fa-envelope"></i>
                Send me an email
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t-2 border-transparent relative"
              style={{ borderImage: 'linear-gradient(90deg, #667eea, #764ba2, #f093fb) 1' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold gradient-text font-display mb-2">
                Farhan Tolkar
              </h3>
              <p className="text-sm text-gray-600 font-medium">
                Creative Designer & Developer
              </p>
            </div>

            <div className="flex gap-4">
              <a href="https://github.com/farhantolkar22-bit" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 hover:from-gray-800 hover:to-gray-900 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                <i className="fab fa-github text-lg"></i>
              </a>

              <a href="https://linkedin.com/in/farhan-tolkar" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 hover:from-blue-600 hover:to-blue-700 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg">
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
            </div>
          </div>

          <div className="border-t-2 border-transparent pt-8"
               style={{ borderImage: 'linear-gradient(90deg, transparent, #667eea, transparent) 1' }}>
            <p className="text-center text-sm text-gray-600">
              © 2026 Farhan Tolkar. All rights reserved. Built with passion and precision.
            </p>
          </div>

        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 btn-primary-light rounded-full shadow-2xl z-50 transition-all duration-300 hover:scale-110"
        style={{ 
          opacity: showScrollTop ? 1 : 0,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}>
        <i className="fas fa-arrow-up text-lg"></i>
      </button>
    </div>
  );
};

export default Portfolio;