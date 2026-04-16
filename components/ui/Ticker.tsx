"use client";

export interface TickerProps {
  items: string[];
  /** Dark variant (white text on dark bg) or light (dark text on light bg) */
  dark?: boolean;
  /** Override the dot accent colour (default: #FF3D6B) */
  accentColor?: string;
  /** Override background */
  bg?: string;
}

export default function Ticker({
  items,
  dark = false,
  accentColor = "#FF3D6B",
  bg,
}: TickerProps) {
  const repeated = [...items, ...items, ...items];

  const resolvedBg = bg ?? (dark ? "#111" : "#F8F6F2");
  const textColor = dark ? "rgba(255,255,255,0.22)" : "rgba(17,17,17,0.28)";

  return (
    <div
      style={{
        overflow: "hidden",
        borderTop: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
        borderBottom: `1px solid ${dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"}`,
        padding: "13px 0",
        background: resolvedBg,
      }}
    >
      <div
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "obs-ticker 32s linear infinite",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.22em",
              fontWeight: 400,
              textTransform: "uppercase",
              color: textColor,
              flexShrink: 0,
              marginRight: "2.5rem",
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            {item}
            <span
              style={{ color: accentColor, fontSize: "18px", lineHeight: 1 }}
            >
              ·
            </span>
          </span>
        ))}
      </div>

      <style>{`
        @keyframes obs-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
