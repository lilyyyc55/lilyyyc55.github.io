import { Link } from "react-router-dom"

function Hero() {
    return (
        <>
            <section className="hero" id="hero">
                <div className="hero-content">
                    <h1>Hello, I'm Lily Cordina.</h1>
                    <div className="hero-links">
                        <Link to="#contact" className="btn-primary">
                            Get in Touch
                        </Link>
                        <Link to="/projects" className="btn-primary">
                            View Projects
                        </Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/headshot.jpg" alt="Lily Cordina" />
                </div>
            </section>
        </>
    )
}

export default Hero