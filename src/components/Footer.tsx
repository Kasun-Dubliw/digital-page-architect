
import { MapPin, Phone, Mail, ExternalLink, Sparkles, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-[#E9EDF4] overflow-hidden">
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>

        {/* Box 1: Top-right entering with diagonal slice and strong shadow */}
        <div
          className="absolute top-1/3 right-[-60px] w-72 h-72 bg-white shadow-xl rounded-md"
          style={{
            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        ></div>

        {/* Box 2: Bottom-left entering with diagonal slice and strong shadow */}
        <div
          className="absolute bottom-1/4 left-[-60px] w-72 h-72 bg-white shadow-xl rounded-md"
          style={{
            clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 100%)',
          }}
        ></div>
      </div>



      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info - Simplified */}
            <div className="md:col-span-1">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div>
                    <img src="/icons/image.png" alt="DubliW Logo" className="" />
                    <div className="flex items-center gap-2 mt-1">
                      <Sparkles className="w-3 h-3 text-[#30303E]" />
                      <span className="text-[#30303E] text-xs">Next-Gen Solutions</span>
                    </div>
                  </div>
                </div>

                <p className="text-[#363636] leading-relaxed mb-4">
                  Your Trusted Partner for Innovative IT Solutions and Modern Software Architecture — Designed for a Remote-First World.
                </p>

                <div className="w-16 h-0.5 bg-gradient-to-r from-[#3F3F59] to-[#363636] rounded-full"></div>
                <div className="mt-4 text-[#30303E] text-sm">
                  <p className="mb-2">Follow us on:</p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.facebook.com/dubliw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#30303E] hover:text-[#515167] transition-colors duration-700"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.twitter.com/dubliw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#30303E] hover:text-[#515167] transition-colors duration-700"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/dubliw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#30303E] hover:text-[#515167] transition-colors duration-700"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.instagram.com/dubliw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#30303E] hover:text-[#515167] transition-colors duration-700"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>

                </div>
              </div>
            </div>

            {/* Quick Links - Cleaner Design */}
            <div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-[#30303E] mb-6 flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-[#30303E]" />
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
                        className="flex items-center gap-2 text-[#30303E] hover:text-[#515167] hover:font-bold transition-colors duration-700 text-sm"
                      >
                        <div className="w-1 h-1 bg-[#30303E] hover:bg-[#515167]  rounded-full"></div>
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
                <h4 className="text-lg font-semibold text-[#30303E] mb-6 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#30303E]" />
                  Contact Info
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#30303E] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[#30303E] text-xs mb-1">Email</p>
                      <p className="text-[#30303E]/100 text-sm">hello@dubliw.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#30303E] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[#30303E] text-xs mb-1">Phone</p>
                      <p className="text-[#30303E]/100 text-sm">+94 77 9821079</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-[#30303E] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[#30303E] text-xs mb-1">Address</p>
                      <p className="text-[#30303E]/100 text-sm leading-relaxed">
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
              <div className="text-[#30303E] text-sm">
                &copy; 2025 DubliW. All rights reserved.
              </div>

              <div className="flex items-center gap-2 text-[#30303E] text-sm">
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
