import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Projects from "../components/Projects";

function ProjectsPage() {
  return (
    <div className="project-page">
      <Nav />
      <section className="projects" id="projects">
                <Projects />
        </section>
        <Contact />
  </div>
  );
}

export default ProjectsPage;