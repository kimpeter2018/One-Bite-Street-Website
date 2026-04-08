import type { Metadata } from "next";
import { Anton, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";

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
  title: "One Bite Street | Grab a seat and take a bite",
  description:
    "A hospitality collective building human-first spaces, festivals, and food businesses. We go deep, not just wide.",
  keywords: [
    "hospitality",
    "food festivals",
    "f&b consulting",
    "community spaces",
    "restaurant consulting",
    "one bite street",
  ],
  openGraph: {
    title: "One Bite Street",
    description: "Grab a seat and take a bite.",
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
      className={`${anton.variable} ${dmSans.variable} ${playfair.variable}`}
    >
      <body className="font-sans antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
