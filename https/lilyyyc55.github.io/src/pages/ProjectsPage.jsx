import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Contact from "../components/Contact";

const projectData = [
  {
    title: 'Code Sentinel',
    description: 'A full-stack web application that analyzes code for security vulnerabilities using AI-powered detection.',
    tags: ['React', 'TypeScript', 'Node.js/Express', 'Gemini API'],
    href: 'https://github.com/...',
  },
  {
    title: 'NuEvents',
    description: 'A platform to help Northeastern students discover and engage with campus events.',
    tags: ['React', 'Node.js', 'Express'],
    href: 'https://github.com/...',
  },
  {
    title: 'Storm of Crimson',
    description: 'A multi-part card game built with MVC architecture, GUI rendering, and event-driven design.',
    tags: ['Java', 'Swing', 'MVC'],
    href: 'https://github.com/...',
  },
  {
    title: 'Jumpstart',
    description: 'A tool designed to help users get started quickly with structured guidance and resources.',
    tags: ['JavaScript', 'Full Stack'],
    href: 'https://github.com/...',
  },
];

export { projectData };

export default function ProjectsPage() {
  return (
    <>
    <Nav />
    <section className="projects" id="projects">
      <p className="section-label">Projects</p>
      <h2>Some of my work</h2>
      <div className="project-list">
        {projectData.map((project) => (
          <a key={project.title} href={project.href} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
    <Contact />
    </>
  );
}