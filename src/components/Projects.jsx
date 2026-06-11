import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    category: 'AI Forensics',
    title: 'ForenSIGHT',
    number: '01',
    link: '#',
    desc: 'Autonomous AI forensics platform for digital evidence analysis, pattern detection, and automated investigation reporting. Powered by state-of-the-art LLMs to drastically reduce manual review times while maintaining chain-of-custody integrity.',
    tags: ['Python', 'LangChain', 'FastAPI', 'React']
  },
  {
    category: 'GenAI · Multi-Agent',
    title: 'AI Research Assistant',
    number: '02',
    link: '#',
    desc: 'Multi-agent research platform utilizing advanced RAG pipelines. It completely automates the literature review process, source validation, and end-to-end report generation with high accuracy and citation tracking.',
    tags: ['RAG', 'LlamaIndex', 'Next.js', 'Supabase']
  },
  {
    category: 'Web + AI Automation',
    title: 'Sushma Digitals Studio',
    number: '03',
    link: '#',
    desc: 'A full-stack modern photography studio website embedded with WhatsApp automation, proactive lead nurturing via n8n workflows, and a Gemini-powered conversational agent for real-time client engagement.',
    tags: ['Next.js', 'Flask', 'n8n', 'Supabase']
  }
];

const Card = ({ project, i, progress, range, targetScale }) => {
  const containerRef = useRef(null);
  
  // The card scales down smoothly as you scroll further down
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={containerRef} className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32">
      <motion.div 
        style={{ scale, top: `calc(${i * 28}px)` }}
        className="relative bg-[#111] border border-white/10 rounded-[40px] sm:rounded-[50px] md:rounded-[60px] p-8 sm:p-10 md:p-14 w-full max-w-5xl mx-auto flex flex-col gap-10 md:gap-14 shadow-[0_0_50px_rgba(255,42,42,0.05)] origin-top hover:border-[#ff2a2a]/30 transition-colors duration-500"
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
