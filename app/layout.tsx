import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "One Bite Street | BE HUMAN",
  description:
    "A multidisciplinary hospitality and creative collective building sustainable ecosystems for creators through food festivals, cafés, hotels, creative hubs, and consulting.",
  keywords: [
    "hospitality",
    "creative hub",
    "co-working",
    "co-living",
    "food festivals",
    "restaurant consulting",
  ],
  openGraph: {
    title: "One Bite Street",
    description: "BE HUMAN: co-live, co-work, and co-entertain",
    type: "website",
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
      className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-body bg-cream text-charcoal antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
