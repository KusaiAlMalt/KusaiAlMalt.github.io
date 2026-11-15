import { useState } from 'react'
import Education from './components/Education.jsx'
import Experience from './components/Experience.jsx'
import Home from './components/Home.jsx'
import Navigation from './components/Navigation.jsx'
import VideoModal from './components/VideoModal.jsx'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [activeVideo, setActiveVideo] = useState(null)

  return (
    <>
      <main className="page-shell">
        {activePage === 'home' && <Home />}
        {activePage === 'education' && <Education />}
        {activePage === 'experience' && (
          <Experience onPlayVideo={setActiveVideo} />
        )}
      </main>
      <Navigation activePage={activePage} onNavigate={setActivePage} />
      {activeVideo && (
        <VideoModal
          video={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </>
  )
}

export default App
