import { useState } from 'react';
import { Menu, X, Phone, Zap, Sparkles } from 'lucide-react';

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
    <header className="fixed top-0 left-0 right-0 bg-[#F2F5FB] backdrop-blur-xl shadow-lg z-50 border-b border-white/10">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Futuristic Logo */}
          <img src="/icons/image.png" alt="DubliW Logo" className="" />

          {/* <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-xl font-bold text-white">W</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white">
                Dubli<span className="text-cyan-400">W</span>
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span className="text-white/60 text-xs">Next-Gen Solutions</span>
              </div>
            </div>
          </div> */}

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="bg-[#F2F5FB] text-[#30303E] transition-all duration-700 font-medium py-2 px-4 rounded-lg hover:bg-[#3F3F59] backdrop-blur-md relative group hover:text-[#F2F5FB] border border-transparent hover:shadow-sm"
            >
              Home
              {/* <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#30303E] to-[#515167] group-hover:w-full transition-all duration-300"></div> */}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-[#F2F5FB] text-[#30303E] transition-all duration-700 font-medium py-2 px-4 rounded-lg hover:bg-[#3F3F59] backdrop-blur-md relative group hover:text-[#F2F5FB] border border-transparent hover:shadow-sm"
            >
              About Us
              {/* <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div> */}
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-[#F2F5FB] text-[#30303E] transition-all duration-700 font-medium py-2 px-4 rounded-lg hover:bg-[#3F3F59] backdrop-blur-md relative group hover:text-[#F2F5FB] border border-transparent hover:shadow-sm"
            >
              Services
              {/* <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div> */}
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="bg-[#F2F5FB] text-[#30303E] transition-all duration-700 font-medium py-2 px-4 rounded-lg hover:bg-[#3F3F59] backdrop-blur-md relative group hover:text-[#F2F5FB] border border-transparent hover:shadow-sm"
            >
              Portfolio
              {/* <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div> */}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-[#F2F5FB] text-[#30303E] transition-all duration-700 font-medium py-2 px-4 rounded-lg hover:bg-[#3F3F59] backdrop-blur-md relative group hover:text-[#F2F5FB] border border-transparent hover:shadow-sm"
            >
              Contact Us
              {/* <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-300"></div> */}
            </button>

            {/* Clean Call Button */}
            <div className="flex items-center bg-[#363636] text-[#F2F5FB] px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-white/20 backdrop-blur-md">
              <Phone className="w-5 h-5 mr-3" />
              <div className="flex flex-col">
                <span className="text-xs font-medium">Call Us</span>
                <span className="text-sm font-semibold">+94 77 9821079</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#363636] backdrop-blur-md border border-white/20 text-white  transition-all duration-300"
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
                className="text-[#363636] hover:text-[#F2F5FB] hover:bg-[#515167] hover:bg-[#515167] transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-[#363636] hover:text-[#F2F5FB] hover:bg-[#515167] hover:bg-[#515167] transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-[#363636] hover:text-[#F2F5FB] hover:bg-[#515167] hover:bg-[#515167] transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-[#363636] hover:text-[#F2F5FB] hover:bg-[#515167] hover:bg-[#515167] transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-[#363636] hover:text-[#F2F5FB] hover:bg-[#515167] hover:bg-[#515167] transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Contact Us
              </button>
              <div className="flex items-center bg-gradient-to-r from-[#363636] to-[#515167] text-white px-6 py-3 rounded-2xl shadow-lg mt-4 w-fit">
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
