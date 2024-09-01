import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Technologies from "@/components/Technologies/Technologies";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Technologies Section */}
      <Technologies />
      {/* Projects Section */}
      <Projects />
    </main>
  );
}
