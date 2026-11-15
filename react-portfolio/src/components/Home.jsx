function Home() {
  return (
    <section className="glass-card home-card" aria-labelledby="home-title">
      <div className="location">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Gothenburg%2C+Sweden"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/icons/location.png" alt="Location" />
          <span>Gothenburg</span>
        </a>
      </div>

      <div className="personal-links" aria-label="Contact and social links">
        <a
          href="https://github.com/KusaiAlMalt"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <img src="/assets/icons/github.png" alt="Github" />
        </a>
        <a
          href="https://se.linkedin.com/in/kusai-al-malt"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="mailto:kusai.malt@gmail.com" aria-label="Email">
          <img src="/assets/icons/mail.png" alt="Email" />
        </a>
      </div>

      <div className="home-content">
        <img
          className="profile-pic"
          src={'/assets/profpic.png'}
          alt="Kusai Al Malt"
        />
        <h1 id="home-title">Kusai Al Malt</h1>
        <p>M.Sc. Computer Systems and Cybersecurity</p>
        <a
          href="https://www.chalmers.se/"
          target="_blank"
          aria-label="Chalmers"
        >
          @Chalmers University of Technology
        </a>
      </div>
    </section>
  )
}

export default Home
