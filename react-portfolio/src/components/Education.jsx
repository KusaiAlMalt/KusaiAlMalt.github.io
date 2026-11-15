const education = [
  {
    name: 'Chalmers University of Technology',
    logo: '/assets/icons/chalmers.svg',
    url: 'https://www.chalmers.se/',
    degree: 'Master of Science, Computer Systems and Cybersecurity',
    dates: 'August 2026 - June 2028',
  },
  {
    name: 'Chalmers University of Technology',
    logo: '/assets/icons/chalmers.svg',
    url: 'https://www.chalmers.se/',
    degree: 'Bachelor of Science, Information Technology',
    dates: 'August 2023 - June 2026',
  },
]

function Education() {
  return (
    <section className="glass-card content-card" aria-labelledby="education-title">
      <header className="card-header">
        <h1 id="education-title">Education</h1>
      </header>
      <div className="card-content">
        {education.map((item) => (
          <article className="education-item" key={item.name}>
            <a href={item.url} target="_blank" rel="noreferrer">
              <img className="institution-logo" src={item.logo} alt={`${item.name} logo`} />
            </a>
            <h2>{item.name}</h2>
            <hr />
            <a href={item.url} target="_blank" rel="noreferrer">
              <p><b>{item.degree}</b></p>
            </a>
            <p>{item.dates}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education
