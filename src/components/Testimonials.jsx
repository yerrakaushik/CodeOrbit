import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonials = [
  {
    quote: "Code Orbit Studios completely transformed our studio's workflow. The interactive portfolio looks stunning, and the automated WhatsApp client engagement has been a massive game-changer for our business.",
    author: "Ganesh",
    role: "Owner, Sushma Digitals"
  },
  {
    quote: "They built our entire organic mushroom eCommerce platform from scratch. The website is incredibly fast, looks fantastic, and the entire shopping experience is flawlessly engineered.",
    author: "Akhil",
    role: "Founder, Exsola Sciences"
  },
  {
    quote: "We needed a platform with complex product customization options and nationwide delivery tracking. They delivered a perfect, highly-polished solution that our customers absolutely love.",
    author: "Nikhil",
    role: "CEO, ToujoursNot"
  }
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="testimonials" className="bg-white text-gray-900 w-full pt-32 pb-20 px-6 md:px-12 font-sans relative rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-black text-center tracking-tight mb-16">
          <span className="text-gray-900">What clients</span> <br className="md:hidden" />
          <span className="text-[#ff2a2a]"> say</span>
        </h2>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((test, i) => (
            <div 
              key={i} 
              data-aos="fade-up" 
              data-aos-delay={i * 150}
              className="bg-[#f9f9f9] border border-gray-200 rounded-[30px] p-8 sm:p-10 flex flex-col justify-between hover:border-[#ff2a2a]/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div>
                <svg className="w-8 h-8 text-red-500 mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 font-medium text-lg leading-relaxed mb-8">"{test.quote}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center border border-red-200">
                  <span className="text-[#ff2a2a] font-black">{test.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold tracking-wide">{test.author}</h4>
                  <p className="text-[#ff2a2a] text-sm uppercase tracking-widest font-semibold">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
