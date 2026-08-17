import '../App.css'
import Nav from '../components/Nav'
import Contact from '../components/Contact'

function About() {
    return (
        <div className="page">
            <Nav />
            <section className="about" id="about">
                <p className="section-label">About me</p>
                <h2>Hi, I'm Lily!</h2>
                <p>
                    I'm a third-year CS student with a concentration in Artificial
                    Intelligence at Northeastern University. Currently in classes which include, 
                    Principles of AI, Machine Learning and Data Structures, etc.
                </p>
                <p>
                    I'm passionate about building reliable software. I'm always looking for
                    opportunities to learn and contribute to meaningful projects in my community. I have 
                    experience in Java, HTML, CSS, Python, JavaScript and React, and I'm excited to
                    continue growing my skills and making an impact through technology.
                </p>
                <div className="skills">
                    {['Java', 'HTML', 'CSS', 'Python', 'JavaScript', 'React', 'Node.js', 'Git'].map(
                        (skill) => (
                            <span key={skill} className="skill-tag">{skill}</span>
                        )
                    )}
                </div>
            </section>
            <Contact />
        </div>
    )
}

export default About