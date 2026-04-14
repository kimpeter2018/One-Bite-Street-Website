import type { Metadata } from "next";
import { Anton, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/features/CookieBanner";
import { SITE_CONFIG } from "@/lib/metadata";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  // ── Title template ────────────────────────────────────────────────────────
  title: {
    default: "One Bite Street | Grab a Seat. Take a Bite.",
    template: "%s | One Bite Street",
  },
  description:
    "A hospitality collective building human-first food festivals, café concepts, and F&B experiences in Germany. We create spaces and events people actually come back to.",
  keywords: [
    "hospitality collective",
    "food festivals",
    "f&b consulting",
    "café concept",
    "restaurant consulting",
    "community spaces",
    "one bite street",
    "OH·AE café",
    "Marburg café",
    "food events Germany",
    "culinary direction",
    "space activation",
    "vendor curation",
  ],
  authors: [{ name: "One Bite Street", url: SITE_CONFIG.url }],
  creator: "One Bite Street",
  publisher: "One Bite Street",

  // ── Canonical & alternate URLs ────────────────────────────────────────────
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: SITE_CONFIG.url,
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    title: "One Bite Street | Grab a Seat. Take a Bite.",
    description:
      "A hospitality collective building human-first food festivals, café concepts, and F&B experiences in Germany. We create spaces people come back to.",
    url: SITE_CONFIG.url,
    siteName: "One Bite Street",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${SITE_CONFIG.url}/og-default.jpg`, // ← absolute URL
        width: 1200,
        height: 630,
        alt: "One Bite Street — Grab a Seat. Take a Bite.",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "One Bite Street | Grab a Seat. Take a Bite.",
    description:
      "A hospitality collective building human-first food festivals, café concepts, and F&B experiences.",
    site: "@onebitestr",
    creator: "@onebitestr",
    images: [`${SITE_CONFIG.url}/og-default.jpg`],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        // color attribute must be set in HTML head directly
      },
    ],
  },

  // ── Manifest ──────────────────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Google Search Console verification ───────────────────────────────────
  // verification: {
  //   google: "your-google-site-verification-token",
  // },

  // ── Other ─────────────────────────────────────────────────────────────────
  category: "food & hospitality",
};

// ── JSON-LD: Organisation schema ──────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "One Bite Street",
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo.png`,
  description:
    "A hospitality collective building human-first food festivals, café concepts, and F&B experiences in Germany. We create spaces people come back to.",
  email: SITE_CONFIG.email,
  sameAs: [
    "https://instagram.com/onebitestr",
    "https://twitter.com/onebitestr",
  ],
  foundingDate: "2026",
  address: {
    "@type": "PostalAddress",
    addressCountry: "DE",
  },
};

// ── JSON-LD: WebSite schema (enables Sitelinks search box) ───────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "One Bite Street",
  url: SITE_CONFIG.url,
  description:
    "A hospitality collective building human-first food festivals, café concepts, and F&B experiences in Germany. We create spaces people come back to.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <head>
        {/* ── Preconnect to Google Fonts (already handled by next/font but belt-and-suspenders) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ── Theme color (browser chrome on mobile) */}
        <meta name="theme-color" content="#111111" />
        <meta name="msapplication-TileColor" content="#111111" />

        {/* ── Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="BXglJYGOvgRtkMRSrU53rAiJhgR_TRhbBBB3fTNus9E"
        />

        {/* ── JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="font-sans antialiased">
        <main>{children}</main>
        <CookieBanner />
      </body>
    </html>
  );
}
