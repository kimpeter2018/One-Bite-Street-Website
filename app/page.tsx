"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CompanyValue from "@/components/sections/Companyvalue";

export default function HomePage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "100vh", minHeight: "600px" }}
      >
        <Image
          src="/images/tinydesk.jpg"
          alt="Tiny Desk"
          fill
          priority
          className="object-cover object-[center_30%]"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0e1a12]/78" />

        {/* Center copy */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-10 text-center">
          <p
            className={`mb-10 font-sans text-[11px] font-light tracking-[0.38em] text-white/50 uppercase transition-opacity duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Hospitality Collective
          </p>

          <h1
            className={`font-anton max-w-[1100px] leading-[0.92] tracking-[-0.01em] transition-all duration-1000 ${
              visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            style={{
              fontSize: "clamp(72px, 13vw, 160px)",
              transitionDelay: "300ms",
            }}
          >
            <span style={{ color: "#ffffff" }}>GRAB A</span>
            <br />
            <span style={{ color: "#ffffff" }}>SEAT AND</span>
            <br />
            <span style={{ color: "#FF3D6B" }}>TAKE A BITE.</span>
          </h1>
        </div>

        {/* Scroll nudge */}
        <div
          className={`absolute right-10 bottom-10 z-10 flex flex-col items-center gap-2 transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1600ms" }}
        >
          <span
            className="mb-2 font-sans text-[9px] tracking-[0.2em] text-white/28 uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Scroll
          </span>
          <div className="relative h-12 w-px overflow-hidden bg-white/15">
            <div className="animate-scrollLine absolute top-0 left-0 h-[40%] w-full bg-[#FF3D6B]" />
          </div>
        </div>
      </section>

      {/* ── COMPANY VALUE ─────────────────────────── */}
      <CompanyValue />
    </div>
  );
}
