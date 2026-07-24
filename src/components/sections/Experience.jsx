import { experience } from '../../data/experience'

const Experience = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {experience.map((job) => (
        <div
          key={`${job.company}-${job.period}`}
          className="border border-slate-200 dark:border-slate-700 rounded-xl p-5"
        >
          <div className="flex items-start justify-between flex-wrap gap-2">
            <div>
              <h3 className="font-display text-lg font-semibold text-slate-800 dark:text-slate-100">
                {job.role}
              </h3>
              <p className="font-body text-sm text-navy dark:text-mint">{job.company}</p>
            </div>
            <div className="text-right">
              <p className="text-xs font-body text-slate-500 dark:text-slate-300">{job.period}</p>
              <p className="text-xs font-body text-slate-500 dark:text-slate-300">{job.location}</p>
            </div>
          </div>

          <ul className="mt-3 space-y-1.5">
            {job.points.map((point, i) => (
              <li
                key={i}
                className="text-sm font-body text-slate-600 dark:text-slate-300 flex gap-2"
              >
                <span className="text-navy dark:text-mint">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mt-3">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-body px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experience
