"use client"
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
 import { useMemo } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

 

  const navItems = useMemo(() => [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact Us', href: '#contactus', id: 'contactus' },
   
  ], []);

  // Handle scroll to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  // Handle smooth scrolling

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    id: string
  ): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for sticky navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                {/* Mobile Logo - Only "N" */}
                <div className="md:hidden">
                  <span className="bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    N
                  </span>
                </div>
                
                {/* Desktop Logo - Full text */}
                <div className="hidden md:flex items-center">
                  <span className="bg-primary text-white w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold shadow-lg group-hover:shadow-xl transition-all duration-300 mr-3 transform group-hover:scale-105">
                    N
                  </span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-primary group-hover:to-purple-600 transition-all duration-300">
                    Nacre Cleaning Services
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    activeSection === item.id 
                      ? 'text-white bg-primary shadow-lg' 
                      : 'text-gray-700 hover:text-primary hover:bg-blue-50'
                  }`}
                >
                  {item.name}
                  {activeSection !== item.id && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link 
                href="/quote" 
                className="bg-primary hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-2.5 rounded-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 border-2 border-transparent hover:border-white/20"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg p-2 transition-all duration-300 hover:bg-blue-50"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md shadow-2xl z-50 md:hidden border-t border-gray-100 animate-in slide-in-from-top duration-300">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-1">
                {navItems.map((item, index) => (
                  <Link 
                    key={item.name} 
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.id)}
                    className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 border-l-4 ${
                      activeSection === item.id 
                        ? 'text-white bg-gradient-to-r from-primary to-purple-600 border-primary shadow-lg' 
                        : 'text-gray-700 hover:text-primary hover:bg-blue-50 border-transparent hover:border-primary'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      animation: 'fadeInUp 0.5s ease-out forwards'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                
                {/* Mobile CTA Button */}
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <Link 
                    href="/quote" 
                    className="bg-primary  hover:from-emerald-600 hover:to-teal-700 text-white px-6 py-3 rounded-lg font-medium text-center block shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;