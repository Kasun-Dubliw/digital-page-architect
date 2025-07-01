
import { MapPin, Phone, Mail, ExternalLink, Sparkles, Facebook, Twitter, Instagram, Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#2e2a3b] pt-[60px] pb-[40px] border-t border-[rgba(79,80,103,0.3)] text-slate-100">
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mb-8">
          {/* Company Info - Simplified */}
          <div className="md:col-span-1">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div>
                  <>
                    {/* Show on screens >= md (tablet and up) */}
                    <img
                      src="/icons/logo-wh.svg"
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
                  {/* <div className="flex items-center gap-2 mt-1">
                      <Sparkles className="w-3 h-3 text-[#30303E]" />
                      <span className="text-[#30303E] text-xs">Next-Gen Solutions</span>
                    </div> */}
                </div>
              </div>

              <p className="text-[#f1f5f9] opacity-70 no-underline text-[0.9rem] leading-[1.6]">
                Your Trusted Partner for Innovative IT Solutions and Modern Software Architecture — Designed for a Remote-First World.
              </p>
              <div className="mt-4 text-[#f1f5f9] text-sm">
                <p className="mb-2">Follow us on:</p>
                <div className="flex items-center gap-4">
                  <a
                    href="https://www.facebook.com/dubliw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f1f5f9] hover:text-[#a9524b] transition-colors duration-300"
                  >
                    <Facebook className="w-8 h-8" />

                  </a>
                  {/* <a
                    href="https://www.twitter.com/dubliw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f1f5f9] hover:text-[#a9524b] transition-colors duration-300"
                  >
                    <Twitter className="w-8 h-8" />
                  </a> */}
                  {/* <a
                    href="https://www.instagram.com/dubliw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f1f5f9] hover:text-[#a9524b] transition-colors duration-300"
                  >
                    <Instagram className="w-8 h-8" />
                  </a> */}
                  <a
                    href="https://www.instagram.com/dubliw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#f1f5f9] hover:text-[#a9524b] transition-colors duration-300"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>

              </div>
            </div>
          </div>

          {/* Services - Cleaner Design */}
          <div>
            <div className="">
              <h4 className="text-[1.1rem] font-semibold mb-4 text-[#a9524b]">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "MVP Development", href: "#home" },
                  { name: "Software Development", href: "#about" },
                  { name: "System Architecture", href: "#services" },
                  { name: "Strategic Consultation", href: "#portfolio" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#f1f5f9] opacity-70 no-underline text-[0.9rem] leading-[1.6] hover:text-[#a9524b] hover:opacity-100"
                    >
                      <div className=""></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="">
              <h4 className="text-[1.1rem] font-semibold mb-4 text-[#a9524b]">
                Technologies
              </h4>
              <ul className="list-none space-y-3">
                {[
                  { name: "Strategic Consultation", href: "#home" },
                  { name: "System Architecture", href: "#about" },
                  { name: "Software Development", href: "#services" },
                  { name: "MVP Development", href: "#portfolio" }
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-[#f1f5f9] opacity-70 no-underline text-[0.9rem] leading-[1.6] hover:text-[#a9524b] hover:opacity-100"
                    >
                      <div className=""></div>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Contact Info - Better Organized */}
          <div>
            <div className="">
              <h4 className="text-[1.1rem] font-semibold mb-4 text-[#a9524b]">
                {/* <Mail className="w-4 h-4 text-[#2e2a3b]" /> */}
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#a9524b] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    {/* <p className="text-[#f1f5f9] opacity-70 text-[0.9rem] leading-[1.6]">Email:</p> */}
                    <p className="text-[#f1f5f9] opacity-70 text-[0.9rem] leading-[1.6]">hello@dubliw.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#a9524b] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    {/* <p className="text-[#f1f5f9] opacity-70 text-[0.9rem] leading-[1.6]">Email:</p> */}
                    <p className="text-[#f1f5f9] opacity-70 text-[0.9rem] leading-[1.6]">+94 77 9821079</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#a9524b] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    {/* <p className="text-[#f1f5f9] opacity-70 text-[0.9rem] leading-[1.6]">Email:</p> */}
                    <p className="text-[#f1f5f9] opacity-70 text-[0.9rem] leading-[1.6]">68/3, Sandun Uyana<br />
                      Hedigama, Piliyandala<br />
                      Sri Lanka</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#a9524b] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                    {/* <p className="text-[#f1f5f9] opacity-70 text-[0.9rem] leading-[1.6]">Email:</p> */}
                    <p className="text-[#f1f5f9] opacity-70 text-[0.9rem] leading-[1.6]">Serving: Global clients</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>


        </div>
        <div className="text-center pt-8 border-t border-[rgba(79,80,103,0.3)] text-[#f1f5f9] opacity-60 text-[0.9rem]">
          <p>&copy; 2025 DubliW. Delivering world-class software solutions from Sri Lanka to global clients.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
