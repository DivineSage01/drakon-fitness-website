"use client";

import { useState, FormEvent } from "react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/917982311027",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass =
    "w-full bg-[#0a0a0a] border border-white/10 text-[#d0d0d0] placeholder-[#404040] px-4 py-3.5 text-sm focus:outline-none focus:border-[#d4af37] transition-colors duration-300";

  return (
    <section id="contact" className="bg-[#111111] py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #d4af37 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase font-medium">
            Get In Touch
          </span>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-16"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Start Your{" "}
          <span className="text-[#d4af37]">Journey</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <div>
            <p className="text-[#a0a0a0] leading-relaxed mb-10 max-w-md">
              Ready to transform your life? Reach out to us and one of our expert coaches
              will be in touch within 24 hours to guide you through the enrollment process.
            </p>

            <div className="space-y-6 mb-10">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#606060] text-xs tracking-[0.2em] uppercase mb-1">Call / WhatsApp</p>
                  <a
                    href="tel:+917982311027"
                    className="text-white text-lg font-semibold hover:text-[#d4af37] transition-colors duration-300"
                  >
                    +91 79823 11027
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#606060] text-xs tracking-[0.2em] uppercase mb-1">Location</p>
                  <p className="text-white font-medium">Geeta Colony,</p>
                  <p className="text-[#a0a0a0]">Near Gurudwara, Delhi</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#d4af37]/10 border border-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#606060] text-xs tracking-[0.2em] uppercase mb-1">Hours</p>
                  <p className="text-white font-medium">Mon – Sat: 5:00 AM – 10:00 PM</p>
                  <p className="text-[#a0a0a0]">Sunday: 6:00 AM – 8:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <p className="text-[#606060] text-xs tracking-[0.3em] uppercase mb-4">Follow Us</p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="w-11 h-11 border border-white/10 flex items-center justify-center text-[#606060] hover:text-[#d4af37] hover:border-[#d4af37] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {submitted ? (
              <div className="border border-[#d4af37]/30 bg-[#d4af37]/5 p-10 text-center">
                <div className="w-16 h-16 bg-[#d4af37]/10 border border-[#d4af37]/30 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[#d4af37]" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3
                  className="text-[#d4af37] text-xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-cinzel), serif" }}
                >
                  Message Received!
                </h3>
                <p className="text-[#a0a0a0]">
                  Our team will contact you within 24 hours. Welcome to the DRAKON family.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[#d4af37] text-sm hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#606060] text-xs tracking-[0.2em] uppercase mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-[#606060] text-xs tracking-[0.2em] uppercase mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#606060] text-xs tracking-[0.2em] uppercase mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-[#606060] text-xs tracking-[0.2em] uppercase mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your fitness goals..."
                    rows={5}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#d4af37] text-black font-bold text-sm tracking-[0.3em] uppercase hover:bg-[#f0c040] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)] mt-2"
                >
                  Send Message
                </button>

                <p className="text-[#404040] text-xs text-center">
                  We respect your privacy. Your data is never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
