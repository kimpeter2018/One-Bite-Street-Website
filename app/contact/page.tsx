"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormState {
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
}

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
      className={`mb-6 text-xs font-medium tracking-[0.2em] uppercase ${light ? "text-black/30" : "text-graphite/50"}`}
    >
      {children}
    </p>
  );
}

function FieldLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-graphite/50 mb-2 block font-mono text-xs tracking-widest uppercase"
    >
      {children}
    </label>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formState, setFormState] = useState<FormState>({
    status: "idle",
    errorMessage: "",
  });

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "loading", errorMessage: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setFormState({
          status: "error",
          errorMessage: data.error || "Something went wrong. Please try again.",
        });
        return;
      }

      setFormState({ status: "success", errorMessage: "" });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setFormState({
        status: "error",
        errorMessage:
          "Could not send your message. Please check your connection and try again.",
      });
    }
  };

  const isLoading = formState.status === "loading";

  return (
    <div className="text-charcoal bg-white">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-black/8 pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div
            className={`max-w-4xl transition-all duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
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
              className={`text-graphite max-w-lg text-xl leading-relaxed transition-all delay-200 duration-1000 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
            >
              We&apos;re a small team. When you reach out, a real person reads
              it. Tell us what&apos;s on your mind.
            </p>
          </div>

          {/* Contact anchors */}
          <div
            className={`mt-16 flex flex-col gap-8 transition-all delay-300 duration-1000 sm:flex-row sm:gap-16 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div>
              <p className="text-graphite/40 mb-2 font-mono text-[10px] tracking-widest uppercase">
                Email
              </p>
              <a
                href="mailto:onebitestr@gmail.com"
                className="text-charcoal hover:text-warmth font-medium transition-colors"
              >
                onebitestr@gmail.com
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

      {/* ── 2. FORM ──────────────────────────────────────────────────────────── */}
      <section id="contact-form" className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
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
              {formState.status === "success" ? (
                /* ── Success state ── */
                <div className="flex h-full flex-col items-start justify-center py-12">
                  <p className="mb-6 text-5xl">✓</p>
                  <h3 className="font-display text-charcoal mb-4 text-3xl">
                    Message received.
                  </h3>
                  <p className="text-graphite mb-8 max-w-sm text-base leading-relaxed">
                    Thanks for reaching out. We&apos;ll read it properly and get
                    back to you soon. In the meantime — welcome to the table.
                  </p>
                  <button
                    onClick={() =>
                      setFormState({ status: "idle", errorMessage: "" })
                    }
                    className="text-warmth hover:text-earth text-sm font-medium transition-colors"
                  >
                    ← Send another message
                  </button>
                </div>
              ) : (
                /* ── Form ── */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <FieldLabel htmlFor="name">Your Name *</FieldLabel>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        placeholder="Your name"
                        className="text-charcoal focus:border-warmth focus:ring-warmth w-full border border-black/15 bg-white px-5 py-3.5 text-sm transition-colors placeholder:text-black/25 focus:ring-1 focus:outline-none disabled:opacity-50"
                      />
                    </div>
                    <div>
                      <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                        placeholder="your@email.com"
                        className="text-charcoal focus:border-warmth focus:ring-warmth w-full border border-black/15 bg-white px-5 py-3.5 text-sm transition-colors placeholder:text-black/25 focus:ring-1 focus:outline-none disabled:opacity-50"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <FieldLabel htmlFor="subject">Subject *</FieldLabel>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      placeholder="What's this about?"
                      className="text-charcoal focus:border-warmth focus:ring-warmth w-full border border-black/15 bg-white px-5 py-3.5 text-sm transition-colors placeholder:text-black/25 focus:ring-1 focus:outline-none disabled:opacity-50"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <FieldLabel htmlFor="message">Your Message *</FieldLabel>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      rows={7}
                      placeholder="Tell us what's on your mind. The more context, the better we can help."
                      className="text-charcoal focus:border-warmth focus:ring-warmth w-full resize-none border border-black/15 bg-white px-5 py-3.5 text-sm transition-colors placeholder:text-black/25 focus:ring-1 focus:outline-none disabled:opacity-50"
                    />
                  </div>

                  {/* Error message */}
                  {formState.status === "error" && (
                    <p className="text-rust text-sm">
                      {formState.errorMessage}
                    </p>
                  )}

                  {/* Submit */}
                  <div className="flex items-center justify-between pt-2">
                    <p className="font-mono text-xs text-black/25">
                      * Required
                    </p>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="bg-warmth hover:bg-earth inline-flex items-center gap-3 px-8 py-4 text-sm font-medium text-black transition-colors disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isLoading ? (
                        <>
                          Sending
                          <span className="inline-block animate-pulse">
                            ...
                          </span>
                        </>
                      ) : (
                        <>
                          Send message
                          <span className="text-black/70">→</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. SOCIAL + LOCATION ────────────────────────────────────────────── */}
      <section className="bg-charcoal border-t border-white/5 py-16 text-black md:py-24">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
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
