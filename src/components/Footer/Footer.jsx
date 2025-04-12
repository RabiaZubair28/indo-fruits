import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-red-200 mt-6 xs:mt-6 sm:mt-6 md:mt-10 lg:mt-10 xl:mt-10 xxl:mt-10 mb-8 xs:mb-8 sm:mb-8 md:mb-10 lg:mb-10 xl:mb-10 xxl:mb-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Brand Name */}
        <span className="font-serif text-3xl xs:text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl xxl:text-4xl mb-4 md:mb-0">
          Fresh Fruits
        </span>

        {/* Social Media Icons */}
        <div className="flex gap-6 text-4xl">
          <a
            href="/"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition duration-300"
          >
            <BsFacebook />
          </a>
          <a
            href="#"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="/"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition duration-300"
          >
            <BsWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
