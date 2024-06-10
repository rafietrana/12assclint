import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

 import logoImage from '../../assets/logofinal.svg'
import { BiSolidRightArrow } from "react-icons/bi";

const Footer = () => {
    return (
        <div className=" mt-11  text-white">
    <footer className="footer p-10 w-9/12 mx-auto    text-base-content">
  <aside>
        <div className='w-44'>
            <img className='w-20 md:w-32' src={logoImage} alt="" />
        </div>
    <p className='font-semibold'>We can find your job<br />and help you locate the home of your dreams.
</p>
<div className='grid grid-cols-4 gap-2  my-2'>
  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">  <div className='text-xl text-green-800'> <FaFacebook /></div></a>
  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">  <div className='text-xl text-green-800'> <FaTwitter /></div></a>
  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">  <div className='text-xl text-green-800'> <FaInstagram /></div></a>
  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">  <div className='text-xl text-green-800'> <FaLinkedin /></div></a>

 
</div> 
  </aside> 
  <nav>
    <h6 className="footer-title flex items-center gap-2">  General Info</h6> 
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>About Us</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Our Painting</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Our Services</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Our Reviews</a>
  </nav> 
  <nav>
    <h6 className="footer-title flex items-center gap-2"> Quick Links</h6> 
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Blog/News</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Team</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Pricing</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>Contact Us</a>
  </nav> 
  <nav>
    <h6 className="footer-title flex items-center gap-2"> Contact</h6> 
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>+123 456 7890</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>+123 456 7899</a>
    <a className="link link-hover flex items-center gap-2"><span className='text-green-500'><BiSolidRightArrow /></span>info@yourdomain.com</a>
  </nav>
</footer>
<div>
  
</div>
            <div  className='w-9/12 mx-auto flex justify-center items-center border-t-2  font-semibold pt-10 pb-10' >@ All Right Reserved By- WorkJon</div>
        </div>
            
 
    );
};

export default Footer;