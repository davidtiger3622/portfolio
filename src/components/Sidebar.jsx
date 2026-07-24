import { navItems } from '../data/navigation'

const Sidebar = ({ activeSection, setActiveSection, sidebarOpen, onClose }) => {
  return (
    <>
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`w-64 shrink-0 h-screen fixed lg:sticky top-0 left-0 z-50 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-700 flex flex-col transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="px-6 py-6 flex items-center gap-2">
          <span className="font-display text-xl font-bold text-navy dark:text-mint">DW</span>
          <span className="font-display text-lg text-slate-700 dark:text-slate-200">Portfolio</span>
        </div>

        <nav className="flex-1 px-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-lg mb-1 font-body text-sm transition-colors ${
                  isActive
                    ? 'bg-navy text-white dark:bg-mint dark:text-slate-900'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.label}
              </button>
            )
          })}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
