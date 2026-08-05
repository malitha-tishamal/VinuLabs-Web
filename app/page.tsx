const services = [
  {
    number: "01",
    title: "AI Strategy & Adoption",
    body: "Turn AI ambition into a practical roadmap—prioritised use cases, responsible adoption, and measurable business value.",
    tags: ["Readiness", "Roadmaps", "Governance"],
  },
  {
    number: "02",
    title: "Architecture & Engineering",
    body: "Design scalable, secure and cloud-ready systems with clear technical direction from concept through delivery.",
    tags: ["Cloud", "Platforms", "Technical review"],
  },
  {
    number: "03",
    title: "Business Transformation",
    body: "Connect customer needs, process improvement and technology choices to create solutions that work in the real world.",
    tags: ["Discovery", "Process", "Innovation"],
  },
  {
    number: "04",
    title: "Professional Training",
    body: "Build confident, capable teams through tailored programmes in AI, software engineering, cybersecurity and digital skills.",
    tags: ["AI literacy", "Upskilling", "Leadership"],
  },
  {
    number: "05",
    title: "Applied AI & R&D",
    body: "Bridge research and industry with intelligent prototypes, data-driven models and evidence-led technical experimentation.",
    tags: ["Machine learning", "Research", "Prototypes"],
  },
  {
    number: "06",
    title: "Delivery Leadership",
    body: "Strengthen execution with technical oversight, project governance and hands-on guidance for engineering teams.",
    tags: ["Delivery", "Quality", "Team enablement"],
  },
];

const approach = [
  {
    step: "01",
    title: "Understand",
    body: "We listen first—your goals, customers, constraints and current capabilities.",
  },
  {
    step: "02",
    title: "Shape",
    body: "We turn complexity into a focused strategy and a practical solution design.",
  },
  {
    step: "03",
    title: "Deliver",
    body: "We work alongside your team to move from decisions to dependable outcomes.",
  },
  {
    step: "04",
    title: "Enable",
    body: "We transfer knowledge so your people can sustain, improve and scale the work.",
  },
];

const team = [
  {
    initials: "CJ",
    name: "Chamil Jeewantha",
    role: "Co-Founder & Director",
    focus: "Technology Strategy · Architecture · Product Delivery",
    body: "A software and technology leader focused on technical excellence, scalable platforms, product innovation and long-term customer partnerships.",
    linkedIn: "https://www.linkedin.com/in/chamil/",
    tone: "violet",
    image: "/chamil-jeewantha.png",
  },
  {
    initials: "TW",
    name: "Thamara Rangana Waidyarathne",
    role: "Academic & AI Strategy Lead",
    focus: "AI Education · Training · Business Development",
    body: "An academic leader, consultant and AI researcher bringing together workforce development, responsible AI adoption and industry–education collaboration.",
    linkedIn:
      "https://www.linkedin.com/in/thamara-rangana-waidyarathne-74a38459/",
    tone: "cyan",
    image: "/thamara-waidyarathne.png",
  },
  {
    initials: "SV",
    name: "Dr. Sugandima Vidanagamachchi",
    role: "Applied AI & Research Lead",
    focus: "AI/ML · Cybersecurity · Research & Innovation",
    body: "A computer science researcher and senior academic specialising in machine learning, deep learning, cybersecurity, bioinformatics and accelerated computing.",
    linkedIn:
      "https://www.linkedin.com/in/sugandima-vidanagamachchi-75205921/",
    tone: "amber",
    image: null,
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function VinuLabsLogo() {
  return (
    <img
      className="brand-logo"
      src="/vinulabs-logo.jpeg"
      alt=""
      width="200"
      height="200"
    />
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="VinuLabs home">
          <VinuLabsLogo />
        </a>

        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#services">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#team">Team</a>
        </nav>

        <a
          className="button button-small button-dark"
          href="https://www.linkedin.com/company/vinulab/"
          target="_blank"
          rel="noreferrer"
        >
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <div id="main-content">
        <section className="hero" id="top">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-grid" aria-hidden="true" />

          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" /> AI · Cloud · Architecture ·
              Capability
            </p>
            <h1>
              Smart strategy.
              <br />
              <span>Systems that scale.</span>
            </h1>
            <p className="hero-lead">
              VinuLabs helps organisations turn complex technology challenges
              into practical solutions—combining strategic consultancy,
              engineering leadership and professional training.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#services">
                Explore our expertise <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-link"
                href="https://www.linkedin.com/company/vinulab/"
                target="_blank"
                rel="noreferrer"
              >
                Start a conversation <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="VinuLabs capability model">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core">
              <span className="core-kicker">VinuLabs</span>
              <strong>Ideas to<br />impact.</strong>
            </div>
            <div className="signal signal-one">
              <span /> Strategy
            </div>
            <div className="signal signal-two">
              <span /> Technology
            </div>
            <div className="signal signal-three">
              <span /> People
            </div>
          </div>

          <div className="hero-proof">
            <div>
              <span className="proof-value">3</span>
              <span className="proof-label">Complementary experts</span>
            </div>
            <div>
              <span className="proof-value">End-to-end</span>
              <span className="proof-label">Strategy through enablement</span>
            </div>
            <div>
              <span className="proof-value">Industry + Academia</span>
              <span className="proof-label">Experience meets evidence</span>
            </div>
          </div>
        </section>

        <section className="intro section-shell">
          <p className="section-label">What we do</p>
          <div className="intro-copy">
            <h2>
              We help organisations make
              <span> better technology decisions.</span>
            </h2>
            <p>
              Our work sits where business ambition, intelligent technology and
              people meet. We bring senior-level thinking without unnecessary
              complexity—and stay close enough to delivery to make the strategy
              real.
            </p>
          </div>
        </section>

        <section className="services-section" id="services">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-label light">Our expertise</p>
                <h2>Focused capabilities.<br />Connected outcomes.</h2>
              </div>
              <p>
                Engage us for a focused advisory assignment, a tailored training
                programme or an end-to-end transformation partnership.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <div className="service-topline">
                    <span>{service.number}</span>
                    <span className="service-arrow" aria-hidden="true">↗</span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <ul aria-label={`${service.title} topics`}>
                    {service.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-shell" id="approach">
          <div className="approach-copy">
            <p className="section-label">How we work</p>
            <h2>Clear thinking.<br />Practical progress.</h2>
            <p>
              No off-the-shelf answers. We work closely with customers to
              understand the real challenge, shape the right response and build
              capability that lasts.
            </p>
            <div className="principle">
              <span className="principle-mark" aria-hidden="true">“</span>
              <p>
                Technology creates impact when strategy, systems and people move
                together.
              </p>
            </div>
          </div>

          <ol className="approach-list">
            {approach.map((item) => (
              <li key={item.step}>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="team-section" id="team">
          <div className="section-shell">
            <div className="team-heading">
              <div>
                <p className="section-label">Our team</p>
                <h2>Three perspectives.<br />One shared standard.</h2>
              </div>
              <p>
                VinuLabs combines deep industry delivery experience with
                academic leadership and applied research expertise.
              </p>
            </div>

            <div className="team-grid">
              {team.map((person) => (
                <article className="team-card" key={person.name}>
                  <div
                    className={`portrait-placeholder ${person.tone}${person.image ? " has-photo" : ""}`}
                  >
                    {person.image ? (
                      <img
                        className="team-photo"
                        src={person.image}
                        alt={`${person.name} speaking at a professional event`}
                      />
                    ) : (
                      <>
                        <span className="portrait-orbit" />
                        <strong>{person.initials}</strong>
                      </>
                    )}
                  </div>
                  <div className="team-card-copy">
                    <p className="person-role">{person.role}</p>
                    <h3>{person.name}</h3>
                    <p className="person-focus">{person.focus}</p>
                    <p className="person-bio">{person.body}</p>
                    <a
                      href={person.linkedIn}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${person.name}'s LinkedIn profile`}
                    >
                      LinkedIn <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-grid" aria-hidden="true" />
          <div className="section-shell cta-inner">
            <p className="section-label light">Start a conversation</p>
            <h2>Have a challenge worth solving?</h2>
            <p>
              Let&apos;s explore what a focused strategy, the right architecture
              and an enabled team could make possible.
            </p>
            <a
              className="button button-light"
              href="https://www.linkedin.com/company/vinulab/"
              target="_blank"
              rel="noreferrer"
            >
              Talk to VinuLabs <Arrow />
            </a>
          </div>
        </section>
      </div>

      <footer>
        <div className="footer-brand">
          <a className="brand brand-light" href="#top" aria-label="VinuLabs home">
            <VinuLabsLogo />
          </a>
          <p>Strategy · Technology · Capability</p>
        </div>
        <div className="footer-links">
          <a href="#services">Expertise</a>
          <a href="#approach">Approach</a>
          <a href="#team">Team</a>
          <a
            href="https://www.linkedin.com/company/vinulab/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <Arrow />
          </a>
        </div>
        <p className="copyright">© 2026 VinuLabs Pvt Ltd.</p>
      </footer>
    </main>
  );
}
