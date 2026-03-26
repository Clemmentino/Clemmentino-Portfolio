"use client";

import Image from "next/image";
import { useEffect } from "react";

const notes = [
  {
    title: "Light art direction",
    copy:
      "A softer palette and more open spacing make the portfolio feel curated instead of synthetic."
  },
  {
    title: "Apple in motion",
    copy:
      "The influence is in the pacing and transitions, not in copying a dark product-page look."
  },
  {
    title: "Soul through composition",
    copy:
      "Offset frames, real image weight, and quieter sections create a stronger point of view."
  }
];

const featuredProjects = [
  {
    title: "Project One",
    type: "Immersive brand site",
    summary:
      "A large-scale landing experience built to feel spacious, tactile, and deliberate, with imagery carrying the first impression and motion supporting the hierarchy.",
    details: ["Editorial layout", "Layered scroll pacing", "High-clarity sections"],
    image: "/project-frame-1.svg",
    palette: "sand"
  },
  {
    title: "Project Two",
    type: "Launch campaign page",
    summary:
      "A cleaner motion-led build where sections pin, release, and reveal with more breathing room, creating a stronger sense of rhythm from top to bottom.",
    details: ["Pinned transitions", "Image-led storytelling", "Vercel-friendly build"],
    image: "/project-frame-2.svg",
    palette: "sky"
  },
  {
    title: "Project Three",
    type: "Portfolio direction",
    summary:
      "A more personal portfolio treatment that uses lighter color, stronger image placement, and measured animation so the interface feels human and considered.",
    details: ["Asymmetric composition", "Gentle hover motion", "Editorial styling"],
    image: "/project-frame-3.svg",
    palette: "rose"
  }
];

const principles = [
  {
    title: "Images first",
    copy:
      "The work should be seen immediately. Large captures do more than badges or filler copy ever will."
  },
  {
    title: "Breathing room",
    copy:
      "Luxury comes from white space, scale, and what you choose not to crowd into a section."
  },
  {
    title: "Measured motion",
    copy:
      "Animation should guide the eye, not fight for attention."
  },
  {
    title: "Real personality",
    copy:
      "A portfolio should feel like a point of view, not a safe template with prettier gradients."
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
    <main className="page-shell light-shell">
      <div className="progress-bar" aria-hidden="true" />

      <section className="hero section-frame">
        <header className="topbar" data-reveal>
          <div className="brand-lockup">
            <span className="brand-dot" />
            <span className="brand-name">Clemmentino</span>
          </div>
          <nav className="topnav" aria-label="Section navigation">
            <a href="#work">Work</a>
            <a href="#method">Method</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <div className="hero-grid">
          <div className="hero-copy" data-reveal>
            <p className="eyebrow">Creative Frontend Developer / Designer</p>
            <h1>Light, image-led websites with movement that actually feels considered.</h1>
            <p className="lede">
              This direction trades dark template energy for soft contrast,
              editorial spacing, and motion that carries the eye instead of
              showing off.
            </p>
            <div className="hero-actions">
              <a href="#work" className="primary-link">
                View the direction
              </a>
              <a href="#contact" className="secondary-link">
                Build with me
              </a>
            </div>

            <div className="hero-meta">
              {notes.map((note) => (
                <article className="meta-card" key={note.title}>
                  <strong>{note.title}</strong>
                  <p>{note.copy}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="hero-stage" data-reveal>
            <figure className="collage-frame collage-wide">
              <Image
                src="/editorial-hero-a.svg"
                alt="Wide editorial composition representing a clean portfolio interface."
                fill
                priority
                sizes="(max-width: 980px) 100vw, 48vw"
                className="art-image"
              />
            </figure>
            <figure className="collage-frame collage-tall">
              <Image
                src="/editorial-hero-b.svg"
                alt="Tall poster-style composition showing a lighter, art-directed visual system."
                fill
                priority
                sizes="(max-width: 980px) 70vw, 26vw"
                className="art-image"
              />
            </figure>
            <div className="paper-note">
              Apple in the pacing. Editorial in the look. Less template, more
              point of view.
            </div>
            <div className="paper-stamp">Vercel-ready</div>
          </div>
        </div>
      </section>

      <section className="manifesto section-frame" id="method">
        <div className="manifesto-grid" data-reveal>
          <div className="manifesto-heading">
            <p className="eyebrow">Direction</p>
            <h2>The site should feel airy, visual, and authored from the first scroll.</h2>
          </div>

          <div className="manifesto-copy">
            <p>
              The stronger move here is not more effects. It is more image
              weight, more rhythm, and a lighter visual palette that feels more
              human and more intentional.
            </p>
            <p>
              So the redesign leans into paper tones, layered frames, poster-like
              composition, and sections that reveal with control instead of
              noise.
            </p>
          </div>
        </div>
      </section>

      <section className="work-section section-frame" id="work">
        <div className="work-grid">
          <aside className="work-sticky" data-reveal>
            <p className="eyebrow">Selected Work</p>
            <h2>Large visuals first. Copy second. Motion in support.</h2>
            <p>
              These layouts are built to hold real screenshots and project
              imagery when you are ready to swap them in.
            </p>
          </aside>

          <div className="project-stack">
            {featuredProjects.map((project, index) => (
              <article
                className={`project-card palette-${project.palette} ${
                  index % 2 === 1 ? "project-reverse" : ""
                }`}
                data-reveal
                key={project.title}
              >
                <div className="project-visual">
                  <div className="image-frame">
                    <Image
                      src={project.image}
                      alt={`${project.title} editorial project frame`}
                      fill
                      sizes="(max-width: 980px) 100vw, 42vw"
                      className="art-image"
                    />
                  </div>
                </div>

                <div className="project-copy">
                  <p className="project-meta">
                    {String(index + 1).padStart(2, "0")} / {project.type}
                  </p>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <ul className="project-stats" aria-label={`${project.title} details`}>
                    {project.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="principles-section section-frame">
        <div className="section-intro" data-reveal>
          <p className="eyebrow">Method</p>
          <h2>Luxury comes from restraint, composition, and what you choose to show.</h2>
        </div>

        <div className="principles-grid">
          {principles.map((principle) => (
            <article className="principle-card" data-reveal key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="closing-section section-frame" id="contact">
        <div className="closing-panel" data-reveal>
          <div className="closing-copy">
            <p className="eyebrow">Next</p>
            <h2>Now it needs your real project shots to make the portfolio unmistakably yours.</h2>
          </div>
          <div className="closing-actions">
            <a href="mailto:hello@clemmentino.dev" className="primary-link">
              hello@clemmentino.dev
            </a>
            <p>
              The structure is ready for real screenshots, photography, and live
              case-study content whenever you want to slot them in.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
