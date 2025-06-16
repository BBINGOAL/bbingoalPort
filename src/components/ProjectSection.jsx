import React, { useState, useEffect } from "react";
import { projects } from "../data/data";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectsSection = () => {
  const [showMore, setShowMore] = useState({});

  const toggleMore = (id) => {
    setShowMore((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="projects"
      className="min-h-screen text-white px-6 py-16"
      data-aos="fade-up"
    >
      <h2 className="text-5xl font-bold text-center text-[#FF6500] mb-16">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2 max-w-3xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#0B192C] rounded-xl shadow-md overflow-hidden transition hover:shadow-xl"
            data-aos="fade-up"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-top cursor-pointer"
              />
            </a>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400">{project.shortDesc}</p>

              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showMore[project.id]
                    ? "opacity-100 max-h-40 mt-2"
                    : "opacity-0 max-h-0"
                }`}
              >
                <p className="text-gray-300">{project.fullDesc}</p>
              </div>

              <button
                onClick={() => toggleMore(project.id)}
                className="mt-4 inline-block bg-[#FF6500] hover:bg-[#e75e00] text-white px-4 py-2 rounded-full transition duration-700"
              >
                {showMore[project.id] ? "Less" : "More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
