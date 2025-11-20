import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [projects, setProjects] = useState([])
  const [apiStatus, setApiStatus] = useState('checking...')

  useEffect(() => {
    // Check API health
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setApiStatus(data.status))
      .catch(() => setApiStatus('error'))

    // Fetch projects
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data.projects))
      .catch(err => console.error('Error fetching projects:', err))
  }, [])

  return (
    <div className="App">
      <header>
        <h1>My Portfolio</h1>
        <p>API Status: <span className={apiStatus === 'OK' ? 'status-ok' : 'status-error'}>{apiStatus}</span></p>
      </header>

      <main>
        <section className="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map(project => (
              <div key={project.id} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                {project.tech && (
                  <div className="tech-stack">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Built with React + Vite + Express on Vercel</p>
      </footer>
    </div>
  )
}

export default App
