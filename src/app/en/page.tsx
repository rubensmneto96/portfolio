"use client"

import NavbarEn from "components/NavbarEn";
import RubensEn from "components/RubensEn";
import About from "components/About";
import Skills from "components/Skills";
import Contact from "components/Contact";
import FooterEn from "components/FooterEn";

export default function Home() {
  return (
  <div className="min-h-dvh bg-gradient-to-r from-indigo-900 to-gray-900 text-foreground overflow-x-hidden">
    <div id="homeDiv" className="opacity-0 animate-fade-in">
       {/* Navbar */}
      <NavbarEn />

      {/* Rubens */}
      <RubensEn />

      {/* About */}
      <About />

      {/* Skills */}
      <Skills />
      
      {/* Contact */}
      <Contact />

      {/* Footer */}
      <FooterEn />
    </div>
  </div>
  );
}
