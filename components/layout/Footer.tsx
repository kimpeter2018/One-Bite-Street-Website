import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary mt-32 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="font-heading mb-4 text-2xl font-bold">
              OneBite Street
            </h3>
            <p className="text-text-inverse/80 mb-6 text-sm leading-relaxed">
              Creating unforgettable food festival experiences that bring
              communities together.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/onebitestr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-inverse/80 hover:text-primary transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading mb-4 font-semibold">Quick Links</h4>
            <ul className="text-text-inverse/80 space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading mb-4 font-semibold">Get in Touch</h4>
            <ul className="text-text-inverse/80 space-y-2 text-sm">
              <li>
                <a
                  href="mailto:onebitestr@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  onebitestr@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/onebitestr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  @onebitestr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-secondary-light text-text-inverse/80 mt-12 border-t pt-8 text-center text-sm">
          <p>© {currentYear} OneBite Street. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
