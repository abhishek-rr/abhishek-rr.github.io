import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-surface-border py-8 px-6 text-center text-xs text-text-muted">
        <p>&copy; {new Date().getFullYear()} Abhishek Ranjane</p>
      </footer>
    </>
  );
}
