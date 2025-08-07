'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-white">
      {/* Center the card in the viewport minus the 64 px header */}
      <div className="flex items-center justify-center min-h-[calc(100vh-64px)] px-6">
        {/* 80 px breathing room top & bottom (160 px total) */}
        <div className="w-full max-w-[1600px] h-[calc(100vh-64px-64px)] flex items-center">
          <div className="relative bg-black rounded-2xl overflow-hidden w-full h-full">
            
            {/* Video background */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="/videos/background1.mp4" type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-center p-12 md:p-16 lg:p-20">
              <div className="flex flex-col items-center justify-center flex-1 space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white leading-tight text-center">
                  Strategy to Scale.
                </h1>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-5xl text-center">
                We build new ventures and modernize existing ones—aligning strategy, capital, tech, and brand under one roof. From zero to scale or reinvention, we deliver full-stack execution without handovers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                      <a href="#contact-section" className="group bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-lg px-8 py-3 flex items-center gap-3 hover:bg-white/30 hover:cursor-pointer transition-all duration-300 border border-white/30">
                      Book a Call
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
                                      <a href="#cases-section" className="group bg-white/10 backdrop-blur-sm text-white text-lg font-medium rounded-lg px-8 py-3 flex items-center gap-3 hover:bg-white/30 hover:cursor-pointer transition-all duration-300 border border-white/30">
                      Our Projects
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
          </div>
        </div>
      </div>
    </section>
  );
}