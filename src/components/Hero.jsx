import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section className="hero">
      <div className="hero-glow" />
      <div className="hero-inner">

        <p className="hero-eyebrow">AI / ML Developer</p>

        <h1 className="hero-name">
          Aditi Sharma<span className="accent"></span>
        </h1>

        <p className="hero-bio">
          Building practical AI systems—from machine learning models to
           RAG-powered applications—that people can actually use.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo("projects")}>
            View Projects
          </button>
          <a
  href="https://drive.google.com/file/d/1DEy3ckC15XfncWNIMRHAGtGi7iUnA4Yw/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-secondary"
>
  View Resume ↗
</a>
          <a href="https://github.com/aditi838" target="_blank" rel="noreferrer" className="btn-ghost">
            GitHub ↗
          </a>
        </div>

      </div>
    </section>
  );
}
