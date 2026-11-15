import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-heading">
      <p id="intro-heading" className="headline">
        <span className="word" style={{ animationDelay: "0.05s" }}>
          {profile.headline[0]}
        </span>
        <br />
        <span className="word" style={{ animationDelay: "0.16s" }}>
          {profile.headline[1]}
        </span>
      </p>
      <p className="lede fade-up" style={{ animationDelay: "0.28s" }}>
        {profile.description}
      </p>
      <div className="actions fade-up" style={{ animationDelay: "0.4s" }}>
        <a className="btn" href="#work">
          Explore Projects
        </a>
        <a className="btn quiet" href="#contact">
          Contact Me
        </a>
      </div>
    </section>
  );
}
