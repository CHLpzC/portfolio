import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  AudioLines,
  Braces,
  Cloud,
  Database,
  Globe2,
  Mail,
  Orbit,
  Phone,
  Radio,
  Sparkles,
} from 'lucide-react'

const resumeUrl = 'https://drive.google.com/file/d/1hnENXTQrPpUw50j9938lLMjqJAgctT7F/view?usp=drive_link'

const roles = [
  {
    period: 'SEP 2024 — PRESENT',
    company: 'Enersí',
    title: 'Head of Development & Cloud Architect',
    location: 'Guadalajara, Jalisco',
    summary: 'Leading backend architecture, cloud optimization, and applied AI research across data intensive products.',
    outcomes: [
      'Reduced cloud operating costs by 20% through usage audits and infrastructure refactoring.',
      'Introduced deployment tooling that accelerated delivery by 25%.',
      'Built automated ETL/ELT pipelines and LLM enabled workflows for high scale data ingestion.',
    ],
    tags: ['Node.js', 'Python', 'AWS / GCP', 'LLM workflows'],
  },
  {
    period: 'JUL 2021 — SEP 2024',
    company: 'OKBOY',
    title: 'Lead Software Engineer & CTO',
    location: 'Guadalajara, Jalisco',
    summary: 'Owned technical direction and delivered cloud native platforms from architecture through production.',
    outcomes: [
      'Reached 99% uptime while reducing system latency by 40%.',
      'Established microservices, CI/CD, and data governance practices across the platform.',
      'Led technical experimentation that shortened time to market for core products.',
    ],
    tags: ['Platform architecture', 'CI/CD', 'AWS / GCP', 'Technical leadership'],
  },
  {
    period: 'DEC 2018 — JUL 2021',
    company: 'Grupo Tress Internacional',
    title: 'Senior Backend & Cloud Engineer',
    location: 'Hermosillo, Sonora',
    summary: 'Helped move established HR platforms toward secure, scalable cloud infrastructure.',
    outcomes: [
      'Cut deployment time by more than 70% during the company’s cloud transition.',
      'Designed secure, high performance architectures and scalable internal APIs.',
    ],
    tags: ['Backend systems', 'Cloud migration', 'REST APIs', 'HR platforms'],
  },
  {
    period: 'NOV 2016 — DEC 2018',
    company: 'CT Internacional',
    title: 'IT Systems Analyst',
    location: 'Hermosillo, Sonora',
    summary: 'Built internal systems and production infrastructure to improve workflow and interoperability.',
    outcomes: [
      'Developed CTIntegral, a full stack system for more efficient internal workflows.',
      'Built REST APIs, administered Linux servers, and introduced TFS and documentation standards.',
    ],
    tags: ['Full stack', 'Linux', 'REST APIs', 'TFS'],
  },
  {
    period: 'JAN 2015 — NOV 2016',
    company: 'Macropro',
    title: 'Software Engineer',
    location: 'Hermosillo, Sonora',
    summary: 'Worked across ERP engineering, data modeling, and agile delivery for operational software.',
    outcomes: [
      'Led the design and launch of a new ERP system with a focus on relational data architecture.',
      'Served as Scrum Master, improving sprint coordination during complex releases.',
    ],
    tags: ['ERP', 'Data modeling', 'SQL', 'Scrum'],
  },
]

const capabilityGroups = [
  {
    icon: Braces,
    index: '01',
    title: 'Backend & architecture',
    description: 'Reliable services, clear interfaces, and systems designed to evolve.',
    skills: ['Node.js', 'TypeScript', 'Python', 'REST APIs', 'Microservices', 'Serverless'],
  },
  {
    icon: Cloud,
    index: '02',
    title: 'Cloud & platform',
    description: 'Cloud foundations that balance resilience, delivery speed, and cost.',
    skills: ['AWS', 'GCP', 'Terraform', 'CloudFormation', 'Docker', 'CI/CD'],
  },
  {
    icon: Database,
    index: '03',
    title: 'Data systems',
    description: 'Practical data models and pipelines for dependable analytical workflows.',
    skills: ['PostgreSQL', 'MySQL', 'MSSQL', 'DynamoDB', 'MongoDB', 'Athena', 'dbt'],
  },
  {
    icon: Sparkles,
    index: '04',
    title: 'AI research & development',
    description: 'Exploring useful applications of language models and automation.',
    skills: ['LLM integration', 'NLP', 'ETL / ELT', 'Workflow automation'],
  },
]

const certifications = [
  ['2022', 'AWS Certified Developer – Associate', 'Amazon Web Services'],
  ['2019', 'Exam 483: Programming in C#', 'Microsoft'],
  ['2019', 'Scrum Team Member', 'International Scrum Institute'],
]

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="CHLpzC, home">
          <span className="brand-symbol"><span>CH</span><i /></span>
          <span className="brand-name">CHLpzC<span>CARLOS H. LÓPEZ CARRILLO</span></span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#journey">Journey</a>
          <a href="#expertise">Expertise</a>
          <a href="#about">About</a>
        </nav>
        <a className="nav-resume" href={resumeUrl} target="_blank" rel="noreferrer">Résumé <ArrowUpRight size={14} /></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-stars" aria-hidden="true" />
        <div className="black-hole-system" aria-hidden="true">
          <div className="space-ripple ripple-one" />
          <div className="space-ripple ripple-two" />
          <div className="binary-pair">
            <div className="black-hole hole-one"><span /></div>
            <div className="black-hole hole-two"><span /></div>
          </div>
          <div className="collision-flare" />
          <div className="merger-remnant"><span /></div>
        </div>
        <div className="hero-content">
          <div className="eyebrow light"><i className="status-dot" /> SOFTWARE ARCHITECTURE&nbsp; / &nbsp;CLOUD&nbsp; / &nbsp;DATA</div>
          <h1>Engineering<br />what comes <em>next.</em></h1>
          <p className="hero-intro">I’m Carlos López Carrillo, a backend architect and cloud engineer building dependable systems, useful data products, and room for new ideas.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#journey">Explore my work <ArrowDownRight size={16} /></a>
            <a className="text-link light-link" href="mailto:carloshumbertolc@gmail.com">Get in touch <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-index"><span>PROFILE / 01</span><span>HERMOSILLO, SONORA, MEXICO</span></div>
        <a className="scroll-cue" href="#snapshot" aria-label="Scroll to career snapshot"><ArrowDown size={15} /></a>
      </section>

      <section className="snapshot" id="snapshot" aria-label="Career at a glance">
        <div className="snapshot-heading"><span className="eyebrow">A DECADE OF BUILDING</span><span className="snapshot-line" /></div>
        <div className="metrics">
          <div className="metric"><strong>10<span>+</span></strong><span>YEARS IN SOFTWARE</span></div>
          <div className="metric"><strong>20<span>%</span></strong><span>CLOUD COST REDUCTION</span></div>
          <div className="metric"><strong>99<span>%</span></strong><span>PLATFORM UPTIME</span></div>
          <div className="metric"><strong>70<span>%</span></strong><span>FASTER DEPLOYMENTS</span></div>
        </div>
        <p className="metric-note">Selected results from teams and systems I’ve helped build.</p>
      </section>

      <section className="journey section-shell" id="journey">
        <div className="section-intro">
          <div className="eyebrow"><span className="section-mark">01</span> CAREER TRAJECTORY</div>
          <h2>Built through<br /><em>the details.</em></h2>
          <p>From hands-on engineering to technical leadership, each role has added a new layer: better systems, stronger teams, and measurable outcomes.</p>
          <a className="text-link" href={resumeUrl} target="_blank" rel="noreferrer">Full résumé <ArrowUpRight size={15} /></a>
        </div>
        <div className="timeline">
          <div className="timeline-rail" aria-hidden="true"><span /></div>
          {roles.map((role, index) => (
            <article className="role" key={role.company}>
              <div className="role-meta"><span>{role.period}</span><span>{role.location}</span></div>
              <div className="role-main">
                <div className="role-heading"><div><h3>{role.company}</h3><p>{role.title}</p></div><span className="role-count">0{index + 1}</span></div>
                <p className="role-summary">{role.summary}</p>
                <ul>{role.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
                <div className="role-tags">{role.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise" id="expertise">
        <div className="section-shell expertise-shell">
          <div className="expertise-heading">
            <div><div className="eyebrow light"><span className="section-mark">02</span> SYSTEMS THINKING</div><h2>Tools for making<br /><em>complexity useful.</em></h2></div>
            <p>A broad technical foundation, applied with a focus on clarity, reliability, and sustainable delivery.</p>
          </div>
          <div className="capability-grid">
            {capabilityGroups.map(({ icon: Icon, index, title, description, skills }) => (
              <article className="capability" key={title}>
                <div className="capability-top"><span>{index}</span><Icon size={19} strokeWidth={1.5} /></div>
                <h3>{title}</h3><p>{description}</p>
                <div className="capability-skills">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="product-foundations">
            <div className="product-foundations-intro"><span>ALSO IN THE TOOLKIT</span><p>Full stack foundations and product delivery across web and mobile.</p></div>
            <div className="product-track"><span>WEB</span><p>React <i /> Vue <i /> Angular</p></div>
            <div className="product-track"><span>NATIVE MOBILE</span><p>Swift <i /> Java <i /> Kotlin</p></div>
            <div className="product-track"><span>CROSS-PLATFORM</span><p>Ionic <i /> Flutter</p></div>
          </div>
          <div className="toolchain"><span className="toolchain-label">OPERATING PRINCIPLES</span><span>Architecture with intent</span><i /><span>Automate the repeatable</span><i /><span>Measure what matters</span><i /><span>Keep learning</span></div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-visual" aria-hidden="true">
          <div className="science-orbit science-orbit-a" /><div className="science-orbit science-orbit-b" />
          <div className="science-atom"><span /><i /><b /></div>
          <div className="visual-caption"><span>FIG. 01</span><span>INFINITE CURIOSITY</span></div>
          <div className="music-note"><AudioLines size={16} /><span>88 KEYS / ENDLESS PATTERNS</span></div>
        </div>
        <div className="about-copy">
          <div className="eyebrow"><span className="section-mark">03</span> BEYOND THE STACK</div>
          <h2>Curiosity is a<br /><em>working principle.</em></h2>
          <p>I’m drawn to problems where the pieces connect: software, data, people, and the systems around them. Science is a lasting source of inspiration, from the way matter behaves to the vast structures of the universe.</p>
          <p>Music offers another kind of systems thinking. At the piano, patterns, timing, and creative instinct meet. Those same ideas shape how I approach engineering: listen closely, understand the structure, then make something that works beautifully.</p>
          <div className="about-interests"><span><Orbit size={15} /> COSMOS & PHYSICS</span><span><AudioLines size={15} /> PIANO & MUSIC</span><span><Radio size={15} /> ALWAYS LEARNING</span></div>
        </div>
      </section>

      <section className="foundation">
        <div className="foundation-shell">
          <div className="education-block">
            <div className="eyebrow light"><span className="section-mark">04</span> FOUNDATION</div>
            <h2>Learned by<br /><em>doing.</em></h2>
            <div className="education-entry"><span className="education-icon"><Globe2 size={19} /></span><div><h3>Instituto Tecnológico de Hermosillo</h3><p>Bachelor of Science · Computer Systems Engineering</p><span>HERMOSILLO, SONORA · 2015</span></div></div>
          </div>
          <div className="certifications">
            <div className="eyebrow light">CERTIFICATIONS</div>
            {certifications.map(([year, title, issuer]) => <div className="certification" key={title}><span>{year}</span><div><strong>{title}</strong><small>{issuer}</small></div><ArrowUpRight size={14} /></div>)}
            <div className="languages"><span>LANGUAGES</span><p>Spanish <b>Native</b><i /> English <b>Advanced · C1</b></p></div>
          </div>
        </div>
      </section>

      <footer className="contact" id="contact">
        <div className="contact-orbit" aria-hidden="true"><span /><i /><b /></div>
        <div className="contact-content">
          <div className="eyebrow light"><span className="status-dot" /> OPEN TO A GOOD CONVERSATION</div>
          <h2>Good work starts<br />with <em>a signal.</em></h2>
          <p>Have a challenge in mind? I’d be glad to hear about it.</p>
          <div className="contact-actions"><a className="text-link light-link contact-method" href="mailto:carloshumbertolc@gmail.com"><Mail size={15} aria-hidden="true" /> carloshumbertolc@gmail.com <ArrowUpRight size={13} aria-hidden="true" /></a><a className="text-link light-link contact-method" href="tel:+526624255085"><Phone size={14} aria-hidden="true" /> +52 662 425 5085</a></div>
        </div>
        <div className="footer-bottom"><a className="footer-brand" href="#home">CHLpzC<span>CARLOS H. LÓPEZ CARRILLO</span></a><span>HERMOSILLO, SONORA, MEXICO</span><a href={resumeUrl} target="_blank" rel="noreferrer">RÉSUMÉ <ArrowUpRight size={13} /></a><span>© 2026</span></div>
      </footer>
    </main>
  )
}
