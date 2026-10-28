"use client";

import { useEffect, useState } from "react";

interface NavProps {
  brand: string;
  links: Array<{ label: string; href: string }>;
}

/**
 * Sits on top of the hero video and stays invisible until the visitor
 * hovers the top edge, tabs into it, or scrolls. On touch screens
 * (no hover) it is always visible. Styles live in the page's css string.
 */
export default function Nav({ brand, links }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="ohae-header" data-scrolled={scrolled}>
      <div className="ohae-wrap ohae-header-row">
        <a href="#top" className="ohae-wordmark">
          {brand}
        </a>
        <nav aria-label="Main" className="ohae-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
