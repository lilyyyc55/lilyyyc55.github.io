import '../App.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import About from './About'
import Projects from '../components/Projects'
import Experience from './Experience'
import Contact from '../components/Contact'

function Home() {
    return (
        <div className="page">
            <Nav />
            <Hero />
            <Projects />
            <Experience />
            <Contact />
        </div>
    );
}

export default Home;