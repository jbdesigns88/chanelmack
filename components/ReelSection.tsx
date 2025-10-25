import reelData from "@/data/reel.json";
import { Reveal } from "./Reveal";

const YOUTUBE_BASE = "https://www.youtube.com/embed/";

export function ReelSection() {
  const { eyebrow, title, videoId } = reelData;

  return (
    <section className="section reel" id="reel">
      <div className="section-header">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </Reveal>
      </div>
      <Reveal delay={120}>
        <div className="reel-player">
          <iframe
            title="Chanel Mack Acting Reel"
            src={`${YOUTUBE_BASE}${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Reveal>
    </section>
  );
}
