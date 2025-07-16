import { FaShieldAlt, FaStar, FaUsers, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
//import heroImage from '@/assets/hero-cleaning-team.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-cleaning-team.jpg" 
          alt="Professional cleaning team in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8 text-sm">
            <div className="flex items-center gap-2 bg-light/10 backdrop-blur-sm rounded-full px-4 py-2">
              <FaShieldAlt className="text-secondary" />
              <span>Certified Professionals</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <FaStar className="text-secondary" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <FaUsers className="text-secondary" />
              <span>500+ Happy Clients</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Kenya&lsquo;s Most Trusted
            <span className="block text-secondary">Cleaning & Waste</span>
            <span className="block">Management Experts</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professional cleaning services for homes, offices, and commercial spaces. 
            Eco-friendly solutions with guaranteed satisfaction across Kenya.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-secondary hover:bg-dark text-light text-lg px-8 py-3 rounded-md font-medium transition-colors flex items-center">
              Get Your Free Quote
              <FaArrowRight className="ml-2" />
            </button>
            <button className="bg-white/10 hover:bg-white hover:text-blue-900 border border-white text-white text-lg px-8 py-3 rounded-md font-medium transition-colors">
              View Our Services
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-sm text-blue-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-sm text-blue-100">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">100%</div>
              <div className="text-sm text-blue-100">Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">5+</div>
              <div className="text-sm text-blue-100">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;