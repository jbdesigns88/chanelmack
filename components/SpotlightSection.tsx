import spotlightData from "@/data/spotlight.json";
import { Reveal } from "./Reveal";

export function SpotlightSection() {
  const { eyebrow, title, projects } = spotlightData;

  return (
    <section className="section spotlight" id="spotlight">
      <div className="section-header">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </Reveal>
      </div>
      <div className="card-grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 90}>
            <article className="spot-card">
              <p className="label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.detail}</span>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
