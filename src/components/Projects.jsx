import "./Projects.css";

const PROJECTS = [
  {
    id:         "medbot",
    tag:        "RAG · LLM · Healthcare",
    title:      "MedBot",
    subtitle:   "RAG Healthcare Assistant",
    screenshot: "/RAG-Dengue-1.png",
    desc:       "An intent-aware healthcare assistant that routes queries across six specialised LangChain workflows before retrieval or generation. Grounded in WHO documents with real-time Tavily search and shared conversation memory.",
    color:      "#6366F1",
    dim:        "rgba(99,102,241,0.08)",
    stack:      ["LangChain", "ChromaDB", "Groq · Llama 3", "FastAPI", "Streamlit", "Tavily"],
    metrics:    [
      { val: "6",     label: "Intent Workflows" },
      { val: "7,503", label: "WHO Chunks" },
      { val: "231",   label: "Eval Questions" },
    ],
    links: {
      portfolio: "https://medbot-portfolio.vercel.app/",
      github:    "https://github.com/aditi838/MedBot",
    },
  },
  {
  id:         "emotion",
  tag:        "NLP · Transformers · Emotion Classification",
  title:      "Emotion Analysis",
  subtitle:   "Transformer-Based Emotion & Sentiment Analysis",
  screenshot: "/emotion-ss.jpg",
  desc:       "Analyzes English text using DistilRoBERTa fine-tuned across six emotion datasets to classify seven core emotions. Combines transformer-based emotion and sentiment analysis with interactive confidence visualizations for intuitive interpretation.",
  color:      "#2DD4BF",
  dim:        "rgba(45,212,191,0.08)",
  stack:      [
    "DistilRoBERTa",
    "RoBERTa",
    "Hugging Face Transformers",
    "PyTorch",
    "Plotly",
    "Streamlit"
  ],
  metrics: [
    { val: "7",    label: "Core Emotions" },
    { val: "2",    label: "NLP Models" },
    { val: "6", label: "Training Datasets" },
  ],
  links: {
    demo:   "https://emotionanalysis-text-and-voice.streamlit.app/",
    github: "https://github.com/aditi838/emotionAnalysis",
  },
},
  {
    id:         "diabetes",
    tag:        "ML · Clinical · Prediction",
    title:      "Diabetes Risk Predictor",
    subtitle:   "Early-Stage Diabetes Risk Checker",
    screenshot: "/diabetes.jpg",
    desc:       "Predicts early-stage diabetes risk from plain-language symptom inputs using a GridSearchCV-tuned SVM. Built with a patient-first UI that replaces medical jargon with questions anyone can answer.",
    color:      "#F59E0B",
    dim:        "rgba(245,158,11,0.08)",
    stack:      ["SVM", "scikit-learn", "GridSearchCV", "StandardScaler", "Plotly", "Streamlit"],
    metrics:    [
      { val: "96.2%", label: "Test Accuracy" },
      { val: "97.3%", label: "CV Accuracy" },
      { val: "16",    label: "Clinical Features" },
    ],
    links: {
      demo:   "https://early-stage-diabetes-prediction-v2.streamlit.app/",
      github: "https://github.com/aditi838/early-stage-diabetes-prediction",
    },
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-inner">
        <div className="projects-header">
          <p className="tag">PROJECTS</p>
          <h2 className="section-title">Things I've Built</h2>
          <p className="section-sub">
            Three end-to-end AI applications — each with a deployed demo, a documented
            codebase, and real engineering decisions behind the architecture.
          </p>
        </div>

        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div className="project-card" key={p.id} style={{ "--accent": p.color, "--accent-dim": p.dim }}>

              {/* Screenshot */}
              <div className="project-screenshot">
                <img
                  src={p.screenshot}
                  alt={`${p.title} screenshot`}
                  onError={(e) => { e.target.style.display = "none"; e.target.parentNode.classList.add("no-image"); }}
                />
                <div className="screenshot-placeholder">
                  <span>{p.title}</span>
                </div>
              </div>

              <div className="project-top">
                <span className="project-tag">{p.tag}</span>
                <h3>{p.title}</h3>
                <p className="project-subtitle">{p.subtitle}</p>
                <p className="project-desc">{p.desc}</p>
              </div>

              <div className="project-metrics">
                {p.metrics.map((m) => (
                  <div className="project-metric" key={m.label}>
                    <span className="metric-val">{m.val}</span>
                    <span className="metric-label">{m.label}</span>
                  </div>
                ))}
              </div>

              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="stack-pill" key={s}>{s}</span>
                ))}
              </div>

              <div className="project-links">
                {p.links.portfolio && (
                  <a href={p.links.portfolio} target="_blank" rel="noreferrer" className="plink primary">
                    View Portfolio ↗
                  </a>
                )}
                {p.links.demo && (
                  <a href={p.links.demo} target="_blank" rel="noreferrer" className="plink primary">
                    Live Demo ↗
                  </a>
                )}
                <a href={p.links.github} target="_blank" rel="noreferrer" className="plink ghost">
                  GitHub ↗
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
