"use client";

import Image from "next/image";
import { useEffect } from "react";

const tickerItems = [
  "Frontend-focused",
  "Full-stack ready",
  "Designer-led motion",
  "Light interfaces",
  "Interaction systems",
  "Vercel build"
];

const metrics = [
  {
    label: "Primary lane",
    value: "Frontend craft with stronger visual instinct"
  },
  {
    label: "Also brings",
    value: "Backend logic when the project needs it"
  },
  {
    label: "What matters",
    value: "Interfaces that feel distinct and still easy to use"
  }
];

const projects = [
  {
    title: "Runway Launch",
    category: "Interactive website direction",
    summary:
      "A bright launch page built like a sequence of scenes, where each section lands with more intention and less clutter.",
    image: "/scene-preview-a.svg",
    tags: ["Sticky sections", "Large-scale layout", "Soft contrast"],
    accent: "sun",
    top: "1rem"
  },
  {
    title: "Studio Flow",
    category: "Product storytelling page",
    summary:
      "A cleaner system of windows, content rails, and interface panels that feels designed rather than assembled from blocks.",
    image: "/scene-preview-b.svg",
    tags: ["Interface rhythm", "Structured motion", "Editorial spacing"],
    accent: "sky",
    top: "2.3rem"
  },
  {
    title: "Portrait Mode",
    category: "Personal portfolio layout",
    summary:
      "A personal site direction where the portrait becomes the anchor, the typography does the heavy lifting, and motion stays controlled.",
    image: "/scene-preview-c.svg",
    tags: ["Portrait-led", "Lighter mood", "Designer-first feel"],
    accent: "leaf",
    top: "3.6rem"
  }
];

const processSteps = [
  {
    title: "Lead with a visual anchor",
    copy:
      "The first fold should introduce a person, a point of view, and an atmosphere, not just a title and two buttons."
  },
  {
    title: "Build sections like scenes",
    copy:
      "Each area needs a job. Hero for identity, work for proof, process for depth, contact for conversion."
  },
  {
    title: "Use motion as pacing",
    copy:
      "The animation should help timing, hierarchy, and attention, not turn the page into a demo reel."
  }
];

const capabilityNotes = [
  {
    title: "Frontend systems",
    copy:
      "Responsive layouts, animation timing, component polish, and the small visual decisions that make a build feel intentional."
  },
  {
    title: "Backend support",
    copy:
      "I can handle the logic side too, which helps the work stay coherent beyond the visual layer."
  },
  {
    title: "Taste and structure",
    copy:
      "I care about how typography, composition, and interaction fit together into one clear experience."
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
        threshold: 0.18,
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
        <header className="topbar" data-reveal>
          <div className="brand-lockup">
            <span className="brand-dot" />
            <span className="brand-name">Clemmentino</span>
          </div>
          <nav className="topnav" aria-label="Section navigation">
            <a href="#work">Work</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-panel">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Frontend-focused full-stack developer</p>
            <h1>Designer energy, developer follow-through.</h1>
            <p className="lede">
              I build websites that feel lighter, sharper, and more interactive
              than the usual portfolio layouts. Frontend is where I'm strongest,
              but I can carry backend work when the build needs it.
            </p>

            <div className="hero-actions">
              <a href="#work" className="primary-link">
                Enter selected work
              </a>
              <a href="#contact" className="secondary-link">
                Contact me
              </a>
            </div>

            <div className="metric-rail">
              {metrics.map((metric) => (
                <article className="metric-chip" key={metric.label}>
                  <span>{metric.label}</span>
                  <p>{metric.value}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="portrait-stage" data-reveal>
            <div className="sun-disc" aria-hidden="true" />
            <div className="portrait-aura" aria-hidden="true" />
            <figure className="portrait-cutout">
              <Image
                src="/me.jpg"
                alt="Portrait of Clemmentino"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 42vw"
                className="portrait-image"
              />
            </figure>
            <div className="name-ribbon">Clemmentino / frontend-focused full-stack</div>
            <div className="note-badge">light + interactive + personal</div>
          </div>
        </div>
      </section>

      <section className="ticker-section" aria-label="Portfolio highlights">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="scenes section-frame" id="work">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Selected Work</p>
          <h2>Built like a runway of scenes instead of a stack of generic cards.</h2>
        </div>

        <div className="scene-stack">
          {projects.map((project, index) => (
            <article
              className={`scene-card accent-${project.accent}`}
              data-reveal
              key={project.title}
              style={{ "--card-top": project.top }}
            >
              <div className="scene-number">{String(index + 1).padStart(2, "0")}</div>

              <div className="scene-body">
                <div className="scene-copy">
                  <p className="project-meta">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="tag-list" aria-label={`${project.title} tags`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>

                <div className="scene-visual">
                  <div className="scene-window">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 980px) 100vw, 44vw"
                      className="preview-image"
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-frame" id="process">
        <div className="process-layout">
          <aside className="process-intro" data-reveal>
            <p className="eyebrow">Process</p>
            <h2>I want the site to feel directed, not auto-generated.</h2>
            <p>
              That means choosing a clear mood, giving the portrait a purpose,
              and letting the sections unfold with control instead of noise.
            </p>
          </aside>

          <div className="process-list">
            {processSteps.map((step, index) => (
              <article className="process-card" data-reveal key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities section-frame">
        <div className="capability-row">
          {capabilityNotes.map((capability) => (
            <article className="capability-card" data-reveal key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact section-frame" id="contact">
        <div className="contact-panel" data-reveal>
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Now the next step is replacing the placeholders with your real projects.</h2>
            <p>
              The structure is finally different. What will make it yours is
              your actual project names, screenshots, and links.
            </p>
          </div>

          <div className="contact-side">
            <div className="contact-thumb">
              <Image
                src="/me.jpg"
                alt="Portrait thumbnail of Clemmentino"
                fill
                sizes="110px"
                className="portrait-image"
              />
            </div>
            <a href="mailto:hello@clemmentino.dev" className="primary-link">
              hello@clemmentino.dev
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
