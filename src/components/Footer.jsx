// Footer.jsx
import { FaGithub, FaFacebook, FaInstagram , FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B192C] text-white py-6 mt-12 text-center">
      <div className="flex justify-center gap-6 text-xl mb-2">
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
      <p className="text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Bingo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
