import { useEffect, useState } from "react";
import "./portfolio.css";

const profileImg = "/profile.jpg";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#achievements", label: "Achievements" },
];

const heroStats = [
  { count: 4, label: "Projects" },
  { count: 8, label: "Technologies" },
  { count: 3, label: "Competitions" },
];

const marqueeItems = [
  { icon: "devicon-python-plain", label: "Python", fa: false },
  { icon: "devicon-django-plain", label: "Django", fa: false },
  { icon: "devicon-react-original", label: "React", fa: false },
  { icon: "devicon-nodejs-plain", label: "Node.js", fa: false },
  { icon: "devicon-mongodb-plain", label: "MongoDB", fa: false },
  { icon: "devicon-flask-original", label: "Flask", fa: false },
  { icon: "fa-solid fa-brain", label: "ML", fa: true },
  { icon: "fa-solid fa-atom", label: "Quantum", fa: true },
];

const services = [
  {
    icon: "fas fa-laptop-code",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    title: "Web Development",
    desc: "Building robust, scalable web applications using Django, Flask, React, and Node.js with clean, maintainable code.",
  },
  {
    icon: "fas fa-robot",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    title: "AI & Machine Learning",
    desc: "Developing intelligent systems for personalized recommendations, predictive analytics, and smart automation.",
  },
  {
    icon: "fas fa-atom",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    title: "Quantum Computing",
    desc: "Exploring quantum graph neural networks (QGNN) for solving complex problems in agriculture and optimization.",
  },
  {
    icon: "fas fa-database",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    title: "Database Solutions",
    desc: "Designing efficient database architectures using SQL and MongoDB for both relational and NoSQL applications.",
  },
  {
    icon: "fas fa-mobile-alt",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    title: "Responsive UI",
    desc: "Crafting beautiful, responsive user interfaces with HTML, CSS, and JavaScript that work flawlessly on all devices.",
  },
  {
    icon: "fas fa-chart-line",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    title: "Data Analytics",
    desc: "Transforming raw data into actionable insights through Python data analysis and interactive dashboards.",
  },
];

const projects = [
  {
    cls: "",
    icon: "fas fa-leaf",
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80",
    links: [{ icon: "fab fa-github", href: "https://github.com/Inderkumar-kulkarni" }],
    title: "Food Waste Prevention Assistant",
    desc: "An intelligent application designed to help reduce food waste by tracking inventory and suggesting optimal usage.",
    features: ["Smart inventory tracking with expiry alerts", "Intelligent notifications for expiring food items"],
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript"],
  },
  {
    cls: "dev-2",
    icon: "fas fa-atom",
    img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=900&q=80",
    links: [{ icon: "fab fa-github", href: "https://github.com/Inderkumar-kulkarni" }],
    title: "Climate-Smart Agriculture Planning (QGNN)",
    desc: "A cutting-edge quantum computing project leveraging QGNN to optimize crop planning based on environmental factors.",
    features: ["Optimized crop planning based on climate & soil data", "QGNN for yield & resource allocation predictions"],
    tech: ["Python", "QGNN", "Data Analysis", "Quantum"],
  },
  {
    cls: "dev-3",
    icon: "fas fa-graduation-cap",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    links: [
      { icon: "fas fa-external-link-alt", href: "https://edu-compass-sigma.vercel.app" },
      { icon: "fab fa-github", href: "https://github.com/Inderkumar-kulkarni" },
    ],
    title: "EduCompass — AI-Powered Personalized Tracker",
    desc: "A comprehensive AI-driven educational platform that personalizes learning and tracks student progress in real-time.",
    features: ["AI-driven personalized learning path recommendations", "Real-time analytics to track student progress"],
    tech: ["React", "Node.js", "Python", "MongoDB"],
  },
  {
    cls: "dev-4",
    icon: "fas fa-bolt",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    links: [{ icon: "fab fa-github", href: "https://github.com/Inderkumar-kulkarni" }],
    title: "Powergrid — Employee Skill Improvement Software",
    desc: "A robust software solution for organizations to track employee skills and drive professional development.",
    features: ["Skill tracking and professional development platform", "Manager dashboards for monitoring team skill growth"],
    tech: ["Python", "Flask", "SQL", "HTML", "CSS"],
  },
];

const education = [
  {
    date: "2023 – Present",
    title: "B.E. in Computer Science & Engineering",
    school: "Biluru Gurubasava Mahaswamji Institute of Technology, Mudhol",
    desc: "Currently pursuing B.E. in CSE, specialising in software development, AI/ML, and emerging technologies.",
    img: "/college.jpg",
  },
  {
    date: "2023",
    title: "Higher Secondary (Science)",
    school: "Shree Guru Independent PU College, Kalaburagi, Karnataka",
    desc: "Completed PUC in Science stream with 83.72%.",
    img: "/pu-college.jpg",
  },
  {
    date: "2021",
    title: "Secondary School Certificate",
    school: "S.R.G English Medium School, Aland",
    desc: "Completed SSLC with an impressive 92.8%.",
    img: "/school.jpg",
  },
];

const achievements = [
  {
    icon: "fas fa-microphone",
    img: "/paper presentation.jpg",
    tag: "Paper Presentation",
    title: "ICDTSES 2026 — NIT Puducherry",
    host: "National Institute of Technology, Puducherry",
    desc: "ML-Driven Framework for Identifying and Filtering Fake Reports.",
  },
  {
    icon: "fas fa-laptop-code",
    img: "/24-hour hackathon.jpg",
    tag: "24-Hour Hackathon",
    title: "CICADA 2025 — Inter-Collegiate Tech Fest",
    host: "Atria Institute of Technology, Bengaluru",
    desc: "Certificate of Participation in the 24-hour hackathon.",
  },
  {
    icon: "fas fa-atom",
    img: "/qubit-thon.jpg",
    tag: "Hackathon · Qubit-Thon",
    title: "NQSS & NQC 2026 — VTU, Belagavi",
    host: "Visvesvaraya Technological University",
    desc: "Quantum computing innovations and technical competition.",
  },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeSection, setActiveSection] = useState("home");
  const [showTop, setShowTop] = useState(false);
  const [counts, setCounts] = useState(heroStats.map(() => 0));
  const [contactForm, setContactForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [formError, setFormError] = useState("");
  const [formMessage, setFormMessage] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(saved);
  }, []);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowTop(window.scrollY > 400);
      const y = window.scrollY + 120;
      document.querySelectorAll<HTMLElement>("section[id]").forEach((s) => {
        if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
          setActiveSection(s.id);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("revealed");
        }),
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    if (loading) return;
    const duration = 1200;
    const start = performance.now();
    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setCounts(heroStats.map((s) => Math.ceil(s.count * progress)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [loading]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleContactChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    setFormError("");
    setFormMessage("");

    try {
      const apiUrl = import.meta.env.VITE_API_URL
        ? `${import.meta.env.VITE_API_URL.replace(/\/$/, "")}/api/contact`
        : "/api/contact";

      console.log("Contact API URL:", apiUrl);
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.success) {
        const message =
          data.message || data.warning || `${res.status} ${res.statusText}` ||
          "Something went wrong. Please try again.";
        throw new Error(message);
      }

      setFormStatus("sent");
      setFormMessage(data.warning || "Message sent successfully!");
      setContactForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
      setTimeout(() => {
        setFormStatus("idle");
        setFormMessage("");
      }, 3000);
    } catch (err) {
      setFormStatus("error");
      setFormError(
        err instanceof Error
          ? err.message
          : "Could not reach the server. Please check your connection and try again."
      );
    }
  };

  // Generate varied hanging lengths for each item
  const getHangLength = (index: number) => {
    const lengths = [45, 65, 35, 75, 50, 60, 40, 70];
    return lengths[index % lengths.length];
  };

  return (
    <>
      <div className={`preloader${loading ? "" : " hidden"}`}>
        <div className="preloader-inner">
          <div className="preloader-logo">
            <span>#</span>Inderkumar
          </div>
          <div className="preloader-bar" />
        </div>
      </div>

      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "#home")}>
            <span>#</span>IKK
          </a>
          <ul className={`nav-links${menuOpen ? " open" : ""}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={activeSection === item.href.slice(1) ? "active" : ""}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className="nav-cta" onClick={(e) => handleNavClick(e, "#contact")}>
                Hire Me
              </a>
            </li>
          </ul>
          <div className="nav-right">
            <button
              className="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <i className="fas fa-moon" />
              <i className="fas fa-sun" />
            </button>
            <div className={`menu-toggle${menuOpen ? " active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-bg-shapes">
          <div className="shape shape-1" />
          <div className="shape shape-2" />
          <div className="shape shape-3" />
        </div>
        <div className="container">
          <div className="hero-content">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-title">
              Inderkumar <span className="highlight">Kulkarni</span>
            </h1>
            <p className="hero-desc">
              A passionate Computer Science Engineering student crafting intelligent applications with Python, Django,
              React &amp; cutting-edge AI/ML technologies.
            </p>
            <div className="hero-buttons">
              <a href="#portfolio" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#portfolio")}>
                View My Projects <i className="fas fa-arrow-right" />
              </a>
              <a href="#contact" className="btn btn-outline" onClick={(e) => handleNavClick(e, "#contact")}>
                Get In Touch
              </a>
            </div>
            <div className="hero-stats">
              {heroStats.map((stat, i) => (
                <div className="hero-stat" key={stat.label}>
                  <div className="hero-stat-number">{counts[i]}+</div>
                  <div className="hero-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrapper">
              <div className="hero-image-main">
                <img src={profileImg} alt="Inderkumar Kulkarni" />
              </div>
              <div className="hero-image-decoration" />
              <div className="hero-floating-card card-1">
                <div className="icon-circle">
                  <i className="fab fa-python" />
                </div>
                <div>
                  <div className="card-text">Python Developer</div>
                  <div className="card-subtext">Django &amp; Flask</div>
                </div>
              </div>
              <div className="hero-floating-card card-2">
                <div className="icon-circle">
                  <i className="fas fa-atom" />
                </div>
                <div>
                  <div className="card-text">Quantum ML Enthusiast</div>
                  <div className="card-subtext">QGNN Researcher</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="scroll-mouse" />
          <span>Scroll Down</span>
        </div>
      </section>

      {/* ===== HANGING ICONS MARQUEE SECTION ===== */}
      <div className="marquee-section hanging-marquee-section">
        {/* Top wave */}
        <div className="hanging-wave-top">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,0 L0,0 Z" />
          </svg>
        </div>

        <div className="container">
          {/* Section header */}
          <div className="hanging-section-header">
            <span className="section-label">Tech Arsenal</span>
            <h2 className="section-title">My Technology Stack</h2>
          </div>

          {/* Top rail bar */}
          <div className="hanging-rail">
            <div className="rail-bar" />
            <div className="rail-glow" />
          </div>

          {/* Row 1: Left-to-right hanging icons */}
          <div className="hanging-track-container">
            <div className="hanging-fade hanging-fade-left" />
            <div className="hanging-fade hanging-fade-right" />
            <div className="hanging-track hanging-track-forward">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  className="hanging-item"
                  key={`fwd-${i}`}
                  style={
                    {
                      "--hang-index": i,
                      "--hang-length": `${getHangLength(i)}px`,
                      "--swing-delay": `${i * 0.25}s`,
                      "--swing-duration": `${3 + (i % 3) * 0.5}s`,
                    } as React.CSSProperties
                  }
                >
                  {/* Hanging wire/string */}
                  <div className="hanging-wire">
                    <div className="wire-line" />
                    <div className="wire-knot wire-knot-top" />
                    <div className="wire-knot wire-knot-bottom" />
                  </div>

                  {/* The hanging icon card */}
                  <div className="hanging-icon-card">
                    <div className="hanging-icon-glow" />
                    <div className="hanging-icon-inner">
                      <i className={item.icon} />
                    </div>
                    <span className="hanging-label">{item.label}</span>

                    {/* Sparkle dots */}
                    <div className="hanging-sparkle sparkle-1" />
                    <div className="hanging-sparkle sparkle-2" />
                    <div className="hanging-sparkle sparkle-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Middle rail bar */}
          <div className="hanging-rail hanging-rail-middle">
            <div className="rail-bar" />
            <div className="rail-glow" />
          </div>

          {/* Row 2: Right-to-left (reverse) hanging icons */}
          <div className="hanging-track-container">
            <div className="hanging-fade hanging-fade-left" />
            <div className="hanging-fade hanging-fade-right" />
            <div className="hanging-track hanging-track-reverse">
              {[...marqueeItems, ...marqueeItems].map((item, i) => (
                <div
                  className="hanging-item hanging-item-alt"
                  key={`rev-${i}`}
                  style={
                    {
                      "--hang-index": i,
                      "--hang-length": `${getHangLength(i + 3)}px`,
                      "--swing-delay": `${i * 0.3}s`,
                      "--swing-duration": `${3.5 + (i % 3) * 0.4}s`,
                    } as React.CSSProperties
                  }
                >
                  <div className="hanging-wire">
                    <div className="wire-line" />
                    <div className="wire-knot wire-knot-top" />
                    <div className="wire-knot wire-knot-bottom" />
                  </div>

                  <div className="hanging-icon-card">
                    <div className="hanging-icon-glow" />
                    <div className="hanging-icon-inner">
                      <i className={item.icon} />
                    </div>
                    <span className="hanging-label">{item.label}</span>

                    <div className="hanging-sparkle sparkle-1" />
                    <div className="hanging-sparkle sparkle-2" />
                    <div className="hanging-sparkle sparkle-3" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="hanging-wave-bottom">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
            <path d="M0,40 C360,0 720,80 1080,40 C1260,20 1380,50 1440,40 L1440,80 L0,80 Z" />
          </svg>
        </div>

        {/* Background ambient particles */}
        <div className="hanging-ambient">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              className="ambient-dot"
              key={i}
              style={
                {
                  "--dot-x": `${5 + Math.random() * 90}%`,
                  "--dot-y": `${10 + Math.random() * 80}%`,
                  "--dot-size": `${3 + Math.random() * 5}px`,
                  "--dot-delay": `${Math.random() * 4}s`,
                  "--dot-duration": `${3 + Math.random() * 3}s`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      </div>

      <section className="about" id="about">
        <div className="container">
          <div className="about-images reveal">
            <div className="about-visual-card">
              <div className="about-visual-header">
                <div className="about-avatar">
                  <img src={profileImg} alt="Inderkumar Kulkarni" />
                </div>
                <div className="about-visual-name">
                  <h3>Inderkumar Kulkarni</h3>
                  <p>Computer Science Engineer</p>
                </div>
              </div>
              <ul className="about-info-list">
                <li>
                  <i className="fas fa-map-marker-alt" />
                  <span>Kalaburagi, Karnataka, India</span>
                </li>
                <li>
                  <i className="fas fa-graduation-cap" />
                  <span>B.E. CSE — BGMIT, Mudhol</span>
                </li>
                <li>
                  <i className="fas fa-code" />
                  <span>Python • Django • React • Node.js</span>
                </li>
                <li>
                  <i className="fas fa-brain" />
                  <span>AI/ML &amp; Quantum Computing Enthusiast</span>
                </li>
                <li>
                  <i className="fas fa-envelope" />
                  <span>inderkumarkulkarni@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="about-experience-badge">
              <span className="number">4+</span>
              <span className="text">Projects</span>
            </div>
          </div>
          <div className="about-content reveal reveal-delay-2">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Passionate Engineer Building Tomorrow's Tech</h2>
            <p className="section-subtitle">
              I'm a Computer Science Engineering student at Biluru Gurubasava Mahaswamji Institute of Technology,
              passionate about creating impactful software solutions. From AI-powered learning platforms to quantum
              computing applications, I love turning innovative ideas into reality.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="icon">
                  <i className="fab fa-python" />
                </div>
                <div>
                  <h4>Full-Stack Dev</h4>
                  <p>Python, Django, React expertise</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="icon">
                  <i className="fas fa-brain" />
                </div>
                <div>
                  <h4>AI/ML</h4>
                  <p>Machine learning enthusiast</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="icon">
                  <i className="fas fa-atom" />
                </div>
                <div>
                  <h4>Quantum Tech</h4>
                  <p>QGNN &amp; Qiskit explorer</p>
                </div>
              </div>
              <div className="about-feature">
                <div className="icon">
                  <i className="fas fa-users" />
                </div>
                <div>
                  <h4>Leadership</h4>
                  <p>Teamwork &amp; communication</p>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary" onClick={(e) => handleNavClick(e, "#contact")}>
              Let's Connect <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">What I Do</span>
            <h2 className="section-title">Services &amp; Expertise</h2>
            <p className="section-subtitle">
              Combining technical skills with creative problem-solving to deliver innovative software solutions.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className={`service-card reveal reveal-delay-${(i % 3) + 1}`} key={s.title}>
                <div className="service-card-inner">
                  <div className="service-card-front">
                    <div className="service-image">
                      <img src={s.img} alt={s.title} loading="lazy" />
                      <div className="service-image-overlay" />
                      <div className="service-icon">
                        <i className={s.icon} />
                      </div>
                    </div>
                    <div className="service-card-body">
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                      <a href="#portfolio" className="service-link" onClick={(e) => handleNavClick(e, "#portfolio")}>
                        View Projects <i className="fas fa-arrow-right" />
                      </a>
                    </div>
                  </div>
                  <div className="service-card-back" style={{ backgroundImage: `url(${s.img})` }}>
                    <div className="service-card-back-overlay" />
                    <div className="service-card-back-icon">
                      <i className={s.icon} />
                    </div>
                    <div className="service-card-back-content">
                      <span className="service-card-back-label">Expertise</span>
                      <h3>{s.title}</h3>
                      <p>{s.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="portfolio" id="portfolio">
        <div className="container">
          <div className="section-header reveal">
            <div>
              <span className="section-label">My Projects</span>
              <h2 className="section-title">Featured Work</h2>
            </div>
          </div>
          <div className="portfolio-grid">
            {projects.map((p, i) => (
              <div className={`project-card ${p.cls} reveal reveal-delay-${i}`.trim()} key={p.title}>
                <div className="project-image-wrap">
                  <img src={p.img} alt={p.title} className="project-image" loading="lazy" />
                  <div className="project-image-overlay" />
                  <div className="project-icon">
                    <i className={p.icon} />
                  </div>
                  <div className="project-links">
                    {p.links.map((l, j) => (
                      <a
                        href={l.href}
                        className="project-link"
                        key={j}
                        target={l.href !== "#" ? "_blank" : undefined}
                        rel="noreferrer"
                      >
                        <i className={l.icon} />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="project-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <ul className="project-features">
                    {p.features.map((f, k) => (
                      <li key={k}>
                        <i className="fas fa-circle" /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span className="tech-tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase" id="education">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">My Journey</span>
            <h2 className="section-title">Education &amp; Background</h2>
            <p className="section-subtitle">
              My academic path that shaped my technical foundation and problem-solving abilities.
            </p>
          </div>
          <div className="timeline">
            {education.map((ed, i) => (
              <div className={`timeline-item reveal reveal-delay-${i + 1}`} key={ed.title}>
                <div className="timeline-dot" />
                <div className="timeline-content timeline-content-with-image">
                  <div className="timeline-image-wrap">
                    <img src={ed.img} alt={ed.title} className="timeline-image" loading="lazy" />
                    <div className="timeline-image-overlay" />
                  </div>
                  <div className="timeline-text">
                    <span className="timeline-date">{ed.date}</span>
                    <h3>{ed.title}</h3>
                    <h4>{ed.school}</h4>
                    <p>{ed.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements" id="achievements">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Recognition</span>
            <h2 className="section-title">Certifications &amp; Achievements</h2>
            <p className="section-subtitle">
              Notable participations and milestones that mark my continuous learning journey.
            </p>
          </div>
          <div className="achievements-grid">
            {achievements.map((a, i) => (
              <div className={`achievement-card reveal reveal-delay-${i + 1}`} key={a.title}>
                <div className="achievement-image-wrap">
                  <img src={a.img} alt={a.title} className="achievement-image" loading="lazy" />
                  <div className="achievement-image-overlay" />
                  <div className="achievement-icon">
                    <i className={a.icon} />
                  </div>
                </div>
                <div className="achievement-content">
                  <span className="achievement-tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p className="host">
                    <strong>Host:</strong> {a.host}
                  </p>
                  <p>{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container reveal">
          <h2 className="section-title">Let's Build Something Amazing Together</h2>
          <p>Open to internships, collaborations, and exciting projects. Let's connect and create something impactful.</p>
          <a href="#contact" className="btn btn-white" onClick={(e) => handleNavClick(e, "#contact")}>
            Start a Conversation <i className="fas fa-rocket" />
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-info reveal">
            <span className="section-label">Get In Touch</span>
            <h2>Let's Connect</h2>
            <p>
              Have a project idea, internship opportunity, or just want to chat about tech? I'd love to hear from you!
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <div className="icon">
                  <i className="fas fa-envelope" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:inderkumarkulkarni@gmail.com">inderkumarkulkarni@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="icon">
                  <i className="fab fa-linkedin-in" />
                </div>
                <div>
                  <h4>LinkedIn</h4>
                  <a href="https://linkedin.com/in/inderkumarkulkarni" target="_blank" rel="noreferrer">
                    linkedin.com/in/inderkumarkulkarni
                  </a>
                </div>
              </div>
              <div className="contact-detail">
                <div className="icon">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Kalaburagi, Karnataka, India</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/inderkumarkulkarni" target="_blank" rel="noreferrer" className="social-link">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="https://github.com/Inderkumar-kulkarni" target="_blank" rel="noreferrer" className="social-link">
                  <i className="fab fa-github" />
                          </a>
              <a href="mailto:inderkumarkulkarni@gmail.com" className="social-link">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>
          <div className="contact-form-wrapper reveal reveal-delay-2">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="John"
                    value={contactForm.firstName}
                    onChange={handleContactChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={contactForm.lastName}
                    onChange={handleContactChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Subject</label>
                <select
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleContactChange}
                  required
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  <option>Project Collaboration</option>
                  <option>Internship Opportunity</option>
                  <option>Freelance Work</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  placeholder="Tell me about your project or inquiry..."
                  value={contactForm.message}
                  onChange={handleContactChange}
                />
              </div>
              {formStatus === "error" && (
                <p style={{ color: "#e85d4a", marginBottom: "16px", fontSize: "0.9rem" }}>
                  {formError}
                </p>
              )}
              {formStatus === "sent" && formMessage && (
                <p style={{ color: "#27ae60", marginBottom: "16px", fontSize: "0.9rem" }}>
                  {formMessage}
                </p>
              )}
              <button
                type="submit"
                className="btn btn-primary"
                disabled={formStatus === "sending"}
                style={formStatus === "sent" ? { background: "#27ae60" } : undefined}
              >
                {formStatus === "sending" && (
                  <>
                    <i className="fas fa-spinner fa-spin" /> Sending...
                  </>
                )}
                {formStatus === "sent" && (
                  <>
                    <i className="fas fa-check" /> Message Sent!
                  </>
                )}
                {(formStatus === "idle" || formStatus === "error") && (
                  <>
                    Send Message <i className="fas fa-paper-plane" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="logo" onClick={(e) => handleNavClick(e, "#home")}>
                Inderkumar<span>.</span>
              </a>
              <p>
                CS Engineering student passionate about building intelligent software solutions with Python, web
                technologies, and emerging AI/quantum tech.
              </p>
              <div className="social-links">
                <a
                  href="https://linkedin.com/in/inderkumarkulkarni"
                  target="_blank"
                  rel="noreferrer"
                  className="social-link"
                  style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
                >
                  <i className="fab fa-linkedin-in" />
                </a>
               <a href="https://github.com/Inderkumar-kulkarni"
                              target="_blank"
                                rel="noreferrer"
                                className="social-link"
                      style={{ background: "rgba(255,255,255,0.08)", color: "white" }} >
                              <i className="fab fa-github" />
                               </a>
                <a
                  href="mailto:inderkumarkulkarni@gmail.com"
                  className="social-link"
                  style={{ background: "rgba(255,255,255,0.08)", color: "white" }}
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About Me</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Services</a></li>
                <li><a href="#portfolio" onClick={(e) => handleNavClick(e, "#portfolio")}>Projects</a></li>
                <li><a href="#education" onClick={(e) => handleNavClick(e, "#education")}>Education</a></li>
                <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Expertise</h4>
              <ul className="footer-links">
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Web Development</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Machine Learning</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Quantum Computing</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Database Design</a></li>
                <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Data Analytics</a></li>
              </ul>
            </div>
            <div className="footer-newsletter">
              <h4>Stay Updated</h4>
              <p>Subscribe to get updates on my latest projects and tech insights.</p>
              <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Your email" />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Inderkumar Kulkarni. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        className={`back-to-top${showTop ? " visible" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>
    </>
  );
}
