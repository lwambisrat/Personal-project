import Hero from "./components/Hero";
import AboutAndSkills from "./components/About";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutAndSkills />
      <Projects />
      <Blogs />
      <Contact />
    </main>
  );
}
