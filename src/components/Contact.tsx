export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[var(--color-surface)]">
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4">
          Contact
        </div>
        <h2 className="text-3xl font-bold mb-4">Let&apos;s connect</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
          I&apos;m always open to discussing AI systems, product engineering,
          and interesting technical challenges. Feel free to reach out!
        </p>

        <a
          href="mailto:weiqian.pku@gmail.com"
          className="inline-block px-8 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-medium transition-all shadow-lg shadow-[var(--color-accent)]/25 hover:shadow-xl hover:-translate-y-0.5"
        >
          Say Hello ✉️
        </a>

        <div className="flex justify-center gap-6 mt-12">
          <a
            href="https://github.com/anweiqi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-[var(--color-border)] text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/anweiqi/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full border border-[var(--color-border)] text-sm font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
