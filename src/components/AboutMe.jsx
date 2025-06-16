import React from 'react';
import bingo from "../assets/bingo.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AboutMe = () => {

  return (
    <section
      id="about"
      className="min-h-screen px-6 text-white flex flex-col items-center scroll-mt-20"
       data-aos="fade-up"
    >
      {/* หัวข้อใหญ่กึ่งกลางบน */}
      <h2 className="text-5xl text-[#FF6500] font-bold text-center mb-16 mt-12">About Me</h2>

      {/* container flex ซ้าย-ขวา จัดกึ่งกลางแนวตั้ง */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-7xl w-full gap-x-50 px-6">
        {/* ข้อความซ้าย */}
        <div className="md:w-1/2 text-center md:text-left flex items-center">
          <p className="text-lg leading-relaxed text-gray-300">
            <br />
            <span className='text-[20px] font-bold text-[#FF6500]'>Hello , My name is Siwarak Chatvichai you can call me bingo</span>
            <br />
            <p>I am a student of Computer Engineering at King Mongkut's University of Technology Thonburi (KMUTT). I'm someone who is interested in technology and passionate about building great web experiences.</p><br/>
            <p>Right now, I'm actively exploring different areas in tech to gain hands-on experience, improve my skills, and discover what I truly enjoy working on.  
            Whether it's front-end development, UI/UX design, or back-end systems, I'm always open to learning and trying new things.</p>
            </p>
        </div>

        {/* รูปขวา */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center mt-6 md:mt-0 px-4">
          <img
            src={bingo} 
            alt="My photo"
            className="w-80 h-[420px] object-cover rounded-md shadow-lg ml-[65px]"
            style={{ marginRight: '60px' }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

