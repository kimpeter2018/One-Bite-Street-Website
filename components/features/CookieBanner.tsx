"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "obs_cookie_consent";

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
}

interface ConsentRecord {
  choice: "all" | "essential" | "custom";
  prefs: CookiePreferences;
  savedAt: number;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [prefs, setPrefs] = useState<CookiePreferences>({
    analytics: true,
    marketing: false,
  });

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setVisible(true), 2800);
    return () => clearTimeout(t);
  }, []);

  const save = (
    choice: "all" | "essential" | "custom",
    customPrefs?: CookiePreferences,
  ) => {
    const record: ConsentRecord = {
      choice,
      prefs:
        choice === "all"
          ? { analytics: true, marketing: true }
          : choice === "essential"
            ? { analytics: false, marketing: false }
            : (customPrefs ?? prefs),
      savedAt: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(record));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes cookieSlideUp {
          from { transform: translateY(20px); opacity: 0; }
          to   { transform: translateY(0); opacity: 1; }
        }
      `}</style>

      {/*
        Outer wrapper: fixed, pinned to all four viewport edges via inset.
        This ensures the centering is always relative to the actual viewport,
        not the scrollable document width. Pointer events only on the inner card.
      */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          bottom: 0,
          zIndex: 150,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "0 1rem",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            pointerEvents: "auto",
            animation:
              "cookieSlideUp 0.45s cubic-bezier(0.34,1.4,0.64,1) forwards",
            /* No border-radius on bottom so it sits flush at the screen edge */
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
            background: "#111",
            border: "1px solid rgba(255,255,255,0.1)",
            borderBottom: "none",
          }}
        >
          {!showCustomize ? (
            /* ── Default view ─────────────────────────────────── */
            <div
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.4)",
                    margin: "0 0 6px",
                    textTransform: "uppercase",
                  }}
                >
                  Cookies
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.6)",
                    margin: 0,
                    maxWidth: "440px",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  We use cookies to understand how you use this site and improve
                  your experience. No data is sold.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                <button
                  onClick={() => save("all")}
                  style={{
                    background: "#FF3D6B",
                    color: "#fff",
                    border: "none",
                    padding: "10px 22px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "opacity 0.2s",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Accept all
                </button>
                <button
                  onClick={() => save("essential")}
                  style={{
                    background: "none",
                    color: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: "10px 22px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.15)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                  }}
                >
                  Reject optional
                </button>
                <button
                  onClick={() => setShowCustomize(true)}
                  style={{
                    background: "none",
                    color: "rgba(255,255,255,0.3)",
                    border: "none",
                    padding: "10px 4px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    fontWeight: 400,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "color 0.2s",
                    textDecoration: "underline",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.7)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
                  }
                >
                  Personalize
                </button>
              </div>
            </div>
          ) : (
            /* ── Customize panel ──────────────────────────────── */
            <div
              style={{
                padding: "20px 24px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
              >
                <button
                  onClick={() => setShowCustomize(false)}
                  style={{
                    background: "none",
                    border: "none",
                    color: "rgba(255,255,255,0.35)",
                    cursor: "pointer",
                    fontSize: "16px",
                    padding: "0",
                    lineHeight: 1,
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.35)")
                  }
                >
                  ←
                </button>
                <p
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.4)",
                    margin: 0,
                    textTransform: "uppercase",
                  }}
                >
                  Your preferences
                </p>
              </div>

              {/* Essential — always on */}
              {[
                {
                  label: "Essential",
                  desc: "Required for the site to function. Always on.",
                  always: true,
                  value: true,
                  toggle: null,
                },
                {
                  label: "Analytics",
                  desc: "Helps us understand which pages people visit.",
                  always: false,
                  value: prefs.analytics,
                  toggle: () =>
                    setPrefs((p) => ({ ...p, analytics: !p.analytics })),
                },
                {
                  label: "Marketing",
                  desc: "Used to personalise content and ads.",
                  always: false,
                  value: prefs.marketing,
                  toggle: () =>
                    setPrefs((p) => ({ ...p, marketing: !p.marketing })),
                },
              ].map((row) => (
                <div
                  key={row.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#fff",
                        margin: "0 0 2px",
                      }}
                    >
                      {row.label}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        fontWeight: 300,
                        color: "rgba(255,255,255,0.35)",
                        margin: 0,
                      }}
                    >
                      {row.desc}
                    </p>
                  </div>
                  {row.always ? (
                    <div
                      style={{
                        width: "36px",
                        height: "20px",
                        background: "rgba(255,255,255,0.12)",
                        borderRadius: "9999px",
                        position: "relative",
                        flexShrink: 0,
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "3px",
                          right: "3px",
                          width: "14px",
                          height: "14px",
                          background: "rgba(255,255,255,0.3)",
                          borderRadius: "50%",
                        }}
                      />
                    </div>
                  ) : (
                    <button
                      onClick={row.toggle!}
                      aria-pressed={row.value}
                      style={{
                        width: "36px",
                        height: "20px",
                        background: row.value
                          ? "#FF3D6B"
                          : "rgba(255,255,255,0.12)",
                        borderRadius: "9999px",
                        position: "relative",
                        flexShrink: 0,
                        border: "none",
                        cursor: "pointer",
                        transition: "background 0.2s",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: "3px",
                          left: row.value ? "calc(100% - 17px)" : "3px",
                          width: "14px",
                          height: "14px",
                          background: "#fff",
                          borderRadius: "50%",
                          transition: "left 0.2s",
                        }}
                      />
                    </button>
                  )}
                </div>
              ))}

              <button
                onClick={() => save("custom", prefs)}
                style={{
                  background: "#FF3D6B",
                  color: "#fff",
                  border: "none",
                  padding: "12px 22px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "opacity 0.2s",
                  borderRadius: "4px",
                  alignSelf: "flex-start",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Save preferences
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
