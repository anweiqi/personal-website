import Image from "next/image";


interface PressLink {
  title: string;
  source: string;
  date: string;
  url: string;
}

interface FunFact {
  text: string;
  linkText: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  icon?: string;
  url?: string;
  press?: PressLink[];
  funFact?: FunFact;
}

const projects: Project[] = [
  {
    title: "Journeys",
    description:
      "A conversational Pinterest AI companion app that helps you plan, shop, and get inspired through natural dialogue. It can search Pinterest, find shoppable products, edit images, and guide you through multi-step tasks — all in a chat interface with built-in safety guardrails. Think ChatGPT meets visual discovery.",
    tags: ["LLM", "LangGraph", "ReAct", "Agent Systems"],
    gradient: "from-indigo-500 to-purple-500",
    emoji: "🧭",
    image: "/projects/journeys.jpg",
    imageAlt: "Pinterest Journeys AI conversational experience",
  },
  {
    title: "Auto Collages",
    description:
      "AI that turns product catalogs into beautiful, shoppable collages in minutes. It groups products into outfit ideas, trending looks, and curated collections — then distributes them across Pinterest. People love them so much they save them at 2× the rate of regular Pins — and now advertisers love them too.",
    tags: ["GenAI", "ML Pipelines", "Recommendation", "Ads"],
    gradient: "from-pink-500 to-rose-500",
    emoji: "🎨",
    image: "/projects/auto-collages.webp",
    imageAlt: "Pinterest Auto Collages AI feature",
    press: [
      {
        title: "Pinterest tests an AI feature that lets advertisers turn their catalogs into shoppable collages",
        source: "TechCrunch",
        date: "Jun 2025",
        url: "https://techcrunch.com/2025/06/11/pinterest-tests-an-ai-feature-that-lets-advertisers-turn-their-catalogs-into-shoppable-collages/",
      },
      {
        title: "Pinterest says its AI-powered collages are now more engaging than Pins",
        source: "TechCrunch",
        date: "May 2024",
        url: "https://techcrunch.com/2024/05/01/pinterest-says-its-ai-powered-collages-are-now-more-engaging-than-pins/",
      },
    ],
  },
  {
    title: "Shuffles → Collages",
    description:
      "A collage-making app that lets you cut out objects from any image, layer them into mood boards, and share them as interactive, shoppable content. It blew up on TikTok, hit #1 Lifestyle app on the App Store, and evolved into a core Pinterest format — collages now get 3× the engagement of traditional Pins.",
    tags: ["React Native", "Computer Vision", "iOS"],
    gradient: "from-amber-500 to-orange-500",
    emoji: "✨",
    image: "/projects/shuffles.webp",
    imageAlt: "Pinterest Shuffles collage app",
    icon: "/projects/shuffles-icon.png",
    url: "https://www.shffls.com/",
    press: [
      {
        title: "Pinterest's Gen Z-focused Shuffles app has now inspired a new Pinterest feature",
        source: "TechCrunch",
        date: "Sep 2023",
        url: "https://techcrunch.com/2023/09/14/pinterests-gen-z-focused-shuffles-app-has-now-inspired-a-new-pinterest-feature/",
      },
      {
        title: "Shuffles, Pinterest's invite-only collage-making app, is blowing up on TikTok",
        source: "TechCrunch",
        date: "Aug 2022",
        url: "https://techcrunch.com/2022/08/24/shuffles-pinterests-invite-only-collage-making-app-is-blowing-up-on-tiktok-heres-how-to-get-in/",
      },
    ],
  },
  {
    title: "Frontseat & Pinterest TV",
    description:
      "Live shopping meets the creator economy. Pinterest TV is a series of live, shoppable video shows — think QVC reimagined for the Pinterest generation. Frontseat is the standalone app that powers it all: multi-camera livestreaming, real-time chat, tipping, and one-tap purchasing, all in one place.",
    tags: ["React Native", "Amazon IVS", "MQTT", "Payments"],
    gradient: "from-emerald-500 to-teal-500",
    emoji: "🎥",
    image: "/projects/pinterest-tv.png",
    imageAlt: "Pinterest TV livestream shopping",
    press: [
      {
        title: "Pinterest quietly launches a livestreaming app for video creators",
        source: "TechCrunch",
        date: "May 2022",
        url: "https://techcrunch.com/2022/05/04/pinterest-quietly-launches-a-live-streaming-app-for-video-creators/",
      },
      {
        title: "Pinterest gets into live shopping with launch of Pinterest TV",
        source: "TechCrunch",
        date: "Nov 2021",
        url: "https://techcrunch.com/2021/11/01/pinterest-gets-into-live-shopping-with-launch-of-pinterest-tv/",
      },
      {
        title: "Inside Pinterest's innovation lab to create the future of video shopping",
        source: "Fast Company",
        date: "Nov 2021",
        url: "https://www.fastcompany.com/90697203/inside-pinterest-innovation-lab-create-future-video-shopping-tv-twotwenty",
      },
      {
        title: "Pinterest to test livestreamed events this month with 21 creators",
        source: "TechCrunch",
        date: "May 2021",
        url: "https://techcrunch.com/2021/05/13/pinterest-to-test-live-streamed-events-this-month-with-21-creators/",
      },
    ],
  },
  {
    title: "Admin History Store",
    description:
      "A single source of truth for every trust & safety action across Pinterest — every review, every enforcement decision, every appeal, all in one place. It replaced a patchwork of disconnected systems with a unified data layer that powers real-time enforcement, ML training, analytics dashboards, and audit trails. It also powers Pinterest's public {{transparency||Transparency Report}}.",
    tags: ["Trust & Safety", "Data Platform", "Systems Design"],
    gradient: "from-blue-500 to-cyan-500",
    emoji: "🛡️",
    image: "/projects/pinterest-policy.svg",
    imageAlt: "Pinterest Policy",
  },
  {
    title: "Goodwill & Friends Day",
    description:
      "The system behind those personalized \"Friendversary\" and \"Year in Review\" videos that show up in your Facebook feed — auto-generated from your posts, photos, likes, and friendship history. I also built Cultural Moments and Daily Greetings — animated seasonal cards that appeared atop the News Feed for hundreds of millions of people. ",
    tags: ["Video Generation", "Personalization", "Facebook"],

    gradient: "from-violet-500 to-fuchsia-500",
    emoji: "🎬",
    image: "/projects/friends-day.jpg",
    imageAlt: "Facebook Friends Day personalized video",
    press: [
      {
        title: "Facebook adds new ways to revisit your memories and milestones",
        source: "TechCrunch",
        date: "Aug 2017",
        url: "https://techcrunch.com/2017/08/25/facebook-adds-new-ways-to-revisit-your-memories-and-milestones/",
      },
      {
        title: "Facebook rolls out seasonal greetings at the top of the News Feed",
        source: "TechCrunch",
        date: "Mar 2017",
        url: "https://techcrunch.com/2017/03/20/facebook-rolls-out-seasonal-greetings-at-the-top-of-the-news-feed/",
      },
      {
        title: "Facebook celebrates turning 12 with \"Friends Day\" videos",
        source: "TechCrunch",
        date: "Feb 2016",
        url: "https://techcrunch.com/2016/02/03/guess-faceday-sounded-weird/",
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4">
          Projects
        </div>
        <h2 className="text-3xl font-bold mb-12">Featured work</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const Wrapper = p.url ? "a" : "div";
            const wrapperProps = p.url
              ? { href: p.url, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
            <Wrapper
              key={p.title}
              {...wrapperProps}
              className={`group rounded-2xl border border-[var(--color-border)] overflow-hidden bg-white hover:shadow-lg transition-all flex flex-col${p.url ? " cursor-pointer" : ""}`}
            >
              {/* Image */}
              {p.image && (
                <div className="relative w-full h-40 bg-[var(--color-surface)] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt || p.title}
                    fill
                    style={p.imagePosition ? { objectPosition: p.imagePosition } : undefined}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              )}

              <div className="p-5 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start gap-3 mb-2">
                  {p.icon ? (
                    <Image
                      src={p.icon}
                      alt={`${p.title} icon`}
                      width={36}
                      height={36}
                      className="rounded-lg shrink-0 shadow-sm"
                    />
                  ) : (
                    <div
                      className={`w-9 h-9 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center text-lg shrink-0 shadow-sm`}
                    >
                      {p.emoji}
                    </div>
                  )}
                  <h3 className="text-base font-bold group-hover:text-[var(--color-accent)] transition-colors pt-0.5 leading-snug">
                    {p.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-[13px] text-[var(--color-text-secondary)] leading-relaxed mb-3"
                  dangerouslySetInnerHTML={{
                    __html: p.description.replace(
                      /\{\{transparency\|\|(.+?)\}\}/g,
                      '<a href="https://policy.pinterest.com/en/transparency-report-h1-2025" target="_blank" rel="noopener noreferrer" class="text-[var(--color-accent)] hover:underline">$1</a>'
                    )
                  }}
                />

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-[var(--color-surface)] text-[var(--color-text-secondary)] font-medium border border-[var(--color-border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Fun fact */}
                {p.funFact && (
                  <a
                    href={p.funFact.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-xl p-3 mb-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 hover:shadow-sm transition-all group/fun"
                  >
                    <p className="text-[12px] text-[var(--color-text-secondary)] leading-relaxed">
                      <span className="font-semibold text-amber-600">🤣 Fun fact:</span>{" "}
                      {p.funFact.text}{" "}
                      <span className="text-[var(--color-accent)] group-hover/fun:underline">{p.funFact.linkText} →</span>
                    </p>
                  </a>
                )}

                {/* Press coverage */}
                {p.press && p.press.length > 0 && (
                  <div className="pt-3 mt-auto border-t border-[var(--color-border)]">
                    <p className="text-[11px] font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                      📰 Press Coverage
                    </p>
                    <div className="space-y-1.5">
                      {p.press.map((a) => (
                        <a
                          key={a.url}
                          href={a.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-1.5 text-[12px] leading-snug hover:text-[var(--color-accent)] transition-colors group/link"
                        >
                          <span className="shrink-0 text-[var(--color-accent)] mt-0.5">→</span>
                          <span>
                            <span className="group-hover/link:underline">{a.title}</span>
                            <span className="text-[11px] text-[var(--color-text-secondary)] ml-1">
                              {a.source} · {a.date}
                            </span>
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
