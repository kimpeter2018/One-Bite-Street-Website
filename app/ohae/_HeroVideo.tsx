"use client";

import { useEffect, useRef } from "react";

interface HeroVideoProps {
  src: string;
  /** Optional still shown before the video loads (e.g. the first frame) */
  poster?: string;
  label: string;
}

/**
 * Plays once, muted, then stays on the last frame (no loop).
 * If autoplay is blocked, or the visitor prefers reduced motion,
 * it skips straight to the final frame instead of playing.
 */
export default function HeroVideo({ src, poster, label }: HeroVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;

    const whenReady = (fn: () => void) => {
      if (v.readyState >= 1) fn();
      else v.addEventListener("loadedmetadata", fn, { once: true });
    };
    const showLastFrame = () =>
      whenReady(() => {
        v.pause();
        v.currentTime = Math.max(0, v.duration - 0.05);
      });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      showLastFrame();
      return;
    }

    v.play().catch(showLastFrame);
  }, []);

  return (
    <video
      ref={ref}
      className="ohae-hero-video"
      src={src}
      poster={poster}
      muted
      playsInline
      preload="auto"
      aria-label={label}
    />
  );
}
