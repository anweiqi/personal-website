interface Article {
  title: string;
  source: string;
  date: string;
  url: string;
  summary: string;
  color: string;
}

const articles: Article[] = [
  {
    title: "Pinterest tests an AI feature that lets advertisers turn their catalogs into shoppable collages",
    source: "TechCrunch",
    date: "Jun 2025",
    url: "https://techcrunch.com/2025/06/11/pinterest-tests-an-ai-feature-that-lets-advertisers-turn-their-catalogs-into-shoppable-collages/",
    summary:
      "Pinterest's \"auto-collages\" AI feature allows advertisers to quickly turn product catalogs into shoppable collages. In early tests, users saved auto-collages at twice the rate of standard product Pins.",
    color: "var(--color-accent)",
  },
  {
    title: "Pinterest says its AI-powered collages are now more engaging than Pins",
    source: "TechCrunch",
    date: "May 2024",
    url: "https://techcrunch.com/2024/05/01/pinterest-says-its-ai-powered-collages-are-now-more-engaging-than-pins/",
    summary:
      "Pinterest's collage feature, powered by AI and computer vision, is seeing three times the engagement of traditional Pins. CEO Bill Ready highlighted collages' traction with Gen Z on the Q1 2024 earnings call.",
    color: "var(--color-pink)",
  },
  {
    title: "Pinterest's Gen Z-focused Shuffles app has now inspired a new Pinterest feature",
    source: "TechCrunch",
    date: "Sep 2023",
    url: "https://techcrunch.com/2023/09/14/pinterests-gen-z-focused-shuffles-app-has-now-inspired-a-new-pinterest-feature/",
    summary:
      "The collage-making capability from Shuffles is heading to Pinterest's main app with a new feature that uses advanced visual technology to cut out images and build interactive, shoppable collages.",
    color: "var(--color-amber)",
  },
  {
    title: "Shuffles, Pinterest's invite-only collage-making app, is blowing up on TikTok",
    source: "TechCrunch",
    date: "Aug 2022",
    url: "https://techcrunch.com/2022/08/24/shuffles-pinterests-invite-only-collage-making-app-is-blowing-up-on-tiktok-heres-how-to-get-in/",
    summary:
      "Despite being invite-only, Shuffles reached #1 Lifestyle app on the U.S. App Store. Gen Z users leveraged the creative expression tool to make \"aesthetic\" collages that went viral on TikTok.",
    color: "var(--color-emerald)",
  },
  {
    title: "Pinterest quietly launches a livestreaming app for video creators",
    source: "TechCrunch",
    date: "May 2022",
    url: "https://techcrunch.com/2022/05/04/pinterest-quietly-launches-a-live-streaming-app-for-video-creators/",
    summary:
      "Pinterest launched a new app for creators to livestream to its platform, allowing multiple devices and different camera angles — another example of Pinterest rethinking its place in social media.",
    color: "var(--color-accent)",
  },
  {
    title: "Pinterest gets into live shopping with launch of Pinterest TV",
    source: "TechCrunch",
    date: "Nov 2021",
    url: "https://techcrunch.com/2021/11/01/pinterest-gets-into-live-shopping-with-launch-of-pinterest-tv/",
    summary:
      "Pinterest TV launched as a series of live, original and shoppable videos featuring creators like Christian Siriano and Tom Daley, with a virtual studio for A/V support.",
    color: "var(--color-pink)",
  },
  {
    title: "Inside Pinterest's innovation lab to create the future of video shopping",
    source: "Fast Company",
    date: "Nov 2021",
    url: "https://www.fastcompany.com/90697203/inside-pinterest-innovation-lab-create-future-video-shopping-tv-twotwenty",
    summary:
      "A deep dive into Pinterest's TwoTwenty incubator — the experimental products team driving innovation in video, shopping, and creator tools.",
    color: "var(--color-amber)",
  },
  {
    title: "Pinterest to test livestreamed events this month with 21 creators",
    source: "TechCrunch",
    date: "May 2021",
    url: "https://techcrunch.com/2021/05/13/pinterest-to-test-live-streamed-events-this-month-with-21-creators/",
    summary:
      "Pinterest's first public test of livestreaming creator content directly inside the app, featuring creators like Jonathan Van Ness and Rebecca Minkoff across a three-day virtual event.",
    color: "var(--color-emerald)",
  },
  {
    title: "Pinterest announces TwoTwenty, its experimental products team and in-house incubator",
    source: "Pinterest Newsroom",
    date: "2021",
    url: "https://newsroom.pinterest.com/news/pinterest-announces-twotwenty-its-experimental-products-team-and-in-house-incubator/",
    summary:
      "Official announcement of TwoTwenty — Pinterest's in-house incubator focused on building experimental products, from early prototyping to launch.",
    color: "var(--color-accent)",
  },
];

export default function Press() {
  return (
    <section id="press" className="py-24 px-6 bg-[var(--color-surface)]">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block px-3 py-1 rounded-full bg-[var(--color-accent-light)] text-[var(--color-accent)] text-xs font-semibold uppercase tracking-wider mb-4">
          In The Press
        </div>
        <h2 className="text-3xl font-bold mb-12">Featured coverage</h2>

        <div className="grid gap-4">
          {articles.map((a) => (
            <a
              key={a.url}
              href={a.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row md:items-start gap-4 bg-white rounded-xl border border-[var(--color-border)] p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="shrink-0 flex items-center gap-3 md:w-36">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: a.color }}
                />
                <div>
                  <p className="text-xs font-semibold text-[var(--color-text)]">{a.source}</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">{a.date}</p>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold group-hover:text-[var(--color-accent)] transition-colors leading-snug mb-1">
                  {a.title}
                  <span className="inline-block ml-1 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                </h3>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {a.summary}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
