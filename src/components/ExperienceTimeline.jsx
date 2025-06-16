import React from 'react';
import { experiences } from '../data/data';
const ExperienceTimeline = () => {
  return (
    <section
      className=" text-white px-6 py-16"
      id="experience"
      data-aos="fade-up"
    >
      <h2 className="text-5xl font-bold text-center text-[#FF6500] mb-16">
        Experience
      </h2>

      <div className="relative border-l-4 border-[#FF6500] pl-6 max-w-4xl mx-auto space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative group transition-transform duration-300 hover:scale-[1.02]"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <div className="absolute -left-3 top-1 w-6 h-6 bg-[#FF6500] rounded-full border-4 border-[#0B192C]"></div>
            <div>
              <h3 className="ml-5 text-2xl font-bold">{exp.title}</h3>
              <p className="text-[#FF6500] font-semibold">{exp.company}</p>
              <p className="text-gray-400 text-sm">{exp.date}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceTimeline;
