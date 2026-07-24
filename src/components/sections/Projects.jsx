import { projects } from '../../data/projects'
import ProjectCard from '../ProjectCard'

const Projects = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}

export default Projects
