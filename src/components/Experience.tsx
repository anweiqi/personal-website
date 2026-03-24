import Image from "next/image";

interface Role {
  company: string;
  logo?: string;
  emoji?: string;
  logoBg: string;
  period: string;
  description: string;
}

const roles: Role[] = [
  {
    company: "Pinterest",
    logo: "/logos/pinterest.svg",
    logoBg: "bg-red-50",
    period: "2019 — Present",
    description: `🛡️ I started on Trust & Safety — a familiar world from my Facebook days. Then jumped to Pinterest's in-house incubator TwoTwenty — basically a small startup inside a big company 🚀 We prototype fast, ship to real users, and figure out what works.\n\n✨ That's where {{shuffles||Shuffles}} came from — a collage app that accidentally went viral on TikTok and became the #1 Lifestyle app. We turned it into a core Pinterest feature. Same with Pinterest TV and Frontseat — live shopping and creator monetization, built end-to-end.\n\n🤖 More recently, I've been deep in AI — building agent systems that power conversational experiences and auto-generate shoppable content at scale.`,
  },
  {
    company: "Facebook (Meta)",
    logo: "/logos/meta.svg",
    logoBg: "bg-blue-50",
    period: "2014 — 2019",
    description: `☀️ My first real job out of school — and my first time on the West Coast! I interned here in the summer of 2014 and never looked back. Bye NYC winters, hello California sunshine and burritos.\n\n🎬 I landed on the Goodwill team — the people behind those Friendversary videos, Friends Day, and the seasonal greetings in your News Feed. If you've ever seen a "Celebrate your friendship!" video on Facebook, that was us.\n\n🛡️ I also worked on trust & safety and business identity systems — figuring out how to keep people safe while making it easy for businesses to exist across Facebook's products.\n\n🤣 Fun fact: my intern project — QR codes friending on Facebook — is somehow still alive 12 years later. Someone even made a {{youtube||YouTube tutorial}} about it in 2025!`,
  },
  {
    company: "Columbia University",
    logo: "/logos/columbia.png",
    logoBg: "bg-sky-50",
    period: "M.S. Computer Science",
    description: `New York City — one and a half intense years of CS, my first real encounter with machine learning, and way too much dollar pizza. 🗽`,
  },
  {
    company: "Peking University",
    logo: "/logos/pku.png",
    logoBg: "bg-red-50",
    period: "B.S. Electrical Engineering",
    description: `Beijing — where it all started. Studied electrical engineering, and somehow ended up writing software for a living. 🏛️`,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--color-surface)]">
      <div className="max-w-3xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4">
          Journey
        </div>
        <h2 className="text-3xl font-bold mb-10">How I got here</h2>

        <div className="space-y-6">
          {roles.map((role) => (
            <div
              key={role.company}
              className="bg-white rounded-2xl border border-[var(--color-border)] p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-xl ${role.logoBg} flex items-center justify-center shrink-0 ${role.logo ? "p-3" : ""}`}
                >
                  {role.logo ? (
                    <Image
                      src={role.logo}
                      alt={role.company}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ) : (
                    <span className="text-3xl">{role.emoji}</span>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-bold">{role.company}</h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {role.period}
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-[14px] text-[var(--color-text-secondary)] leading-relaxed">
                {role.description.split("\n\n").map((para, i) => (
                  <p key={i} dangerouslySetInnerHTML={{
                    __html: para
                      .replace(
                        /\{\{youtube\|\|(.+?)\}\}/g,
                        '<a href="https://www.youtube.com/watch?v=RLvmkrie7vs" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">$1</a>'
                      )
                      .replace(
                        /\{\{shuffles\|\|(.+?)\}\}/g,
                        '<a href="https://www.shffls.com/" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">$1</a>'
                      )
                  }} />
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
