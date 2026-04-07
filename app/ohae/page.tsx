"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PHOTO_SLOTS = [
  {
    id: 1,
    caption: "Festival pop-up stall — wide shot, warm light",
    aspect: "landscape",
  },
  {
    id: 2,
    caption: "Matcha close-up — vibrant green, creamy foam",
    aspect: "portrait",
  },
  {
    id: 3,
    caption: "OHAE merch — tote / cup / tee on flat lay",
    aspect: "portrait",
  },
  {
    id: 4,
    caption: "Candid at festival — person holding cup, smiling",
    aspect: "landscape",
  },
  { id: 5, caption: "Merch detail — logo close-up or label", aspect: "square" },
  { id: 6, caption: "Queue or crowd at OHAE stall", aspect: "square" },
];

const TICKER_WORDS = [
  "MATCHA",
  "OHAE",
  "抹茶",
  "GOOD VIBES",
  "CAFÉ",
  "おはえ",
  "OPENING 2025",
  "MATCHA",
  "OHAE",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function PhotoSlot({
  caption,
  className = "",
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{ background: "#E8F5E2", border: "2px solid #B8DFA8" }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, #6DBF5A 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <svg
        className="relative z-10 mb-2"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6DBF5A"
        strokeWidth="1.5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <p
        className="relative z-10 px-4 text-center font-mono text-xs leading-snug"
        style={{ color: "#4A8C3A" }}
      >
        {caption}
      </p>
    </div>
  );
}

function Ticker() {
  const doubled = [...TICKER_WORDS, ...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div className="overflow-hidden py-3" style={{ background: "#FF7A45" }}>
      <div className="animate-ticker flex whitespace-nowrap">
        {doubled.map((word, i) => (
          <span
            key={i}
            className="mx-5 shrink-0 font-mono text-xs font-bold tracking-widest"
            style={{ color: "#FFF5F0" }}
          >
            {word}
            <span className="mx-5 opacity-50">✿</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OhaePage() {
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "#FAFFF7", color: "#1A3312" }}>
      {/* ── HEADER ─────────────────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
        style={{
          background: "rgba(250,255,247,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1.5px solid #B8DFA8",
        }}
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xs tracking-widest transition-opacity hover:opacity-60"
          style={{ color: "#4A8C3A" }}
        >
          ← ONE BITE STREET
        </Link>
        <span
          className="font-mono text-xs font-bold tracking-[0.3em]"
          style={{ color: "#FF7A45" }}
        >
          CAFÉ OHAE
        </span>
        <div style={{ width: "120px" }} />
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 text-center"
        style={{ background: "#FAFFF7" }}
      >
        {/* Background circles — decorative */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -top-24 -left-24 h-80 w-80 rounded-full"
            style={{ background: "#D4F0C8", opacity: 0.6 }}
          />
          <div
            className="absolute top-1/4 -right-16 h-56 w-56 rounded-full"
            style={{ background: "#FFE0D0", opacity: 0.7 }}
          />
          <div
            className="absolute bottom-20 left-1/3 h-40 w-40 rounded-full"
            style={{ background: "#C8EAC0", opacity: 0.5 }}
          />
        </div>

        <div
          className="relative z-10"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Kitschy logo lockup */}
          <div
            className="mb-4 inline-block rounded-full px-4 py-1.5 font-mono text-[11px] font-bold tracking-[0.28em]"
            style={{ background: "#FF7A45", color: "#FFF5F0" }}
          >
            A MATCHA CAFÉ
          </div>

          <h1
            className="mb-2 leading-none tracking-tight"
            style={{
              fontFamily: "&apos;Anton&apos;, sans-serif",
              fontSize: "clamp(80px, 18vw, 200px)",
              color: "#2A6120",
              lineHeight: 0.88,
            }}
          >
            OHAE
          </h1>

          <p
            className="mb-8 font-mono text-sm tracking-widest"
            style={{
              color: "#FF7A45",
              opacity: vis ? 1 : 0,
              transition: "opacity 0.9s ease 0.3s",
            }}
          >
            おはえ
          </p>

          <p
            className="mx-auto mb-12 max-w-md text-lg leading-relaxed"
            style={{
              fontFamily: "&apos;DM Sans&apos;, sans-serif",
              color: "#3D6B32",
              fontWeight: 300,
              opacity: vis ? 1 : 0,
              transition: "opacity 0.9s ease 0.5s",
            }}
          >
            Matcha, made the way it should be. Warm, green, and a little bit
            fun. We&apos;re setting up our café — come back soon.
          </p>

          <div
            className="mx-auto flex max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center"
            style={{
              opacity: vis ? 1 : 0,
              transition: "opacity 0.9s ease 0.7s",
            }}
          >
            <a
              href="https://instagram.com/onebitestr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-mono text-xs font-bold tracking-widest transition-all hover:opacity-80"
              style={{
                background: "#2A6120",
                color: "#F0FFE8",
                borderRadius: "9999px",
              }}
            >
              FOLLOW @ONEBITESTR ↗
            </a>
            <a
              href="#story"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 font-mono text-xs font-bold tracking-widest transition-all hover:opacity-80"
              style={{
                border: "2px solid #2A6120",
                color: "#2A6120",
                borderRadius: "9999px",
                background: "transparent",
              }}
            >
              OUR STORY ↓
            </a>
          </div>
        </div>

        {/* Scroll nudge */}
        <div
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
          style={{
            opacity: vis ? 1 : 0,
            transition: "opacity 1s ease 1.2s",
          }}
        >
          <span
            className="font-mono text-[9px] tracking-[0.3em]"
            style={{ color: "#6DBF5A" }}
          >
            SCROLL
          </span>
          <div
            className="relative h-10 w-px overflow-hidden"
            style={{ background: "#B8DFA8" }}
          >
            <div
              className="animate-scrollLine absolute top-0 left-0 w-full"
              style={{ height: "40%", background: "#6DBF5A" }}
            />
          </div>
        </div>
      </section>

      <Ticker />

      {/* ── WHAT IS OHAE ──────────────────────────────────────────────────── */}
      <section id="story" className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-16 md:grid-cols-2">
            {/* Left — text */}
            <div>
              <p
                className="mb-5 font-mono text-[10px] font-bold tracking-[0.28em]"
                style={{ color: "#FF7A45" }}
              >
                WHAT IS OHAE?
              </p>
              <h2
                className="mb-8 leading-none"
                style={{
                  fontFamily: "&apos;Anton&apos;, sans-serif",
                  fontSize: "clamp(40px, 6vw, 68px)",
                  color: "#2A6120",
                }}
              >
                MATCHA
                <br />
                <span style={{ color: "#FF7A45" }}>DONE RIGHT.</span>
              </h2>
              <div
                className="space-y-5"
                style={{
                  fontFamily: "&apos;DM Sans&apos;, sans-serif",
                  color: "#3D6B32",
                  fontWeight: 300,
                  lineHeight: 1.85,
                }}
              >
                <p>
                  OHAE started as a stall at our food festivals — a little green
                  corner that kept selling out. Turns out, people really want
                  good matcha.
                </p>
                <p>
                  We make it properly. Real ceremonial grade. No shortcuts.
                  Served in cups worth holding, by people who actually care how
                  it tastes.
                </p>
                <p>
                  The name?{" "}
                  <span style={{ color: "#FF7A45", fontWeight: 500 }}>
                    OHAE (おはえ)
                  </span>{" "}
                  — it&apos;s playful, a little nonsensical, and somehow exactly
                  right for a café that takes its matcha seriously but not
                  itself.
                </p>
              </div>
            </div>

            {/* Right — stacked photos */}
            <div className="grid grid-cols-2 gap-3">
              <PhotoSlot
                caption={PHOTO_SLOTS[1].caption}
                className="col-span-2 aspect-[3/4]"
              />
              <PhotoSlot
                caption={PHOTO_SLOTS[4].caption}
                className="aspect-square"
              />
              <PhotoSlot
                caption={PHOTO_SLOTS[2].caption}
                className="aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────────────── */}
      <section className="py-4" style={{ background: "#F0FBE8" }}>
        <div className="mx-auto mb-8 max-w-5xl px-6 pt-16 md:px-12">
          <p
            className="font-mono text-[10px] font-bold tracking-[0.28em]"
            style={{ color: "#FF7A45" }}
          >
            IN THE WILD
          </p>
          <h2
            className="mt-2 leading-none"
            style={{
              fontFamily: "&apos;Anton&apos;, sans-serif",
              fontSize: "clamp(32px, 5vw, 56px)",
              color: "#2A6120",
            }}
          >
            POP-UP MOMENTS
          </h2>
        </div>

        {/* Asymmetric grid */}
        <div
          className="grid grid-cols-3 gap-2 px-2 pb-2"
          style={{ gridTemplateRows: "auto" }}
        >
          <div className="col-span-2 row-span-2">
            <PhotoSlot
              caption={PHOTO_SLOTS[0].caption}
              className="h-full min-h-[320px] md:min-h-[500px]"
            />
          </div>
          <PhotoSlot
            caption={PHOTO_SLOTS[3].caption}
            className="min-h-[155px] md:min-h-[246px]"
          />
          <PhotoSlot
            caption={PHOTO_SLOTS[5].caption}
            className="min-h-[155px] md:min-h-[246px]"
          />
        </div>
        <div className="px-2 pt-2">
          <PhotoSlot
            caption="Group shot — team or crowd at OHAE pop-up"
            className="h-48 w-full md:h-64"
          />
        </div>
      </section>

      {/* ── MERCH + VIBE ──────────────────────────────────────────────────── */}
      <section className="px-6 py-24 md:px-12 md:py-36">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-16 md:grid-cols-2">
            {/* Merch photo */}
            <PhotoSlot
              caption={PHOTO_SLOTS[2].caption}
              className="aspect-square w-full md:sticky md:top-24"
            />

            {/* Text */}
            <div>
              <p
                className="mb-5 font-mono text-[10px] font-bold tracking-[0.28em]"
                style={{ color: "#FF7A45" }}
              >
                THE MERCH
              </p>
              <h2
                className="mb-8 leading-none"
                style={{
                  fontFamily: "&apos;Anton&apos;, sans-serif",
                  fontSize: "clamp(36px, 5vw, 60px)",
                  color: "#2A6120",
                }}
              >
                WEAR IT.
                <br />
                <span style={{ color: "#FF7A45" }}>CARRY IT.</span>
                <br />
                DRINK IT.
              </h2>
              <div
                className="space-y-5"
                style={{
                  fontFamily: "&apos;DM Sans&apos;, sans-serif",
                  color: "#3D6B32",
                  fontWeight: 300,
                  lineHeight: 1.85,
                }}
              >
                <p>
                  We make stuff we actually want to use. Totes, cups, tees — all
                  in that particular shade of green that you can&apos;t stop
                  looking at.
                </p>
                <p>
                  Find us at the next festival. The merch sells out. Just
                  saying.
                </p>
              </div>

              {/* Little kitschy tags */}
              <div className="mt-10 flex flex-wrap gap-2">
                {["Totes", "Cups", "Tees", "Stickers", "Postcards"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full px-4 py-1.5 font-mono text-[10px] font-bold tracking-widest"
                      style={{
                        background: "#D4F0C8",
                        color: "#2A6120",
                        border: "1.5px solid #6DBF5A",
                      }}
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OPENING SOON CTA ──────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden px-6 py-24 text-center md:py-36"
        style={{ background: "#2A6120" }}
      >
        {/* Background circles */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute -top-20 -right-20 h-72 w-72 rounded-full"
            style={{ background: "rgba(109,191,90,0.15)" }}
          />
          <div
            className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full"
            style={{ background: "rgba(255,122,69,0.1)" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-xl">
          <div
            className="mb-6 inline-block rounded-full px-4 py-1.5 font-mono text-[10px] font-bold tracking-[0.28em]"
            style={{ background: "#FF7A45", color: "#FFF5F0" }}
          >
            COMING LATER THIS YEAR
          </div>
          <h2
            className="mb-6 leading-none"
            style={{
              fontFamily: "&apos;Anton&apos;, sans-serif",
              fontSize: "clamp(44px, 9vw, 96px)",
              color: "#F0FFE8",
              lineHeight: 0.88,
            }}
          >
            A CAFÉ
            <br />
            <span style={{ color: "#6DBF5A" }}>IS COMING.</span>
          </h2>
          <p
            className="mx-auto mb-10 max-w-sm text-base leading-relaxed"
            style={{
              fontFamily: "&apos;DM Sans&apos;, sans-serif",
              color: "rgba(240,255,232,0.65)",
              fontWeight: 300,
            }}
          >
            A proper home for OHAE. A space to sit, sip, and stay a while.
            Details dropping soon — follow us to be first to know.
          </p>

          <a
            href="https://instagram.com/onebitestr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 font-mono text-xs font-bold tracking-widest transition-all hover:opacity-80"
            style={{
              background: "#FF7A45",
              color: "#FFF5F0",
              borderRadius: "9999px",
            }}
          >
            STAY IN THE LOOP ↗
          </a>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="flex flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between"
        style={{ borderTop: "1.5px solid #B8DFA8", background: "#FAFFF7" }}
      >
        <span
          className="font-mono text-[10px] tracking-widest"
          style={{ color: "#6DBF5A" }}
        >
          CAFÉ OHAE × ONE BITE STREET
        </span>
        <p
          className="font-mono text-[9px] tracking-widest"
          style={{ color: "#B8DFA8" }}
        >
          © {new Date().getFullYear()} ALL RIGHTS RESERVED
        </p>
        <Link
          href="/"
          className="font-mono text-[10px] tracking-widest transition-opacity hover:opacity-60"
          style={{ color: "#FF7A45" }}
        >
          ← BACK TO ONE BITE STREET
        </Link>
      </footer>

      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        .animate-ticker { animation: ticker 22s linear infinite; }
        .animate-ticker:hover { animation-play-state: paused; }
        @keyframes scrollLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(300%); } }
        .animate-scrollLine { animation: scrollLine 2s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
