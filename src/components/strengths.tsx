import { strengths } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Strengths() {
  return (
    <section id="strengths" aria-labelledby="strengths-heading">
      <Reveal>
        <h2 id="strengths-heading" className="section-title">
          /strengths
        </h2>
        <ul className="plain-list">
          {strengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
