import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import logoImage from "../../assets/logofinal.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white mt-12 font-[Outfit]">
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-12 py-12 w-full max-w-[1280px] mx-auto text-white">
        <aside>
          <div className="mb-5">
            <img className="w-24 md:w-32" src={logoImage} alt="Logo" />
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            We provide comprehensive diagnostic services <br /> to ensure your health and well-being.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 text-xl transition duration-300">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 text-xl transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 text-xl transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 text-xl transition duration-300">
              <FaLinkedin />
            </a>
          </div>
        </aside>

        <nav>
          <h6 className="text-lg font-bold text-white mb-4">General Info</h6>
          {["About Us", "Our Services", "Our Team", "Testimonials"].map((item) => (
            <a key={item} className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition duration-300 mb-2 cursor-pointer">
              <BiSolidRightArrow className="text-green-500" /> {item}
            </a>
          ))}
        </nav>

        <nav>
          <h6 className="text-lg font-bold text-white mb-4">Quick Links</h6>
          {["Health Blog", "FAQs", "Pricing", "Contact Us"].map((item) => (
            <a key={item} className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition duration-300 mb-2 cursor-pointer">
              <BiSolidRightArrow className="text-green-500" /> {item}
            </a>
          ))}
        </nav>

        <nav>
          <h6 className="text-lg font-bold text-white mb-4">Contact</h6>
          {["+123 456 7890", "+123 456 7899", "info@diagnostics.com"].map((item, index) => (
            <a key={index} className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition duration-300 mb-2 cursor-pointer">
              <BiSolidRightArrow className="text-green-500" /> {item}
            </a>
          ))}
        </nav>
      </footer>

      <div className="border-t border-gray-700 py-5 text-center text-sm text-gray-400 font-semibold">
        © All Rights Reserved By - Diagnostic Center
      </div>
    </div>
  );
};

export default Footer;
