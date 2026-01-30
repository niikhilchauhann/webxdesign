import { useEffect } from "react";

import "../css/home/header-section.css";
import "../css/home/hero-section.css";
import "../css/home/marquee-section.css";
import "../css/home/work-exp-section.css";
import "../css/home/project-section.css";
import "../css/home/portfolio-section.css";
import "../css/home/certifications-section.css";
import "../css/home/hire-me-section.css";
import "../css/home/contact-me-section.css";

export default function Home() {
  useEffect(() => {
    import("../scripts/crazy-animations/animations.js");
    import("../scripts/crazy-animations/image-panel.js");
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="header">
        <div className="header-container">
          <img src="/assets/svgs/header-intro.svg" alt="" />
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section">
        <div className="hero-left">
          <h1>
            I'm <span>Nikhil</span>
          </h1>
          <p>Software Engineer</p>
        </div>

        <div className="hero-right">
          <img src="/assets/images/model.png" alt="model" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee-section">
        <div className="marquee">
          <span>Flutter • React • Firebase • Startups •</span>
        </div>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="work-exp-section">
        <h2>Work Experience</h2>
        {/* SAME markup copied from index.html */}
      </section>

      {/* PROJECTS */}
      <section className="project-section">
        <h2>Projects</h2>
        {/* SAME markup */}
      </section>

      {/* PORTFOLIO */}
      <section className="portfolio-section">
        <h2>Portfolio</h2>
        {/* SAME markup */}
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications-section">
        <h2>Certifications</h2>
        {/* SAME markup */}
      </section>

      {/* HIRE ME */}
      <section className="hire-me-section">
        <img src="/assets/images/hire-me-image.png" alt="" />
      </section>

      {/* CONTACT */}
      <section className="contact-me-section">
        <h2>Contact Me</h2>
      </section>
    </>
  );
}
