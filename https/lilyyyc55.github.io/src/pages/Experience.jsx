import '../App.css'
import Nav from '../components/Nav'

function Experience() {
    return (
        <div className="page">
            <Nav />
            <section className="experience" id="experience">
                <p className="section-label">Experience</p>
                <h2>Where I've worked</h2>
                <div className="experience-list">
                    {[
                        {
                            role: 'Industrial Security Co-op',
                            company: 'KRI at Northeastern University, LLC',
                            description: 'Creating and gave training presentations on industrial security topics, including vulnerability research and secure coding practices.',
                        },
                        {
                            role: 'STEM Education Volunteer',
                            company: 'Volunteer Program',
                            description: 'Helped facilitate hands-on STEM learning experiences for students, fostering curiosity and engagement in science and technology.',
                        },
                        {
                            role: 'Team Member',
                            company: 'Caribou Coffee',
                            description: 'Provided excellent customer service, managed transactions, and maintained a clean and welcoming environment.',
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
        </div>
    )
}

export default Experience