import "./Skills.css";

const SKILL_GROUPS = [
  {
    label: "Languages",
    color: "#6366F1",
    skills: ["Python", "SQL", "HTML / CSS", "JavaScript"],
  },
  {
    label: "AI & Machine Learning",
    color: "#F59E0B",
    skills: ["scikit-learn", "PyTorch", "HuggingFace Transformers", "LangChain", "RAG", "NLP"],
  },
  {
    label: "Data & Retrieval",
    color: "#2DD4BF",
    skills: ["ChromaDB", "SentenceTransformers", "Pandas", "NumPy", "Plotly"],
  },
  {
    label: "Tools & Deployment",
    color: "#a78bfa",
    skills: ["FastAPI", "Streamlit", "Git & GitHub", "Vercel", "Groq", "Tavily"],
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
        <div className="skills-header">
          <p className="tag">SKILLS</p>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-sub">
            Tools and technologies I've used across real projects — not just listed, but applied.
          </p>
        </div>

        <div className="skills-grid">
          {SKILL_GROUPS.map((g) => (
            <div className="skill-group" key={g.label}>
              <div className="skill-group-label" style={{ color: g.color, borderColor: g.color + "33" }}>
                {g.label}
              </div>
              <div className="skill-pills">
                {g.skills.map((s) => (
                  <span className="skill-pill" key={s} style={{ "--c": g.color }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
