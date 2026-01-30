import { useEffect } from "react";

import headerIntroSvg from "../assets/svgs/header-intro.svg";
import headerIntroLargeSvg from "../assets/svgs/header-intro-large.svg";
import quoteUpSvg from "../assets/svgs/quote-up.svg";
import heroOnhoverSvg from "../assets/svgs/hero-onhover.svg";
import heroImage from "../assets/images/model.png";
import linkSvg from "../assets/svgs/link.svg";
import starSvg from "../assets/svgs/star.svg";
import projectAccentLeft from "../assets/images/project-card-animation-item-left.png";
import projectAccentTop from "../assets/images/project-card-animation-item-top.png";
import projectAccentRight from "../assets/images/project-card-animation-item-right.png";
import hireMeImage from "../assets/images/hire-me-image.png";
import ninjaStarSvg from "../assets/svgs/ninja-star.svg";

import "../css/home/header-section.css";
import "../css/home/hero-section.css";
import "../css/home/marquee-section.css";
import "../css/home/work-exp-section.css";
import "../css/home/project-section.css";
import "../css/home/portfolio-section.css";
import "../css/home/certifications-section.css";
import "../css/home/hire-me-section.css";
import "../css/home/contact-me-section.css";

import ContactSection from '../components/ContactUsButtons/ContactSection'

export default function Home() {
  useEffect(() => {
    import("../scripts/crazy-animations/animations.js");
    import("../scripts/crazy-animations/image-panel.js");
  }, []);

  const handleSeeAll = () => {
    window.location.href = "projects-page.html";
  };

  return (
    <>

     <header className="header-main">
      <div className="header-main-nav">
        <a href="index.html" className="active">Home</a>
        <a href="#About" className="active">About</a>
        <a href="#Projects" className="active">Projects</a>
        <div className="header-main-logo"><h2>PORTFOLIO</h2></div>
        <a href="https://drive.google.com/file/d/1Wdxpp6Y5bJS1unP0ZFmhXiz4RpoaowW0/view?usp=sharing" target="_blank" className="active">Resume</a>
        <a href="https://github.com/niikhilchauhann?tab=repositories" className="active">GitHub</a>
        <a href="#Contact" className="active">Contact</a>
      </div>
    </header>

      <section className="hero-section fade-in">
        <div className="hero">
          <div className="hero-greeting">
            <div className="hero-hello-text">
              <p>Hello!</p>
              <img src={headerIntroSvg} alt="Greeting" />
            </div>
            <div className="hero-intro-text">
              <p>
                I'm <span data-value="Nikhil">Nikhil</span>,
                <br />
                Software Engineer
              </p>
              <img src={headerIntroLargeSvg} alt="Introduction" />
            </div>
          </div>

          <div className="hero-bottom-section">
            <div className="semi-circle-left-content">
              <img src={quoteUpSvg} alt="Quote" />
              <p>
                Nikhil’s exceptional coding skills outperforms client’s overall expectations. Highly Recommended.
              </p>
            </div>

            <div className="semi-circle">
              <img src={heroOnhoverSvg} className="hero-onhover" alt="Hero overlay" />
              <img id="hero-image" src={heroImage} alt="Nikhil portrait" />

              <div className="hero-bottom-buttons">
                <div className="resume-button">
                  <a
                    href="https://drive.google.com/file/d/1Wdxpp6Y5bJS1unP0ZFmhXiz4RpoaowW0/view?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resume
                  </a>
                  <img src={linkSvg} alt="Resume link" />
                </div>
                <div className="hire-button">
                  <a href="https://linkedin.com/in/niikhilchauhann" target="_blank" rel="noreferrer">
                    Hire me
                  </a>
                  <img src={linkSvg} alt="Hire link" />
                </div>
              </div>
            </div>

            <div className="semi-circle-right-content">
              <div className="stars flex">
                <img src={starSvg} alt="Star" />
                <img src={starSvg} alt="Star" />
                <img src={starSvg} alt="Star" />
                <img src={starSvg} alt="Star" />
                <img src={starSvg} alt="Star" />
              </div>
              <p>
                3 Years
                <br />
                <span>Experience</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="project-section" id="Projects">
        <div className="projects-background">
          <img src={projectAccentLeft} alt="Project accent left" />
          <img src={projectAccentTop} alt="Project accent top" />
          <img src={projectAccentRight} alt="Project accent right" />
        </div>
        <div className="projects-foreground">
          <div className="project-headline">
            <p>
              Crafted for <span>Clients</span>
            </p>
            <p>A glimpse into projects I’ve designed and led — focused on intuitive user experiences and scalable platforms.</p>
          </div>

          <div className="projects-card-row">
            <a href="https://github.com/niikhilchauhann/kevaa.in/" target="_blank" rel="noreferrer">
              <div className="project-card">
                <p>Kevaa | E-commerce</p>
                <div className="divider" />
                <div className="card-stack">
                  <div className="card" />
                  <div className="card" />
                  <div className="card" />
                </div>
                <div className="project-card-btn" />
              </div>
            </a>
            <a href="https://github.com/niikhilchauhann/yuvaprabha/releases" target="_blank" rel="noreferrer">
              <div className="project-card">
                <p>Yuvaprabha | AI</p>
                <div className="divider" />
                <div className="card-stack">
                  <div className="card" />
                  <div className="card" />
                  <div className="card" />
                </div>
                <div className="project-card-btn" />
              </div>
            </a>
            <a href="https://github.com/niikhilchauhann/EnvyMusic" target="_blank" rel="noreferrer">
              <div className="project-card">
                <p>Envy Music | Streaming</p>
                <div className="divider" />
                <div className="card-stack">
                  <div className="card" />
                  <div className="card" />
                  <div className="card" />
                </div>
                <div className="project-card-btn" />
              </div>
            </a>
          </div>
        </div>
      </section>

      <div id="Service" />

      <section className="work-exp-section">
        <p className="heading">
          My <span>Work Experience</span>
        </p>

        <div className="work-history-timeline">
          <div className="timeline-left-content">
            <p className="subheading">Couponbaazi, Remote</p>
            <p className="description">Founding Engineer (April 2025 - Nov 2025)</p>

            <p className="subheading">Infoware, Remote</p>
            <p className="description">Flutter Developer (Jan 2025 - April 2025)</p>

            <p className="subheading">DriWix, Remote</p>
            <p className="description">Software Engineering Manager (Sep 2024 - Dec 2024)</p>
          </div>
          <div className="timeline-center-content">
            <div className="timeline-circle" />
            <div className="timeline-circle" />
            <div className="timeline-circle" />
            <div className="timeline-connector" />
          </div>
          <div className="timeline-right-content">
            <p className="subheading">Software Engineer Intern</p>
            <p className="description">
              Transformed ideas into production-ready web and mobile apps across diverse tech stacks — enhanced performance by over 40%.
            </p>

            <p className="subheading">Software Developer Intern</p>
            <p className="description">
              Designed and shipped 5+ cross-platform applications with optimized UI/UX, delivering seamless experiences across devices.
            </p>

            <p className="subheading">Software Engineer Intern</p>
            <p className="description">
              Led an agile dev team from planning to deployment — ensured timely delivery, zero critical bugs, and scalable architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="hire-me-section" id="About">
        <div className="left-section-img">
          <img src={hireMeImage} alt="Hire me" />
        </div>
        <div className="right-section-content">
          <p className="heading">
            Why <span>Hire me</span>?
          </p>
          <p className="description">
            I create clean, intuitive designs that align with user needs. Every product I build is simple, thoughtful, and goal-focused.
          </p>
          <div className="why-me-list">
            <div className="title-value-text">
              <p className="subheading">25,000+</p>
              <p className="description">Lines of code</p>
            </div>
            <div className="title-value-text">
              <p className="subheading">25+</p>
              <p className="description">Projects Completed</p>
            </div>
          </div>
          <a href="https://linkedin.com/in/niikhilchauhann" target="_blank" rel="noreferrer">
            <div className="hire-me-button">
              <p>Hire me</p>
            </div>
          </a>
        </div>
      </section>

      <section className="portfolio-section" id="Project">
        <div className="portfolio-headline">
          <p className="heading">
            Let's have a look at my <span>Portfolio</span>
          </p>
          <button type="button" className="button" onClick={handleSeeAll}>
            See All
          </button>
        </div>

        <div className="portfolio-card-row">
          <a href="https://quickiz.onrender.com/" target="_blank" rel="noreferrer">
            <div className="portfolio-card">
              <p>DSA Visualizer</p>
              <div className="divider" />
              <div className="portfolio-card-stack">
                <div className="card" />
                <div className="card" />
                <div className="card" />
              </div>
              <div className="portfolio-card-btn" />
            </div>
          </a>
          <a href="https://www.kevaa.in" target="_blank" rel="noreferrer">
            <div className="portfolio-card">
              <p>E-commerce App</p>
              <div className="divider" />
              <div className="portfolio-card-stack">
                <div className="card" />
                <div className="card" />
                <div className="card" />
              </div>
              <div className="portfolio-card-btn" />
            </div>
          </a>
          <a href="https://www.pixiepedia.site" target="_blank" rel="noreferrer">
            <div className="portfolio-card">
              <p>Anime Streaming App</p>
              <div className="divider" />
              <div className="portfolio-card-stack">
                <div className="card" />
                <div className="card" />
                <div className="card" />
              </div>
              <div className="portfolio-card-btn" />
            </div>
          </a>
        </div>

        <div className="skills-section">
          <p className="skill-heading">Languages:</p>
          <p>Java</p>
          <p>JavaScript</p>
          <p>TypeScript</p>
          <p>Dart</p>
          <p>Python</p>

          <p className="skill-heading">Frontend:</p>
          <p>HTML</p>
          <p>CSS</p>
          <p>React</p>
          <p>Next.js</p>
          <p>Flutter</p>
          <p>Angular</p>

          <p className="skill-heading">Backend & APIs:</p>
          <p>SQL</p>
          <p>JSON</p>
          <p>Node.js</p>
          <p>Postman</p>
          <p>FastAPI</p>

          <p className="skill-heading">ML & Data Tools:</p>
          <p>TensorFlow</p>
          <p>Kaggle</p>

          <p className="skill-heading">Cloud & DevOps:</p>
          <p>Google Cloud Console</p>
          <p>AWS</p>
          <p>Git/GitHub</p>

          <p className="skill-heading">Developer Tools:</p>
          <p>VS Code</p>
          <p>DevTools</p>

          <p className="skill-heading">Design & Docs:</p>
          <p>Figma</p>
          <p>Material UI</p>
          <p>LaTeX</p>
        </div>
      </section>

      <div className="custom-marquee">
        <div className="marquee-tilted-container">
          <div className="marquee-track">
            <div className="item">
              <img src={ninjaStarSvg} alt="Dashboard" />
              <span>Dashboard</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Wireframe" />
              <span>Wireframe</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="User Research" />
              <span>User Research</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="UX Design" />
              <span>UX Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="App Design" />
              <span>App Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Dashboard" />
              <span>Dashboard</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Wireframe" />
              <span>Wireframe</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="User Research" />
              <span>User Research</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="UX Design" />
              <span>UX Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="App Design" />
              <span>App Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Dashboard" />
              <span>Dashboard</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Wireframe" />
              <span>Wireframe</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="User Research" />
              <span>User Research</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="UX Design" />
              <span>UX Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="App Design" />
              <span>App Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Dashboard" />
              <span>Dashboard</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Wireframe" />
              <span>Wireframe</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="User Research" />
              <span>User Research</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="UX Design" />
              <span>UX Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="App Design" />
              <span>App Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Dashboard" />
              <span>Dashboard</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Wireframe" />
              <span>Wireframe</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="User Research" />
              <span>User Research</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="UX Design" />
              <span>UX Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="App Design" />
              <span>App Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Dashboard" />
              <span>Dashboard</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="Wireframe" />
              <span>Wireframe</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="User Research" />
              <span>User Research</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="UX Design" />
              <span>UX Design</span>
            </div>
            <div className="item">
              <img src={ninjaStarSvg} alt="App Design" />
              <span>App Design</span>
            </div>
          </div>
        </div>
      </div>

      <section className="certifications-section">
        <div className="certifications-headline">
          <p className="heading">
            Certifications and <span>Achievements</span>
          </p>
          <div className="button">See All</div>
        </div>

        <div className="certifications-card-row">
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>Walmart Sparkathon</p>
            </div>
          </div>
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>CodePunk &lt;v1.0/&gt; 2k24: Runner-up</p>
            </div>
          </div>
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>SynapHack 2k25: Runner-up</p>
            </div>
          </div>
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>Internship: DriWix</p>
            </div>
          </div>
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>NPTEL: Elite Certificate</p>
            </div>
          </div>
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>Accenture: Artificial Intelligence</p>
            </div>
          </div>
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>thingQbator: HTML & CSS</p>
            </div>
          </div>
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>thingQbator: Flutter</p>
            </div>
          </div>
          <div className="certifications-card">
            <div className="certifications-card-stack">
              <div className="card" />
              <div className="card" />
              <div className="card" />
            </div>
            <div className="certifications-card-btn">
              <p>SimpliLearn: Intro to SQL</p>
            </div>
          </div>
        </div>
      </section>

    <ContactSection/>

      {/* <section className="contact-me-section" id="Contact">
        <p className="heading">
          Have an Awesome Project Idea? <span>Let's Discuss</span>
        </p>

        <div className="contact-row">

          <div className="email-container">
            <form action="https://api.web3forms.com/submit" method="POST" className="email-wrapper">
              <div className="round-icon" />

              <input type="hidden" name="access_key" value="abc88dda-ed87-4012-9b3c-114ea01d25d4" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              <div className="text-field">
                <input
                  type="email"
                  name="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"
                  placeholder="Enter email address"
                  required
                />
              </div>

              <button type="submit" className="send-button">
                <p>Send</p>
              </button>
            </form>
          </div>
        
          <ContactUsButtons/>
        </div>
        
        <div className="mail-banner" />
      </section> */}

      {/* Footer */}
      <section id="Contact" className="bg-[#1f1f1f] text-white px-24 py-24 rounded-t-[42px] max-w-[1400px] ">

        {/* TOP ROW */}
        <div className="flex items-center justify-between">
            <h2 className="text-5xl font-semibold text-white">
            Lets Connect there
            </h2>

            <button className="flex items-center gap-2 bg-[#ff8c3a] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition text-xl">
            Hire me
            <span className="text-xl">↗</span>
            </button>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white my-10" />

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

            {/* BRAND */}
            <div className="space-y-4">
            <div className="flex items-center gap-3">
                <div className="bg-[#ff8c3a] text-white font-bold w-16 h-16 flex items-center justify-center rounded-full text-xl">
                N <span className="text-black ">C</span>
                </div>
                <span className="text-2xl font-semibold">Nikhil Chauhan</span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed text-xl">
                Full-Stack Web & Mobile Developer. Crafting seamless digital experiences with code and creativity.
            </p>
            </div>

            {/* NAVIGATION */}
            <div>
            <h4 className="text-[#ff8c3a] font-semibold mb-4 text-2xl">Navigation</h4>
            <ul className="space-y-3 text-gray-300 text-xl">
                <a href="/"><li>Home</li></a>
                <a href="#About"><li>About Us</li></a>
                <a href=""><li>Resume</li></a>
                <a href="#Projects"><li>Project</li></a>
            </ul>
            </div>

            {/* CONTACT */}
            <div>
            <h4 className="text-[#ff8c3a] font-semibold mb-4 text-2xl">Contact</h4>
            <ul className="space-y-3 text-gray-300 text-xl">
                <li>+91 87550 60559</li>
                <li>isedenlive@gmail.com</li>
                <li>Portfolio</li>
            </ul>
            </div>

            {/* SUBSCRIBE */}
            <div>
            <h4 className="text-[#ff8c3a] font-semibold mb-4 text-2xl">
                Get the latest information
            </h4>

            <div className="flex overflow-hidden rounded-xl bg-white">
                <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-6 py-6 text-black outline-none"
                />
                <button className="bg-[#ff8c3a] px-5 flex items-center justify-center">
                <span className="text-xl text-white">➤</span>
                </button>
            </div>
            </div>

        </div>

        {/* BOTTOM DIVIDER */}
        <div className="w-full max-w-[1220px] border-t border-white/40 mt-16"></div>


        {/* FOOTER BOTTOM */}
        <div className="flex flex-col md:flex-row justify-between text-white text-sm gap-4 ">
            <p className="text-white text-2xl ">Copyright© 2027 Nikhil. All Rights Reserved.</p>
            <p className="text-white text-2xl">User Terms & Conditions | Privacy Policy</p>
        </div>

        </section>

    </>
  );
}
