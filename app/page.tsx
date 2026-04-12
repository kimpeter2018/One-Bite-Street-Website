"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import OhaePopup from "@/components/features/OhaePopup";

// ─── Palette ──────────────────────────────────────────────────────────────────
// Primary: #FF3D6B (vivid pink), #D4687A (warm pink), #F0A0B0 (soft pink)
// Neutrals: #111111 (near black), #FFFFFF, #F8F6F2 (off-white)

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Ingredients", href: "#ingredients" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

const INGREDIENTS = [
  {
    id: "01",
    category: "Space Activation",
    title: "From empty rooms\nto full tables.",
    desc: "We read a space the way a musician reads a room — and tune it accordingly. Layout, flow, atmosphere. Every square metre working harder.",
    tag: "F&B Venues · Pop-ups · Residencies",
  },
  {
    id: "02",
    category: "Culinary Direction",
    title: "Menu as\nmanifesto.",
    desc: "What&apos;s on the plate tells people who you are before you say a word. We help you say the right thing — with flavour.",
    tag: "Concept Dev · Menu Design · Sourcing",
  },
  {
    id: "03",
    category: "Brand & Media",
    title: "Seen, felt,\nremembered.",
    desc: "We build identity systems and media strategies that carry a consistent warmth — across every surface, every platform.",
    tag: "Identity · Content · Digital",
  },
  {
    id: "04",
    category: "Community & Events",
    title: "The crowd\nis the product.",
    desc: "Festivals, markets, and gatherings that build real loyalty. We programme, produce, and host — from first vendor to last guest.",
    tag: "Festivals · Markets · Curation",
  },
];

const TEAM = [
  {
    initials: "HL",
    name: "Hyojin Lee",
    role: "Design",
    note: "Spaces that feel inevitable.",
    photo: "/images/hyojin.png",
  },
  {
    initials: "HK",
    name: "Hyeonmin Kim",
    role: "Technology",
    note: "Systems that stay out of the way.",
    photo: "/images/hyeonmin.png",
  },
  {
    initials: "DK",
    name: "Dani Kang",
    role: "Culinary",
    note: "Food as the opening act.",
    photo: "/images/dani.png",
  },
  {
    initials: "SJ",
    name: "Shinyoung Jo",
    role: "Operations",
    note: "The hum you never notice.",
    photo: "/images/shinyoung.png",
  },
];

const TICKER_ITEMS = [
  "Food Festivals",
  "Space Activation",
  "F&B Consulting",
  "Brand Direction",
  "Community Building",
  "Be Humane",
  "Culinary Strategy",
  "Vendor Relations",
  "Co-working",
  "Hospitality",
];

// ─── Tiny components ──────────────────────────────────────────────────────────

function PinkRule({ className = "" }) {
  return (
    <span
      className={`inline-block h-px bg-[#FF3D6B] ${className}`}
      style={{ width: "2rem" }}
    />
  );
}

function EyebrowLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "10px",
        letterSpacing: "0.24em",
        fontWeight: 500,
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.35)" : "#FF3D6B",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </p>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
// Replace the Header function in app/page.tsx with this version.
// Changes:
//   - Removed all NAV_LINKS items from desktop nav
//   - Added an "OHAE" text link next to the "Let&apos;s talk" button
//   - Simplified mobile menu to show only OHAE + Let&apos;s talk

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, border-color 0.4s ease",
          background: scrolled ? "rgba(17,17,17,0.96)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            style={{
              fontFamily: "&apos;Anton&apos;, sans-serif",
              fontSize: "15px",
              letterSpacing: "0.18em",
              color: "#ffffff",
              textDecoration: "none",
              lineHeight: 1,
            }}
          >
            ONE BITE STREET
          </a>

          {/* Desktop nav — OHAE link + Let&apos;s talk CTA */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
            }}
            className="desktop-nav"
          >
            {/* OHAE link */}
            <a
              href="/ohae"
              style={{
                fontFamily: "&apos;DM Sans&apos;, sans-serif",
                fontSize: "16px",
                letterSpacing: "0.16em",
                fontWeight: 300,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#fff")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(255,255,255,0.45)")
              }
            >
              OH·AE
            </a>

            {/* Let&apos;s talk CTA */}
            <a
              href="#contact"
              style={{
                fontFamily: "&apos;DM Sans&apos;, sans-serif",
                fontSize: "11px",
                letterSpacing: "0.16em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: "#FF3D6B",
                textDecoration: "none",
                border: "1px solid rgba(255,61,107,0.35)",
                padding: "7px 18px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#FF3D6B";
                (e.target as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
                (e.target as HTMLElement).style.color = "#FF3D6B";
              }}
            >
              Let&apos;s talk
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-end",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "1px",
                  background: "#fff",
                  transition: "all 0.3s ease",
                  width: i === 1 ? (mobileOpen ? "0" : "14px") : "20px",
                  transform:
                    mobileOpen && i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : mobileOpen && i === 2
                        ? "translateY(-6px) rotate(-45deg)"
                        : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#111",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          <a
            href="/ohae"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "&apos;Anton&apos;, sans-serif",
              fontSize: "32px",
              letterSpacing: "0.08em",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            OHAE
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              fontFamily: "&apos;Anton&apos;, sans-serif",
              fontSize: "32px",
              letterSpacing: "0.08em",
              color: "#FF3D6B",
              textDecoration: "none",
            }}
          >
            Let&apos;s talk
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

// ─── Ticker ───────────────────────────────────────────────────────────────────

function Ticker({ dark = false }) {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
        borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
        padding: "13px 0",
        background: dark ? "#111" : "#F8F6F2",
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "ticker 32s linear infinite",
        }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.22em",
              fontWeight: 400,
              textTransform: "uppercase",
              color: dark ? "rgba(255,255,255,0.22)" : "rgba(17,17,17,0.28)",
              flexShrink: 0,
              marginRight: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {item}
            <span style={{ color: "#FF3D6B", fontSize: "18px", lineHeight: 1 }}>
              ·
            </span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes scrollLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(300%); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        background: "#111111",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        overflow: "hidden",
      }}
    >
      {/* Background texture — subtle grain-like grid */}
      {/* Background photo */}
      <Image
        src="/images/room2.jpg"
        alt="Hero background"
        fill
        priority
        style={{ objectFit: "cover", objectPosition: "center 60%" }}
      />

      {/* Dark overlay — controls how much the photo shows through */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(17,17,17,0.72)",
        }}
      />

      {/* Big typographic bg accent */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -52%)",
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(180px, 28vw, 380px)",
          lineHeight: 0.85,
          letterSpacing: "-0.02em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,61,107,0.06)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        OBS
      </div>

      {/* Pink accent circle */}
      <div
        style={{
          position: "absolute",
          top: "18%",
          right: "-80px",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,61,107,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Horizontal rule with dot */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "2rem",
          right: "2rem",
          height: "1px",
          background: "rgba(255,255,255,0.04)",
        }}
      />

      {/* Main copy */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          padding: "0 2rem 5rem",
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.3em",
            fontWeight: 400,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "2rem",
            opacity: vis ? 1 : 0,
            animation: vis ? "fadeIn 0.8s ease forwards" : "none",
            animationDelay: "0.1s",
          }}
        >
          Hospitality Collective · Est. 2026
        </p>

        <h1
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(58px, 11vw, 148px)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            margin: "0 0 2rem",
            color: "#fff",
            opacity: vis ? 1 : 0,
            animation: vis ? "fadeUp 1s ease forwards" : "none",
            animationDelay: "0.25s",
          }}
        >
          GRAB A SEAT.
          <br />
          <span style={{ color: "#FF3D6B" }}>TAKE A BITE.</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            opacity: vis ? 1 : 0,
            animation: vis ? "fadeUp 1s ease forwards" : "none",
            animationDelay: "0.5s",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(15px, 1.8vw, 19px)",
              lineHeight: 1.7,
              fontWeight: 300,
              color: "rgba(255,255,255,0.5)",
              maxWidth: "480px",
            }}
          >
            We build the kind of spaces and experiences people actually come
            back to. Warm food, warm rooms, real relationships.
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#about"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 500,
                textTransform: "uppercase",
                background: "#FF3D6B",
                color: "#fff",
                padding: "14px 28px",
                textDecoration: "none",
                transition: "background 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.background =
                  "rgba(255,61,107,0.85)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.background = "#FF3D6B")
              }
            >
              Our Story
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 400,
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.6)",
                padding: "14px 28px",
                textDecoration: "none",
                transition: "all 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.5)";
                (e.target as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  "rgba(255,255,255,0.2)";
                (e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)";
              }}
            >
              Work with us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          right: "2rem",
          bottom: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          opacity: vis ? 1 : 0,
          animation: vis ? "fadeIn 1s ease forwards" : "none",
          animationDelay: "1.4s",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "8px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "rgba(255,255,255,0.12)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "40%",
              background: "#FF3D6B",
              animation: "scrollLine 2.2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── About / Values ───────────────────────────────────────────────────────────

function CompanyValue() {
  const VALUES = [
    {
      n: "01",
      tag: "Mutual Growth",
      title: "We rise\ntogether.",
      body: "Real success is never solo. We build with our vendors, our customers, our neighbours — not above them. When the people around us win, that&apos;s when we know we&apos;ve actually done something worth doing.",
    },
    {
      n: "02",
      tag: "Continuous Relationship",
      title: "Beyond the\ntransaction.",
      body: "A deal ends. A relationship doesn&apos;t. We&apos;re not here to close and move on — we&apos;re here to stay, check in, and grow with you. Money is a byproduct. Trust is the point.",
    },
    {
      n: "03",
      tag: "Human Above All",
      title: "Human\nabove everything.",
      body: "The world chases frameworks and the next big method. We go the other way — plain, warm, honest. The most sophisticated thing a business can do is be genuinely human.",
    },
  ];

  return (
    <section
      id="about"
      style={{ background: "#F8F6F2", width: "100%", position: "relative" }}
    >
      {/* Statement block */}
      <div
        style={{
          borderBottom: "1px solid rgba(17,17,17,0.08)",
          padding: "7rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <EyebrowLabel>What we stand for</EyebrowLabel>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(38px, 6vw, 84px)",
              lineHeight: 0.92,
              letterSpacing: "-0.01em",
              color: "#111",
              maxWidth: "860px",
              margin: "0 0 2rem",
            }}
          >
            WE DON&apos;T JUST SOLVE PROBLEMS.{" "}
            <span style={{ color: "#D4687A" }}>WE SIT DOWN WITH YOU.</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              lineHeight: 1.85,
              fontWeight: 300,
              color: "rgba(17,17,17,0.45)",
              maxWidth: "540px",
            }}
          >
            Most businesses fix what&apos;s visible. We go deeper — into the
            rhythms, the pressures, the people — and build something that works
            from the inside out. Not a quick fix. A foundation.
          </p>
        </div>
      </div>

      {/* Three values */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "5rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "0",
        }}
      >
        {VALUES.map((v, i) => (
          <div
            key={v.n}
            style={{
              padding: i === 0 ? "0 3rem 0 0" : "0 3rem",
              borderLeft: i > 0 ? "1px solid rgba(17,17,17,0.1)" : "none",
            }}
          >
            {/* number + tag */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.2em",
                  fontWeight: 300,
                  color: "rgba(17,17,17,0.18)",
                }}
              >
                {v.n}
              </span>
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: "rgba(255,61,107,0.4)",
                }}
              />
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.18em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: "#FF3D6B",
                }}
              >
                {v.tag}
              </span>
            </div>

            <h3
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(26px, 2.8vw, 40px)",
                lineHeight: 0.92,
                color: "#111",
                marginBottom: "1.25rem",
                whiteSpace: "pre-line",
              }}
            >
              {v.title}
            </h3>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                lineHeight: 1.85,
                fontWeight: 300,
                color: "rgba(17,17,17,0.5)",
              }}
              dangerouslySetInnerHTML={{ __html: v.body }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .values-grid > div { border-left: none !important; border-top: 1px solid rgba(17,17,17,0.1); padding: 2.5rem 0 !important; }
          #about .values-grid > div:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}

// ─── Key Ingredients ──────────────────────────────────────────────────────────

function Ingredients() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    const activate = (index: number) => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        if (i === index) {
          card.classList.add("ing-card--active");
        } else {
          card.classList.remove("ing-card--active");
        }
      });
    };

    const deactivateAll = () => {
      cardRefs.current.forEach((card) => {
        card?.classList.remove("ing-card--active");
      });
    };

    const onScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestIndex = -1;
      let closestDist = Infinity;

      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const dist = Math.abs(cardCenter - centerY);

        // Only consider cards within the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = i;
          }
        }
      });

      // Only highlight if closest card center is within 40% of viewport height from screen center
      if (closestIndex !== -1 && closestDist < window.innerHeight * 0.4) {
        activate(closestIndex);
      } else {
        deactivateAll();
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="ingredients"
      ref={sectionRef}
      style={{ background: "#111", padding: "6rem 0", position: "relative" }}
    >
      {/* Subtle grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.025,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <EyebrowLabel light>Our Services</EyebrowLabel>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(36px, 5vw, 72px)",
                lineHeight: 0.9,
                color: "#fff",
                margin: 0,
              }}
            >
              KEY
              <br />
              <span style={{ color: "#FF3D6B" }}>INGREDIENTS</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.35)",
              maxWidth: "320px",
            }}
          >
            Every great dish starts with the right elements. Here&apos;s what we
            bring to the table.
          </p>
        </div>

        {/* Zigzag cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
          {INGREDIENTS.map((ing, i) => {
            const isRight = i % 2 !== 0;
            return (
              <div
                key={ing.id}
                ref={(el) => {
                  cardRefs.current[i] = el;
                }}
                className="ing-card"
                style={{
                  width: "80%",
                  marginLeft: isRight ? "auto" : "0",
                  marginRight: isRight ? "0" : "auto",
                  padding: "2.5rem 2.5rem 2.5rem 2.8rem",
                  background: "#111",
                  position: "relative",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.06)",
                  cursor: "default",
                  transition: "background 0.35s ease, border-color 0.35s ease",
                }}
              >
                {/* Accent bar — left edge */}
                <div
                  className="ing-accent"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "0%",
                    background: "#FF3D6B",
                    transition: "height 0.4s ease",
                  }}
                />

                {/* Number */}
                <span
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.12)",
                    display: "block",
                    marginBottom: "1.25rem",
                  }}
                >
                  {ing.id}
                </span>

                {/* Category */}
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: "#FF3D6B",
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  {ing.category}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "clamp(22px, 2.4vw, 32px)",
                    lineHeight: 0.95,
                    color: "#fff",
                    whiteSpace: "pre-line",
                    letterSpacing: "-0.01em",
                    margin: "0 0 1.25rem",
                  }}
                >
                  {ing.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    fontWeight: 300,
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "1rem",
                  }}
                  dangerouslySetInnerHTML={{ __html: ing.desc }}
                />

                {/* Tags */}
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.18)",
                    textTransform: "uppercase",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    paddingTop: "1rem",
                    display: "block",
                  }}
                >
                  {ing.tag}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        /* ── Desktop: hover triggers animation ── */
        @media (min-width: 769px) {
          .ing-card:hover {
            background: rgba(255,61,107,0.04) !important;
            border-color: rgba(255,61,107,0.2) !important;
          }
          .ing-card:hover .ing-accent {
            height: 100% !important;
          }
        }

        /* ── Mobile: JS dynamically adds/removes .ing-card--active ── */
        @media (max-width: 768px) {
          .ing-card {
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
          .ing-card--active {
            background: rgba(255,61,107,0.04) !important;
            border-color: rgba(255,61,107,0.2) !important;
          }
          .ing-card--active .ing-accent {
            height: 100% !important;
          }
        }
      `}</style>
    </section>
  );
}

// ─── Team ─────────────────────────────────────────────────────────────────────

function Team() {
  return (
    <section
      id="team"
      style={{ background: "#F8F6F2", padding: "7rem 0", width: "100%" }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4.5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <EyebrowLabel>The People</EyebrowLabel>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(36px, 5.5vw, 78px)",
                lineHeight: 0.9,
                color: "#111",
                margin: 0,
              }}
            >
              WHO WE ARE
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(17,17,17,0.4)",
              maxWidth: "340px",
            }}
          >
            Small team. Deep focus. Everyone here is someone who genuinely cares
            about what ends up on your plate — literally and figuratively.
          </p>
        </div>

        {/* Team card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
          }}
        >
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                marginTop: i % 2 !== 0 ? "48px" : "0",
              }}
            >
              {/* Photo card */}
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                  marginBottom: "1.25rem",
                  background: "#e8e4de",
                }}
              >
                <Image
                  src={member.photo}
                  alt={member.name}
                  width={400}
                  height={533}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.04)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)")
                  }
                />
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: "#FF3D6B",
                  marginBottom: "4px",
                }}
              >
                {member.role}
              </p>
              <h3
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "20px",
                  letterSpacing: "0.01em",
                  color: "#111",
                  marginBottom: "8px",
                  lineHeight: 1,
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.7,
                  fontWeight: 300,
                  color: "rgba(17,17,17,0.45)",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{member.note}&rdquo;
              </p>
            </div>
          ))}
        </div>

        <style>{`
          @media (max-width: 900px) {
            #team .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          }
          @media (max-width: 520px) {
            #team .team-grid { grid-template-columns: 1fr 1fr !important; gap: 12px !important; }
          }
        `}</style>
      </div>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────

function ContactCTA() {
  return (
    <section
      id="contact"
      style={{
        background: "#111",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,61,107,0.1) 0%, transparent 68%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        <EyebrowLabel light>Get in Touch</EyebrowLabel>
        <h2
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(46px, 8vw, 110px)",
            lineHeight: 0.88,
            color: "#fff",
            marginBottom: "2rem",
            letterSpacing: "-0.01em",
          }}
        >
          LET&apos;S MAKE
          <br />
          <span style={{ color: "#FF3D6B" }}>SOMETHING.</span>
        </h2>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            lineHeight: 1.75,
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
            marginBottom: "3rem",
            maxWidth: "420px",
            margin: "0 auto 3rem",
          }}
        >
          We&apos;re a small team. When you reach out, a real person reads it —
          and writes back.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:onebitestr@gmail.com"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              fontWeight: 500,
              textTransform: "uppercase",
              background: "#FF3D6B",
              color: "#fff",
              padding: "16px 34px",
              textDecoration: "none",
              transition: "background 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background =
                "rgba(255,61,107,0.82)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "#FF3D6B")
            }
          >
            Send a message
          </a>
          <a
            href="https://instagram.com/onebitestr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              fontWeight: 400,
              textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.55)",
              padding: "16px 34px",
              textDecoration: "none",
              transition: "all 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.4)";
              (e.target as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.borderColor =
                "rgba(255,255,255,0.18)";
              (e.target as HTMLElement).style.color = "rgba(255,255,255,0.55)";
            }}
          >
            @onebitestr
          </a>
        </div>

        {/* Contact details */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginTop: "4rem",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              label: "Email",
              value: "onebitestr@gmail.com",
              href: "mailto:onebitestr@gmail.com",
            },
            {
              label: "Instagram",
              value: "@onebitestr",
              href: "https://instagram.com/onebitestr",
            },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: "6px",
                }}
              >
                {item.label}
              </p>
              <a
                href={item.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(255,255,255,0.55)")
                }
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "2.5rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.2)",
          }}
        >
          ONE BITE STREET
        </span>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.18)",
          }}
        >
          © {year} All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["About", "Contact"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "10px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(255,255,255,0.2)")
              }
            >
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function OneBiteStreet() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;1,300;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #111; }
        a { cursor: pointer; }
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-33.333%); } }
        @keyframes scrollLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(300%); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>

      <OhaePopup />
      <Header />
      <Hero />
      <Ticker />
      <CompanyValue />
      <Ingredients />
      <Ticker dark />
      <Team />
      <ContactCTA />
      <Footer />
    </>
  );
}
