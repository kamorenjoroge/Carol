import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className='hidden md:block bg-primary text-light py-2 px-4'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Contact Information */}
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <FaPhone className='text-secondary' />
            <span>+254 700 123 456</span>
          </div>
          <div className='flex items-center space-x-2'>
            <FaEnvelope className='text-secondary' />
            <span>info@nacrecleaning.co.ke</span>
          </div>
        </div>
        
        {/* Social Media Icons */}
        <div className='flex items-center space-x-4'>
          <a href="#" className='hover:text-secondary transition-colors'>
            <FaFacebook size={18} />
          </a>
          <a href="#" className='hover:text-secondary transition-colors'>
            <FaTwitter size={18} />
          </a>
          <a href="#" className='hover:text-secondary transition-colors'>
            <FaInstagram size={18} />
          </a>
          <a href="#" className='hover:text-secondary transition-colors'>
            <FaLinkedin size={18} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;