"use client";
import { useState, useEffect } from "react";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

import RippleEffect from "./components/RippleEffect";
import About from "./components/About";
import DesignContent from "./components/DesignContent";

const Home = () => {
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (pageLoading) {
    return <RippleEffect />;
  }
  return (
    <div className="relative">
      <Navbar />

      <Hero />
      <About />
      {/* <div className="bg-[url('/images/hero-pattern.png')]"> */}
      <Skills />
      <DesignContent/>
      {/* </div> */}
      <Projects />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
