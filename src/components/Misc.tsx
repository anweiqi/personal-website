import { basePath } from "@/lib/utils";

export default function Misc() {
  return (
    <section id="misc" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4">
          Beyond Code
        </div>
        <h2 className="text-3xl font-bold mb-10">Life outside the editor</h2>

        <div className="space-y-8">
          {/* Go */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-stone-800 to-stone-600 flex items-center justify-center text-2xl shrink-0 shadow-sm">
                ⚫
              </div>
              <div>
                <h3 className="text-lg font-bold">Go Player</h3>
                <p className="text-sm text-[var(--color-accent)]">
                  National Youth Champion 🏆
                </p>
              </div>
            </div>
            <div className="space-y-4 text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                I&apos;ve played{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Go_(game)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  Go (围棋)
                </a>{" "}
                since I was a kid. It&apos;s the oldest board game still played in
                its original form — 4,000+ years and counting. I was national youth
                champion back in the day, though I don&apos;t play much anymore.
              </p>
              <p>
                These days I also teach Go part-time at the{" "}
                <strong className="text-[var(--color-text)]">SF Go Club</strong>.
                There&apos;s something deeply satisfying about watching someone have
                their first &quot;aha&quot; moment on the board. If you&apos;re in
                SF and curious, come say hi!
              </p>
              <div className="mt-4 rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/projects/go-masters.jpg`}
                  alt="With Rui Naiwei (芮乃伟) and Jiang Zhujiu (江铸久)"
                  className="w-full object-cover rounded-xl"
                />
                <p className="text-xs text-[var(--color-text-secondary)]/70 mt-2 italic">
                  With Go legends Rui Naiwei (芮乃伟) &amp; Jiang Zhujiu (江铸久) 🏆
                </p>
              </div>
            </div>
          </div>

          {/* Skating */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center text-2xl shrink-0 shadow-sm">
                ⛸️
              </div>
              <div>
                <h3 className="text-lg font-bold">Learning to skate</h3>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  New hobby, new bruises
                </p>
              </div>
            </div>
            <div className="space-y-4 text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
              <p>
                Got hooked on ice skating after watching the 2022 Beijing Winter
                Olympics — something about it just clicked. Now I&apos;m out on
                the ice whenever I can. Still very much a beginner, but getting
                better one fall at a time. 😅
              </p>
              <div className="rounded-xl overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${basePath}/projects/skating.jpg`}
                  alt="Learning to ice skate"
                  className="w-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Fun bits */}
          <div className="bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center text-2xl shrink-0 shadow-sm">
                🎲
              </div>
              <h3 className="text-lg font-bold pt-2">Random facts about me</h3>
            </div>
            <ul className="space-y-3 text-[14px] text-[var(--color-text-secondary)] leading-relaxed">

              <li className="flex gap-3">
                <span className="shrink-0">🧸</span>
                <span>
                  My favorite Pop Mart series is Twinkle Twinkle — so cute! 🥹
                </span>
              </li>
              <li className="flex gap-3">
                <span className="shrink-0">🌉</span>
                <span>
                  Based in San Francisco. The fog, the burritos, the AI passion — I
                  love it all.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
