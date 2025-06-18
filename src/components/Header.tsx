
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <div className="text-2xl font-bold">
              <span className="text-gray-900">Dubli</span>
              <span className="text-blue-600">W</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-blue-50"
            >
              Contact Us
            </button>
            
            {/* Enhanced Call Us Button */}
            <div className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <Phone className="w-5 h-5 mr-3" />
              <div className="flex flex-col">
                <span className="text-xs font-medium opacity-90">Call Us</span>
                <span className="text-sm font-semibold">+94 77 9821079</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-left font-medium py-3 px-4 rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-left font-medium py-3 px-4 rounded-lg"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-left font-medium py-3 px-4 rounded-lg"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-left font-medium py-3 px-4 rounded-lg"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors text-left font-medium py-3 px-4 rounded-lg"
              >
                Contact Us
              </button>
              <div className="flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg mt-4 w-fit">
                <Phone className="w-5 h-5 mr-3" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium opacity-90">Call Us</span>
                  <span className="text-sm font-semibold">+94 77 9821079</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
