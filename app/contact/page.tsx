"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface InquiryPath {
  id: string;
  emoji: string;
  title: string;
  description: string;
  href?: string;
  isForm?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const INQUIRY_PATHS: InquiryPath[] = [
  {
    id: "vendor",
    emoji: "🍜",
    title: "Become a Vendor",
    description:
      "Want to bring your food to one of our festivals? Tell us about what you make.",
    isForm: true,
  },
  {
    id: "partner",
    emoji: "🤝",
    title: "Partner With Us",
    description:
      "Venues, sponsors, collaborators — if you think there&apos;s something to build together, let&apos;s talk.",
    isForm: true,
  },
  {
    id: "consulting",
    emoji: "💡",
    title: "F&amp;B Consulting",
    description:
      "Need help shaping a restaurant concept, tightening your operations, or finding your identity?",
    isForm: true,
  },
  {
    id: "residency",
    emoji: "🏠",
    title: "Creative Residency",
    description:
      "Looking for space to live, work, and create alongside others? We&apos;re building it.",
    href: "/ventures/spaces",
  },
  {
    id: "press",
    emoji: "📰",
    title: "Press &amp; Media",
    description:
      "Writing about us? We&apos;d love to help. Reach out directly.",
    isForm: true,
  },
  {
    id: "general",
    emoji: "👋",
    title: "Just Saying Hello",
    description:
      "No agenda. You came across us somewhere and want to know more. That&apos;s enough.",
    isForm: true,
  },
];

const INQUIRY_OPTIONS = [
  { value: "vendor", label: "Become a vendor" },
  { value: "partner", label: "Partner with us" },
  { value: "consulting", label: "F&B consulting" },
  { value: "residency", label: "Creative residency" },
  { value: "press", label: "Press / media" },
  { value: "general", label: "Just saying hello" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-6 text-xs font-medium tracking-[0.2em] uppercase ${light ? "text-white/30" : "text-graphite/50"}`}
    >
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", inquiryType: "general", message: "" });
    }, 4000);
  };

  const handleCardClick = (path: InquiryPath) => {
    if (path.isForm) {
      setFormData((prev) => ({ ...prev, inquiryType: path.id }));
      setActiveCard(path.id);
      // Scroll to form
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-charcoal bg-white">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-black/8 pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div
            className={`max-w-4xl transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <p className="text-graphite/40 mb-8 font-mono text-xs tracking-[0.2em] uppercase">
              Contact
            </p>
            <h1 className="font-display text-charcoal mb-10 text-5xl leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="text-warmth">together.</span>
            </h1>
            <p
              className={`text-graphite max-w-lg text-xl leading-relaxed transition-all delay-200 duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              We&apos;re a small team. When you reach out, a real person reads
              it. Tell us what&apos;s on your mind.
            </p>
          </div>

          {/* Contact anchors */}
          <div
            className={`mt-16 flex flex-col gap-8 transition-all delay-300 duration-1000 sm:flex-row sm:gap-16 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
          >
            <div>
              <p className="text-graphite/40 mb-2 font-mono text-[10px] tracking-widest uppercase">
                Email
              </p>
              <a
                href="mailto:hello@onebitestreet.com"
                className="text-charcoal hover:text-warmth font-medium transition-colors"
              >
                hello@onebitestreet.com
              </a>
            </div>
            <div>
              <p className="text-graphite/40 mb-2 font-mono text-[10px] tracking-widest uppercase">
                Instagram
              </p>
              <a
                href="https://instagram.com/onebitestr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-charcoal hover:text-warmth font-medium transition-colors"
              >
                @onebitestr
              </a>
            </div>
            <div>
              <p className="text-graphite/40 mb-2 font-mono text-[10px] tracking-widest uppercase">
                Based In
              </p>
              <p className="text-charcoal font-medium">[City, Country — TBC]</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INQUIRY PATHS ────────────────────────────────────────────────── */}
      <section className="bg-cream/30 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-12">
            <SectionLabel>What Brings You Here?</SectionLabel>
            <h2 className="font-heading text-charcoal text-2xl md:text-3xl">
              Choose what fits best.
            </h2>
            <p className="text-graphite mt-2 text-sm">
              Clicking a card pre-fills the form below.
            </p>
          </div>

          {/*
            Designer note: 2×3 grid of inquiry path cards.
            Each has an emoji, title, and one-liner.
            Active card gets a warmth-colored left border.
            Hover lifts slightly with a warm border.
          */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INQUIRY_PATHS.map((path) =>
              path.isForm ? (
                <button
                  key={path.id}
                  onClick={() => handleCardClick(path)}
                  className={`group relative overflow-hidden border bg-white p-6 text-left transition-all duration-200 md:p-8 ${
                    activeCard === path.id
                      ? "border-warmth shadow-md"
                      : "hover:border-warmth/50 border-black/8 hover:shadow-sm"
                  }`}
                >
                  <div
                    className={`bg-warmth absolute top-0 bottom-0 left-0 w-1 origin-bottom transition-transform duration-200 ${activeCard === path.id ? "scale-y-100" : "scale-y-0 group-hover:scale-y-100"}`}
                  />
                  <p className="mb-4 text-2xl">{path.emoji}</p>
                  <h3
                    className="font-heading text-charcoal mb-2 text-base"
                    dangerouslySetInnerHTML={{ __html: path.title }}
                  />
                  <p
                    className="text-graphite text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: path.description }}
                  />
                  {activeCard === path.id && (
                    <p className="text-warmth mt-4 font-mono text-[10px] tracking-widest uppercase">
                      Selected ✓
                    </p>
                  )}
                </button>
              ) : (
                <Link
                  key={path.id}
                  href={path.href!}
                  className="group hover:border-warmth/50 relative overflow-hidden border border-black/8 bg-white p-6 text-left transition-all duration-200 hover:shadow-sm md:p-8"
                >
                  <div className="bg-warmth absolute top-0 bottom-0 left-0 w-1 origin-bottom scale-y-0 transition-transform duration-200 group-hover:scale-y-100" />
                  <p className="mb-4 text-2xl">{path.emoji}</p>
                  <h3
                    className="font-heading text-charcoal mb-2 text-base"
                    dangerouslySetInnerHTML={{ __html: path.title }}
                  />
                  <p
                    className="text-graphite text-sm leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: path.description }}
                  />
                  <p className="text-warmth/70 group-hover:text-warmth mt-4 font-mono text-[10px] tracking-widest uppercase transition-colors">
                    Learn more →
                  </p>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── 3. FORM ──────────────────────────────────────────────────────────── */}
      <section
        id="contact-form"
        className="border-t border-black/8 py-24 md:py-32"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/*
            Designer note: Two-column layout.
            Left: form label + reassurance copy.
            Right: the form itself.
            On mobile, stacks vertically.
          */}
          <div className="grid gap-16 md:grid-cols-5 md:gap-24">
            {/* Left — copy */}
            <div className="md:col-span-2">
              <SectionLabel>Send a Message</SectionLabel>
              <h2 className="font-display text-charcoal mb-6 text-3xl leading-tight md:text-4xl">
                We read every
                <br />
                message.
              </h2>
              <p className="text-graphite mb-8 text-sm leading-relaxed">
                No contact form black holes here. A real person will read what
                you write and get back to you — usually within a couple of days.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-warmth mt-0.5 text-base">→</span>
                  <p className="text-graphite text-sm">
                    <span className="text-charcoal font-medium">Vendors</span> —
                    tell us what you make and where you&apos;ve sold before.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-warmth mt-0.5 text-base">→</span>
                  <p className="text-graphite text-sm">
                    <span className="text-charcoal font-medium">Partners</span>{" "}
                    — give us the short version first. We can schedule a call.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-warmth mt-0.5 text-base">→</span>
                  <p className="text-graphite text-sm">
                    <span className="text-charcoal font-medium">
                      Everyone else
                    </span>{" "}
                    — just be yourself. That&apos;s the whole point.
                  </p>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="md:col-span-3">
              {submitted ? (
                <div className="flex h-full flex-col items-start justify-center py-12">
                  <p className="mb-6 text-5xl">✓</p>
                  <h3 className="font-display text-charcoal mb-4 text-3xl">
                    Message received.
                  </h3>
                  <p className="text-graphite max-w-sm text-base leading-relaxed">
                    Thanks for reaching out. We&apos;ll read it properly and get
                    back to you soon. In the meantime — welcome to the table.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Inquiry type */}
                  <div>
                    <label
                      htmlFor="inquiryType"
                      className="text-graphite/50 mb-2 block font-mono text-xs tracking-widest uppercase"
                    >
                      What&apos;s this about? *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                      className="text-charcoal focus:border-warmth focus:ring-warmth w-full appearance-none border border-black/15 bg-white px-5 py-3.5 text-sm transition-colors focus:ring-1 focus:outline-none"
                    >
                      {INQUIRY_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name + Email row */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="text-graphite/50 mb-2 block font-mono text-xs tracking-widest uppercase"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="text-charcoal focus:border-warmth focus:ring-warmth w-full border border-black/15 bg-white px-5 py-3.5 text-sm transition-colors placeholder:text-black/25 focus:ring-1 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="text-graphite/50 mb-2 block font-mono text-xs tracking-widest uppercase"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="text-charcoal focus:border-warmth focus:ring-warmth w-full border border-black/15 bg-white px-5 py-3.5 text-sm transition-colors placeholder:text-black/25 focus:ring-1 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="text-graphite/50 mb-2 block font-mono text-xs tracking-widest uppercase"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={7}
                      placeholder="Tell us what's on your mind. The more context, the better we can help."
                      className="text-charcoal focus:border-warmth focus:ring-warmth w-full resize-none border border-black/15 bg-white px-5 py-3.5 text-sm transition-colors placeholder:text-black/25 focus:ring-1 focus:outline-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-2">
                    <p className="font-mono text-xs text-black/25">
                      * Required
                    </p>
                    <button
                      type="submit"
                      className="bg-warmth hover:bg-earth text-charcoal inline-flex items-center gap-3 px-8 py-4 text-sm font-medium transition-colors"
                    >
                      Send message
                      <span className="text-charcoal/70">→</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. SOCIAL + LOCATION ────────────────────────────────────────────── */}
      <section className="bg-charcoal border-t border-white/5 py-16 text-black/25 md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
            {/* Follow */}
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-widest text-black/30 uppercase">
                Follow Along
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://instagram.com/onebitestr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-warmth group inline-flex items-center gap-2 text-sm text-black/70 transition-colors"
                >
                  Instagram
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </a>
                <a
                  href="#"
                  className="hover:text-warmth group inline-flex items-center gap-2 text-sm text-black/70 transition-colors"
                >
                  LinkedIn
                  <span className="opacity-0 transition-opacity group-hover:opacity-100">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-widest text-black/30 uppercase">
                Where We Are
              </p>
              <p className="text-sm leading-relaxed text-black/70">
                [City, Country — TBC]
                <br />
                <span className="text-xs text-black/35">
                  Exact location added when confirmed
                </span>
              </p>
            </div>

            {/* The Table CTA */}
            <div>
              <p className="mb-4 font-mono text-[10px] tracking-widest text-black/30 uppercase">
                Stay in the Loop
              </p>
              <p className="mb-4 text-sm leading-relaxed text-black/55">
                Festival dates, vendor stories, new ventures. We write when it
                matters.
              </p>
              <Link
                href="/#newsletter"
                className="text-warmth group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-black"
              >
                Join the table
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
