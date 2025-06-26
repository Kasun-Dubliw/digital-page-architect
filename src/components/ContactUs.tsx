
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Send, Sparkles } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Add email sending functionality
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Simplified Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cleaner Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F2F5FB] backdrop-blur-sm border border-[#515167] text-[#515167] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-[#515167]" />
              Get In Touch
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#515167]">
              Let's <span className="bg-gradient-to-r from-[#363636] to-[#515167] bg-clip-text text-transparent">Connect</span>
            </h2>
            
            <p className="text-lg text-[#515167] leading-relaxed max-w-2xl mx-auto">
              Ready to transform your digital presence? Let's discuss your next breakthrough project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Information - Simplified */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-fit">
                <h3 className="text-xl font-bold text-[#515167] mb-6 flex items-center gap-3">
                  {/* <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div> */}
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#30303E] rounded-xl flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#515167] mb-1">Address</h4>
                      <p className="text-[#515167] text-sm leading-relaxed">68/3, Sandun Uyana<br />Hedigama, Piliyandala<br />Sri Lanka</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#30303E] rounded-xl flex items-center justify-center">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#515167] mb-1">Phone</h4>
                      <p className="text-[#515167] text-sm">+94 77 9821079</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#30303E] rounded-xl flex items-center justify-center">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#515167] mb-1">Email</h4>
                      <p className="text-[#515167] text-sm">hello@dubliw.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form - Improved */}
            <div className="lg:col-span-3">
              <div className="bg-[#E9EDF4] backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#515167] mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#30303E] rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="text-[#515167] placeholder:text-[#515167]/50 border-none focus:border-none focus:outline-none focus:ring-0 rounded-xl h-12"
                    />
                    
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="text-[#515167] placeholder:text-[#515167]/50 border-none focus:border-none focus:outline-none rounded-xl h-12"
                    />
                  </div>
                  
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Your phone (optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="text-[#515167] placeholder:text-[#515167]/50 border-none focus:border-none focus:outline-none rounded-xl h-12"
                  />
                  
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="text-[#515167] placeholder:text-[#515167]/50 border-none focus:border-none focus:outline-none rounded-xl h-12"
                  />
                  
                  <button 
                    type="submit" 
                    className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-[#515167] to-[#3F3F59] text-white font-medium rounded-xl hover:shadow-lg hover:shadow-[#515167] transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
