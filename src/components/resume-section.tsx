import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function ResumeSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <Reveal>
      <section id={id} aria-labelledby={`${id}-heading`}>
        <h2
          id={`${id}-heading`}
          className="border-b border-line pb-1.5 font-serif text-[0.95rem] leading-snug font-bold tracking-[0.14em] text-black uppercase"
        >
          {title}
        </h2>
        <div className="mt-3.5">{children}</div>
      </section>
    </Reveal>
  );
}
