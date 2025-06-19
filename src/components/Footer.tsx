
import { MapPin, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-xy"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="relative group mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">W</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-400 rounded-full animate-ping"></div>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">
                      Dubli<span className="text-cyan-400">W</span>
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-white/60 text-sm">Next-Gen Solutions</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 leading-relaxed text-lg mb-6">
                  Your trusted partner for innovative IT solutions powered by AI, 
                  quantum computing, and revolutionary software architecture. 
                  We help businesses thrive in the digital age.
                </p>
                
                {/* Futuristic accent line */}
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mb-4"></div>
                <p className="text-white/50 text-sm">Building the future, one innovation at a time</p>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-4 h-4 text-cyan-400" />
                  </div>
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { name: "Home", href: "#home" },
                    { name: "About Us", href: "#about" },
                    { name: "Services", href: "#services" },
                    { name: "Portfolio", href: "#portfolio" },
                    { name: "Contact", href: "#contact" }
                  ].map((link, index) => (
                    <li key={index}>
                      <a 
                        href={link.href} 
                        className="group/link flex items-center gap-3 text-white/70 hover:text-cyan-400 transition-all duration-300 p-2 rounded-lg hover:bg-white/5"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full group-hover/link:scale-125 transition-transform"></div>
                        <span className="group-hover/link:translate-x-1 transition-transform">{link.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  Contact Info
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 mt-1">
                      <Mail className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Email</p>
                      <p className="text-white/80">hello@dubliw.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-10 h-10 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 mt-1">
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Phone</p>
                      <p className="text-white/80">+94 77 9821079</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 group/item">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-xl backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 mt-1">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm mb-1">Address</p>
                      <p className="text-white/80 text-sm leading-relaxed">
                        68/3, Sandun Uyana<br />
                        Hedigama, Piliyandala<br />
                        Sri Lanka
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="relative mt-16 pt-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="text-white/60 text-sm">
                  &copy; 2024 DubliW. All rights reserved.
                </div>
                <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                <div className="text-white/40 text-sm">
                  Powered by Innovation
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="text-white/40 text-sm">Built with</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                <div className="text-white/40 text-sm">AI Technology</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
