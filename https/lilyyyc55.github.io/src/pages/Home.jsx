import '../App.css'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function Home() {
    return (
        <div className="page">
            <Nav />
            <Hero />
            <Projects />
            <Contact />
        </div>
    );
}

export default Home;