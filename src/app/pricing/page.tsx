'use client';

import React from 'react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <section className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 font-inter">
      <div className="max-w-[1240px] mx-auto w-full">
        <div className="relative rounded-[3rem] overflow-hidden w-full" style={{ minHeight: 420 }}>
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
            style={{ objectPosition: 'center', objectFit: 'cover', transform: 'scale(2)' }}
          >
            <source src="/videos/background1.mp4" type="video/mp4" />
          </video>
          {/* Black overlay for text contrast */}
          <div className="absolute inset-0 bg-black/30 z-0" />
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20" style={{ minHeight: 420 }}>
            <h2 className="text-white text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Pricing
            </h2>
            <p className="text-md text-white mb-10 max-w-2xl mx-auto">
              Our pricing plans are coming soon. Contact us for more info.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/#contact-section" className="group bg-black text-white text-lg font-medium rounded-full px-8 py-3 flex items-center gap-3 hover:bg-gray-900 transition-all duration-300">
                Contact us
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 