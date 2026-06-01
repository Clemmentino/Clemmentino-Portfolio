"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "clemmentino-theme-preference";

const themeOptions = [
  { value: "auto", label: "Auto", swatch: "auto" },
  { value: "light", label: "Light", swatch: "light" },
  { value: "dawn", label: "Soft", swatch: "dawn" },
  { value: "dark", label: "Dark", swatch: "dark" }
];

const resolvedThemeLabels = {
  light: "Light",
  dawn: "Soft",
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
  "Frontend interfaces ",
  "PHP and Laravel ",
  "Practical systems ",
  "UI design ",
  "Photography ",
  "Public-interest tech "
];

const tickerLoopItems = Array.from({ length: 6 }, () => tickerItems).flat();

const metrics = [
  {
    label: "Primary focus",
    value: "Frontend interfaces that are easy to scan, responsive, and useful"
  },
  {
    label: "Stack range",
    value: "Laravel, PHP, Vue, Flask, JavaScript, and deployment handoffs"
  },
  {
    label: "Direction",
    value: "Monitoring tools, public-interest systems, and polished websites"
  }
];

const projects = [
  {
    title: "Smart Campus Energy System",
    category: "School project / Energy management platform",
    summary:
      "A campus energy platform for tracking consumption, managing appliances, and scheduling room usage. I helped shape the Laravel and Vue interface around dashboards, appliance states, calendar views, and clear operational feedback.",
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
      "An SDG 14 advocacy site designed for straightforward learning and participation. The build organizes marine conservation content, publications, and volunteer entry points into a responsive browsing experience.",
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
      "A Philippine earthquake monitoring app with a static frontend, Flask backend, PHIVOLCS-backed data flow, map overlays, intensity views, and alert concepts. The goal is fast situational awareness with a clean path toward near real-time monitoring.",
    image: "/scene-preview-c.png",
    tags: ["Flask", "Leaflet", "PHIVOLCS", "Vercel + Render", "Wave alerts"],
    accent: "leaf",
    presentation: "art",
    top: "3.6rem"
  }
];

const processSteps = [
  {
    title: "Design the page around the task",
    copy:
      "I start by asking what someone needs to understand first, then shape the layout, hierarchy, and states around that flow."
  },
  {
    title: "Connect the full flow",
    copy:
      "When a project needs more than static screens, I can wire the frontend to APIs, data views, auth flows, and deployment targets."
  },
  {
    title: "Keep it useful after the demo",
    copy:
      "I like projects that have a practical reason to exist: monitoring, alerts, public information, and tools people can come back to."
  }
];

const capabilityNotes = [
  {
    title: "Frontend craft",
    copy:
      "Layout, responsive behavior, interface states, and visual rhythm are the parts of the build I care about most."
  },
  {
    title: "Backend connection",
    copy:
      "I can connect screens to server logic and data sources when the project needs the complete experience to work."
  },
  {
    title: "Visual eye",
    copy:
      "Photography, editing, and videography influence how I compose pages, present projects, and make details feel intentional."
  }
];

const aboutFacts = [
  { label: "Name", value: "Clemm Amoguis / Clemmentino" },
  { label: "Current", value: "BSIT 2nd Year at DNSC" },
  { label: "Based in", value: "Panabo City, Davao del Norte" }
];

const aboutStrengths = [
  {
    title: "Frontend and UI/UX",
    copy:
      "The part I enjoy most is improving screens: layout, spacing, readability, responsive behavior, and the small details that make an interface easier to trust."
  },
  {
    title: "Backend and deployment",
    copy:
      "I can work with PHP and Laravel, connect projects to backend logic, deploy through Vercel or Render, and set up consumer computers as simple servers when needed."
  },
  {
    title: "Visual and public-tech interest",
    copy:
      "Photography and videography shape how I look at composition. I'm also drawn to government tech and disaster-warning systems because useful tools matter."
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
              <a href="#about">About</a>
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
            <h1>Clear interfaces for useful systems.</h1>
            <p className="lede">
              I'm Clemmentino, a developer who likes building interfaces that
              feel clean, direct, and grounded in real use. Frontend is where I
              am strongest, but I can also handle the backend connections that
              make a project work end to end.
            </p>
            <p className="lede">
              My best work sits between design and function: websites, dashboard
              flows, monitoring tools, and public-interest systems that need to
              be easy to understand quickly.
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
        </div>
      </section>

      <section className="ticker-section" aria-label="Portfolio highlights">
        <div className="ticker-track">
          {tickerLoopItems.map((item, index) => (
            <span className="ticker-item" key={`${item}-${index}`}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="about section-frame" id="about">
        <div className="about-heading" data-reveal>
          <p className="eyebrow">About Me</p>
          <h2>Student developer, frontend-focused, and practical about systems.</h2>
          <p>
            A quick profile of who I am, what I can build, and the kind of work
            I want this portfolio to represent.
          </p>
        </div>

        <div className="about-layout">
          <div className="about-portrait" data-reveal>
            <figure className="about-photo">
              <Image
                src="/me.jpg"
                alt="Portrait of Clemmentino"
                fill
                sizes="(max-width: 980px) 100vw, 34vw"
                className="portrait-image"
              />
            </figure>
            <div className="about-photo-caption">
              Clemm Amoguis / aka Clemmentino
            </div>
          </div>

          <div className="about-content" data-reveal>
            <div className="about-profile-card">
              <span className="about-label">Profile</span>
              <h3>I'm Clemm Amoguis.</h3>
              <p>
                Online, I use the name Clemmentino. I'm a BSIT 2nd year student
                at Davao Del Norte State College, based in Panabo City.
              </p>
            </div>

            <dl className="about-facts">
              {aboutFacts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>

            <div className="about-story">
              <p>
                I can handle backend work with PHP and Laravel, deploy projects
                through cloud platforms like Vercel and Render, and set up
                consumer-type computers to run as simple servers. That helps me
                understand the full flow of a project, not only the screen.
              </p>
              <p>
                Still, the part I enjoy most is designing for the frontend:
                improving UI/UX, cleaning up layouts, and making information
                feel easier to read. My hobbies in photography and videography
                also influence how I think about visual quality and presentation.
              </p>
            </div>
          </div>
        </div>

        <div className="about-strength-grid">
          {aboutStrengths.map((item) => (
            <article className="about-strength-card" data-reveal key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scenes section-frame" id="work">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Selected Work</p>
          <h2>Projects with clearer purpose, stronger hierarchy, and real data behind them.</h2>
          <p>
            A short scroll through the builds that best show where I am headed:
            practical web systems, civic technology ideas, and interfaces that
            need to explain information quickly.
          </p>
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
            <h2>The goal is not decoration. It is clarity that keeps working.</h2>
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
            <h2>I'm open to frontend work, websites, and systems with public value.</h2>
            <p>
              LINDOL is my current personal project. The next idea in line is a
              Local Flood Warning System, continuing the same direction: useful,
              readable tools for urgent information.
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
