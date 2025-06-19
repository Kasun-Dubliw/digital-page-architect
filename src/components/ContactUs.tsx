
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
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-xy"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Get In Touch
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your digital presence? Let's discuss your next breakthrough project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Information */}
            <div className="space-y-8">
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                  <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    Contact Information
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <MapPin className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">Address</h4>
                        <p className="text-white/70 leading-relaxed">68/3, Sandun Uyana<br />Hedigama, Piliyandala<br />Sri Lanka</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-emerald-400/20 to-green-500/20 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <Phone className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">Phone</h4>
                        <p className="text-white/70">+94 77 9821079</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4 group/item">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                        <Mail className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2 text-lg">Email</h4>
                        <p className="text-white/70">hello@dubliw.com</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form */}
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500">
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  Send Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50 backdrop-blur-xl rounded-xl h-14"
                    />
                    
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50 backdrop-blur-xl rounded-xl h-14"
                    />
                    
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Your phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50 backdrop-blur-xl rounded-xl h-14"
                    />
                    
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400/50 backdrop-blur-xl rounded-xl resize-none"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="group relative w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-3">
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
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
