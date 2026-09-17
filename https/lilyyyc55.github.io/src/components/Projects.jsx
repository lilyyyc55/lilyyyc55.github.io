import { Link } from "react-router-dom";
import { projectData } from "../pages/ProjectsPage";

export default function Projects() {
  const featured = projectData[0];

  return (
    <section className="projects" id="projects">
      <p className="section-label">Projects</p>
      <a href={featured.href} className="project-card">
        <h3>{featured.title}</h3>
        <p>{featured.description}</p>
        <div className="project-tags">
          {featured.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </a>
      <div className="hero-links">
        <Link to="/projects" className="btn-primary">View All Projects</Link>
      </div>
    </section>
  );
}