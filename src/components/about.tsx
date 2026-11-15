import { about } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <Reveal>
        <h2 id="about-heading" className="section-title">
          /about
        </h2>
        <div className="bio-entries">
          {about.map((paragraph, index) => (
            <div className="bio-entry" key={paragraph}>
              <span className="bio-num">{String(index + 1).padStart(2, "0")}</span>
              <p className="bio-text">{paragraph}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
