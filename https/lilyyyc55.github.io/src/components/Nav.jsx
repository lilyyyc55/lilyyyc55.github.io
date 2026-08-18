import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav>
                <div className="nav-name"><Link to="/">Lily Cordina</Link></div>
                <div className="nav-links">
                    <Link to="/#about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/#contact">Contact</Link>
                    <a href="/Lily_Cordina_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Nav





