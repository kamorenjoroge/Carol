import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="bg-secondary text-primary  px-3 py-1 rounded mr-3">N</span>
              Nacre Cleaning Services
            </h3>
            <p className="mb-6 text-blue-100">
              Kenya&lsquo;s premier cleaning and waste management company providing 
              eco-friendly solutions for residential and commercial spaces.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-full transition-colors">
                <FaFacebook className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-full transition-colors">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-full transition-colors">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-secondary hover:text-primary p-3 rounded-full transition-colors">
                <FaLinkedin className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-secondary/30 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary transition-colors flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b border-secondary/30 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-blue-100">+254 700 123 456</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-blue-100">info@nacrecleaning.co.ke</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-secondary mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-blue-100">123 Clean Street, Nairobi, Kenya</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-100 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nacre Cleaning Services. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="text-blue-100 hover:text-secondary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-100 hover:text-secondary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;