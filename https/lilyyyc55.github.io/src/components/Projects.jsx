import React from 'react';

function Projects() {
    return (
        <>
            <section className="projects" id="projects">
                <p className="section-label">Projects</p>
                <h2>Some of my work</h2>
                <div className="project-list">
                    {[
                        {
                            title: 'Personal Portfolio Website',
                            description: 'A React-based portfolio website showcasing my projects and experience.',
                            tags: ['React', 'JavaScript', 'CSS'],
                            href: '/project-portfolio',
                        },
                        {
                            title: 'NuEvents',
                            description: 'A platform to help Northeastern students discover and engage with campus events.',
                            tags: ['React', 'Node.js', 'Express'],
                            href: '/project-nuevents',
                        },
                        {
                            title: 'Storm of Crimson',
                            description: 'A multi-part card game built with MVC architecture, GUI rendering, and event-driven design.',
                            tags: ['Java', 'Swing', 'MVC'],
                            href: '/project-stormofcrimson',
                        },
                        {
                            title: 'Jumpstart',
                            description: 'A tool designed to help users get started quickly with structured guidance and resources.',
                            tags: ['JavaScript', 'Full Stack'],
                            href: '/project-jumpstart',
                        },
                    ].map((project) => (
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
        </>
    );
}

export default Projects;