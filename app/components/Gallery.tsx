const placeholders = [
  { aspect: "aspect-square", gradient: "linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 50%, #111 100%)", label: "Training Floor" },
  { aspect: "aspect-video", gradient: "linear-gradient(135deg, #111 0%, #1f1f1f 40%, #2a2a2a 100%)", label: "Free Weights Zone" },
  { aspect: "aspect-square", gradient: "linear-gradient(135deg, #222 0%, #1a1a1a 50%, #0f0f0f 100%)", label: "Cardio Area" },
  { aspect: "aspect-video", gradient: "linear-gradient(135deg, #0f0f0f 0%, #222 50%, #1a1a1a 100%)", label: "Strength Machines" },
  { aspect: "aspect-square", gradient: "linear-gradient(135deg, #1a1a1a 0%, #111 50%, #222 100%)", label: "Functional Zone" },
  { aspect: "aspect-video", gradient: "linear-gradient(135deg, #222 0%, #0f0f0f 40%, #1f1f1f 100%)", label: "Coaching Area" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#111111] py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase font-medium">
            The Space
          </span>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Inside{" "}
          <span className="text-[#d4af37]">DRAKON</span>
        </h2>
        <p className="text-[#606060] text-lg max-w-xl mb-16">
          A premium training environment built for focus, intensity, and
          results. Every corner designed with your performance in mind.
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {placeholders.map((item, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden ${item.aspect} cursor-pointer`}
              style={{ background: item.gradient }}
            >
              {/* Subtle inner border */}
              <div className="absolute inset-0 border border-white/5" />

              {/* Grid texture */}
              <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                  backgroundImage:
                    "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Abstract gym shape */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="w-16 h-16 opacity-10 border-2 border-[#d4af37] rotate-45"
                  style={{ transform: "rotate(45deg) scale(2)" }}
                />
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 100%)",
                }}
              />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="bg-black/80 backdrop-blur-sm px-4 py-2 border-l-2 border-[#d4af37]">
                  <p className="text-white text-sm font-medium tracking-wider">
                    {item.label}
                  </p>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#d4af37]/30 group-hover:border-[#d4af37] transition-colors duration-300" />

              {/* Photo placeholder text */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-light rotate-0 text-center px-4">
                  Your gym<br />photos here
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#606060] text-sm">
            Follow us on{" "}
            <a
              href="https://instagram.com"
              className="text-[#d4af37] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @DRAKONFitness
            </a>{" "}
            for daily training inspiration and facility updates.
          </p>
        </div>
      </div>
    </section>
  );
}
