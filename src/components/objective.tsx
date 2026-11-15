import { objective } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Objective() {
  return (
    <section id="objective" aria-labelledby="objective-heading">
      <Reveal>
        <h2 id="objective-heading" className="section-title">
          /objective
        </h2>
        <p className="prose">{objective}</p>
      </Reveal>
    </section>
  );
}
