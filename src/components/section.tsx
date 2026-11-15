import type { ReactNode } from "react";

export function Wrap({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`mx-auto w-full max-w-[72rem] px-6 md:px-10 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  titleId,
  children,
  className = "",
}: {
  id: string;
  titleId: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={`border-t border-line py-24 md:py-32 lg:py-36 ${className}`}
    >
      <Wrap>{children}</Wrap>
    </section>
  );
}

export function SectionTitle({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <h2
      id={id}
      className="font-serif text-[clamp(2.45rem,4.8vw,3.7rem)] leading-[1.05] tracking-[-0.03em] text-balance text-foreground"
    >
      {children}
    </h2>
  );
}
