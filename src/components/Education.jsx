import "./Education.css";

const EDUCATION = [
  {
    degree:  "Master of Computer Applications (MCA)",
    school:  "Banaras Hindu University",
    years:   "2023 – 2025",
    color:   "#6366F1",
    detail:  "Focused on machine learning, NLP, and applied AI systems. Completed three end-to-end AI projects including a RAG healthcare assistant evaluated on 231 benchmark questions.",
    tags:    ["Machine Learning", "NLP", "RAG", "LLMs", "Python"],
  },
  {
    degree:  "Bachelor of Computer Applications (BCA)",
    school:  "Career Point University, Kota",
    years:   "2020 – 2023",
    color:   "#F59E0B",
    detail:  "Graduated with Gold Medal — highest distinction in the programme. Winner of Technofest CODE-O-FIESTA competitive coding event.",
    tags:    ["Gold Medalist 🥇", "CODE-O-FIESTA Winner 🏆", "Data Structures", "SQL"],
    gold:    true,
  },
];

export default function Education() {
  return (
    <section className="education" id="education">
      <div className="education-inner">
        <div className="education-header">
          <p className="tag">EDUCATION</p>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="edu-timeline">
          {EDUCATION.map((e) => (
            <div className="edu-card" key={e.degree} style={{ "--c": e.color }}>
              <div className="edu-line" />
              <div className="edu-dot" />
              <div className="edu-body">
                <div className="edu-year">{e.years}</div>
                <h3>{e.degree}</h3>
                <p className="edu-school">{e.school}</p>
                <p className="edu-detail">{e.detail}</p>
                <div className="edu-tags">
                  {e.tags.map((t) => (
                    <span className="edu-tag" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
