import { Github } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3 className="accent">{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech">
        {project.tech.map(t => (
          <span key={t}>{t}</span>
        ))}
      </div>

      {project.github && (
        <a href={project.github} target="_blank">
          <Github size={16} /> Code
        </a>
      )}
    </div>
  );
}
