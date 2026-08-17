import Nav from "../components/Nav";
import Contact from "../components/Contact";

function ProjectsPage() {
  return (
    <div className="project-page">
      <Nav />
      <section className="projects" id="projects">
                <p className="section-label">Projects</p>
                <div className="project-list">
                     <div className="project-card">
                        <h3>NuEvents</h3>
                        <p>A web application for discovering and managing events.</p>
                        /** <img src="/public/nuevents/nuevents.png" alt="NuEvents" className="project-image" /> */
                    </div>
                    <div className="project-card">
                        <h3>Storm of Crimson</h3>
                        <p>A web game developed using Java Swing and GUI's to create 2 separate screens for each player.</p>
                        //<img src="/public/stormofcrimson/mid-game.png" alt="Storm of Crimson" className="project-image" />
                    </div>
                    <div className="project-card">
                        <h3>Jumpstart</h3>
                        <p>A productivity app for organizing tasks and goals.</p>
                        //<img src="/public/jumpstart/jumpstart.png" alt="Jumpstart" className="project-image" />
                    </div>
                </div>
        </section>
        <Contact />
  </div>
  );
}

export default ProjectsPage;