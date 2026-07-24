import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/sections/Dashboard'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavigate = (section) => {
    setActiveSection(section)
    setSidebarOpen(false)
  }

  return (
    <div className="flex bg-white dark:bg-slate-900 min-h-screen">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={handleNavigate}
        sidebarOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <main className="flex-1 min-w-0">
        <Topbar activeSection={activeSection} onMenuClick={() => setSidebarOpen(true)} />
        <div className="px-4 sm:px-6 lg:px-8 pb-8">
          {activeSection === 'dashboard' && <Dashboard onNavigate={handleNavigate} />}
          {activeSection === 'skills' && <Skills />}
          {activeSection === 'experience' && <Experience />}
          {activeSection === 'projects' && <Projects />}
          {activeSection === 'education' && <Education />}
          {activeSection === 'contact' && <Contact />}
        </div>
      </main>
    </div>
  )
}

export default App
