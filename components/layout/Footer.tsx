import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal mt-32 text-black">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-heading mb-4 text-2xl font-bold">
              One Bite Street
            </h3>
            <p className="text-sand mb-6 text-sm leading-relaxed">
              BE HUMAN: co-live, co-work, and co-entertain. Building sustainable
              ecosystems where creators can thrive and communities can gather.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-sand hover:text-warmth transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sand hover:text-warmth transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-sand hover:text-warmth transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading mb-4 font-semibold">Ventures</h4>
            <ul className="text-sand space-y-2 text-sm">
              <li>
                <Link
                  href="/ventures/food-festivals"
                  className="hover:text-warmth transition-colors"
                >
                  Food Festivals
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures/cafe-restaurant"
                  className="hover:text-warmth transition-colors"
                >
                  Café & Restaurant
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures/hotel-accommodation"
                  className="hover:text-warmth transition-colors"
                >
                  Hotel & Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures/creative-hub"
                  className="hover:text-warmth transition-colors"
                >
                  Creative Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/ventures/fb-consulting"
                  className="hover:text-warmth transition-colors"
                >
                  F&B Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading mb-4 font-semibold">Company</h4>
            <ul className="text-sand space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-warmth transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-warmth transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/residency"
                  className="hover:text-warmth transition-colors"
                >
                  Creative Residency
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="hover:text-warmth transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-warmth transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-graphite text-sand mt-12 border-t pt-8 text-sm">
          <p>© {currentYear} One Bite Street. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
