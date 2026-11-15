"use client";

import { useEffect, useId, useRef } from "react";

export function DotField() {
  const rawId = useId().replace(/:/g, "");
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = ref.current;
    if (!svg) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let frame = 0;

    const paint = (x: number, y: number) => {
      const mask = `radial-gradient(200px circle at ${x}px ${y}px, #000 0%, transparent 72%)`;
      svg.style.maskImage = mask;
      svg.style.setProperty("-webkit-mask-image", mask);
    };

    const move = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => paint(event.clientX, event.clientY));
    };

    const clear = () => {
      cancelAnimationFrame(frame);
      const mask = "linear-gradient(transparent, transparent)";
      svg.style.maskImage = mask;
      svg.style.setProperty("-webkit-mask-image", mask);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("blur", clear);
    document.addEventListener("pointerleave", clear);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("blur", clear);
      document.removeEventListener("pointerleave", clear);
    };
  }, []);

  return (
    <svg ref={ref} aria-hidden="true" className="dot-pattern">
      <defs>
        <pattern id={rawId} width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${rawId})`} />
    </svg>
  );
}
