import "./About.css";

const highlights = [
  { icon: "🤖", label: "RAG Systems",        desc: "Built end-to-end retrieval-augmented generation pipelines using LangChain, ChromaDB, and WHO-grounded document retrieval." },
  { icon: "🧠", label: "NLP & LLMs",         desc: "Applied transformer models and large language models for real-world classification, routing, and generation tasks." },
  { icon: "📊", label: "ML & Evaluation",    desc: "Trained, tuned, and rigorously evaluated models using custom benchmarks, GridSearchCV, and multiple scoring metrics." },
  { icon: "⚙️",  label: "Full-Stack AI Apps", desc: "Delivered working applications with FastAPI backends, Streamlit frontends, and deployed demos — end to end." },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">

        <div className="about-left">
          <p className="tag">ABOUT ME</p>
          <h2 className="section-title">Building AI that works in the real world</h2>
          <p className="section-sub">
            I build intelligent systems end-to-end — from data ingestion and model
            training to deployed, working applications. My focus is practical AI:
            retrieval-augmented generation, NLP, and clinical prediction — projects
            where engineering decisions matter as much as the model.
          </p>

          <div className="about-achievements">
            <div className="achievement">
              <span>🥇</span>
              <div>
                <strong>Gold Medalist — BCA</strong>
                <p>Career Point University, Kota</p>
              </div>
            </div>
            <div className="achievement">
              <span>🏆</span>
              <div>
                <strong>Winner — Technofest CODE-O-FIESTA</strong>
                <p>Competitive coding event</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          {highlights.map((h) => (
            <div className="about-card" key={h.label}>
              <div className="about-card-icon">{h.icon}</div>
              <div>
                <h4>{h.label}</h4>
                <p>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
