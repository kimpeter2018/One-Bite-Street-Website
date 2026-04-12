"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Background: #2a6120 (dark forest green)
// Header:     #1C2E24  //#2a6120(brighter green)
// Primary:    #fb933d (orange)
// Text:       #F5F4FF (off-white)

function Photo({
  caption,
  style = {},
}: {
  caption: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "#1a2e1c",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <svg
        style={{ position: "relative", zIndex: 1, marginBottom: "10px" }}
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.2"
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
        style={{
          position: "relative",
          zIndex: 1,
          fontFamily: "monospace",
          fontSize: "10px",
          color: "rgba(255,255,255,0.18)",
          textAlign: "center",
          padding: "0 20px",
          lineHeight: "1.6",
          margin: 0,
        }}
      >
        {caption}
      </p>
    </div>
  );
}

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
        <rect
          x="420"
          y="165"
          width="120"
          height="120"
          rx="4"
          fill="rgba(255,255,255,0.03)"
        />
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
          transform: "translate(-50%, -60%)",
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
        .ohae-two-col { display:grid; grid-template-columns:1fr 1fr; gap:4px; }
        .ohae-about { display:grid; grid-template-columns:1fr 2fr; gap:64px; align-items:start; }
        @media(max-width:680px) {
          .ohae-two-col { grid-template-columns:1fr !important; }
          .ohae-about { grid-template-columns:1fr !important; gap:32px !important; }
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
          background: "#1C2E24", //#2a6120
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
          Opening 2025 · Marburg, DE
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

      {/* ── FOUR PHOTOS ──────────────────────────────────────────────────── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Row 1 — booth photos */}
        <div className="ohae-two-col">
          {/*
            <Image src="/images/ohae-booth-wide.jpg" alt="OH·AE booth at food festival"
              width={700} height={560} style={{ width: "100%", height: "clamp(280px,48vw,560px)", objectFit: "cover", display: "block" }} />
          */}
          <Photo
            caption="Festival booth — wide shot"
            style={{ height: "clamp(280px,48vw,560px)" }}
          />
          {/*
            <Image src="/images/ohae-serving.jpg" alt="Serving at the OH·AE booth"
              width={700} height={560} style={{ width: "100%", height: "clamp(280px,48vw,560px)", objectFit: "cover", display: "block", marginTop: "clamp(20px,4vw,48px)" }} />
          */}
          <Photo
            caption="Serving at the booth — candid"
            style={{
              height: "clamp(280px,48vw,560px)",
              marginTop: "clamp(20px,4vw,48px)",
            }}
          />
        </div>

        {/* Divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            margin: "4rem 0 2.5rem",
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

        {/* Row 2 — menu photos */}
        <div className="ohae-two-col">
          {/*
            <Image src="/images/ohae-menu-1.jpg" alt="OH·AE menu item"
              width={700} height={420} style={{ width: "100%", height: "clamp(220px,36vw,440px)", objectFit: "cover", display: "block" }} />
          */}
          <Photo
            caption="Menu item — food or drink, close-up"
            style={{ height: "clamp(220px,36vw,440px)" }}
          />
          {/*
            <Image src="/images/ohae-menu-2.jpg" alt="OH·AE menu item"
              width={700} height={420} style={{ width: "100%", height: "clamp(220px,36vw,440px)", objectFit: "cover", display: "block" }} />
          */}
          <Photo
            caption="Menu item — food or drink"
            style={{ height: "clamp(220px,36vw,440px)" }}
          />
        </div>
      </div>

      {/* ── ARTICLE TEXT ─────────────────────────────────────────────────── */}
      <article
        style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}
      >
        {/* About */}
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
              OH·AE started as a corner of a food festival that people kept
              coming back to. Not just for the food — but because something
              about it felt unhurried. Like nobody was going to rush you out.
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
              So we&apos;re building that feeling into a proper café. The menu
              will have matcha-flavoured things, because we like matcha. But
              it&apos;s not a matcha café — it&apos;s just a good café. The kind
              of place where the music is right and the seat is comfortable and
              nobody&apos;s counting how long you&apos;ve been there.
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

        {/* Location */}
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
              href="https://instagram.com/onebitestr"
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
              @onebitestr
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
