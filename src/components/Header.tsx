
import { useState } from 'react';
import { Menu, X, Phone, Zap } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-xl shadow-lg z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Futuristic Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg animate-pulse-glow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
            </div>
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Dubli</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">W</span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-md relative group"
            >
              Home
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-md relative group"
            >
              About Us
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-md relative group"
            >
              Services
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-md relative group"
            >
              Portfolio
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/80 hover:text-cyan-400 transition-all duration-300 font-medium py-2 px-4 rounded-lg hover:bg-white/10 backdrop-blur-md relative group"
            >
              Contact Us
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div>
            </button>
            
            {/* Futuristic Call Button */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
              <div className="relative flex items-center bg-slate-800 text-white px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20">
                <Phone className="w-5 h-5 mr-3 text-cyan-400" />
                <div className="flex flex-col">
                  <span className="text-xs font-medium opacity-90">Call Us</span>
                  <span className="text-sm font-semibold">+94 77 9821079</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10">
            <div className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-white/80 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-white/80 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white/80 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Contact Us
              </button>
              <div className="flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-2xl shadow-lg mt-4 w-fit border border-white/20">
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
