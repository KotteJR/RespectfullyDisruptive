export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What We Are
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            We&apos;ve led fundraising, strategic advisory, and deal structuring. Each engagement 
            is tailored to match the capital logic investors expect — not just founder vision.
          </p>
        </div>

        {/* Two SVG Tables */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Design SVG Table */}
          <div className="flex justify-start">
            <img 
              src="/trust/studiosphere/design.svg" 
              alt="Sphere Design Services" 
              className="w-auto h-auto [image-rendering:crisp-edges] [shape-rendering:crispEdges] ml-auto" 
            />
          </div>

          {/* Dev SVG Table */}
          <div className="flex justify-start">
            <img 
              src="/trust/adamass/dev.svg" 
              alt="ADAMASS Development Services" 
              className="w-auto h-auto [image-rendering:crisp-edges] [shape-rendering:crispEdges] ml-auto" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
