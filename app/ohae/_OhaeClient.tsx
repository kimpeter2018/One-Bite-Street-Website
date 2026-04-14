"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Background: #2a6120 (dark forest green)
// Header:     #1C2E24
// Primary:    #fb933d (orange)
// Text:       #F5F4FF (off-white)

function BlurredMap() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "320px",
        overflow: "hidden",
        background: "#1a2e1c",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 600 320"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: "absolute",
          inset: 0,
          filter: "blur(5px)",
          transform: "scale(1.08)",
        }}
      >
        <rect width="600" height="320" fill="#1e3620" />
        {[40, 85, 125, 170, 210, 255, 295].map((y) => (
          <rect
            key={y}
            x="0"
            y={y}
            width="600"
            height={y % 3 === 0 ? 9 : 4}
            fill="rgba(255,255,255,0.07)"
          />
        ))}
        {[50, 110, 170, 235, 295, 360, 430, 500, 555].map((x) => (
          <rect
            key={x}
            x={x}
            y="0"
            width={x % 3 === 0 ? 9 : 4}
            height="320"
            fill="rgba(255,255,255,0.07)"
          />
        ))}
        {[
          [55, 44, 100, 36],
          [170, 44, 55, 36],
          [235, 44, 55, 36],
          [300, 44, 115, 36],
          [55, 90, 55, 65],
          [120, 90, 100, 65],
          [300, 90, 55, 65],
          [360, 90, 75, 65],
          [55, 165, 155, 65],
          [230, 165, 55, 65],
          [295, 165, 115, 65],
          [55, 245, 100, 60],
          [165, 245, 55, 60],
          [295, 245, 55, 60],
          [355, 245, 115, 60],
        ].map(([x, y, w, h], i) => (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx="2"
            fill="rgba(255,255,255,0.04)"
          />
        ))}
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(28,46,36,0.15) 0%, rgba(28,46,36,0.7) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-60%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "50% 50% 50% 0",
            transform: "rotate(-45deg)",
            background: "#fb933d",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              transform: "rotate(45deg)",
              fontFamily: "'Anton', sans-serif",
              fontSize: "10px",
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            OB
          </span>
        </div>
        <div
          style={{
            background: "rgba(28,46,36,0.9)",
            color: "rgba(255,255,255,0.9)",
            fontFamily: "monospace",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            padding: "6px 14px",
            borderRadius: "9999px",
            whiteSpace: "nowrap",
          }}
        >
          Marburg, DE
        </div>
      </div>
      <p
        style={{
          position: "absolute",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "monospace",
          fontSize: "10px",
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.22)",
          whiteSpace: "nowrap",
          zIndex: 2,
          margin: 0,
        }}
      >
        Exact location TBA
      </p>
    </div>
  );
}

export default function OhaePage() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "#2a6120", color: "#F5F4FF" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .ohae-about { display:grid; grid-template-columns:1fr 2fr; gap:64px; align-items:start; }
        .menu-grid { display:grid; grid-template-columns:1fr 1fr; gap:2px; align-items:start; }
        .menu-card-inner { display:flex; flex-direction:column; gap:0; }
        @media(max-width:680px) {
          .ohae-about { grid-template-columns:1fr !important; gap:32px !important; }
          .menu-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* ── NAV ──────────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#1C2E24",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 2rem",
          height: "64px",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.45)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
          }
        >
          ← ONE BITE STREET
        </Link>
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.22em",
            color: "#fb933d",
          }}
        >
          OH·AE
        </span>
        <a
          href="#location"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.16em",
            fontWeight: 500,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.9)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.45)")
          }
        >
          Find us
        </a>
      </header>

      {/* ── HERO TEXT ────────────────────────────────────────────────────── */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "clamp(120px,18vw,180px) 2rem 72px",
        }}
      >
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
            letterSpacing: "0.28em",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#fb933d",
            marginBottom: "1.75rem",
            opacity: vis ? 1 : 0,
            animation: vis ? "fadeUp 0.8s ease forwards" : "none",
          }}
        >
          Opening 2026 · Marburg, DE
        </p>
        <h1
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(72px,14vw,172px)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            color: "#F5F4FF",
            marginBottom: "2rem",
            opacity: vis ? 1 : 0,
            animation: vis ? "fadeUp 0.9s ease 0.1s forwards" : "none",
          }}
        >
          OH·AE
          <br />
          <span style={{ color: "#fb933d" }}>CAFÉ.</span>
        </h1>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px,1.8vw,21px)",
            lineHeight: 1.75,
            fontWeight: 300,
            color: "rgba(245,244,255,0.55)",
            maxWidth: "500px",
            margin: 0,
            opacity: vis ? 1 : 0,
            animation: vis ? "fadeUp 0.9s ease 0.25s forwards" : "none",
          }}
        >
          A chill spot to sit longer than you planned, eat something good, and
          leave feeling slightly better about everything.
        </p>
      </section>

      {/* ── MENU ─────────────────────────────────────────────────────────── */}
      <article
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}
      >
        {/* Section label */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "0.24em",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              whiteSpace: "nowrap",
            }}
          >
            From the menu
          </span>
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "rgba(255,255,255,0.07)",
            }}
          />
        </div>

        {/* Intro line */}
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(32px,5vw,58px)",
              lineHeight: 0.92,
              color: "#F5F4FF",
              marginBottom: "1.25rem",
            }}
          >
            THE CRO-CONE.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "16px",
              lineHeight: 1.85,
              fontWeight: 300,
              color: "rgba(245,244,255,0.55)",
              maxWidth: "560px",
              margin: 0,
            }}
          >
            A croissant twisted into a cone, filled to the brim with matcha
            cream. The kind of thing that looks too good to eat — so you eat it
            fast before anyone sees you hesitate.
          </p>
        </div>

        {/* Menu card grid */}
        <div className="menu-grid">
          {/* ── Card 1: Plain Matcha ─────────────────────────────────────── */}
          <div className="menu-card-inner">
            {/* Poster image — full width, natural portrait ratio */}
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/plain_matcha.jpg"
                alt="Matcha Cro-Cone with Oreo crumbles"
                width={950}
                height={1267}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
            </div>
            {/* Copy block */}
            <div style={{ background: "#1C2E24", padding: "2rem 2rem 2.5rem" }}>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "0.75rem",
                }}
              >
                01 — Original
              </p>
              <h3
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(24px,3vw,36px)",
                  lineHeight: 0.92,
                  color: "#F5F4FF",
                  marginBottom: "1rem",
                }}
              >
                MATCHA
                <br />
                <span style={{ color: "#fb933d" }}>CRO-CONE</span>
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  color: "rgba(245,244,255,0.5)",
                  marginBottom: "1.25rem",
                }}
              >
                Flaky croissant cone packed with silky matcha cream and finished
                with crushed Oreo for that hit of dark crunch. Classic. No
                notes.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Croissant cone", "Matcha cream", "Oreo crumble"].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "monospace",
                        fontSize: "9px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.25)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "4px 10px",
                      }}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* ── Card 2: Strawberry Matcha ────────────────────────────────── */}
          <div
            className="menu-card-inner"
            style={{ marginTop: "clamp(40px,6vw,80px)" }}
          >
            {/* Poster image */}
            <div
              style={{
                width: "100%",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/images/strawberry_matcha.jpg"
                alt="Strawberry Matcha Cro-Cone"
                width={950}
                height={1267}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
            {/* Copy block */}
            <div style={{ background: "#1C2E24", padding: "2rem 2rem 2.5rem" }}>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "9px",
                  letterSpacing: "0.22em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.3)",
                  marginBottom: "0.75rem",
                }}
              >
                02 — Seasonal
              </p>
              <h3
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(24px,3vw,36px)",
                  lineHeight: 0.92,
                  color: "#F5F4FF",
                  marginBottom: "1rem",
                }}
              >
                STRAWBERRY
                <br />
                <span style={{ color: "#fb933d" }}>CRO-CONE</span>
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  color: "rgba(245,244,255,0.5)",
                  marginBottom: "1.25rem",
                }}
              >
                Same croissant cone. Same matcha cream. Then fresh strawberries
                folded in and piled on top — tart, juicy, unreasonably pretty.
                The one people photograph before they eat.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Croissant cone", "Matcha cream", "Fresh strawberry"].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "monospace",
                        fontSize: "9px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.25)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        padding: "4px 10px",
                      }}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Hype sign-off line */}
        <div
          style={{
            margin: "5rem 0 0",
            paddingTop: "3rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <blockquote
            style={{
              margin: 0,
              padding: "0 0 0 2rem",
              borderLeft: "3px solid #fb933d",
            }}
          >
            <p
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(20px,2.8vw,32px)",
                lineHeight: 1.1,
                color: "rgba(245,244,255,0.55)",
                margin: 0,
              }}
            >
              &ldquo;We couldn&apos;t decide between a croissant and an ice
              cream. So we made both.&rdquo;
            </p>
          </blockquote>
        </div>

        {/* ── ABOUT ─────────────────────────────────────────────────────── */}
        <section
          className="ohae-about"
          style={{
            padding: "96px 0 80px",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            marginTop: "80px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(36px,5vw,58px)",
              lineHeight: 0.92,
              color: "#F5F4FF",
              margin: 0,
            }}
          >
            WHAT IS
            <br />
            <span style={{ color: "#fb933d" }}>OH·AE?</span>
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                lineHeight: 1.85,
                fontWeight: 300,
                color: "rgba(245,244,255,0.6)",
                margin: 0,
              }}
            >
              OH·AE is just getting started. This week marks our first festival,
              where we&apos;re introducing something authentic, fun, and new. We
              want it to be more than just food — a space that feels unhurried,
              where people can take their time. And of course, it tastes good.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                lineHeight: 1.85,
                fontWeight: 300,
                color: "rgba(245,244,255,0.6)",
                margin: 0,
              }}
            >
              We&apos;re hoping to open a proper café — one built on simple
              things done well: good food, good coffee, and a genuinely
              comfortable atmosphere. Our goal is to create your favourite
              corner in Marburg — a place to relax, slow down, and just be.
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "16px",
                lineHeight: 1.85,
                fontWeight: 300,
                color: "rgba(245,244,255,0.6)",
                margin: 0,
              }}
            >
              We&apos;re opening in Marburg later this year. More details coming
              soon.
            </p>
          </div>
        </section>

        {/* Pull quote */}
        <blockquote
          style={{
            margin: "0 0 96px",
            padding: "0 0 0 2rem",
            borderLeft: "3px solid #fb933d",
            borderRadius: 0,
          }}
        >
          <p
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(22px,3vw,36px)",
              lineHeight: 1.1,
              color: "rgba(245,244,255,0.6)",
              margin: 0,
            }}
          >
            &ldquo;Good coffee. Good food. Somewhere to actually sit.&rdquo;
          </p>
        </blockquote>

        {/* ── LOCATION ──────────────────────────────────────────────────── */}
        <section id="location" style={{ paddingBottom: "96px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "10px",
                  letterSpacing: "0.24em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: "1rem",
                }}
              >
                Coming to
              </p>
              <h2
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(36px,5vw,58px)",
                  lineHeight: 0.92,
                  color: "#F5F4FF",
                  margin: 0,
                }}
              >
                MARBURG,
                <br />
                <span style={{ color: "#fb933d" }}>GERMANY.</span>
              </h2>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                lineHeight: 1.8,
                fontWeight: 300,
                color: "rgba(245,244,255,0.4)",
                maxWidth: "340px",
                margin: 0,
              }}
            >
              We&apos;re finding the right space. Exact address not confirmed
              yet — but somewhere worth walking to.
            </p>
          </div>

          <BlurredMap />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginTop: "1.75rem",
              flexWrap: "wrap",
            }}
          >
            <a
              href="https://instagram.com/ohae_cafe"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 500,
                textTransform: "uppercase",
                background: "#fb933d",
                color: "#fff",
                padding: "13px 28px",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Follow for updates
            </a>
            <span
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "rgba(255,255,255,0.18)",
              }}
            >
              @ohae_cafe
            </span>
          </div>
        </section>
      </article>

      {/* ── FOOTER ───────────────────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.18)",
          }}
        >
          OH·AE × ONE BITE STREET
        </span>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "9px",
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.12)",
            margin: 0,
          }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <Link
          href="/"
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
            letterSpacing: "0.16em",
            color: "rgba(255,255,255,0.18)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255,255,255,0.18)")
          }
        >
          ← Back to One Bite Street
        </Link>
      </footer>
    </div>
  );
}
