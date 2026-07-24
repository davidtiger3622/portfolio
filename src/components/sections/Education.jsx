import { education, certifications } from '../../data/education'

const Education = () => {
  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h3 className="font-display text-sm font-semibold text-navy dark:text-mint uppercase tracking-wide mb-3">
          Education
        </h3>
        <div className="space-y-3">
          {education.map((item) => (
            <div key={item.degree} className="border border-slate-200 dark:border-slate-700 rounded-xl p-5">
              <h4 className="font-display text-lg font-semibold text-slate-800 dark:text-slate-100">
                {item.degree}
              </h4>
              <p className="text-sm font-body text-navy dark:text-mint mt-0.5">{item.institution}</p>
              <p className="text-xs font-body text-slate-500 dark:text-slate-300 mt-1">{item.period}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display text-sm font-semibold text-navy dark:text-mint uppercase tracking-wide mb-3">
          Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {certifications.map((cert) => (
            <div key={cert.name} className="border border-slate-200 dark:border-slate-700 rounded-xl p-4">
              <p className="text-sm font-body font-medium text-slate-700 dark:text-slate-200">{cert.name}</p>
              <p className="text-xs font-body text-slate-500 dark:text-slate-300 mt-1">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
