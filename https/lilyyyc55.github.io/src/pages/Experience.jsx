import '../App.css'
import Nav from '../components/Nav'
import Contact from '../components/Contact'

function Experience() {
    return (
        <div className="page">
            <Nav />
            <section className="experience" id="experience">
                <p className="section-label">Experience</p>
                <div className="experience-list">
                    {[
                        {
                            role: 'Industrial Security Co-op',
                            company: 'KRI at Northeastern University, LLC',
                            description: <ul>
                                <li>Developed a secure coding training presentation for the company, which was presented to employees and received positive feedback.</li>
                                <li>Conducted research on common vulnerabilities in industrial control systems and provided recommendations for mitigation.</li>
                            </ul>,
                        },
                        {
                            role: 'STEM Education Volunteer',
                            company: 'Volunteer Program',
                            description: <ul>
                                <li>Helped facilitate hands-on STEM learning experiences for students, fostering curiosity and engagement in science and technology.</li>
                            </ul>,
                        },
                        {
                            role: 'Team Member',
                            company: 'Caribou Coffee',
                            description: <ul>
                                <li>Provided excellent customer service, managed transactions, and maintained a clean and welcoming environment.</li>
                            </ul>,
                        }
                    ].map((experience) => (
                        <div key={experience.role} className="experience-card">
                            <h3>{experience.role}</h3>
                            <p className="company">{experience.company}</p>
                            <p>{experience.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <Contact />
        </div>
    )
}

export default Experience