'use client';

export default function Cases() {
  // Case Studies Data
  const CASE_STUDIES = [
    {
      id: 1,
      title: "Grupo IB 360: Complete Digital Overhaul",
      description: "We revamped Grupo IB 360s online presence, migrating from WordPress to a modern Next.js frontend with Payload CMS. The redesign boosts performance, flexibility, and aligns with their premium position in hospitality and enterprise tech.",
      images: [
        "/cases/grupo/1.png",
        "/cases/grupo/2.png", 
        "/cases/grupo/3.png",
        "/cases/grupo/5.png"
      ],
      keywords: ["Strategy", "Design", "Engineering", "Scale"],
      liveUrl: "#",
      readMoreUrl: "#"
    },
    {
      id: 2,
      title: "Milan Mätkonsult AB – Digital Presence Revamp", 
      description: "We delivered a complete digital presence revamp for Milan Mätkonsult AB, a leader in precision engineering and surveying in Sweden, with a design to reflect their technical credibility and market leadership, with a focus on clean design, SEO, and scalability.",
      images: [
        "/cases/milan/1.png",
        "/cases/milan/2.png",
        "/cases/milan/3.png",
        "/cases/milan/4.png",
        
      ],
      keywords: ["Strategy", "Design", "Engineering", "Scale"],
      liveUrl: "https://milanmatkonsult.se",
      readMoreUrl: "#"
    }
  ];

  // Always show all case studies
  const visibleCaseStudies = CASE_STUDIES;

  return (
    <section id="cases-section" className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header - now stacked: title, then description below */}
        <div className="mb-12 flex flex-col items-center gap-2 w-full">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-center" style={{ color: '#239D68' }}>
            Explore Our Work
          </h2>
          <p className="text-md text-gray-700 w-full md:max-w-[600px] leading-relaxed text-center">
            Discover how we&apos;ve empowered companies to launch, grow, and transform their digital products with innovative strategies, robust technology, and creative solutions tailored for real business impact.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div>
          {visibleCaseStudies.map((caseStudy, idx) => (
            <div key={caseStudy.id} className="flex flex-col items-center w-full">
              <div className="w-full">
                {/* Images */}
                <div>
                  <div className="bg-white rounded-2xl py-3 mb-5">
                    <div className="h-[290px] md:h-[300px] overflow-x-auto overflow-y-hidden scrollbar-hide">
                      <div className="flex h-full w-max gap-6">
                        {caseStudy.images.map((image, index) => (
                          <div key={index} className="flex-shrink-0 w-[90vw] md:w-full max-w-[500px] h-full">
                            <img 
                              src={image} 
                              alt={`${caseStudy.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover rounded-lg border border-gray-200"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full flex flex-col md:flex-row md:items-start md:gap-8">
                  {/* Left: Title + Description */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl md:text-2xl font-bold text-gray-900 mb-4 text-left">{caseStudy.title}</h3>
                    <p className="text-md text-gray-700 leading-relaxed text-justify">
                      {caseStudy.description}
                    </p>
                  </div>
                  {/* Right: Labels + Buttons */}
                  <div className="w-full md:w-1/2 flex flex-col items-start md:items-end mt-6 md:mt-0">
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {caseStudy.keywords.map((keyword, index) => (
                        <span
                          key={index}
                          className="px-3 py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-900 h-7 flex items-center"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-row gap-2 mt-4 md:justify-end">
                      <button 
                        onClick={() => window.open(caseStudy.liveUrl, '_blank')}
                        className="px-4 py-2 bg-gray-800 text-white rounded-lg text-xs font-medium hover:bg-gray-900 hover:cursor-pointer transition-all duration-300 h-7 flex items-center"
                      >
                        Live Site
                      </button>
                      <button 
                        onClick={() => window.open(caseStudy.readMoreUrl, '_blank')}
                        className="px-4 py-2 bg-[#239D68]/95 text-white rounded-lg text-xs font-medium hover:bg-[#239D68]/100 hover:cursor-pointer transition-all duration-300 h-7 flex items-center"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Divider, except after last case */}
              {idx !== visibleCaseStudies.length - 1 && (
                <div className="w-full mx-auto">
                  <div className="h-px bg-gray-100 my-16" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
