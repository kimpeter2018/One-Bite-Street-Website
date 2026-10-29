import { SITE_CONFIG } from "@/lib/metadata";
import Image from "next/image";
import Nav from "./_Nav";

// ─── Editable content ────────────────────────────────────────────────────────
// Everything that may change (name, hours, address) lives here, so a rename
// like "ohae cafe" or "ohae room" is a one-line edit.

const BRAND = "ohae";

const ADDRESS = {
  street: "Elisabethstraße 13",
  city: "35037 Marburg",
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Elisabethstra%C3%9Fe+13+35037+Marburg";

const HERO_IMAGE = "/images/ohae-hero.jpeg";

const INSTAGRAM_URL = "https://instagram.com/ohae_cafe";
const INSTAGRAM_HANDLE = "@ohae_cafe";

const OPENING = "at the end of November";

const HOURS: Array<{
  days: string;
  services: Array<{ name: string; time: string }> | null;
}> = [
  {
    days: "Monday to Wednesday",
    services: [{ name: "Coffee", time: "9:00 – 20:00" }],
  },
  {
    days: "Thursday to Saturday",
    services: [
      { name: "Coffee", time: "9:00 – 17:00" },
      { name: "Wine bar & bistro", time: "17:00 – 22:00" },
    ],
  },
  { days: "Sunday", services: null },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function OhaePageClient() {
  const year = new Date().getFullYear();

  return (
    <div className="ohae">
      <style>{css}</style>

      {/* Hidden over the hero until hover, focus or scroll */}
      <Nav
        brand={BRAND}
        links={[
          { label: "About", href: "#about" },
          { label: "Hours", href: "#hours" },
          { label: "Find us", href: "#find-us" },
        ]}
      />

      <main id="top">
        {/* Hero image fills the first screen */}
        <section className="ohae-hero">
          <div className="ohae-hero-stage">
            <Image
              className="ohae-hero-image"
              src={HERO_IMAGE}
              alt="Something new is coming"
              fill
              priority
              sizes="100vw"
            />
          </div>
        </section>

        {/* Name and intro, below the hero */}
        <section className="ohae-intro">
          <div className="ohae-wrap">
            <h1 className="ohae-display">{BRAND}</h1>
            <p className="ohae-lead">
              Good coffee by day, wine and small plates in the evening. A place
              that feels like home.
            </p>
            <p className="ohae-hero-note">
              Opening {OPENING}. {ADDRESS.street}, Marburg.
            </p>
          </div>
        </section>

        {/* About */}
        <section id="about" className="ohae-section">
          <div className="ohae-wrap ohae-split">
            <h2 className="ohae-h2">A place to stay a while</h2>
            <div className="ohae-prose">
              <p>
                {BRAND} is a new café and wine bar in Marburg, built around a
                simple idea: you should feel at home the moment you walk in, and
                you should be able to stay as long as you like.
              </p>
              <p>
                We take the details seriously. Carefully made coffee, desserts,
                wine and beer, and tapas to share. Good enough to take
                seriously, relaxed enough that you never have to.
              </p>
            </div>
          </div>
        </section>

        {/* Day / evening */}
        <section className="ohae-section ohae-section-alt">
          <div className="ohae-wrap">
            <h2 className="ohae-h2">One room, two moods</h2>
            <div className="ohae-two">
              <article>
                <h3 className="ohae-h3">Coffee, during the day</h3>
                <p>
                  Espresso and filter coffee, matcha, and something sweet on the
                  side. Open Monday to Saturday for a quick stop, a long
                  catch-up, or a laptop and a quiet table.
                </p>
              </article>
              <article>
                <h3 className="ohae-h3">
                  Wine bar and bistro, Thursday to Saturday evenings
                </h3>
                <p>
                  From 17:00 the coffee machine rests and the wine comes out.
                  Wine and beer, with good fingerfood and tapas for sharing.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Hours */}
        <section id="hours" className="ohae-section">
          <div className="ohae-wrap ohae-split">
            <h2 className="ohae-h2">Opening hours</h2>
            <div>
              <table className="ohae-hours">
                <caption className="ohae-sr">Opening hours</caption>
                <tbody>
                  {HOURS.map((row) => (
                    <tr key={row.days}>
                      <th scope="row">{row.days}</th>
                      <td>
                        {row.services ? (
                          row.services.map((s) => (
                            <div key={s.name} className="ohae-hours-line">
                              <span>{s.name}</span>
                              <span>{s.time}</span>
                            </div>
                          ))
                        ) : (
                          <span className="ohae-muted">Closed</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="ohae-muted ohae-small">
                These hours apply from opening.
              </p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="find-us" className="ohae-section ohae-section-alt">
          <div className="ohae-wrap ohae-split">
            <h2 className="ohae-h2">Find us</h2>
            <div className="ohae-prose">
              <address className="ohae-address">
                {BRAND}
                <br />
                {ADDRESS.street}
                <br />
                {ADDRESS.city}
              </address>
              <p>
                <a
                  className="ohae-link"
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </p>
              <p>
                We open {OPENING}. Follow us on Instagram for the exact date and
                first photos of the space:{" "}
                <a
                  className="ohae-link"
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* One Bite Street */}
        <section className="ohae-section">
          <div className="ohae-wrap ohae-split">
            <h2 className="ohae-h3">Behind {BRAND}</h2>
            <div className="ohae-prose">
              <p>
                {BRAND} is run by One Bite Street, a culinary and hospitality
                consulting company based in Marburg. We help food and
                hospitality businesses get started and grow, and {BRAND} is our
                own place.
              </p>
              <p>
                <a className="ohae-link" href={SITE_CONFIG.url}>
                  Visit One Bite Street
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="ohae-footer">
        <div className="ohae-wrap ohae-footer-row">
          <span>
            © {year} {BRAND}, {ADDRESS.street}, {ADDRESS.city}
          </span>
          <span className="ohae-footer-links">
            <a href="/impressum">Impressum</a>
            <a href="/datenschutz">Datenschutz</a>
          </span>
        </div>
      </footer>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────────────────
// Placeholder tokens. Swap these once the design guidelines arrive.

const css = `
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Fraunces:opsz,wght@9..144,400;9..144,500&display=swap');

.ohae {
  --bg: #faf8f5;
  --bg-alt: #f1ece4;
  --ink: #2b2623;
  --ink-soft: #6b625b;
  --line: #ddd5ca;
  --accent: #2a6120;
  --hero-bg: #faf8f5;
  --font-body: 'DM Sans', system-ui, sans-serif;
  --font-display: 'Fraunces', Georgia, serif;

  background: var(--bg);
  color: var(--ink);
  font-family: var(--font-body);
  font-size: 17px;
  line-height: 1.7;
  min-height: 100vh;
}
.ohae *, .ohae *::before, .ohae *::after { box-sizing: border-box; }
.ohae h1, .ohae h2, .ohae h3, .ohae p, .ohae address { margin: 0; font-style: normal; }
.ohae a { color: inherit; }

.ohae-wrap { max-width: 1040px; margin: 0 auto; padding: 0 1.5rem; }
.ohae-sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }

/* Header: floats over the hero, hidden until hover / focus / scroll */
.ohae-header { position: fixed; top: 0; left: 0; right: 0; z-index: 50; opacity: 0; background: transparent; transition: opacity .2s ease, background-color .2s ease; }
.ohae-header:hover, .ohae-header:focus-within { opacity: 1; background: rgba(250,248,245,.92); }
.ohae-header[data-scrolled="true"] { opacity: 1; background: var(--bg); border-bottom: 1px solid var(--line); }
@media (hover: none) { .ohae-header { opacity: 1; background: rgba(250,248,245,.92); } }
.ohae-header-row { display: flex; align-items: center; justify-content: space-between; height: 72px; }
.ohae-wordmark { font-family: var(--font-display); font-size: 26px; text-decoration: none; }
.ohae-nav { display: flex; gap: 1.75rem; font-size: 15px; }
.ohae-nav a { text-decoration: none; color: var(--ink-soft); padding: 4px 0; border-bottom: 1px solid transparent; transition: color .15s, border-color .15s; }
.ohae-nav a:hover { color: var(--ink); border-bottom-color: var(--ink); }
html { scroll-padding-top: 72px; }

/* Hero image: fills the first screen edge to edge. cover = no side bars;
   on screens wider than 16:9 a thin slice is cropped from top and bottom.
   Keep important drawing/text away from the very top and bottom edges. */
.ohae-hero-stage { position: relative; height: 100vh; height: 100svh; min-height: 360px; background: var(--hero-bg); }
.ohae-hero-image { object-fit: cover; object-position: center; }
.ohae-intro { padding: clamp(56px, 8vw, 96px) 0 clamp(40px, 6vw, 72px); }
.ohae-display { font-family: var(--font-display); font-weight: 400; font-size: clamp(44px, 7vw, 80px); line-height: 1; letter-spacing: -0.02em; }
.ohae-lead { margin-top: 1rem; max-width: 30em; font-size: clamp(18px, 1.8vw, 21px); line-height: 1.55; }
.ohae-hero-note { margin-top: .75rem; color: var(--ink-soft); font-size: 15px; }

/* Sections */
.ohae-section { padding: clamp(56px, 8vw, 96px) 0; }
.ohae-section-alt { background: var(--bg-alt); }
.ohae-split { display: grid; grid-template-columns: 1fr 2fr; gap: 3rem; align-items: start; }
.ohae-two { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-top: 2.5rem; }
.ohae-two p { max-width: 32em; }
.ohae-h2 { font-family: var(--font-display); font-weight: 400; font-size: clamp(28px, 3.6vw, 40px); line-height: 1.15; }
.ohae-h3 { font-family: var(--font-display); font-weight: 400; font-size: 24px; line-height: 1.25; margin-bottom: .75rem; }
.ohae-prose { max-width: 36em; display: flex; flex-direction: column; gap: 1.1rem; }
.ohae-muted { color: var(--ink-soft); }
.ohae-small { font-size: 14px; margin-top: 1rem; }

/* Hours */
.ohae-hours { width: 100%; max-width: 36em; border-collapse: collapse; }
.ohae-hours th, .ohae-hours td { padding: 1rem 0; border-bottom: 1px solid var(--line); text-align: left; vertical-align: top; font-weight: 400; }
.ohae-hours th { width: 45%; padding-right: 1rem; }
.ohae-hours-line { display: flex; justify-content: space-between; gap: 1rem; }
.ohae-hours-line + .ohae-hours-line { margin-top: .35rem; }

/* Links */
.ohae-address { font-size: 20px; line-height: 1.55; }
.ohae-link { color: var(--accent); text-decoration: underline; text-underline-offset: 3px; transition: text-underline-offset .15s; }
.ohae-link:hover { text-underline-offset: 5px; }

/* Footer */
.ohae-footer { border-top: 1px solid var(--line); padding: 2rem 0; font-size: 14px; color: var(--ink-soft); }
.ohae-footer-row { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem; }
.ohae-footer-links { display: flex; gap: 1.5rem; }
.ohae-footer a { text-decoration: none; transition: color .15s; }
.ohae-footer a:hover { color: var(--ink); }

.ohae a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }

@media (max-width: 640px) {
  .ohae-hero-stage { height: auto; min-height: 0; aspect-ratio: 2048 / 1152; }
}
@media (max-width: 720px) {
  .ohae-split, .ohae-two { grid-template-columns: 1fr; gap: 1.5rem; }
  .ohae-nav { gap: 1.1rem; font-size: 14px; }
}
@media (prefers-reduced-motion: reduce) {
  .ohae * { transition: none !important; }
}
`;
