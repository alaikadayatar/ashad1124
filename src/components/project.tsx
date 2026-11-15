import { project } from "@/lib/content";
import { ProjectPreview } from "@/components/project-preview";
import { Reveal } from "@/components/reveal";

export function Project() {
  return (
    <section id="work" aria-labelledby="work-heading">
      <Reveal>
        <h2 id="work-heading" className="section-title">
          /work
        </h2>
        <article className="work">
          <ProjectPreview />
          <div className="work-copy">
            <h3>{project.name}</h3>
            <p>{project.summary}</p>
          </div>
          <dl className="meta">
            {project.details.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </article>
      </Reveal>
    </section>
  );
}
