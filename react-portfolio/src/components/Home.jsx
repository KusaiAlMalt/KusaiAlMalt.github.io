import { useState } from 'react'

function Home() {
  const [isProfileHovered, setIsProfileHovered] = useState(false)

  return (
    <section className="glass-card home-card" aria-labelledby="home-title">
      <div className="location">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Gothenburg%2C+Sweden"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/icons/location.png" alt="" />
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
          <img src="/assets/icons/github.png" alt="" />
        </a>
        <a
          href="https://se.linkedin.com/in/kusai-al-malt"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <img src="/assets/icons/linkedin.png" alt="" />
        </a>
        <a href="mailto:kusai.malt@gmail.com" aria-label="Email">
          <img src="/assets/icons/mail.png" alt="" />
        </a>
      </div>

      <div className="home-content">
        <img
          className="profile-pic"
          src={
            isProfileHovered
              ? '/assets/profile_pic_on_hover.jpg'
              : '/assets/profile_pic.jpg'
          }
          alt="Kusai Al Malt"
          onMouseEnter={() => setIsProfileHovered(true)}
          onMouseLeave={() => setIsProfileHovered(false)}
        />
        <h1 id="home-title">Kusai Al Malt</h1>
        <p>M.Sc. Computer Systems and Cybersecurity</p>
        <p>Cybersecurity &amp; Software Dev Enthusiast &amp; Details Lover &amp; Problem Solver</p>
      </div>
    </section>
  )
}

export default Home
