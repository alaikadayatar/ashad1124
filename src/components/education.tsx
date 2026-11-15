import { education } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section id="education" aria-labelledby="education-heading">
      <Reveal>
        <h2 id="education-heading" className="section-title">
          /education
        </h2>
        <div className="rows">
          {education.map((item) => (
            <article className="edu" key={item.title}>
              <p className="edu-when">{item.when}</p>
              <div>
                <h3>{item.title}</h3>
                <p>{item.school}</p>
                <p className="edu-place">{item.place}</p>
              </div>
              <p className="edu-note">{item.note}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
