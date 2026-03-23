"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #111111 40%, #1a1a1a 70%, #0f0f0f 100%)",
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      {/* Dragon SVG emblem */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-w-2xl opacity-[0.06] pointer-events-none select-none hidden lg:block">
        <svg viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Abstract dragon/flame emblem */}
          <path
            d="M200 30 L220 80 L240 60 L230 110 L260 90 L240 140 L280 120 L250 170 L300 160 L260 200 L310 210 L260 240 L290 270 L240 260 L250 310 L210 280 L200 340 L190 280 L150 310 L160 260 L110 270 L140 240 L90 210 L140 200 L100 160 L150 170 L120 120 L160 140 L140 90 L170 110 L160 60 L180 80 Z"
            fill="#d4af37"
          />
          <path
            d="M200 70 L215 110 L235 95 L225 135 L255 118 L237 158 L268 145 L245 183 L282 178 L252 210 L284 218 L252 242 L272 265 L238 256 L246 294 L218 270 L200 310 L182 270 L154 294 L162 256 L128 265 L148 242 L116 218 L148 210 L118 178 L155 183 L132 145 L163 158 L145 118 L175 135 L165 95 L185 110 Z"
            fill="#0a0a0a"
          />
          <circle cx="200" cy="200" r="30" fill="#d4af37" opacity="0.6" />
          <circle cx="200" cy="200" r="15" fill="#0a0a0a" />
          {/* Flame wisps */}
          <path d="M200 30 C190 50, 195 70, 200 90 C205 70, 210 50, 200 30Z" fill="#d4af37" opacity="0.8" />
          <path d="M200 310 C190 330, 195 350, 200 370 C205 350, 210 330, 200 310Z" fill="#d4af37" opacity="0.8" />
          <path d="M30 200 C50 190, 70 195, 90 200 C70 205, 50 210, 30 200Z" fill="#d4af37" opacity="0.8" />
          <path d="M310 200 C330 190, 350 195, 370 200 C350 205, 330 210, 310 200Z" fill="#d4af37" opacity="0.8" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-[#d4af37]/30 text-[#d4af37] text-xs tracking-[0.3em] uppercase animate-fade-in opacity-0"
          style={{ animationFillMode: "forwards" }}
        >
          <span className="w-8 h-px bg-[#d4af37]" />
          Elite Training Destination
          <span className="w-8 h-px bg-[#d4af37]" />
        </div>

        {/* Main Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight mb-6 animate-fade-in-up opacity-0"
          style={{
            fontFamily: "var(--font-cinzel), serif",
            animationFillMode: "forwards",
            animationDelay: "0.2s",
          }}
        >
          <span className="text-white">Built in Fire.</span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg, #c9a227, #f0c040, #d4af37, #c9a227)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Refined in Iron.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="text-[#a0a0a0] text-lg sm:text-xl max-w-2xl mx-auto mb-4 font-light leading-relaxed animate-fade-in-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "0.4s" }}
        >
          DRAKON Fitness is where discipline meets destiny. Forge your strongest
          self under the guidance of elite coaches in Geeta Colony&apos;s most
          powerful training environment.
        </p>

        {/* Location */}
        <p
          className="text-[#d4af37]/70 text-sm tracking-[0.2em] uppercase mb-12 animate-fade-in-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "0.5s" }}
        >
          📍 Geeta Colony, Delhi
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "0.6s" }}
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto px-10 py-4 bg-[#d4af37] text-black font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#f0c040] transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
          >
            Join Now
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto px-10 py-4 border border-[#d4af37] text-[#d4af37] font-bold text-sm tracking-[0.2em] uppercase hover:bg-[#d4af37]/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            Book a Visit
          </button>
          <button
            onClick={() => scrollTo("#memberships")}
            className="w-full sm:w-auto px-10 py-4 text-[#a0a0a0] font-medium text-sm tracking-[0.2em] uppercase hover:text-[#d4af37] transition-colors duration-300 underline underline-offset-4"
          >
            View Memberships
          </button>
        </div>

        {/* Stats Row */}
        <div
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-up opacity-0"
          style={{ animationFillMode: "forwards", animationDelay: "0.8s" }}
        >
          {[
            { value: "500+", label: "Members" },
            { value: "15+", label: "Expert Coaches" },
            { value: "20+", label: "Programs" },
            { value: "5+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-black text-[#d4af37] mb-1"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                {stat.value}
              </div>
              <div className="text-[#606060] text-xs tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #0a0a0a)",
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0" style={{ animationFillMode: "forwards", animationDelay: "1.2s" }}>
        <span className="text-[#606060] text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#d4af37] to-transparent" />
      </div>
    </section>
  );
}
