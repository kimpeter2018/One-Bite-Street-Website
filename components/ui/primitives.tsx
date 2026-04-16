import React from "react";

// ─── EyebrowLabel ─────────────────────────────────────────────────────────────

export interface EyebrowLabelProps {
  children: React.ReactNode;
  /** On dark backgrounds use light opacity; on light use the accent colour */
  light?: boolean;
  /** Override the accent colour entirely */
  color?: string;
}

export function EyebrowLabel({
  children,
  light = false,
  color,
}: EyebrowLabelProps) {
  const resolvedColor = color ?? (light ? "rgba(255,255,255,0.35)" : "#FF3D6B");
  return (
    <p
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "10px",
        letterSpacing: "0.24em",
        fontWeight: 500,
        textTransform: "uppercase",
        color: resolvedColor,
        marginBottom: "1.25rem",
        margin: "0 0 1.25rem",
      }}
    >
      {children}
    </p>
  );
}

// ─── PinkRule ─────────────────────────────────────────────────────────────────

export interface PinkRuleProps {
  color?: string;
  className?: string;
}

export function PinkRule({ color = "#FF3D6B", className = "" }: PinkRuleProps) {
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        height: "1px",
        width: "2rem",
        background: color,
      }}
    />
  );
}

// ─── SectionContainer ─────────────────────────────────────────────────────────

export interface SectionContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

export function SectionContainer({
  children,
  style,
  className,
}: SectionContainerProps) {
  return (
    <div
      className={className}
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
