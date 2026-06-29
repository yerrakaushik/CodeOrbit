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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  // Intersection observer to play/pause video when scrolling in/out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.current = true;
          if (videoRef.current) {
            if (!hasPlayedIntro.current) {
              videoRef.current.currentTime = 0;
              hasPlayedIntro.current = true;
            }
            
            // Try playing unmuted first
            if (isMuted) {
              videoRef.current.muted = false;
              videoRef.current.play()
                .then(() => {
                  setIsMuted(false);
                })
                .catch(() => {
                  // Fallback to muted if blocked
                  if (videoRef.current) {
                    videoRef.current.muted = true;
                    videoRef.current.play().catch(() => {});
                  }
                  setIsMuted(true);
                });
            } else {
              videoRef.current.muted = false;
              videoRef.current.play().catch(() => {});
            }
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
    };
  }, [isMuted]);

  // Unmute automatically on the first user interaction on the page
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
        setIsMuted(false);
      }
      // Remove event listeners after first trigger
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video (Scaled to crop watermark) */}
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        autoPlay
        onContextMenu={e => e.preventDefault()}
        style={{ pointerEvents: 'none', transform: 'scale(1.12)', transformOrigin: 'center' }}
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
