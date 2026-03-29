import React from "react";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Project Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Testimonials Section */}
        {/* <Testimonials /> */}

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
};

export default App;
