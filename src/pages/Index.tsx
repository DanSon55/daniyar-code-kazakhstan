
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.25,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      revealElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    document.title = "Данияр | Full-Stack Разработчик";
    
    // Add a subtle background pattern
    const body = document.querySelector('body');
    if (body) {
      body.classList.add('bg-pattern');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background elements */}
      <div className="bg-dots"></div>
      <div className="bg-glow"></div>
      <div className="bg-glow"></div>
      
      <Header />
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
