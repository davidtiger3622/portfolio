import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { profile } from '../../data/profile'
import { contact } from '../../data/contact'

const Dashboard = ({ onNavigate }) => {
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
          <p className="font-body text-slate-500 dark:text-slate-400 mt-3 max-w-3xl">
            {profile.bio}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {profile.badges.map((badge) => (
              <span key={badge} className="text-xs font-body px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-xl">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4 text-center">
            <p className="font-display text-2xl font-bold text-navy dark:text-mint">{stat.value}</p>
            <p className="text-xs font-body text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-6 max-w-2xl">
        <h3 className="font-display text-sm font-semibold text-navy dark:text-mint uppercase tracking-wide mb-4">
          Contact
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <button onClick={() => onNavigate('contact')} className="flex items-center gap-3 text-sm font-body text-slate-600 dark:text-slate-200 text-left">
            <span className="w-9 h-9 rounded-lg bg-red-500 flex items-center justify-center text-white shrink-0">
              <FaEnvelope size={16} />
            </span>
            {contact.email}
          </button>
          <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="flex items-center gap-3 text-sm font-body text-slate-600 dark:text-slate-200">
            <span className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white shrink-0">
              <FaPhone size={15} />
            </span>
            {contact.phone}
          </a>
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-body text-slate-600 dark:text-slate-200">
            <span className="w-9 h-9 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shrink-0">
              <FaLinkedin size={18} />
            </span>
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-body text-slate-600 dark:text-slate-200">
            <span className="w-9 h-9 rounded-lg bg-slate-800 dark:bg-slate-950 flex items-center justify-center text-white shrink-0">
              <FaGithub size={18} />
            </span>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
