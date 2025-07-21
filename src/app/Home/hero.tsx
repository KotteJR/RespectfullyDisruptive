'use client';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-white px-6 -mt-16 pt-16">
      {/* Hero Title */}
      <div className="relative mb-14 w-full text-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/background1.mp4" type="video/mp4" />
        </video>
        <h1 className="text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] font-inter font-bold leading-none text-center text-black bg-white mix-blend-screen p-4">
          Strategy to Scale.
        </h1>
      </div>

      {/* Subtitle */}
      <div className="mb-12">
        <p className="text-xl md:text-xl text-gray-700 text-center max-w-5xl leading-relaxed">
        We launch new ventures and modernize established ones—aligning strategy, capital, tech, and brand under one roof. Whether you&apos;re building from scratch or rebuilding to stay relevant, we deliver full-stack execution without the handovers.
        </p>
      </div>

      {/* CTA Button */}
      <div>
        <button
          className="group bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 flex items-center gap-3"
          onClick={() => {
            const el = document.getElementById('contact-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Get in touch
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
        </button>
      </div>
    </section>
  );
}