// app/page.tsx
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Training from './components/Training';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import Achievements from './components/Achievements';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Achievements />
      <Skills />
      <Projects />
      <Training />
      <Education />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
