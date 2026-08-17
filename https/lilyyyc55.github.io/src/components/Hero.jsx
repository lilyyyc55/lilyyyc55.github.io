import { Link } from "react-router-dom"

function Hero() {
    return (
        <>
            <section className="hero" id="hero">
                <p className="greeting">Hi, I'm</p>
                <h1>Lily Cordina,</h1>
                <p className="tagline">
                    a third-year computer science student at Northeastern University focused on AI,
                    full stack development, and building tools that make a lasting impact on my community.
                </p>
                <div className="hero-links">
                    <Link to="#contact" className="btn-primary">
                        Get in Touch
                    </Link>
                    <Link to="/projects" className="btn-primary">
                        View Projects
                    </Link>
                </div>
            </section>
        </>
    )
}

export default Hero