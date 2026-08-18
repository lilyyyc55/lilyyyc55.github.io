import '../App.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import About from './About'

function Home() {
    return (
        <div className="page">
            <Nav />
            <Hero />
            <About />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;