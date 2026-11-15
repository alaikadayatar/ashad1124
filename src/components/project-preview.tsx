"use client";

import { useRef, type PointerEvent } from "react";

export function ProjectPreview() {
  const frame = useRef<HTMLDivElement>(null);

  function move(event: PointerEvent<HTMLDivElement>) {
    const node = frame.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rect = node.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    node.style.transform = `perspective(900px) rotateX(${(-y * 4).toFixed(2)}deg) rotateY(${(x * 5).toFixed(2)}deg)`;
  }

  function leave() {
    if (frame.current) frame.current.style.transform = "";
  }

  return (
    <div
      ref={frame}
      className="preview"
      onPointerMove={move}
      onPointerLeave={leave}
    >
      <svg viewBox="0 0 320 180" className="preview-chart" aria-hidden="true">
        <path
          d="M16 128 C 52 126, 62 92, 92 96 S 132 150, 164 112 S 214 48, 248 70 S 286 118, 304 86"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        {[
          [92, 96],
          [164, 112],
          [248, 70],
          [304, 86],
        ].map(([cx, cy]) => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.4" fill="currentColor" />
        ))}
        <circle cx="248" cy="70" r="4.5" fill="none" stroke="var(--accent)" strokeWidth="1.2" />
      </svg>
      <span className="preview-label">In development</span>
    </div>
  );
}
