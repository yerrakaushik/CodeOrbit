import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
      
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 w-full font-medium border-b border-white/5 pb-10">
        <div className="flex flex-col gap-1">
          <p className="text-[#ff2a2a] font-bold">Code Orbit Studios</p>
          <p className="text-white/50">AI Engineering & Full-Stack Development</p>
        </div>
        <div className="text-white/30 md:text-right">
          Available for freelance opportunities
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[18vw] md:text-[14vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
          code orbit.
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Github</a>
            <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">LinkedIn</a>
            <a href="#" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold">Instagram</a>
          </div>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Code Orbit Studios. All rights reserved. | Built with React & AI
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
        </div>
      </div>
    </footer>
  );
};

export default Footer;
