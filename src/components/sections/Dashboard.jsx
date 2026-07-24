import { profile } from '../../data/profile'

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-6">
        <div className="w-20 h-20 rounded-full bg-navy dark:bg-mint flex items-center justify-center shrink-0">
          <span className="font-display text-2xl font-bold text-white dark:text-slate-900">DW</span>
        </div>

        <div>
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-display text-3xl font-bold text-slate-800 dark:text-slate-100">
              {profile.name}
            </h2>
            <span className="text-xs font-body font-medium bg-mint/20 text-navy dark:text-mint px-3 py-1 rounded-full">
              {profile.availability}
            </span>
          </div>
          <p className="font-display text-lg text-navy dark:text-mint mt-1">{profile.title}</p>
          <p className="font-body text-slate-500 dark:text-slate-400 mt-3 max-w-2xl">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {profile.badges.map((badge) => (
              <span
                key={badge}
                className="text-xs font-body px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-xl">
        {profile.stats.map((stat) => (
          <div
            key={stat.label}
            className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center"
          >
            <p className="font-display text-2xl font-bold text-navy dark:text-mint">{stat.value}</p>
            <p className="text-xs font-body text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
