import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/hero.mp4';

const Hero = () => {
  const heroRef = useRef(null);
  const videoRef = useRef(null);
  const hasPlayedIntro = useRef(false);
  const isInView = useRef(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showSoundBadge, setShowSoundBadge] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  useEffect(() => {
    // Show sound badge after 2s
    const badgeTimer = setTimeout(() => {
      setShowSoundBadge(true);
    }, 2000);
    // Hide sound badge after 7s
    const hideTimer = setTimeout(() => {
      setShowSoundBadge(false);
    }, 7000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.current = true;
          if (!hasPlayedIntro.current) {
            if (videoRef.current) {
              videoRef.current.currentTime = 0;
              videoRef.current.play().catch(() => {});
            }
            hasPlayedIntro.current = true;
          } else {
            if (videoRef.current) videoRef.current.play().catch(() => {});
          }
        } else {
          isInView.current = false;
          videoRef.current?.pause();
        }
      },
      { threshold: 0.4 }
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(badgeTimer);
      clearTimeout(hideTimer);
    };
  }, [isMuted]);

  const handleUnmute = () => {
    setIsMuted(false);
    setShowSoundBadge(false);
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  return (
    <section id="home" ref={heroRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        onContextMenu={e => e.preventDefault()}
        style={{ pointerEvents: 'none' }}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col justify-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-[#ff2a2a] text-4xl md:text-6xl font-black mb-4 tracking-tight drop-shadow-lg"
          >
            We are <br /> 
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Code Orbit</span>
            <br /> 
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Studios</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-sm md:text-lg font-semibold mb-8 max-w-md drop-shadow-md"
          >
            I build AI systems, automation pipelines, and modern web applications using React, Python, and Node.js.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a href="#projects" className="inline-block px-4 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-md">
              View My Work
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a href="#contact" className="inline-block px-4 py-2 md:px-6 md:py-3 text-xs md:text-base rounded-full bg-black/40 border border-white text-white font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md">
              Contact Us
            </a>
          </div>
        </div>

      </div>

      {showSoundBadge && (
        <button
          onClick={handleUnmute}
          className="absolute bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md bg-black/30 border border-white/30 text-white text-xs font-bold uppercase tracking-widest hover:bg-black/50 transition-all animate-pulse"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M11 5L6 9H2v6h4l5 4V5z"></path>
          </svg>
          TAP FOR SOUND
        </button>
      )}

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
