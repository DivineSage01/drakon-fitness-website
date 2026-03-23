"use client";

export default function CTABanner() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden bg-[#0f0f0f]">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #111111 30%, #1a0a00 60%, #0a0a0a 100%)",
        }}
      />

      {/* Gold gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Dragon background motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <svg
          viewBox="0 0 500 500"
          className="w-[600px] h-[600px] opacity-[0.035]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="240" stroke="#d4af37" strokeWidth="1" />
          <circle cx="250" cy="250" r="200" stroke="#d4af37" strokeWidth="0.5" />
          <path
            d="M250 50 L265 130 L300 100 L275 170 L330 145 L295 200 L360 185 L310 240 L380 250 L310 260 L360 315 L295 300 L330 355 L275 330 L300 400 L265 370 L250 450 L235 370 L200 400 L225 330 L170 355 L205 300 L140 315 L190 260 L120 250 L190 240 L140 185 L205 200 L170 145 L225 170 L200 100 L235 130 Z"
            fill="#d4af37"
          />
          {/* Radiating lines */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = 250 + 100 * Math.cos(angle);
            const y1 = 250 + 100 * Math.sin(angle);
            const x2 = 250 + 230 * Math.cos(angle);
            const y2 = 250 + 230 * Math.sin(angle);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#d4af37"
                strokeWidth="0.5"
                opacity="0.5"
              />
            );
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Small badge */}
        <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 border border-[#d4af37]/30 text-[#d4af37] text-xs tracking-[0.3em] uppercase">
          <span className="w-6 h-px bg-[#d4af37]" />
          Limited Memberships Available
          <span className="w-6 h-px bg-[#d4af37]" />
        </div>

        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Awaken the{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c9a227, #f0c040, #d4af37)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Beast Within
          </span>
        </h2>

        <p className="text-[#a0a0a0] text-xl mb-3 font-light">
          Your strongest form starts here.
        </p>
        <p className="text-[#606060] text-base max-w-2xl mx-auto mb-12">
          Join Geeta Colony&apos;s most elite training facility and begin your
          transformation today. The iron waits for no one.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto px-14 py-5 bg-[#d4af37] text-black font-black text-sm tracking-[0.3em] uppercase hover:bg-[#f0c040] transition-all duration-300 hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] hover:-translate-y-1"
          >
            Join Now
          </button>
          <button
            onClick={() => scrollTo("#memberships")}
            className="w-full sm:w-auto px-14 py-5 border border-[#d4af37]/50 text-[#d4af37] font-bold text-sm tracking-[0.3em] uppercase hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all duration-300 hover:-translate-y-1"
          >
            View Plans
          </button>
        </div>

        {/* Trust signals */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 text-[#606060] text-xs tracking-[0.2em] uppercase">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No lock-in contracts
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free first session
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Expert coaches
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Results guaranteed
          </span>
        </div>
      </div>
    </section>
  );
}
