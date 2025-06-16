import React, { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaInstagram , FaMailBulk } from "react-icons/fa";

const words = ["Bingo", "Junior Developer"];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, speed / 2);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, speed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6 text-white">
      <h1 className="text-[30px] md:text-6xl font-extrabold mb-4">
        Hi , I'm{" "}
        <span className="text-[#FF6500]" style={{ whiteSpace: "nowrap" }}>
          {text}
          <span className="blinking-cursor">|</span>
        </span>
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl text-gray-300">
        It's just a bad day not a bad life ! <br />
        Welcome To my world
      </p>
      {/* Social Icons */}
      <div className="flex gap-6 mt-4 text-2xl mb-5">
        <a
          href="https://github.com/BBINGOAL"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF6500] transition-transform duration-300 hover:scale-105"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.facebook.com/siwarak.chatvichai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF6500] transition-transform duration-300 hover:scale-105"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/bbingoal/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#FF6500] transition-transform duration-300 hover:scale-105"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:siwarakbingo@gmail.com"
          className="hover:text-[#FF6500] transition-transform duration-300 hover:scale-105"
          aria-label="Send Email"
        >
          <FaMailBulk />
        </a>
      </div>
      <a
        href="#about"
        className="bg-[#FF6500] transition-transform duration-300 hover:scale-105 text-white font-semibold py-3 px-6 rounded-full transition duration-700"
      >
        View More
      </a>

      <style jsx>{`
        .blinking-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
