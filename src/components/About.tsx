export default function About() {
  const skills = [
    { name: "Python / Java / TypeScript", icon: "💻" },
    { name: "React / React Native", icon: "⚛️" },
    { name: "LLM & Agent Systems", icon: "🤖" },
    { name: "GraphQL / LangGraph", icon: "🔗" },
    { name: "Spark / Kafka / Airflow", icon: "⚡" },
    { name: "AWS / Docker / K8s", icon: "☁️" },
    { name: "PyTorch / ML Pipelines", icon: "🧠" },
    { name: "Recommendation Systems", icon: "🎯" },
    { name: "Trust & Safety", icon: "🛡️" },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4">
          About Me
        </div>
        <h2 className="text-3xl font-bold mb-8">
          Turning ideas into{" "}
          <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-pink)] bg-clip-text text-transparent">
            reality for millions
          </span>
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-12">
          <div className="space-y-4 text-[var(--color-text-secondary)] leading-relaxed text-[15px]">
            <p>
              I&apos;m a Senior Staff Software Engineer at Pinterest (ex-Meta),
              building AI-native systems across{" "}
              <strong className="text-[var(--color-text)]">
                LLM applications, evaluation, and large-scale consumer deployment
              </strong>.
            </p>
            <p>
              I build end-to-end agent systems — from orchestration and tool use
              to safety guardrails, feedback loops, and evaluation pipelines —
              turning early-stage capabilities into production systems used by
              millions.
            </p>
            <p>
              My work spans the full stack — product backend, web, mobile
              (React Native/iOS), recommendation systems, model training, data
              pipelines, trust &amp; safety, and more recently LLM-powered
              products. I go wherever the problem needs me, with a focus on
              reliability, iteration velocity, and real-world impact.
            </p>
            <p>
              I hold an M.S. in Computer Science from{" "}
              <strong className="text-[var(--color-text)]">Columbia University</strong> and a
              B.S. in Electrical Engineering from{" "}
              <strong className="text-[var(--color-text)]">Peking University</strong>.
            </p>
          </div>

          <div className="space-y-5">
            <div className="bg-[var(--color-surface)] rounded-2xl p-5 border border-[var(--color-border)]">
              <h3 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-4">
                Tech I work with
              </h3>
              <ul className="space-y-2.5">
                {skills.map((s) => (
                  <li
                    key={s.name}
                    className="text-sm text-[var(--color-text-secondary)] flex items-center gap-2.5"
                  >
                    <span>{s.icon}</span> {s.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
