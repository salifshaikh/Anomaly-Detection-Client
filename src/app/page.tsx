"use client";

import Hero from "@/common/components/sections/hero";
import About from "@/common/components/sections/about";
import Projects from "@/common/components/sections/projects";
import Experience from "@/common/components/sections/experience";
import Skills from "@/common/components/sections/skills";
import Contact from "@/common/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}