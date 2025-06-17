import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500 });

    const script = document.createElement('script');
    script.src = "/finisher-header.es5.min.js"; // ใช้จาก public
    script.onload = () => {
      new window.FinisherHeader({
        count: 100,
        size: { min: 2, max: 8, pulse: 0 },
        speed: {
          x: { min: 0, max: 0.15 },
          y: { min: 0, max: 0.15 }
        },
        colors: {
          background: "#111827",
          particles: ["#ff0202", "#ff6500", "#ffffff"]
        },
        blending: "lighten",
        opacity: { center: 0.3, edge: 0.25 },
        skew: 0,
        shapes: ["s"],
        canvas: document.getElementById("finisher-header")
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ fontFamily: "'Fira Code', monospace" }}>
      {/* Finisher Canvas */}
      <div className="finisher-header fixed top-0 left-0 w-full h-full z-0" />
        {/* เนื้อหาเว็บไซต์ */}
        <div className="relative z-10">
          <HeroSection />
          <AboutMe />
          <Education />
          <ProjectsSection />
          <ExperienceTimeline />
          <Footer />
        </div>
      </div>
  );
}

export default App;
