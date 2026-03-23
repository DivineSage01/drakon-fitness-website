"use client";

const programs = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Strength Training",
    desc:
      "Build foundational and advanced strength through proven powerlifting and weightlifting protocols. Master the squat, deadlift, and bench press.",
    badge: "Intermediate+",
    color: "#8b0000",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0v3.75m13.5-3.75v3.75" />
      </svg>
    ),
    title: "Muscle Building",
    desc:
      "Hypertrophy-focused programming with periodised volume and intensity to maximise muscle growth and body composition changes.",
    badge: "All Levels",
    color: "#d4af37",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
    title: "Weight Loss",
    desc:
      "Caloric deficit strategies combined with resistance training and cardio protocols for sustainable fat loss without sacrificing muscle.",
    badge: "All Levels",
    color: "#d4af37",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
    title: "Beginner Transformation",
    desc:
      "Zero to hero. A structured 12-week introduction to gym training covering technique, nutrition basics, and building lifelong fitness habits.",
    badge: "Beginner",
    color: "#d4af37",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Personal Coaching",
    desc:
      "One-on-one sessions with a dedicated DRAKON coach. Fully customised programming, real-time technique correction, and accountability.",
    badge: "Premium",
    color: "#8b0000",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Functional Fitness",
    desc:
      "Movement-based training for real-world strength. Improve mobility, coordination, and endurance through compound and athletic exercises.",
    badge: "All Levels",
    color: "#d4af37",
  },
];

export default function TrainingPrograms() {
  return (
    <section id="programs" className="bg-[#0a0a0a] py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.04] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d4af37 0%, transparent 60%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase font-medium">
            Training Programs
          </span>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Forge Your{" "}
          <span className="text-[#d4af37]">Destiny</span>
        </h2>
        <p className="text-[#606060] text-lg max-w-xl mb-16">
          Structured programs designed to deliver real results for real people —
          from first-time lifters to competitive athletes.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.title}
              className="group bg-[#111111] border border-white/5 p-8 card-hover cursor-default relative overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, rgba(212,175,55,0.05) 0%, transparent 60%)",
                }}
              />

              <div className="relative">
                {/* Badge */}
                <span
                  className="inline-block px-3 py-1 text-[10px] tracking-[0.2em] uppercase font-bold mb-5 border"
                  style={{
                    color: prog.color,
                    borderColor: `${prog.color}50`,
                    backgroundColor: `${prog.color}10`,
                  }}
                >
                  {prog.badge}
                </span>

                <div className="text-[#d4af37] mb-4">{prog.icon}</div>

                <h3
                  className="text-white font-bold text-xl mb-3"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  {prog.title}
                </h3>
                <p className="text-[#808080] text-sm leading-relaxed mb-6">
                  {prog.desc}
                </p>

                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-[#d4af37] text-sm font-medium tracking-wider uppercase group-hover:gap-4 transition-all duration-300"
                >
                  Explore
                  <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
