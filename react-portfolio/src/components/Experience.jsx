import { useState } from 'react'

const jobs = [
  {
    organization: 'University of Gothenburg',
    logo: '/assets/icons/GoteborgsUniversitet.svg',
    url: 'https://www.gu.se/',
    role: 'Amanuens (Teaching Assistant)',
    location: 'Gothenburg',
    dates: 'Aug. 2025 - Jun. 2026',
  },
  {
    organization: 'Chalmers University of Technology',
    logo: '/assets/icons/chalmers.svg',
    url: 'https://www.chalmers.se/',
    role: 'Amanuens (Teaching Assistant)',
    location: 'Gothenburg',
    dates: 'Jan. 2024 - Jun. 2025',
  },
]

const projects = [
  {
    title: 'Automated Teaching Assistant Allocation System (ATAAS)',
    subtitle:
      "Bachelor's thesis project at Chalmers University of Technology, focused on constraint-based optimization, full-stack development, and scheduling automation.",
    description:
      'ATAAS is a web-based scheduling system developed to improve teaching assistant allocation at Chalmers and the University of Gothenburg. It replaces manual, spreadsheet-based scheduling with an automated approach that considers teaching assistants’ availability, workload requirements, and personal preferences. Course responsibles can configure courses and sessions, while teaching assistants specify hard constraints and soft preferences. I contributed to both the frontend and backend, implementing scheduling functionality and evaluating two optimization approaches: Choco Solver with Large Neighborhood Search and Google OR-Tools CP-SAT combined with a greedy heuristic. Benchmarking across 13 scenarios demonstrated significant improvements in scheduling runtime and preference satisfaction, with one scenario reducing runtime from 18.2 seconds to 87 milliseconds while also reducing the scheduling penalty from 463 to 143. The project was evaluated through a survey of 40 teaching assistants, an interview with a course responsible, and usability interviews with four teaching assistants.',
    technologies: [
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'React',
      'Vite',
      'Tailwind CSS',
      'Docker',
      'JWT',
      'Choco Solver',
      'Google OR-Tools CP-SAT'
    ],
    image: '/assets/icons/chalmers.svg',
    imageAlt: 'Chalmers',
    links: [
      {
        label: "Bachelor's Thesis",
        icon: '/assets/icons/paper.png',
        href: 'https://odr.chalmers.se/items/12383c2a-7c7e-42a4-8bd3-6a98ad425366',
      },
    ],
  },
  {
    title: 'LIVBOJ',
    subtitle: (
      <>
        Academic project at Chalmers University of Technology in collaboration
        with <strong className="ikea-name">IKEA</strong>, focused on
        sustainability.
      </>
    ),
    description:
      'One of IKEA’s sustainability goals is that each co-worker reports two incidents per year. The existing reporting process takes too much time, leading to incomplete reports or incidents going unreported. LIVBOJ is a new reporting system that uses AI to make it faster for workers and managers to complete forms, encouraging more complete reporting and freeing up time for analysis.',
    image: '/assets/projects/LIVBOJ.png',
    imageAlt: 'LIVBOJ project',
    technologies: ['Java', 'Java Swing', 'JUnit'],
    links: [
      {
        label: 'Website',
        icon: '/assets/icons/world-wide-web.png',
        href: 'https://sites.google.com/view/livboj-team15/home',
      },
    ],
  },
  {
    title: 'Net Zero Calculator (NZC)',
    subtitle:
      'Academic project at Chalmers University of Technology focused on Agile practices.',
    description:
      'The Net Zero Calculator is an AI-powered solution that gives companies an early estimate of what it takes to offset their carbon footprint. It analyzes day-to-day emissions and connects organizations with verified carbon capture projects worldwide, making sustainability more accessible and actionable.',
    image: '/assets/projects/NZC2.png',
    imageAlt: 'Net Zero Calculator project',
    technologies: ['Python', 'Django', 'OpenAI', 'Pandas', 'JavaScript', 'HTML', 'CSS'],
    links: [
      {
        label: 'Source',
        icon: '/assets/projects/github.png',
        href: 'https://github.com/KusaiAlMalt/Net-Zero-Calculator',
      },
      { label: 'Demo', icon: '/assets/projects/video.png', videoId: 'MIpDiOdT0VE' },
    ],
  },
  {
    title: 'Flicker',
    subtitle:
      'Academic project at Chalmers University of Technology focused on game design, construction, and accessibility.',
    description: (
      <>
        A dark pixel-art platformer inspired by <i>Limbo</i>. You play as a boy
        who falls into a cursed well and must navigate a silent, monster-filled
        cave using a torch that constantly fades. Find campfires to recover,
        avoid the creatures just outside the glow, and find the key needed to
        escape.
        <br />
        <br />
        If you’d like to try Flicker, contact me and I’ll send you the game
        build.
      </>
    ),
    image: '/assets/projects/FlickerGif.gif',
    imageAlt: 'Flicker gameplay',
    technologies: ['Unity'],
    links: [
      { label: 'Demo', icon: '/assets/projects/video.png', videoId: 'piAuqPJ2XDE' },
    ],
  },
  {
    title: 'Space Invaders',
    subtitle:
      'Academic project at Chalmers University of Technology focused on object-oriented programming, design patterns, and MVC architecture.',
    description:
      'This project followed an Agile workflow with weekly sprints, meetings, and continuous user feedback. The team created user stories, tested weekly, and followed best coding practices. Built on MVC architecture, the system uses design patterns such as Observer and Factory for modular, maintainable code. Weekly consultations, Figma prototypes, UML diagrams, documentation, and presentations supported a structured development process.',
    image: '/assets/projects/space_invaders.png',
    imageAlt: 'Space Invaders project',
    technologies: ['Java', 'JavaFX', 'JUnit'],
    links: [
      { label: 'Demo', icon: '/assets/projects/video.png', videoId: 'X43AZyxqbYI' },
    ],
  },
]

function ProjectActions({ links, title, onPlayVideo }) {
  return (
    <div className="project-actions">
      {links.map((link) =>
        link.videoId ? (
          <button
            className="project-action"
            key={link.label}
            type="button"
            onClick={() => onPlayVideo({ id: link.videoId, title })}
          >
            <img src={link.icon} alt="" />
            <span>{link.label}</span>
          </button>
        ) : (
          <a
            className="project-action"
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <img src={link.icon} alt="" />
            <span>{link.label}</span>
          </a>
        ),
      )}
    </div>
  )
}

function ProjectCard({ project, onPlayVideo }) {
  return (
    <article className="project-box">
      <div className="project-content">
        <h2>{project.title}</h2>
        <p className="project-subtitle">{project.subtitle}</p>
        <ProjectActions
          links={project.links}
          title={project.title}
          onPlayVideo={onPlayVideo}
        />
        <p>{project.description}</p>
      </div>
      <div className="project-aside">
        <div className="project-picture">
          <img src={project.image} alt={project.imageAlt} />
        </div>
        <ul className="project-tech" aria-label={`${project.title} technologies`}>
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function Experience({ onPlayVideo }) {
  const [activeTab, setActiveTab] = useState('work')

  return (
    <section className="glass-card content-card experience-card" aria-labelledby="experience-title">
      <header className="card-header">
        <h1 id="experience-title" className="visually-hidden">
          Work and projects
        </h1>
        <div className="experience-tabs" role="tablist" aria-label="Experience sections">
          <button
            id="work-tab"
            className={activeTab === 'work' ? 'tab chosen' : 'tab'}
            type="button"
            role="tab"
            aria-selected={activeTab === 'work'}
            aria-controls="work-panel"
            onClick={() => setActiveTab('work')}
          >
            Work
          </button>
          <span aria-hidden="true">|</span>
          <button
            id="projects-tab"
            className={activeTab === 'projects' ? 'tab chosen' : 'tab'}
            type="button"
            role="tab"
            aria-selected={activeTab === 'projects'}
            aria-controls="projects-panel"
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </button>
        </div>
      </header>

      <div
        id="work-panel"
        className="card-content work-list"
        role="tabpanel"
        aria-labelledby="work-tab"
        hidden={activeTab !== 'work'}
      >
        {jobs.map((job) => (
          <article className="work-item" key={job.organization}>
            <a href={job.url} target="_blank" rel="noreferrer">
              <img className="institution-logo" src={job.logo} alt={`${job.organization} logo`} />
            </a>
            <h2>{job.organization}</h2>
            <hr />
            <p><strong>{job.role}</strong></p>
            <p>{job.location}</p>
            <p>{job.dates}</p>
          </article>
        ))}
      </div>

      <div
        id="projects-panel"
        className="card-content project-list"
        role="tabpanel"
        aria-labelledby="projects-tab"
        hidden={activeTab !== 'projects'}
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onPlayVideo={onPlayVideo}
          />
        ))}
      </div>
    </section>
  )
}

export default Experience
