"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Ticker from "@/components/ui/Ticker";
import { EyebrowLabel, SectionContainer } from "@/components/ui/primitives";
import OhaePopup from "@/components/features/OhaePopup";

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT = "#FF3D6B";

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
    desc: "What's on the plate tells people who you are before you say a word. We help you say the right thing — with flavour.",
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
    name: "Hyojin Lee",
    role: "Design",
    note: "Spaces that feel inevitable.",
    photo: "/images/hyojin.png",
  },
  {
    name: "Hyeonmin Kim",
    role: "Technology",
    note: "Systems that stay out of the way.",
    photo: "/images/hyeonmin.png",
  },
  {
    name: "Dani Kang",
    role: "Culinary",
    note: "Food as the opening act.",
    photo: "/images/dani.png",
  },
  {
    name: "Shinyoung Jo",
    role: "Operations",
    note: "The hum you never notice.",
    photo: "/images/shinyoung.png",
  },
];

const VALUES = [
  {
    n: "01",
    tag: "Mutual Growth",
    title: "We rise\ntogether.",
    body: "Real success is never solo. We build with our vendors, our customers, our neighbours — not above them. When the people around us win, that's when we know we've actually done something worth doing.",
  },
  {
    n: "02",
    tag: "Continuous Relationship",
    title: "Beyond the\ntransaction.",
    body: "A deal ends. A relationship doesn't. We're not here to close and move on — we're here to stay, check in, and grow with you. Money is a byproduct. Trust is the point.",
  },
  {
    n: "03",
    tag: "Human Above All",
    title: "Human\nabove everything.",
    body: "The world chases frameworks and the next big method. We go the other way — plain, warm, honest. The most sophisticated thing a business can do is be genuinely human.",
  },
];

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
      <Image
        src="/images/44.jpeg"
        alt="Hero background"
        fill
        priority
        style={{
          objectFit: "cover",
          objectPosition: "center 60%",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(17,17,17,0.72)",
        }}
      />

      {/* Typographic bg accent */}
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
          WebkitTextStroke: `1px rgba(255,61,107,0.06)`,
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          textAlign: "center",
        }}
      >
        OBS
      </div>

      {/* Pink radial glow */}
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
            animation: vis ? "obs-fadeIn 0.8s ease 0.1s forwards" : "none",
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
            animation: vis ? "obs-fadeUp 1s ease 0.25s forwards" : "none",
          }}
        >
          GRAB A SEAT
          <br />
          <span style={{ color: ACCENT }}>TAKE A BITE</span>
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            opacity: vis ? 1 : 0,
            animation: vis ? "obs-fadeUp 1s ease 0.5s forwards" : "none",
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
                background: ACCENT,
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
                ((e.target as HTMLElement).style.background = ACCENT)
              }
            >
              Our Story
            </a>
            <Link
              href="/contact"
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
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(255,255,255,0.5)";
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = "rgba(255,255,255,0.2)";
                el.style.color = "rgba(255,255,255,0.6)";
              }}
            >
              Work with us
            </Link>
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
          animation: vis ? "obs-fadeIn 1s ease 1.4s forwards" : "none",
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
              background: ACCENT,
              animation: "obs-scrollLine 2.2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── About / Values ───────────────────────────────────────────────────────────

function AboutValues() {
  return (
    <section id="about" style={{ background: "#F8F6F2", width: "100%" }}>
      {/* Statement */}
      <div
        style={{
          borderBottom: "1px solid rgba(17,17,17,0.08)",
          padding: "7rem 2rem",
        }}
      >
        <SectionContainer>
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
        </SectionContainer>
      </div>

      {/* Three values */}
      <SectionContainer
        style={{ padding: "5rem 2rem" }}
        className="obs-values-grid"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
                    color: ACCENT,
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
      </SectionContainer>

      <style>{`
        @media (max-width: 768px) {
          .obs-values-grid > div > div { border-left: none !important; border-top: 1px solid rgba(17,17,17,0.1); padding: 2.5rem 0 !important; }
          .obs-values-grid > div > div:first-child { border-top: none; }
        }
      `}</style>
    </section>
  );
}

// ─── Ingredients ──────────────────────────────────────────────────────────────

function Ingredients() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    const activate = (index: number) => {
      cardRefs.current.forEach((card, i) => {
        card?.classList.toggle("ing-card--active", i === index);
      });
    };

    const onScroll = () => {
      const centerY = window.innerHeight / 2;
      let closestIndex = -1;
      let closestDist = Infinity;
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const dist = Math.abs(rect.top + rect.height / 2 - centerY);
          if (dist < closestDist) {
            closestDist = dist;
            closestIndex = i;
          }
        }
      });
      if (closestIndex !== -1 && closestDist < window.innerHeight * 0.4) {
        activate(closestIndex);
      } else {
        cardRefs.current.forEach((c) =>
          c?.classList.remove("ing-card--active"),
        );
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{ background: "#111", padding: "6rem 0", position: "relative" }}
    >
      {/* Grid bg */}
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

      <SectionContainer style={{ position: "relative", zIndex: 2 }}>
        {/* Header */}
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
              <span style={{ color: ACCENT }}>INGREDIENTS</span>
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
                  width: "90%",
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
                <div
                  className="ing-accent"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "3px",
                    height: "0%",
                    background: ACCENT,
                    transition: "height 0.4s ease",
                  }}
                />
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
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    fontWeight: 500,
                    textTransform: "uppercase",
                    color: ACCENT,
                    display: "block",
                    marginBottom: "10px",
                  }}
                >
                  {ing.category}
                </span>
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
      </SectionContainer>

      <style>{`
        @media (min-width: 769px) {
          .ing-card:hover { background: rgba(255,61,107,0.04) !important; border-color: rgba(255,61,107,0.2) !important; }
          .ing-card:hover .ing-accent { height: 100% !important; }
        }
        @media (max-width: 768px) {
          .ing-card { width: 100% !important; margin-left: 0 !important; margin-right: 0 !important; }
          .ing-card--active { background: rgba(255,61,107,0.04) !important; border-color: rgba(255,61,107,0.2) !important; }
          .ing-card--active .ing-accent { height: 100% !important; }
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
      <SectionContainer>
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
            Small team. Deep focus. Everyone here genuinely cares about what
            ends up on your plate — literally and figuratively.
          </p>
        </div>

        <div
          className="obs-team-grid"
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
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  fontWeight: 500,
                  textTransform: "uppercase",
                  color: ACCENT,
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
      </SectionContainer>

      <style>{`
        @media (max-width: 900px) {
          .obs-team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .obs-team-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </section>
  );
}

// ─── Contact CTA ──────────────────────────────────────────────────────────────

function ContactCTA() {
  return (
    <section
      style={{
        background: "#111",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
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
          <span style={{ color: ACCENT }}>SOMETHING.</span>
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            lineHeight: 1.75,
            fontWeight: 300,
            color: "rgba(255,255,255,0.4)",
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
          <Link
            href="/contact"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              fontWeight: 500,
              textTransform: "uppercase",
              background: ACCENT,
              color: "#fff",
              padding: "16px 34px",
              textDecoration: "none",
              transition: "background 0.2s ease",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,61,107,0.82)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = ACCENT)
            }
          >
            Send a message
          </Link>
          <a
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
              const el = e.target as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.4)";
              el.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              const el = e.target as HTMLElement;
              el.style.borderColor = "rgba(255,255,255,0.18)";
              el.style.color = "rgba(255,255,255,0.55)";
            }}
          >
            @onebitestr (TBA)
          </a>
        </div>

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
            { label: "Instagram", value: "@onebitestr (TBA)", href: undefined },
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

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function HomePageClient() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;1,300;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #111; }
        @keyframes obs-scrollLine { 0% { transform: translateY(-100%); } 100% { transform: translateY(300%); } }
        @keyframes obs-fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes obs-fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>

      <OhaePopup />

      <SiteHeader
        extraLinks={[{ label: "OH·AE", href: "/ohae" }]}
        ctaHref="/contact"
        ctaLabel="Let's talk"
      />

      <Hero />
      <Ticker items={TICKER_ITEMS} />
      <AboutValues />
      <Ingredients />
      <Ticker items={TICKER_ITEMS} dark />
      <Team />
      <ContactCTA />

      <SiteFooter
        links={[
          { label: "About", href: "#about" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </>
  );
}
