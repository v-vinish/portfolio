import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Projects from '@/components/sections/projects';
import Skills from '@/components/sections/skills';
import Contact from '@/components/sections/contact';
import AnimatedSection from '@/components/animated-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <AnimatedSection id="about" className="w-full bg-background">
          <About />
        </AnimatedSection>
        <AnimatedSection id="experience" className="w-full bg-card/50">
          <Experience />
        </AnimatedSection>
        <AnimatedSection id="projects" className="w-full bg-background">
          <Projects />
        </AnimatedSection>
        <AnimatedSection id="skills" className="w-full bg-card/50">
          <Skills />
        </AnimatedSection>
        <AnimatedSection id="contact" className="w-full bg-background">
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
