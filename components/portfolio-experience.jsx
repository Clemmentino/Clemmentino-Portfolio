"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "clemmentino-theme-preference";

const themeOptions = [
  { value: "auto", label: "Auto", swatch: "auto" },
  { value: "light", label: "White", swatch: "light" },
  { value: "dawn", label: "Grey", swatch: "dawn" },
  { value: "dark", label: "Dark", swatch: "dark" }
];

const resolvedThemeLabels = {
  light: "White",
  dawn: "Grey",
  dark: "Dark"
};

function getAutoTheme(date = new Date()) {
  const hour = date.getHours();

  if (hour >= 17 || hour < 5) {
    return "dark";
  }

  if (hour < 6) {
    return "dawn";
  }

  return "light";
}

function applyTheme(preference) {
  const resolvedTheme = preference === "auto" ? getAutoTheme() : preference;

  if (typeof document !== "undefined") {
    const root = document.documentElement;

    root.dataset.themePreference = preference;
    root.dataset.theme = resolvedTheme;
  }

  return resolvedTheme;
}

function getStoredThemePreference() {
  try {
    return window.localStorage.getItem(THEME_STORAGE_KEY);
  } catch {
    return null;
  }
}

function storeThemePreference(preference) {
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, preference);
  } catch {
    // Ignore storage failures and keep the in-memory selection for this session.
  }
}

const tickerItems = [
  "PHP ",
  "UI design ",
  "Photography ",
  "Videography ",
  "Frontend systems ",
  "Government tech interest "
];

const metrics = [
  {
    label: "Focus",
    value: "Frontend builds that feel clear, fast, and intentional"
  },
  {
    label: "Also brings",
    value: "Backend connection work when the project needs the full flow"
  },
  {
    label: "Interested in",
    value: "Websites, frontend roles, and government tech with real-world use"
  }
];

const projects = [
  {
    title: "Smart Campus Energy System",
    category: "School project / Energy management platform",
    summary:
      "A campus energy monitoring platform built to track consumption, manage appliances, and automate schedules. I worked with Laravel, Vue, PHP, and Vite to shape the interface around analytics, room scheduling, and day-to-day operational visibility.",
    image: "/scene-preview-a.png",
    tags: ["Laravel 12", "Vue 3", "Chart.js", "FullCalendar", "Queue workers"],
    accent: "sun",
    presentation: "art",
    top: "1rem"
  },
  {
    title: "OceanWatch",
    category: "School project / Marine advocacy website",
    summary:
      "An SDG 14 advocacy website built to make marine conservation information easier to explore. It combines educational content, publication access, a volunteer flow, and a fully responsive UI for awareness-driven browsing.",
    image: "/scene-preview-b.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive design"],
    accent: "sky",
    presentation: "art",
    top: "2.3rem"
  },
  {
    title: "LINDOL",
    category: "Personal project / Earthquake monitoring system",
    summary:
      "A decoupled Philippine earthquake monitoring web app with a static frontend, Flask backend, PHIVOLCS-backed data flow, map overlays, intensity views, and wave-based alerts. It is built for fast situational awareness, with near real-time monitoring as the direction.",
    image: "/scene-preview-c.png",
    tags: ["Flask", "Leaflet", "PHIVOLCS", "Vercel + Render", "Wave alerts"],
    accent: "leaf",
    presentation: "art",
    top: "3.6rem"
  }
];

const processSteps = [
  {
    title: "Start with the frontend experience",
    copy:
      "I care a lot about how a page feels to use, so layout, motion, and interface clarity usually come first."
  },
  {
    title: "Connect the system cleanly",
    copy:
      "I can work across the handoff between frontend and backend, especially in split deployments like Vercel for UI and Render for APIs."
  },
  {
    title: "Build for actual use cases",
    copy:
      "What interests me most are projects that need to be useful in the real world, especially monitoring, public-interest, and government-adjacent systems."
  }
];

const capabilityNotes = [
  {
    title: "Frontend and UI",
    copy:
      "I focus most on the frontend: layout, interface decisions, responsiveness, and making the whole build feel more thought-through."
  },
  {
    title: "PHP and backend integration",
    copy:
      "I am comfortable wiring frontend and backend together, especially in web stacks where the interface and server need to stay cleanly connected."
  },
  {
    title: "Visual work too",
    copy:
      "UI design, photography, editing, and videography all feed into how I think about presentation and visual quality."
  }
];

export default function PortfolioExperience() {
  const [themePreference, setThemePreference] = useState("auto");
  const [resolvedTheme, setResolvedTheme] = useState("light");

  useEffect(() => {
    const root = document.documentElement;
    const initialPreference =
      root.dataset.themePreference ||
      getStoredThemePreference() ||
      "auto";
    const initialTheme = applyTheme(initialPreference);

    setThemePreference(initialPreference);
    setResolvedTheme(initialTheme);

    const syncAutoTheme = () => {
      const storedPreference = getStoredThemePreference() || "auto";

      if (storedPreference !== "auto") {
        return;
      }

      setThemePreference("auto");
      setResolvedTheme(applyTheme("auto"));
    };

    const onVisibilityChange = () => {
      if (!document.hidden) {
        syncAutoTheme();
      }
    };

    const intervalId = window.setInterval(syncAutoTheme, 60_000);

    window.addEventListener("focus", syncAutoTheme);
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      window.clearInterval(intervalId);
      window.removeEventListener("focus", syncAutoTheme);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

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

  const handleThemeChange = (nextPreference) => {
    storeThemePreference(nextPreference);
    setThemePreference(nextPreference);
    setResolvedTheme(applyTheme(nextPreference));
  };

  return (
    <main className="page-shell">
      <div className="progress-bar" aria-hidden="true" />

      <section className="hero section-frame">
        <header className="topbar" data-reveal>
          <div className="brand-lockup">
            <span className="brand-dot" />
            <span className="brand-name">Clemmentino Portfolio</span>
          </div>
          <div className="topbar-actions">
            <nav className="topnav" aria-label="Section navigation">
              <a href="#work">Work</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="theme-control">
              <p className="theme-caption">
                {themePreference === "auto"
                  ? `Auto now: ${resolvedThemeLabels[resolvedTheme]}`
                  : `Manual: ${resolvedThemeLabels[resolvedTheme]}`}
              </p>
              <div className="theme-toggle" role="group" aria-label="Theme switcher">
                {themeOptions.map((option) => (
                  <button
                    type="button"
                    key={option.value}
                    className={`theme-option ${
                      themePreference === option.value ? "is-active" : ""
                    }`}
                    onClick={() => handleThemeChange(option.value)}
                    aria-pressed={themePreference === option.value}
                  >
                    <span
                      className={`theme-swatch theme-swatch-${option.swatch}`}
                      aria-hidden="true"
                    />
                    <span>{option.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="hero-panel">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Frontend-focused full-stack developer</p>
            <h1>Built to work. Made to feel clear.</h1>
            <p className="lede">
              I'm Clemmentino, a frontend-focused full-stack developer who cares
              about websites that feel clear, modern, and actually useful with the help of AI.
              Frontend is where I'm strongest, but I can handle the backend
              connection too, especially for systems that need a real working
              flow.
            </p>
            <p className="lede">
              I'm especially interested in websites, frontend roles, and
              government tech, including near real-time earthquake and warning
              systems.
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
            <div className="name-ribbon">Clemmentino / frontend-focused full-stack developer</div>
            <div className="note-badge">miss na miss kona yung baby ko</div>
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
          <h2>From school systems to a personal earthquake-monitoring project.</h2>
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
                  <div
                    className={`scene-window ${
                      project.presentation === "art" ? "window-art" : "window-standard"
                    }`}
                  >
                    <div
                      className={`scene-screen ${
                        project.presentation === "art" ? "screen-art" : "screen-standard"
                      }`}
                    >
                      <Image
                        src={project.image}
                        alt={`${project.title} preview`}
                        fill
                        sizes="(max-width: 980px) 100vw, 44vw"
                        className={`preview-image ${
                          project.presentation === "art" ? "image-contain" : "image-cover"
                        }`}
                      />
                    </div>
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
            <h2>I want the work to prove I can build, not just decorate.</h2>
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
            <h2>I'm building toward stronger frontend work and public-interest systems.</h2>
            <p>
              LINDOL is the current personal project. After that, the next build
              in line is a Local Flood Warning System.
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
            <a href="mailto:mamoamoguis@gmail.com" className="primary-link">
              mamoamoguis@gmail.com
            </a>
            <a
              href="https://github.com/clemmentino"
              className="secondary-link"
              target="_blank"
              rel="noreferrer"
            >
              github/clemmentino
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
