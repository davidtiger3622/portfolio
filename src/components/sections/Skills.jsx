import { skillCategories } from '../../data/skills'

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {skillCategories.map((group) => (
        <div
          key={group.category}
          className="border border-slate-200 dark:border-slate-700 rounded-xl p-5"
        >
          <h3 className="font-display text-sm font-semibold text-navy dark:text-mint uppercase tracking-wide mb-3">
            {group.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="text-xs font-body px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Skills
