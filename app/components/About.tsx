export default function About() {
  const stats = [
    { value: "500+", label: "Active Members" },
    { value: "15+", label: "Expert Coaches" },
    { value: "20+", label: "Programs Offered" },
    { value: "5+", label: "Years of Excellence" },
  ];

  return (
    <section id="about" className="bg-[#111111] py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div
        className="absolute top-0 left-0 w-96 h-96 opacity-[0.03] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d4af37 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 opacity-[0.03] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d4af37 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase font-medium">
            Our Philosophy
          </span>
        </div>

        {/* Heading */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#d4af37] mb-16"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          The DRAKON
          <br />
          <span className="text-white">Philosophy</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Brand Story */}
          <div className="space-y-6">
            <p className="text-[#c0c0c0] text-lg leading-relaxed">
              DRAKON isn&apos;t just a gym — it&apos;s a crucible of transformation. The
              name DRAKON, meaning{" "}
              <span className="text-[#d4af37] font-semibold">&ldquo;dragon&rdquo;</span> in
              ancient Greek, embodies our belief that every individual carries a
              fierce, untamed power waiting to be unleashed.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Founded on the principles of{" "}
              <span className="text-[#d4af37]">discipline</span>,{" "}
              <span className="text-[#d4af37]">resilience</span>, and{" "}
              <span className="text-[#d4af37]">mastery</span>, we have built an
              environment where ordinary people achieve extraordinary results.
              Our coaches are not just trainers — they are architects of
              human potential.
            </p>
            <p className="text-[#a0a0a0] leading-relaxed">
              Whether you are stepping into a gym for the first time or are a
              seasoned athlete seeking to break your limits, DRAKON offers a
              path tailored to your unique journey. We believe that true
              transformation is forged in consistency, fueled by passion, and
              sustained by community.
            </p>

            {/* Values */}
            <div className="pt-4 space-y-3">
              {[
                { icon: "⚔", label: "Discipline", desc: "Consistency over motivation" },
                { icon: "🔥", label: "Intensity", desc: "Push beyond your limits" },
                { icon: "🦅", label: "Excellence", desc: "No shortcuts, only results" },
              ].map((val) => (
                <div key={val.label} className="flex items-center gap-4 py-3 border-b border-white/5">
                  <span className="text-2xl">{val.icon}</span>
                  <div>
                    <span className="text-[#d4af37] font-semibold text-sm tracking-wider uppercase">
                      {val.label}
                    </span>
                    <span className="text-[#606060] text-sm ml-3">{val.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats */}
          <div className="relative">
            {/* Gold border frame */}
            <div
              className="absolute -inset-4 opacity-20 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, #d4af37 0%, transparent 50%, #d4af37 100%)",
                borderRadius: "2px",
              }}
            />
            <div className="relative bg-[#0f0f0f] border border-[#d4af37]/20 p-10 grid grid-cols-2 gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-8 text-center border-[#d4af37]/10 ${
                    i === 0 ? "border-r border-b" :
                    i === 1 ? "border-b" :
                    i === 2 ? "border-r" : ""
                  }`}
                >
                  <div
                    className="text-5xl font-black text-[#d4af37] mb-2"
                    style={{ fontFamily: "var(--font-cinzel), serif" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[#606060] text-xs tracking-[0.2em] uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="mt-8 pl-6 border-l-2 border-[#d4af37]">
              <p className="text-[#c0c0c0] italic text-lg leading-relaxed">
                &ldquo;Iron sharpens iron. Your weakest day here is stronger than
                your strongest day anywhere else.&rdquo;
              </p>
              <footer className="mt-2 text-[#d4af37] text-sm tracking-widest uppercase">
                — DRAKON Fitness
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
