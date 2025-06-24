
import { MapPin, Phone, Mail, ExternalLink, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info - Simplified */}
            <div className="md:col-span-1">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
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
                </div>
                
                <p className="text-white/80 leading-relaxed mb-4">
                  Your Trusted Partner for Innovative IT Solutions and Modern Software Architecture — Designed for a Remote-First World.
                </p>
                
                <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"></div>
              </div>
            </div>
            
            {/* Quick Links - Cleaner Design */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-cyan-400" />
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
                        className="flex items-center gap-2 text-white/70 hover:text-cyan-400 transition-colors duration-200 text-sm"
                      >
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Contact Info - Better Organized */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-purple-400" />
                  Contact Info
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-1">Email</p>
                      <p className="text-white/80 text-sm">hello@dubliw.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-emerald-400/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-1">Phone</p>
                      <p className="text-white/80 text-sm">+94 77 9821079</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white/50 text-xs mb-1">Address</p>
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
          
          {/* Bottom Section - Simplified */}
          <div className="relative mt-12 pt-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
              <div className="text-white/60 text-sm">
                &copy; 2025 DubliW. All rights reserved.
              </div>
              
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <span>Powered by Innovation</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
