import React from 'react';


const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container / ID Card */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-gray-800 to-black relative flex flex-col items-center justify-between p-6">
                {/* ID Card Content */}
                <div className="w-full flex justify-between items-start">
                  <div className="text-white text-[10px] font-bold tracking-widest uppercase opacity-50">Code Orbit<br/>Studios</div>
                  <div className="w-6 h-6 border-2 border-[#ff2a2a] rounded-sm transform rotate-45 flex items-center justify-center">
                    <div className="w-2 h-2 bg-[#ff2a2a] rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center w-full my-4">
                  <div className="w-24 h-24 rounded-full bg-[#ff2a2a]/10 border-2 border-[#ff2a2a]/80 flex items-center justify-center shadow-[0_0_30px_rgba(255,42,42,0.2)] mb-6 overflow-hidden relative">
                    {/* Inner styling */}
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,42,42,0.2)_50%,transparent_75%)] bg-[length:200%_200%] animate-pulse"></div>
                    <span className="text-[#ff2a2a] text-4xl font-black tracking-tighter relative z-10">CO</span>
                  </div>
                  <h3 className="text-white font-black text-2xl tracking-tight">ACCESS</h3>
                  <p className="text-[#ff2a2a] font-bold text-xs tracking-[0.3em] uppercase mt-2">Level 05</p>
                </div>

                <div className="w-full flex flex-col gap-3">
                  <div className="w-full flex justify-between gap-1 opacity-50">
                    <div className="h-1 flex-1 bg-white rounded-full"></div>
                    <div className="h-1 w-2 bg-white rounded-full"></div>
                    <div className="h-1 w-8 bg-white rounded-full"></div>
                    <div className="h-1 w-4 bg-white rounded-full"></div>
                    <div className="h-1 w-2 bg-white rounded-full"></div>
                    <div className="h-1 flex-1 bg-white rounded-full"></div>
                  </div>
                  <div className="flex justify-between items-center w-full opacity-40">
                    <span className="text-white text-[8px] font-mono tracking-widest uppercase">Valid thru: 2099</span>
                    <span className="text-white text-[8px] font-mono tracking-widest">ID: 849-COS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50">
            Hi, we are Code Orbit Studios, a passionate team of AI engineers and full-stack developers based in Hyderabad, India, dedicated to building intelligent systems, modern web applications, and automation pipelines that actually move the needle.
          </p>

          {/* Core Capabilities */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mt-10">
            {[
              "Generative AI", 
              "Full-Stack Web", 
              "Agentic Workflows", 
              "Custom LLMs",
              "Cloud Infrastructure"
            ].map((skill, idx) => (
              <span 
                key={idx}
                data-aos="fade-up" 
                data-aos-delay={300 + (idx * 50)}
                className="px-5 py-2.5 md:px-6 md:py-3 bg-black text-white rounded-full font-bold tracking-wider text-xs md:text-sm hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 cursor-default border border-transparent"
              >
                {skill}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
