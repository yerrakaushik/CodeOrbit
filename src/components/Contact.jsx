import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    localStorage.setItem('contactSubmitted', 'true');
  };

  return (
    <section ref={ref} id="contact" className="bg-[#080808] w-full min-h-screen relative overflow-hidden flex items-center justify-center pt-32 pb-24 border-t border-white/5">
      {/* Huge Background Text */}
      <motion.div 
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-20 md:pt-12 opacity-50"
      >
        <h1 
          className="text-[20vw] leading-[0.75] font-black text-[#111] uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6">
        <div 
          data-aos="fade-up"
          className="bg-[#111]/80 backdrop-blur-xl border border-white/10 rounded-[40px] md:rounded-[50px] w-full p-8 md:p-16 text-white flex flex-col gap-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle gradient orb behind the form */}
          <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-[#ff2a2a]/20 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 relative z-10">
            <div>
              <div className="text-[#ff2a2a] text-sm font-bold tracking-[0.2em] mb-4 uppercase">
                Let's Talk
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">Ready to build?</h2>
            </div>
          </div>

          {isSubmitted ? (
            <div className="text-white text-3xl md:text-5xl font-black py-20 text-center text-[#ff2a2a]">
              Message sent! <br/> <span className="text-white">We'll get back to you within 24 hours.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full relative z-10">
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#ff2a2a] transition-colors placeholder-gray-600 font-medium"
                    placeholder="John"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#ff2a2a] transition-colors placeholder-gray-600 font-medium"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full bg-black/50 border border-white/10 rounded-full px-6 py-4 text-white focus:outline-none focus:border-[#ff2a2a] transition-colors placeholder-gray-600 font-medium"
                  placeholder="john@example.com"
                />
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-4">Message</label>
                <textarea 
                  id="message" 
                  required
                  placeholder="Tell us about your project..." 
                  className="w-full min-h-[160px] bg-black/50 border border-white/10 rounded-[30px] px-6 py-5 text-white focus:outline-none focus:border-[#ff2a2a] transition-colors placeholder-gray-600 font-medium resize-none"
                ></textarea>
              </div>

              {/* Bottom Section */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mt-4">
                <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                  <input 
                    type="checkbox" 
                    id="permission" 
                    required
                    className="w-5 h-5 rounded border-white/20 bg-black text-[#ff2a2a] focus:ring-[#ff2a2a] cursor-pointer" 
                    style={{ accentColor: "#ff2a2a" }}
                  />
                  <label htmlFor="permission" className="cursor-pointer">
                    I agree to the privacy policy.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="px-10 py-4 rounded-full bg-[#ff2a2a] text-white font-black uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto shadow-[0_0_20px_rgba(255,42,42,0.3)] hover:shadow-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;
