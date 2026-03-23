const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0v3.75m13.5-3.75v3.75M9 17.25v1.5m4.5-1.5v1.5M3.75 20.25h16.5" />
      </svg>
    ),
    title: "Premium Equipment",
    desc:
      "State-of-the-art machines, free weights, cables, and functional rigs sourced from the world's leading manufacturers. Every piece engineered for performance.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Expert Coaching",
    desc:
      "Our certified coaches bring years of competitive and professional training experience. Personalised guidance, real-time feedback, and proven programming.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Strength & Conditioning",
    desc:
      "Science-backed programming designed to build raw strength, explosive power, and athletic conditioning. From beginner lifts to advanced periodisation.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zm9.75-4.5c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zm-7.5 0A1.125 1.125 0 016.375 7.5h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25A1.125 1.125 0 013 19.875V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Fat Loss & Physique",
    desc:
      "Targeted fat-loss protocols combined with body composition programming. Achieve the physique you have always envisioned with measurable, sustainable results.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Community & Motivation",
    desc:
      "Join a tribe of driven individuals who push each other to new heights. Group challenges, leaderboards, and a culture where every victory is celebrated.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Clean, Focused Environment",
    desc:
      "A meticulously maintained space designed for focus and intensity. No distractions — just premium facilities, curated playlists, and a culture of excellence.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] py-24 lg:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #d4af37 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase font-medium">
            Why DRAKON
          </span>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Elite{" "}
          <span className="text-[#d4af37]">Features</span>
        </h2>
        <p className="text-[#606060] text-lg max-w-xl mb-16">
          Every detail of DRAKON is engineered to maximise your performance and
          accelerate your transformation.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-[#111111] border border-white/5 p-8 card-hover cursor-default"
            >
              <div className="text-[#d4af37] mb-5 group-hover:scale-110 transition-transform duration-300 w-fit">
                {feature.icon}
              </div>
              <h3
                className="text-white font-bold text-lg mb-3 tracking-wide"
                style={{ fontFamily: "var(--font-cinzel), serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-[#808080] text-sm leading-relaxed">
                {feature.desc}
              </p>
              <div className="mt-6 w-8 h-px bg-[#d4af37]/40 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
