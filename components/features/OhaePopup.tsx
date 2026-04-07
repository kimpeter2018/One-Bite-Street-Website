"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function OhaePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Small delay so it feels intentional, not jarring
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setDismissed(true)}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(17,17,17,0.55)",
          backdropFilter: "blur(4px)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.5s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      />

      {/* Modal card */}
      <div
        style={{
          position: "fixed",
          bottom: "50%",
          left: "50%",
          transform: visible
            ? "translate(-50%, 50%) scale(1)"
            : "translate(-50%, 50%) scale(0.92)",
          zIndex: 201,
          opacity: visible ? 1 : 0,
          transition:
            "transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
          width: "min(480px, 92vw)",
          background: "#FAFFF7",
          border: "2px solid #6DBF5A",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        {/* Green top strip */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ background: "#2A6120" }}
        >
          <span
            style={{
              fontFamily: "&apos;Anton&apos;, sans-serif",
              fontSize: "13px",
              letterSpacing: "0.22em",
              color: "#F0FFE8",
            }}
          >
            CAFÉ OHAE
          </span>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Close"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "rgba(240,255,232,0.45)",
              fontSize: "18px",
              lineHeight: 1,
              padding: "2px 4px",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#F0FFE8")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(240,255,232,0.45)")
            }
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="px-7 py-8 text-center">
          {/* Big kitschy OHAE */}
          <p
            style={{
              fontFamily: "&apos;Anton&apos;, sans-serif",
              fontSize: "72px",
              lineHeight: 0.88,
              color: "#2A6120",
              marginBottom: "4px",
            }}
          >
            OHAE
          </p>
          <p
            className="mb-6 font-mono text-xs tracking-widest"
            style={{ color: "#FF7A45" }}
          >
            おはえ
          </p>

          {/* Pill badge */}
          <div
            className="mx-auto mb-6 inline-block rounded-full px-4 py-1.5 font-mono text-[10px] font-bold tracking-widest"
            style={{ background: "#FF7A45", color: "#FFF5F0" }}
          >
            OUR MATCHA CAFÉ BRAND ✿
          </div>

          <p
            className="mx-auto mb-8 max-w-xs leading-relaxed"
            style={{
              fontFamily: "&apos;DM Sans&apos;, sans-serif",
              fontSize: "14px",
              color: "#3D6B32",
              fontWeight: 300,
            }}
          >
            We&apos;re opening a matcha café later this year. Check out the
            brand, see our pop-ups, and stay in the loop.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3">
            <Link
              href="/ohae"
              onClick={() => setDismissed(true)}
              className="inline-flex items-center justify-center gap-2 py-3 font-mono text-xs font-bold tracking-widest transition-all hover:opacity-80"
              style={{
                background: "#2A6120",
                color: "#F0FFE8",
                borderRadius: "9999px",
              }}
            >
              DISCOVER CAFÉ OHAE →
            </Link>
            <button
              onClick={() => setDismissed(true)}
              className="font-mono text-[10px] tracking-widest transition-opacity hover:opacity-100"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#6DBF5A",
                opacity: 0.6,
              }}
            >
              stay on this page
            </button>
          </div>
        </div>

        {/* Green bottom squiggle strip */}
        <div
          className="flex items-center justify-center gap-3 py-2"
          style={{ background: "#D4F0C8" }}
        >
          {["MATCHA", "✿", "OHAE", "✿", "2025", "✿", "MATCHA"].map((w, i) => (
            <span
              key={i}
              className="font-mono text-[9px] font-bold tracking-widest"
              style={{ color: "#2A6120" }}
            >
              {w}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
