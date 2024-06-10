import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import logoImage from "../../assets/logofinal.svg";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-500 text-white mt-11">
      <footer className="footer p-10 w-11/12 lg:w-9/12 mx-auto text-white">
        <aside>
          <div className="w-44 mb-5">
            <img className="w-20 md:w-32" src={logoImage} alt="Logo" />
          </div>
          <p className="font-semibold">
            We provide comprehensive diagnostic services <br /> to ensure your health and well-being.
          </p>
          <div className="grid grid-cols-4 gap-4 my-4">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <div className="text-2xl hover:text-blue-300">
                <FaFacebook />
              </div>
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <div className="text-2xl hover:text-blue-300">
                <FaTwitter />
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <div className="text-2xl hover:text-blue-300">
                <FaInstagram />
              </div>
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <div className="text-2xl hover:text-blue-300">
                <FaLinkedin />
              </div>
            </a>
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">General Info</h6>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />About Us</a>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />Our Services</a>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />Our Team</a>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />Testimonials</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Quick Links</h6>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />Health Blog</a>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />FAQs</a>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />Pricing</a>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-bold mb-4">Contact</h6>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />+123 456 7890</a>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />+123 456 7899</a>
          <a className="link link-hover flex items-center gap-2 mb-2"><BiSolidRightArrow className="text-green-500" />info@diagnostics.com</a>
        </nav>
      </footer>
      <div className="w-11/12 lg:w-9/12 mx-auto flex justify-center items-center border-t border-gray-500 py-4 mt-4 font-semibold">
        © All Rights Reserved By - Diagnostic Center
      </div>
    </div>
  );
};

export default Footer;
