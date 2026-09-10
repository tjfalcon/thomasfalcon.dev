const projects = [
  {
    status: "BUILDING",
    title: "RoleSignal",
    summary:
      "A citation-backed job-fit analysis system that separates supported experience from adjacent skills and real gaps.",
    proof: ["Next.js + TypeScript", "Python + FastAPI", "Hybrid retrieval", "Grounded evaluations"],
    href: "https://github.com/tjfalcon/rolesignal",
    cta: "Follow the build",
  },
  {
    status: "HARDENING",
    title: "Open Search and Rescue",
    summary:
      "A container-first coordination product for helping families and communities share authoritative search status without encouraging unsafe self-deployment.",
    proof: ["Next.js full stack", "Docker + K8s path", "Public-interest UX", "Safety-first design"],
    href: "https://github.com/tjfalcon/open-search-and-rescue",
    cta: "Inspect the architecture",
  },
];

const evidence = [
  ["12 years", "Software engineering and systems delivery"],
  ["21M+", "Monthly users supported through AutoZone.com modernization"],
  ["10x", "Increase in autonomous-vehicle test-drive throughput"],
  ["$2M+", "Annual savings from a global sourcing platform"],
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Thomas Falcon home">TF<span>/</span></a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="/Thomas-Falcon-Resume.pdf">Résumé</a>
          <a href="https://www.linkedin.com/in/thomasfalcon/">LinkedIn</a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="availability"><span aria-hidden="true" /> Open to senior engineering opportunities</div>
        <p className="eyebrow">Senior full-stack engineer · Technical lead</p>
        <h1>I build reliable software where <em>systems, people, and AI</em> meet.</h1>
        <p className="lede">
          I turn ambiguous operational problems into maintainable products—combining enterprise
          web architecture, delivery leadership, and applied AI with measurable outcomes.
        </p>
        <div className="actions">
          <a className="button primary" href="#work">Explore the work <span aria-hidden="true">→</span></a>
          <a className="button secondary" href="mailto:Thomasjfalcon@gmail.com">Start a conversation</a>
        </div>
      </section>

      <section className="signalBand" aria-label="Selected impact">
        <div className="shell metrics">
          {evidence.map(([value, label]) => (
            <div className="metric" key={value}>
              <strong>{value}</strong><span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="sectionHead">
          <div><p className="eyebrow">Selected work</p><h2>Evidence over adjectives.</h2></div>
          <p>Public products and case studies that make the architecture, tradeoffs, quality controls, and outcomes inspectable.</p>
        </div>
        <div className="projectGrid">
          {projects.map((project, index) => (
            <article className="project" key={project.title}>
              <div className="projectTop"><span className={`status ${project.status.toLowerCase()}`}>{project.status}</span><span>0{index + 1}</span></div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>{project.proof.map((item) => <li key={item}>{item}</li>)}</ul>
              <a href={project.href}>{project.cta} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell approach" id="approach">
        <div><p className="eyebrow">Operating model</p><h2>Build the smallest trustworthy system.</h2></div>
        <ol>
          <li><span>01</span><div><strong>Find the real problem</strong><p>Work close to users and operations before committing to architecture.</p></div></li>
          <li><span>02</span><div><strong>Make uncertainty visible</strong><p>Use citations, evaluations, observability, and explicit human decisions.</p></div></li>
          <li><span>03</span><div><strong>Ship, measure, improve</strong><p>Prefer working software and fast feedback over speculative complexity.</p></div></li>
        </ol>
      </section>

      <section className="section shell now">
        <div><p className="eyebrow">Now</p><h2>An eight-week applied-AI build.</h2></div>
        <div className="timeline" aria-label="Current build roadmap">
          {[
            "RAG MVP", "Retrieval evals", "Reliability", "Case study",
            "OSAR workflow", "Container trial", "Market packaging", "Conversion sprint",
          ].map((item, i) => (
            <div className={i === 0 ? "active" : ""} key={item}><span>W{i + 1}</span><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <footer className="footer shell">
        <div><strong>Thomas Falcon</strong><span>Colorado Springs, CO · Remote</span></div>
        <div><a href="https://github.com/tjfalcon">GitHub</a><a href="https://www.linkedin.com/in/thomasfalcon/">LinkedIn</a><a href="mailto:Thomasjfalcon@gmail.com">Email</a></div>
      </footer>
    </main>
  );
}
