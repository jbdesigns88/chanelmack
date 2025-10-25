import Image from "next/image";
import bioData from "@/data/bio.json";
import { Reveal } from "./Reveal";

export function BioSection() {
  const {
    summaryEyebrow,
    summaryTitle,
    summaryBody,
    story,
    stats,
    representation
  } = bioData;

  return (
    <section className="section bio" id="bio">
      <div className="section-header">
        <Reveal>
          <p className="eyebrow">{summaryEyebrow}</p>
          <h2>{summaryTitle}</h2>
          <p>{summaryBody}</p>
        </Reveal>
      </div>
      <div className="bio-grid">
        <Reveal>
          <article className="bio-card">
            <Image
              src={story.image}
              alt={`${story.headline} visual`}
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="bio-content">
              <h3>{story.headline}</h3>
              <p>{story.paragraph}</p>
              <ul>
                {story.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
        <Reveal delay={120}>
          <article className="bio-card stats">
            <h3>Recent Highlights</h3>
            {stats.map((stat) => (
              <div className="stat" key={stat.detail}>
                <span className="number">{stat.number}</span>
                <span className="detail">{stat.detail}</span>
              </div>
            ))}
            <p>
              Representation: {representation.label} —{" "}
              <a href={`tel:${representation.tel}`}>{representation.phone}</a>
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
