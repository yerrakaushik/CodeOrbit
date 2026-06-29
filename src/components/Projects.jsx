import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const projects = [
  {
    category: 'Full-Stack Web App',
    title: 'Sushma Digitals',
    number: '01',
    link: '#',
    desc: 'A comprehensive, full-stack web application built for a photography and videography studio. It serves as an interactive portfolio for wedding films and albums, combined with a custom business admin backend that automates client engagement, such as sending WhatsApp wishes for birthdays and anniversaries.',
    tags: ['Next.js', 'Node.js', 'WhatsApp API', 'PostgreSQL']
  },
  {
    category: 'eCommerce Platform',
    title: 'Exsola Sciences',
    number: '02',
    link: '#',
    desc: 'Built the complete eCommerce shopping market for an organic mushroom startup. The platform features a seamless shopping experience, robust inventory management, and a highly optimized, fast checkout flow designed to drive organic sales.',
    tags: ['React', 'Tailwind CSS', 'Stripe', 'Express']
  },
  {
    category: 'Custom eCommerce',
    title: 'ToujoursNot',
    number: '03',
    link: '#',
    desc: 'A tailored eCommerce platform specializing in custom keychains, bouquets, and bags. It includes advanced product customization interfaces for users and an integrated nationwide delivery tracking system serving customers all over India.',
    tags: ['Next.js', 'PostgreSQL', 'Framer Motion', 'Tailwind']
  }
];

const Card = ({ project, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  
  // The card scales down smoothly as you scroll further down
  const scale = useTransform(progress, range, [1, targetScale]);
  
  const [isStacked, setIsStacked] = useState(false);
  useMotionValueEvent(scale, "change", (latest) => {
    if (latest < 0.99) {
      setIsStacked(true);
    } else {
      setIsStacked(false);
    }
  });
  
  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32">
      <motion.div 
        style={{ scale, top: `calc(${i * 28}px)` }}
        className={`relative bg-[#111] border rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-8 sm:p-10 md:p-14 w-full max-w-5xl mx-auto flex flex-col gap-10 md:gap-14 origin-top hover:border-[#ff2a2a]/30 transition-all duration-500 ${
          isStacked 
            ? 'border-white shadow-[0_0_55px_rgba(255,255,255,0.18)] z-0' 
            : 'border-white/10 shadow-[0_0_50px_rgba(255,42,42,0.05)] z-10'
        }`}
      >
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 w-full">
          <div className="flex items-center gap-6 sm:gap-8">
            <span className="text-5xl md:text-7xl font-black text-white">{project.number}</span>
            <div className="flex flex-col">
              <span className="text-[#ff2a2a] text-sm md:text-base font-bold uppercase tracking-widest mb-1">{project.category}</span>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">{project.title}</h3>
            </div>
          </div>
          
          <a href={project.link} className="rounded-full border border-white/20 text-white font-bold uppercase tracking-widest px-8 py-3 md:px-10 md:py-4 text-xs md:text-sm hover:bg-white hover:text-black transition-all duration-300 shrink-0 shadow-lg">
            Live Project
          </a>
        </div>
        
        {/* Bottom row (text instead of images) */}
        <div className="flex flex-col gap-8 w-full mt-2 bg-black/40 rounded-[30px] p-6 md:p-10 border border-white/5">
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl font-medium">
            {project.desc}
          </p>
          
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="bg-white/10 text-white text-xs md:text-sm font-bold tracking-wider px-5 py-2 rounded-full uppercase">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section id="projects" className="bg-black w-full font-sans relative z-10 pt-32 pb-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-12 text-center relative z-20">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">
          Selected <span className="text-[#ff2a2a]">Projects</span>
        </h2>
      </div>

      <div ref={containerRef} className="relative w-full px-4 sm:px-8 max-w-6xl mx-auto">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - 1 - i) * 0.03;
          const range = [i * 0.33, 1];
          return (
            <Card 
              key={i} 
              i={i} 
              project={project} 
              progress={scrollYProgress} 
              range={range} 
              targetScale={targetScale} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
