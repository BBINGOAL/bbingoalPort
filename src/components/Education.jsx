import React from "react";
import { HisEducation } from "../data/data";
const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen text-white px-6 py-16 flex flex-col items-center"
    >
      <h2 className="text-5xl font-bold text-center text-[#FF6500] mb-16">
        Education
      </h2>

      <div className="max-w-4xl w-full space-y-8">
        {HisEducation.map((edu, index) => (
          <div
            key={index}
            className="p-6 rounded-lg shadow-md transition duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            style={{ backgroundColor:"#0B192C"}}
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            <h3 className="text-2xl font-semibold text-[#FF6500]">{edu.school}</h3>
            <p className="text-gray-400">{edu.title} — {edu.year}</p>
            <p className="text-gray-300 mt-2">{edu.gpax}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
