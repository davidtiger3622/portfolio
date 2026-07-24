import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/sections/Dashboard'

function App() {
  const [activeSection, setActiveSection] = useState('dashboard')

  return (
    <div className="flex bg-white dark:bg-slate-900 min-h-screen">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1">
        <Topbar activeSection={activeSection} />
        <div className="px-8 pb-8">
          {activeSection === 'dashboard' && <Dashboard />}
        </div>
      </main>
    </div>
  )
}

export default App
