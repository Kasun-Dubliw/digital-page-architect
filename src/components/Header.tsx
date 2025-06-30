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
          {/* <img src="/icons/tab-logo.svg" alt="DubliW Logo" className="" /> */}

          {/* Responsive Logo */}
          <>
            {/* Show on screens >= md (tablet and up) */}
            <img
              src="/icons/logo-or.svg"
              alt="DubliW Logo"
              className="hidden md:block"
            />

            {/* Show on screens < md (mobile) */}
            <img
              src="/icons/tab-logo-or.svg"
              alt="DubliW Tab Logo"
              className="block md:hidden"
            />
          </>

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
              className="relative group text-[#2e2a3b] hover:text-[#a9524b] font-normal text-[0.95rem] transition-colors duration-300"
            >
              Home
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#a9524b] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection('home')}
              className="relative group text-[#2e2a3b] hover:text-[#a9524b] font-normal text-[0.95rem] transition-colors duration-300"
            >
              Services
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#a9524b] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection('home')}
              className="relative group text-[#2e2a3b] hover:text-[#a9524b] font-normal text-[0.95rem] transition-colors duration-300"
            >
              Expertise
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#a9524b] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection('home')}
              className="relative group text-[#2e2a3b] hover:text-[#a9524b] font-normal text-[0.95rem] transition-colors duration-300"
            >
              Projects
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#a9524b] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              onClick={() => scrollToSection('home')}
              className="relative group text-[#2e2a3b] hover:text-[#a9524b] font-normal text-[0.95rem] transition-colors duration-300"
            >
              Contact
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#a9524b] transition-all duration-300 group-hover:w-full"></span>
            </button>

            {/* Clean Call Button */}
            <div onClick={() => window.location.href = 'tel:+94779821079'}
              className="flex items-center bg-[#2e2a3b] text-[#f1f5f9] px-6 py-3 rounded-2xl shadow-lg hover:shadow-xl hover:text-[#a9524b] transition-all duration-500 transform hover:-translate-y-1 border border-white/20 backdrop-blur-md" >
              <Phone className="w-5 h-5 mr-3" />
              <div className="flex flex-col">
                <span className="text-xs font-medium">Call Us</span>
                <span className="text-sm font-semibold">+94 77 9821079</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#2e2a3b] backdrop-blur-md border border-white/20  transition-all duration-300"
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
                className="text-[#2e2a3b] hover:text-[#a9524b] hover:bg-[#a9524b]/100 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection('about')}
               className="text-[#2e2a3b] hover:text-[#a9524b] hover:bg-[#a9524b]/100 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('services')}
               className="text-[#2e2a3b] hover:text-[#a9524b] hover:bg-[#a9524b]/100 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Expertise
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
               className="text-[#2e2a3b] hover:text-[#a9524b] hover:bg-[#a9524b]/100 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
               className="text-[#2e2a3b] hover:text-[#a9524b] hover:bg-[#a9524b]/100 transition-all duration-300 text-left font-medium py-3 px-4 rounded-lg backdrop-blur-md border border-white/10"
              >
                Contact Us
              </button>
              <div onClick={() => window.location.href = 'tel:+94779821079'} className="flex items-center bg-[#2e2a3b] text-[#f1f5f9] px-6 py-3 rounded-2xl shadow-lg mt-4 w-fit">
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
