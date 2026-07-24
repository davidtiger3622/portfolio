const ProjectCard = ({ project }) => {
    return (
      <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
        <img src={project.image} alt={`${project.name} screenshot`} className="w-full h-72 object-contain bg-slate-100 dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700" />
  
        <div className="p-5">
          <h3 className="font-display text-xl font-semibold text-slate-800 dark:text-slate-100">
            {project.name}
          </h3>
          <p className="text-sm font-body text-navy dark:text-mint mt-0.5">{project.tagline}</p>
  
          <p className="text-sm font-body text-slate-600 dark:text-slate-300 mt-3">
          {project.description}
        </p>

        <p className="text-xs font-body text-slate-500 dark:text-slate-400 mt-2">
          Live: <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-navy dark:text-mint underline">{project.liveUrl.replace('https://', '')}</a>
        </p>
  
          <div className="flex flex-wrap gap-2 mt-3">
            {project.stack.map((tech) => (
              <span key={tech} className="text-xs font-body px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-200">
                {tech}
              </span>
            ))}
          </div>
  
          <ul className="mt-4 space-y-1.5">
            {project.highlights.map((point, i) => (
              <li key={i} className="text-sm font-body text-slate-600 dark:text-slate-300 flex gap-2">
                <span className="text-navy dark:text-mint">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
  
          <div className="flex flex-wrap gap-3 mt-5">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-body font-medium bg-navy dark:bg-mint text-white dark:text-slate-900 px-3 py-2 rounded-lg">
              Live Demo
            </a>
            {project.docsUrl !== project.liveUrl && (
            <a href={project.docsUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-body font-medium border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 px-3 py-2 rounded-lg">
              API Docs
            </a>
          )}
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-body font-medium border border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-200 px-3 py-2 rounded-lg">
              GitHub
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProjectCard
