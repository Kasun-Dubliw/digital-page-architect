
import { ArrowRight, Play, Shield, Zap, Globe } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-xy"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-500/30 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-green-400/40 to-emerald-500/40 rounded-full blur-2xl animate-pulse"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium">
              <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3 animate-pulse"></div>
              Next-Gen Software Solutions
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-400 bg-clip-text text-transparent">
                  Build
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Tomorrow
                </span>
                <br />
                <span className="text-white/90 text-4xl md:text-5xl lg:text-6xl">
                  Today
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl">
                We help you turn your vision into reality with innovative IT solutions, cloud-native architectures, and scalable systems designed to adapt and grow with your business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button onClick={() => scrollToSection('contact')} className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                <span className="flex items-center justify-center gap-3">
                  Start Building
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </button>
              
              <button  onClick={() => scrollToSection('portfolio')} className="group flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300">
                <Play className="w-5 h-5" />
                Our Projects
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">3+</div>
                <div className="text-white/60 text-sm font-medium mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">99.9%</div>
                <div className="text-white/60 text-sm font-medium mt-1">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">24/7</div>
                <div className="text-white/60 text-sm font-medium mt-1">Support</div>
              </div>
            </div>
          </div>

          {/* Right Side - Futuristic Visualization */}
          <div className="relative">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-xl border border-white/20 flex items-center justify-center animate-pulse-glow">
                  <div className="w-32 h-32 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full backdrop-blur-xl border border-white/30 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Zap className="w-8 h-8 text-white animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="relative w-full h-full">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-emerald-400/40 to-green-500/40 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-emerald-300" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-r from-purple-400/40 to-pink-500/40 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-purple-300" />
                  </div>
                  <div className="absolute top-1/2 left-0 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-cyan-300 rounded-full animate-pulse"></div>
                  </div>
                  <div className="absolute top-1/2 right-0 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-orange-400/40 to-red-500/40 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-orange-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Connection Lines */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.3)" />
                      <stop offset="50%" stopColor="rgba(147, 51, 234, 0.5)" />
                      <stop offset="100%" stopColor="rgba(236, 72, 153, 0.3)" />
                    </linearGradient>
                  </defs>
                  <circle cx="200" cy="200" r="120" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.6" />
                  <circle cx="200" cy="200" r="160" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.4" />
                  <circle cx="200" cy="200" r="200" fill="none" stroke="url(#lineGradient)" strokeWidth="1" opacity="0.2" />
                </svg>
              </div>

              {/* Floating Data Points */}
              <div className="absolute top-20 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-40 left-10 w-1 h-1 bg-emerald-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
