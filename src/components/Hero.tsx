import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 bg-[var(--color-pink)]/10 rounded-full blur-3xl" />

      <div className="max-w-2xl text-center relative z-10">
        <div className="mb-6">
          <Image
            src="/profile.jpg"
            alt="Weiqi An"
            width={120}
            height={120}
            className="rounded-full mx-auto shadow-lg ring-4 ring-white"
          />
        </div>
        <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-sm font-medium mb-6">
          👋 Hey there, I&apos;m
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 bg-gradient-to-r from-[var(--color-text)] via-[var(--color-accent)] to-[var(--color-pink)] bg-clip-text text-transparent">
          Weiqi An
        </h1>
        <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-10 leading-relaxed max-w-lg mx-auto">
          Software Engineer at Pinterest 📌 I build AI things that millions of people use.
          <br />
          Also a city walker 🚶 and part-time Go teacher ⚫⚪
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-7 py-3 rounded-full bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white font-medium transition-all shadow-lg shadow-[var(--color-accent)]/25 hover:shadow-xl hover:shadow-[var(--color-accent)]/30 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-7 py-3 rounded-full border-2 border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] font-medium transition-all hover:-translate-y-0.5"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
