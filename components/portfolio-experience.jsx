"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const heroSignals = [
  {
    label: "Frontend first",
    value: "Motion-aware interfaces with stronger visual rhythm"
  },
  {
    label: "Full-stack capable",
    value: "I can carry backend logic when the project needs it"
  },
  {
    label: "Designer energy",
    value: "Layout, hierarchy, and interaction all matter equally"
  }
];

const directionCards = [
  {
    title: "Portrait-led hero",
    copy:
      "The homepage opens with your face and point of view first, so the site feels personal before it feels technical."
  },
  {
    title: "Interactive board feel",
    copy:
      "Panels overlap, cards shift with scroll, and the composition feels closer to a designed interface than a stacked template."
  },
  {
    title: "Light by default",
    copy:
      "Creams, warm neutrals, pale blue, and restrained shadows replace the dark luxury look entirely."
  },
  {
    title: "Balanced identity",
    copy:
      "The copy positions you as a frontend-focused full-stack developer, but the visual language still leans designer-forward."
  }
];

const projects = [
  {
    title: "Orbit Landing",
    category: "Interactive brand experience",
    summary:
      "A homepage direction built around layered panels, guided motion, and a cleaner narrative flow from hero to CTA.",
    image: "/work-preview-a.svg",
    tags: ["Dashboard-inspired", "Scroll-led", "Light palette"],
    accent: "peach"
  },
  {
    title: "Northstar Board",
    category: "Product showcase system",
    summary:
      "A more structured interface concept that uses cards, modules, and visual anchors to make the site feel intelligent and easy to explore.",
    image: "/work-preview-b.svg",
    tags: ["Structured layout", "Clear hierarchy", "Interactive modules"],
    accent: "blue"
  },
  {
    title: "Canvas Profile",
    category: "Designer-forward portfolio",
    summary:
      "A softer portfolio treatment with a stronger portrait presence, editorial spacing, and motion that supports rather than overperforms.",
    image: "/work-preview-c.svg",
    tags: ["Portrait-led", "Editorial spacing", "Soft motion"],
    accent: "sage"
  }
];

const capabilities = [
  {
    title: "Frontend craft",
    copy:
      "Refined layouts, motion pacing, responsive polish, and interface details that make the site feel cared for."
  },
  {
    title: "Backend support",
    copy:
      "When the build needs logic, forms, or data handling, I can carry the work past the visual layer."
  },
  {
    title: "Motion thinking",
    copy:
      "Transitions should guide the eye, create emphasis, and add character without slowing the experience down."
  },
  {
    title: "Visual instinct",
    copy:
      "Typography, spacing, image placement, and color need to work as a system, not as separate decisions."
  }
];

export default function PortfolioExperience() {
  const heroRef = useRef(null);

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
        threshold: 0.16,
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

    const heroElement = heroRef.current;

    const onPointerMove = (event) => {
      if (!heroElement) {
        return;
      }

      const rect = heroElement.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;

      root.style.setProperty("--pointer-x", x.toFixed(3));
      root.style.setProperty("--pointer-y", y.toFixed(3));
    };

    const resetPointer = () => {
      root.style.setProperty("--pointer-x", "0.5");
      root.style.setProperty("--pointer-y", "0.5");
    };

    updateScrollVars();
    resetPointer();

    window.addEventListener("scroll", onScroll, { passive: true });
    heroElement?.addEventListener("pointermove", onPointerMove);
    heroElement?.addEventListener("pointerleave", resetPointer);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      heroElement?.removeEventListener("pointermove", onPointerMove);
      heroElement?.removeEventListener("pointerleave", resetPointer);
    };
  }, []);

  return (
    <main className="page-shell">
      <div className="progress-bar" aria-hidden="true" />

      <section className="hero section-frame" ref={heroRef}>
        <header className="topbar" data-reveal>
          <div className="brand-lockup">
            <span className="brand-dot" />
            <span className="brand-name">Clemmentino</span>
          </div>
          <nav className="topnav" aria-label="Section navigation">
            <a href="#work">Work</a>
            <a href="#about">Approach</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-layout">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Frontend-focused full-stack developer</p>
            <h1>Interactive websites with a designer&apos;s eye and a developer&apos;s backbone.</h1>
            <p className="lede">
              I care most about the frontend, but I can carry backend work too.
              The goal is a site that feels visually alive, easy to navigate,
              and clearly made by someone with taste.
            </p>
            <div className="hero-actions">
              <a href="#work" className="primary-link">
                See selected work
              </a>
              <a href="#contact" className="secondary-link">
                Let&apos;s build something
              </a>
            </div>

            <div className="signal-grid">
              {heroSignals.map((signal) => (
                <article className="signal-card" key={signal.label}>
                  <span>{signal.label}</span>
                  <p>{signal.value}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-stage" data-reveal>
            <div className="hero-gridlines" aria-hidden="true" />

            <figure className="portrait-shell">
              <div className="portrait-frame">
                <Image
                  src="/me.jpg"
                  alt="Portrait of Clemmentino"
                  fill
                  priority
                  sizes="(max-width: 980px) 100vw, 38vw"
                  className="portrait-image"
                />
              </div>
            </figure>

            <article className="floating-card card-primary">
              <span className="floating-label">Current direction</span>
              <strong>Light, layered, interactive</strong>
              <p>Less template. More composition, motion, and personality.</p>
            </article>

            <article className="floating-card card-secondary">
              <span className="floating-label">Strength</span>
              <strong>Frontend-first</strong>
              <p>Visual systems, motion, and a clean build underneath.</p>
            </article>

            <article className="floating-card card-tertiary">
              <span className="floating-label">Balance</span>
              <strong>Designer + developer</strong>
            </article>

            <div className="stage-strip">
              <span>UI systems</span>
              <span>Motion</span>
              <span>Clean structure</span>
            </div>
          </div>
        </div>
      </section>

      <section className="direction section-frame" id="about">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Approach</p>
          <h2>A portfolio that feels closer to a designed interface than a plain landing page.</h2>
        </div>

        <div className="direction-grid">
          {directionCards.map((card, index) => (
            <article
              className={`direction-card direction-card-${index + 1}`}
              data-reveal
              key={card.title}
            >
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="work-section section-frame" id="work">
        <div className="work-layout">
          <aside className="work-intro" data-reveal>
            <p className="eyebrow">Selected Work</p>
            <h2>Dashboard-inspired layouts, softer surfaces, and motion with control.</h2>
            <p>
              These are placeholder project blocks for now, but the structure is
              ready for your real screenshots, product shots, or mockups.
            </p>
          </aside>

          <div className="work-stack">
            {projects.map((project, index) => (
              <article
                className={`work-card accent-${project.accent} ${
                  index % 2 === 1 ? "work-card-reverse" : ""
                }`}
                data-reveal
                key={project.title}
              >
                <div className="work-visual">
                  <div className="work-preview">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 980px) 100vw, 42vw"
                      className="preview-image"
                    />
                  </div>
                </div>

                <div className="work-copy">
                  <p className="project-meta">
                    {String(index + 1).padStart(2, "0")} / {project.category}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="tag-list" aria-label={`${project.title} tags`}>
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities-section section-frame">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Capabilities</p>
          <h2>Not just pretty surfaces. The build needs to hold up too.</h2>
        </div>

        <div className="capability-grid">
          {capabilities.map((capability) => (
            <article className="capability-card" data-reveal key={capability.title}>
              <h3>{capability.title}</h3>
              <p>{capability.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section section-frame" id="contact">
        <div className="contact-panel" data-reveal>
          <div className="contact-avatar">
            <Image
              src="/me.jpg"
              alt="Portrait thumbnail of Clemmentino"
              fill
              sizes="120px"
              className="portrait-image"
            />
          </div>

          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2>Ready to turn this into a portfolio that actually feels like you?</h2>
            <p>
              The next real step is swapping the placeholder project blocks with
              your own screenshots, names, and story.
            </p>
          </div>

          <div className="contact-actions">
            <a href="mailto:hello@clemmentino.dev" className="primary-link">
              hello@clemmentino.dev
            </a>
            <p>Current build: light, portrait-led, and designed to feel interactive.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
