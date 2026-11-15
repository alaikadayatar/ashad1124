import { skills } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <Reveal>
        <h2 id="skills-heading" className="section-title">
          /skills
        </h2>
        <ul className="skill-list">
          {skills.map((skill) => (
            <li key={skill}>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
