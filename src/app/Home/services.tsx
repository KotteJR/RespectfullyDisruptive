'use client';

import React from 'react';
import { FiTrendingUp, FiPenTool, FiCode, FiServer, FiZap } from 'react-icons/fi';

const SERVICES = [
  {
    icon: <FiTrendingUp className="h-6 w-6 text-[#239D68]" />,
    title: "Digital Strategy & Operational Advisory",
    bullets: [
      "Strategic advisory for digital growth and operational scaling",
      "Business-led guidance for transformation and scalability",
      "UI/UX strategy tailored to optimize digital user journeys",
      "Brand strategy focused on market positioning and recognition"
    ]
  },
  {
    icon: <FiPenTool className="h-6 w-6 text-[#239D68]" />,
    title: "Full-Cycle Design & Creative Direction",
    bullets: [
      "Brand identity and market-differentiated visual systems",
      "Landing page and app interface design",
      "Design systems, UI/UX, and intuitive user flows",
      "Motion design, 3D visuals, and creative direction across touchpoints"
    ]
  },
  {
    icon: <FiCode className="h-6 w-6 text-[#239D68]" />,
    title: "Custom Software Development",
    bullets: [
      "End-to-end software development across platforms and workflows",
      "Full-stack engineering (frontend, backend, and apps)",
      "Backend infrastructure optimized for performance and scalability",
      "System architecture tailored to business needs"
    ]
  },
  {
    icon: <FiServer className="h-6 w-6 text-[#239D68]" />,
    title: "Infrastructure, DevOps & Automation",
    bullets: [
      "Scalable infrastructure engineering and DevOps pipelines",
      "Data integration, automation workflows, and system reliability",
      "Backend systems for high availability and enterprise-grade scaling"
    ]
  },
  {
    icon: <FiZap className="h-6 w-6 text-[#239D68]" />,
    title: "Web & Platform Optimization",
    bullets: [
      "Web design and development focused on engagement and conversion",
      "Cohesive user experiences across digital platforms",
      "Development of digital platforms with seamless brand alignment",
      "Performance-optimized websites built for modern operational demands"
    ]
  }
];

const Services = () => {
  return (
    <section className="bg-white text-gray-900 py-20 font-inter">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 lg:sticky lg:top-25 mt-4 lg:mt-0 max-w-[590px] w-full">
            <span className="inline-block bg-[#E6F4EF] text-[#239D68] px-3 py-1 rounded-full text-sm font-medium">
              ◉ Why RD?
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-[#239D68]">Who We Are</h1>
            <p className="text-md text-justify text-gray-700 max-w-[590px] leading-relaxed">
            Respectfully Disruptive is a hybrid venture uniting strategy, design, and engineering. Backed by Adamass and Sphere, we help companies scale through sharp advisory, standout branding, and high-performance digital products.
            </p>
            {/* Scrolling Labels Row */}
            <div className="relative mt-6 max-w-[650px] w-full overflow-x-hidden">
              {/* Blur effects */}
              <div className="absolute left-0 top-0 w-12 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-12 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
              <div className="w-full">
                <div className="flex items-center gap-5 animate-labels-scroll" style={{ width: 'max-content' }}>
                  {[
                    'Strategy', 'Branding', 'UI/UX', 'Development', 'Infrastructure', 'Automation', 'Conversion',
                    'Strategy', 'Branding', 'UI/UX', 'Development', 'Infrastructure', 'Automation', 'Conversion'
                  ].map(tag => (
                    <span key={tag + Math.random()} className="bg-gray-100 text-gray-900 px-5 py-2 rounded-full text-md inline-block">
                       {tag}
                     </span>
                  ))}
                </div>
              </div>
              <style jsx>{`
                @keyframes labels-scroll {
                  0% { transform: translateX(-50%); }
                  100% { transform: translateX(0%); }
                }
                .animate-labels-scroll {
                  animation: labels-scroll 20s linear infinite;
                }
              `}</style>
            </div>
          </div>

          {/* Right Content: Image + Cards */}
          <div className="flex flex-col items-center w-full max-w-[500px] ml-auto lg:items-end lg:self-end">
            <div className="flex flex-col gap-8 w-full">
              {SERVICES.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  bullets={service.bullets}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, bullets }: { icon: React.ReactNode, title: string, bullets: string[] }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-4">
    <div>{icon}</div>
    <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
    <ul className="space-y-3 mt-2">
      {bullets.map((point, idx) => (
        <li key={idx} className="flex items-start gap-2 text-md text-gray-700">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#239D68]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </div>
);


export default Services; 