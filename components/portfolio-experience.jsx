"use client";

import { useEffect } from "react";

const chapters = [
  {
    id: "01",
    title: "Narrative-first interfaces",
    copy:
      "Every screen should feel like a scene change. I design landing experiences that move with clarity, tension, and release, so visitors understand the work before they read a single caption."
  },
  {
    id: "02",
    title: "Motion with intent",
    copy:
      "Scroll is treated as choreography, not decoration. Layers drift, content locks into place, and micro-interactions reinforce hierarchy instead of competing for attention."
  },
  {
    id: "03",
    title: "Performance as luxury",
    copy:
      "The best premium websites feel effortless. I pair immersive visuals with clean frontend architecture, responsive systems, and careful pacing so the experience stays fast on real devices."
  }
];

const featuredProjects = [
  {
    title: "Luma Atelier",
    type: "Luxury commerce concept",
    summary:
      "A cinematic storefront where product discovery feels editorial, with layered storytelling, fluid transitions, and a high-conversion purchasing flow.",
    stats: ["+41% deeper sessions", "4.8s average story path", "Motion-led PDP"],
    tone: "gold"
  },
  {
    title: "Astra Broadcast",
    type: "Launch campaign system",
    summary:
      "A dark-to-light product reveal experience for a next-gen platform launch, designed to scale across landing pages, teasers, and feature spotlights.",
    stats: ["6 modular scenes", "Multi-device narrative", "Reusable motion system"],
    tone: "blue"
  },
  {
    title: "Drift Protocol",
    type: "Creative dev portfolio",
    summary:
      "A sharply art-directed personal site with immersive transitions, tactile project cards, and a polished contact journey built to turn attention into inquiries.",
    stats: ["Premium brand feel", "Fast mobile layout", "Case-study storytelling"],
    tone: "rose"
  }
];

const capabilities = [
  "Scroll choreography",
  "Creative direction",
  "Frontend systems",
  "Responsive motion",
  "Interaction design",
  "Performance tuning"
];

const principles = [
  {
    label: "Mood",
    value: "Apple precision with Awwwards confidence"
  },
  {
    label: "Build",
    value: "Next.js on Vercel with deliberate, lightweight motion"
  },
  {
    label: "Goal",
    value: "Beautiful, memorable, easy to understand, and fast"
  }
];

export default function PortfolioExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const revealElements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealElements.forEach((element) => observer.observe(element));

    let ticking = false;

    const updateScrollVars = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      root.style.setProperty("--scroll-progress", progress.toFixed(4));
      root.style.setProperty("--scroll-y", `${window.scrollY}px`);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollVars);
        ticking = true;
      }
    };

    updateScrollVars();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="page-shell">
      <div className="progress-bar" aria-hidden="true" />

      <section className="hero section-frame">
        <div className="hero-noise" aria-hidden="true" />
        <header className="topbar" data-reveal>
          <div className="brand-lockup">
            <span className="brand-dot" />
            <span className="brand-name">Clemmentino</span>
          </div>
          <nav className="topnav" aria-label="Section navigation">
            <a href="#work">Work</a>
            <a href="#approach">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Creative Frontend Developer / Designer</p>
            <h1>
              Building scroll-led digital experiences that feel cinematic,
              precise, and unmistakably premium.
            </h1>
            <p className="lede">
              I design and build portfolios, launches, and interactive brand
              sites where art direction, motion, and frontend craft move as one
              system.
            </p>
            <div className="hero-actions">
              <a href="#work" className="primary-link">
                Explore selected work
              </a>
              <a href="#contact" className="secondary-link">
                Start a project
              </a>
            </div>
          </div>

          <div className="hero-stage" data-reveal>
            <div className="orbital orbital-a" />
            <div className="orbital orbital-b" />
            <div className="showcase-card primary-card">
              <span className="card-label">Featured Direction</span>
              <strong>Apple-meets-Awwwards</strong>
              <p>
                Bold layouts, disciplined motion, and storytelling built around
                scroll.
              </p>
            </div>
            <div className="showcase-card floating-card">
              <span className="card-label">Core Promise</span>
              <strong>Beautiful. Memorable. Fast.</strong>
            </div>
            <div className="metrics-panel">
              <div>
                <span>Focus</span>
                <strong>Frontend craft</strong>
              </div>
              <div>
                <span>Style</span>
                <strong>Editorial motion</strong>
              </div>
              <div>
                <span>Stack</span>
                <strong>Next.js + Vercel</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="principles-strip" data-reveal>
          {principles.map((principle) => (
            <article className="principle-card" key={principle.label}>
              <span>{principle.label}</span>
              <p>{principle.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="story-section section-frame" id="approach">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Approach</p>
          <h2>Scroll should feel like direction, not a gimmick.</h2>
          <p className="section-copy">
            This portfolio is structured like a sequence: establish the mood,
            hold attention with movement, then let the work land with clarity.
          </p>
        </div>

        <div className="story-grid">
          <div className="story-sticky" data-reveal>
            <p className="eyebrow">What makes it premium</p>
            <h3>High-end pacing, clear hierarchy, and just enough spectacle.</h3>
            <p>
              The strongest portfolios do not throw every animation onto the
              page. They build tension, leave room for typography, and give each
              section a reason to exist.
            </p>
          </div>

          <div className="story-stack">
            {chapters.map((chapter) => (
              <article className="story-card" data-reveal key={chapter.id}>
                <span className="story-index">{chapter.id}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section section-frame" id="work">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Selected Work</p>
          <h2>Case studies framed like scenes instead of thumbnails.</h2>
        </div>

        <div className="project-stack">
          {featuredProjects.map((project, index) => (
            <article
              className={`project-card tone-${project.tone}`}
              data-reveal
              key={project.title}
            >
              <div className="project-copy">
                <p className="project-meta">
                  {String(index + 1).padStart(2, "0")} / {project.type}
                </p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="project-stats" aria-label={`${project.title} outcomes`}>
                  {project.stats.map((stat) => (
                    <li key={stat}>{stat}</li>
                  ))}
                </ul>
              </div>

              <div className="project-visual" aria-hidden="true">
                <div className="browser-shell">
                  <div className="browser-chrome">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="browser-content">
                    <div className="browser-hero" />
                    <div className="browser-columns">
                      <div />
                      <div />
                    </div>
                  </div>
                </div>
                <div className="floating-swatch" />
                <div className="floating-pill" />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="capabilities-section section-frame">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Capabilities</p>
          <h2>Designed to impress visually and hold up technically.</h2>
        </div>

        <div className="capabilities-grid" data-reveal>
          {capabilities.map((capability) => (
            <div className="capability-chip" key={capability}>
              {capability}
            </div>
          ))}
        </div>

        <div className="closing-panel" data-reveal id="contact">
          <div>
            <p className="eyebrow">Ready to build?</p>
            <h2>Let's make your portfolio feel like a launch, not a template.</h2>
          </div>
          <div className="closing-actions">
            <a href="mailto:hello@clemmentino.dev" className="primary-link">
              hello@clemmentino.dev
            </a>
            <p>
              Built for Vercel, tuned for motion, and shaped to feel expensive
              without sacrificing speed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
