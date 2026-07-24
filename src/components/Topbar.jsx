import ThemeToggle from './ThemeToggle'
import { navItems } from '../data/navigation'

const Topbar = ({ activeSection }) => {
  const currentLabel = navItems.find((item) => item.id === activeSection)?.label

  return (
    <div className="flex items-center justify-between px-8 py-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-slate-800 dark:text-slate-100">
          My Portfolio
        </h1>
        <p className="text-sm text-slate-400 dark:text-slate-500">
          Dashboard <span className="mx-1">&rsaquo;</span> {currentLabel}
        </p>
      </div>

      <div className="flex items-center gap-4">
        <a href="/resume.pdf" download className="bg-navy dark:bg-mint text-white dark:text-slate-900 font-body text-sm font-medium px-4 py-2 rounded-lg">
          Download CV
        </a>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Topbar
