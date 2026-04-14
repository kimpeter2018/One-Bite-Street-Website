"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const OHAE_SEEN_KEY = "obs_ohae_seen";

export default function OhaePopup() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(() => {
    if (typeof window !== "undefined" && localStorage.getItem(OHAE_SEEN_KEY)) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    if (dismissed) {
      return;
    }
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, [dismissed]);

  const dismiss = () => {
    if (typeof window !== "undefined") {
      localStorage.setItem(OHAE_SEEN_KEY, "1");
    }
    setDismissed(true);
    setVisible(false);
  };

  if (dismissed) return null;

  return (
    <>
      <style>{`
        @keyframes cookieSlideUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
        .ohae-text-btn {
          position: relative;
          background: none;
          border: none;
          cursor: pointer;
          font-family: monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #F0FFE8;
          text-decoration: none;
          padding: 4px 0;
          display: inline-block;
        }
        .ohae-text-btn::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 1.5px;
          background: #F0FFE8;
          transition: width 0.3s ease;
        }
        .ohae-text-btn:hover::after { width: 100%; }
      `}</style>

      {/* Backdrop — anchored to viewport edges, never to scroll width */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(17,17,17,0.6)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease",
          pointerEvents: visible ? "auto" : "none",
        }}
      />

      {/* Card wrapper — uses margin: auto trick anchored to viewport, not scroll width */}
      <div
        style={{
          position: "fixed",
          /* Pin to viewport left/right edges so centering is always viewport-relative */
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 201,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          pointerEvents: visible ? "auto" : "none",
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Introducing Café OHAE"
          style={{
            /* Width constrained to never exceed viewport */
            width: "100%",
            maxWidth: "540px",
            background: "#ffffff",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow:
              "0 0 0 1px rgba(0,0,0,0.08), 0 24px 48px rgba(0,0,0,0.22)",
            transform: visible ? "scale(1)" : "scale(0.94)",
            opacity: visible ? 1 : 0,
            transition:
              "transform 0.45s cubic-bezier(0.34,1.4,0.64,1), opacity 0.35s ease",
            position: "relative",
          }}
        >
          {/* Close button */}
          <button
            onClick={dismiss}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              zIndex: 10,
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "rgba(0,0,0,0.42)",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: "15px",
              lineHeight: "1",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(0,0,0,0.65)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(0,0,0,0.42)")
            }
          >
            &#x2715;
          </button>

          {/* Photo */}
          <Image
            src="/images/ohae-popup.jpg"
            alt="OHAE pop-up booth at food festival"
            width={540}
            height={320}
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "320px",
              objectFit: "cover",
              display: "block",
            }}
            priority
          />

          {/* Green intro band */}
          <div
            style={{
              background: "#2A6120",
              padding: "22px 28px 20px",
              position: "relative",
            }}
          >
            <Image
              src="/images/ohae-logo.png"
              alt="OH·AE logo"
              width={64}
              height={64}
              style={{
                position: "absolute",
                top: "18px",
                right: "22px",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(240,255,232,0.55)",
                margin: "0 0 10px",
              }}
            >
              New from One Bite Street
            </p>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "19px",
                fontWeight: 500,
                color: "#F0FFE8",
                lineHeight: "1.35",
                margin: "0 80px 0 0",
              }}
            >
              We just launched our first café brand &mdash;{" "}
              <strong style={{ fontWeight: 700 }}>OH·AE</strong>. Check it out.
            </p>
          </div>

          {/* Button row */}
          <div
            style={{
              padding: "20px 28px 26px",
              background: "#2A6120",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Link href="/ohae" onClick={dismiss} className="ohae-text-btn">
              Check out OH·AE &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
