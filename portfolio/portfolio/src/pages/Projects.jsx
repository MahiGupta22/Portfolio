import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import backend from "../data/projects/backend.json";

export default function Projects() {
  return (
    <section>
      <SectionTitle
        title="Projects"
        subtitle="Backend-focused projects demonstrating problem solving and system design"
      />

      <div className="grid">
        {backend.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
