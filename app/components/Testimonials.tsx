const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Software Engineer",
    initials: "AS",
    quote:
      "I lost 20kg and built significant muscle in just 8 months at DRAKON. The coaches are relentless in the best possible way. They pushed me beyond what I thought was physically possible and the results speak for themselves.",
    stars: 5,
    detail: "Lost 20kg · 8 months",
  },
  {
    name: "Priya Singh",
    role: "Marketing Professional",
    initials: "PS",
    quote:
      "DRAKON completely transformed my physique and, more importantly, my mindset. I went from never lifting a weight to deadlifting twice my bodyweight. The programming is world-class and the environment is electric.",
    stars: 5,
    detail: "Physique transformation · 6 months",
  },
  {
    name: "Rohit Kumar",
    role: "Entrepreneur",
    initials: "RK",
    quote:
      "The best coaching I have ever experienced — and I have trained at gyms across Delhi and Mumbai. DRAKON's coaches genuinely care about your progress. Every session is purposeful and every rep counts.",
    stars: 5,
    detail: "Strength gain · 1 year",
  },
  {
    name: "Neha Gupta",
    role: "Doctor",
    initials: "NG",
    quote:
      "As someone with a hectic schedule, DRAKON fits perfectly. The community keeps me motivated, the coaches adapt sessions to my energy levels, and the results have been incredible. I look forward to every session.",
    stars: 5,
    detail: "Consistency & fat loss · 10 months",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4af37 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase font-medium">
            Transformations
          </span>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Real Results,{" "}
          <span className="text-[#d4af37]">Real People</span>
        </h2>
        <p className="text-[#606060] text-lg max-w-xl mb-16">
          The proof is in our members. Hear from those who chose to transform
          their lives at DRAKON.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#111111] border border-white/5 p-8 card-hover relative group"
            >
              {/* Quote mark */}
              <div
                className="absolute top-6 right-8 text-7xl text-[#d4af37]/10 font-serif leading-none pointer-events-none select-none group-hover:text-[#d4af37]/20 transition-colors duration-300"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-[#d4af37]"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-[#c0c0c0] leading-relaxed mb-6 relative">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Detail tag */}
              <div className="inline-flex items-center gap-2 bg-[#d4af37]/10 border border-[#d4af37]/20 px-3 py-1 mb-6">
                <span className="w-1.5 h-1.5 bg-[#d4af37] rounded-full" />
                <span className="text-[#d4af37] text-xs tracking-wider">{t.detail}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <div
                  className="w-12 h-12 flex items-center justify-center text-black font-black text-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, #d4af37 0%, #c9a227 100%)",
                    fontFamily: "var(--font-cinzel), serif",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#606060] text-xs tracking-wider">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
