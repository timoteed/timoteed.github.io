import Navbar from '../sections/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Experience from '../sections/Experience'
import Education from '../sections/Education'
import Contact from '../sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
