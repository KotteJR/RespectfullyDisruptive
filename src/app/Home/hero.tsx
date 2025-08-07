'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: '100dvh' }}>
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/background1.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
            Strategy to Scale.
          </h1>
          <p className="text-lg sm:text-xl px-4 md:text-2xl text-gray-200 leading-relaxed mb-8 max-w-4xl mx-auto">
            We build new ventures and modernize existing ones—aligning strategy, capital, tech, and brand under one roof. From zero to scale or reinvention, we deliver full-stack execution without handovers.
          </p>
          <div className="w-full max-w-[500px] mx-auto px-4 grid grid-cols-2 gap-4 sm:flex sm:flex-row sm:gap-4 justify-center mt-6">
            <a 
              href="#contact-section" 
              className="group bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-lg px-8 py-3 w-full sm:w-auto flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              <span className="sm:hidden text-sm">Book a Call</span><span className="hidden sm:inline">Book a Call</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </a>
            <a 
              href="#cases-section" 
              className="group bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-lg px-8 py-3 w-full sm:w-auto flex items-center justify-center gap-3 hover:bg-white/20 transition-all duration-300 border border-white/30"
            >
              <span className="sm:hidden text-sm">Our Projects</span><span className="hidden sm:inline">Our Projects</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}