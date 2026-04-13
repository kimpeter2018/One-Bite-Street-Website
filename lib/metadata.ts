import type { Metadata } from "next";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://onebitestreet.com";

export const SITE_CONFIG = {
  name: "One Bite Street",
  shortName: "OBS",
  description:
    "A hospitality collective building human-first food festivals, café concepts, and F&B experiences. We create spaces and events people actually come back to.",
  url: BASE_URL,
  ogImage: `${BASE_URL}/og-default.jpg`,
  twitterHandle: "@onebitestr",
  instagramHandle: "@onebitestr",
  email: "onebitestr@gmail.com",
  locale: "en_US",
  keywords: [
    "hospitality collective",
    "food festivals",
    "f&b consulting",
    "F&B consultant Germany",
    "restaurant consultant Germany",
    "food festival organiser Germany",
    "event planning food Germany",
    "hospitality consultant Marburg",
    "culinary direction consulting",
    "café concept development",
    "food market organiser",
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
    "food market",
  ],
};

export function buildMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex = false,
  keywords = [],
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
  keywords?: string[];
}): Metadata {
  const fullTitle = title
    ? `${title} | ${SITE_CONFIG.name}`
    : `${SITE_CONFIG.name} | Grab a Seat. Take a Bite.`;
  const fullDescription = description || SITE_CONFIG.description;
  const canonical = `${SITE_CONFIG.url}${path}`;
  const image = ogImage || SITE_CONFIG.ogImage;
  const allKeywords = [...SITE_CONFIG.keywords, ...keywords];

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: allKeywords,
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonical,
      siteName: SITE_CONFIG.name,
      locale: SITE_CONFIG.locale,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: fullDescription,
      site: SITE_CONFIG.twitterHandle,
      creator: SITE_CONFIG.twitterHandle,
      images: [image],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
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
    verification: {
      // Add your Google Search Console verification token here
      // google: "your-google-verification-token",
    },
  };
}
