import React, { useState } from 'react';
import { Menu, X, Scissors, Phone, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 p-3 rounded-full shadow-md">
              <Scissors className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Durgs's Saree Pre Pleating
              </h1>
              <p className="text-sm text-gray-600">Premium Saree Services</p>
            </div>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-gray-700">
              <Phone className="h-4 w-4 text-pink-500" />
              <span>+91 9876543210</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin className="h-4 w-4 text-purple-500" />
              <span>Rajeevnagar, Kurmanapalem, Visakhapatnam</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-gray-700 hover:text-pink-600 transition-colors font-medium"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-pink-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-pink-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-left text-gray-700 hover:text-pink-600 transition-colors font-medium py-2"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-left bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-md"
              >
                Book Appointment
              </button>
            </nav>
            <div className="mt-4 pt-4 border-t border-pink-200 space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="h-4 w-4 text-pink-500" />
                <span className="text-sm">+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <MapPin className="h-4 w-4 text-purple-500" />
                <span className="text-sm">Rajeevnagar, Kurmanapalem, Visakhapatnam</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;