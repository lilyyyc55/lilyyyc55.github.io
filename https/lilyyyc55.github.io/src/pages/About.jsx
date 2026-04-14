import '../App.css'
import Nav from '../components/Nav'

function About() {
    return (
        <div className="page">
            <Nav />
            <section className="about" id="about">
                <p className="section-label">About</p>
                <h2>A bit about me</h2>
                <p>
                    I'm a second-year CS student with a concentration in Artificial
                    Intelligence at Northeastern University. Currently on co-op at the Kostas
                    Research Institute working in industrial security.
                </p>
                <p>
                    I'm passionate about building reliable software. I'm always looking for
                    opportunities to learn and contribute to meaningful projects.
                </p>
                <div className="skills">
                    {['Java', 'Python', 'JavaScript', 'C', 'React', 'Node.js', 'Git'].map(
                        (skill) => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        )
                    )}
                </div>
            </section>
        </div>
    )
}

export default About