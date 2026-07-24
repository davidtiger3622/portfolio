import ThemeToggle from './ThemeToggle'
import { navItems } from '../data/navigation'

const Topbar = ({ activeSection, onMenuClick }) => {
  const currentLabel = navItems.find((item) => item.id === activeSection)?.label

  return (
    <div className="flex items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onMenuClick}
          className="lg:hidden shrink-0 w-9 h-9 flex items-center justify-center rounded-lg border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300"
          aria-label="Open menu"
        >
          <span aria-hidden="true">&#9776;</span>
        </button>
        <div className="min-w-0">
          <h1 className="font-display text-xl sm:text-2xl font-semibold text-slate-800 dark:text-slate-100 truncate">
            My Portfolio
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 dark:text-slate-500 truncate">
            Dashboard <span className="mx-1">&rsaquo;</span> {currentLabel}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0">
        <a
          href="/resume.pdf"
          download
          className="bg-navy dark:bg-mint text-white dark:text-slate-900 font-body text-xs sm:text-sm font-medium px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap"
        >
          Download CV
        </a>
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Topbar