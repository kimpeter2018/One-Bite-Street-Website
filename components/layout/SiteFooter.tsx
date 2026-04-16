import Link from "next/link";

export interface SiteFooterProps {
  /** Background colour (default: #0d0d0d) */
  bg?: string;
  /** Border top colour */
  borderColor?: string;
  /** Nav links shown on the right (default: About + Contact) */
  links?: Array<{ label: string; href: string }>;
  /** Brand name shown on the left (default: ONE BITE STREET) */
  brand?: string;
}

export default function SiteFooter({
  bg = "#0d0d0d",
  borderColor = "rgba(255,255,255,0.05)",
  links = [
    { label: "About", href: "#about" },
    { label: "Contact", href: "/contact" },
  ],
  brand = "ONE BITE STREET",
}: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: bg,
        borderTop: `1px solid ${borderColor}`,
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
          {brand}
        </span>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.18)",
            margin: 0,
          }}
        >
          © {year} All rights reserved.
        </p>

        <div style={{ display: "flex", gap: "2rem" }}>
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
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
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.55)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.2)")
              }
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
