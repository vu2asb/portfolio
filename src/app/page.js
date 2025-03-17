"use client"

import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Publications from "../components/Publications";
import UpSkill from "../components/UpSkill";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    // setIsOpen(!isOpen)
    setIsOpen((prev) => !prev);
  }

  return (
    <>
      <div>
        <header>
          <NavBar toggleSidebar={toggleSidebar} />
        </header>
        <main>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <Hero />
          <About />
          <Services />
          <UpSkill />
          <Contact />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>

    </>

  );
}
