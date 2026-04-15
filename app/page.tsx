"use client";
import Hero from "./components/hero-section/Hero";
import Works from "./components/work-section/Works";
import Timeline from "./components/work-section/Timeline";
import About from "./components/about-section/About";
import Contact from "./components/contact+footer/Contact";
import DataProjects from "./components/work-section/DataProjects";
import Footer from "./components/contact+footer/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden sm:overflow-x-visible">
      {/* Home Section */}
      <section id="home">
        <Hero />
      </section>

       {/* Data Projects Section */}
      <section id="data">
        <DataProjects />
      </section>

      {/* WebProjects Section */}
      <section id="work">
        <Works />
      </section>

      {/* Experience Section */}
      <section id="experience">
        <Timeline />
      </section>

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}