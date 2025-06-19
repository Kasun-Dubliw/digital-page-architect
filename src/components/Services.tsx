
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "AI-Powered Development",
      description: "Next-generation software solutions with AI integration and intelligent automation.",
      gradient: "from-cyan-400/10 to-blue-400/10",
      iconColor: "text-cyan-400",
      borderColor: "border-cyan-400/20"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Cloud-Native Architecture",
      description: "Scalable microservices architecture with auto-scaling and distributed systems.",
      gradient: "from-purple-400/10 to-pink-400/10",
      iconColor: "text-purple-400",
      borderColor: "border-purple-400/20"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Neural Consultation",
      description: "AI-driven technology consulting with predictive analytics and data intelligence.",
      gradient: "from-emerald-400/10 to-green-400/10",
      iconColor: "text-emerald-400",
      borderColor: "border-emerald-400/20"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Quantum Data Engineering",
      description: "Revolutionary data solutions with real-time processing and neural networks.",
      gradient: "from-orange-400/10 to-red-400/10",
      iconColor: "text-orange-400",
      borderColor: "border-orange-400/20"
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Single floating element for visual interest */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cleaner Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/80 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Our Services
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Next-Gen <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Cutting-edge technology solutions powered by artificial intelligence and modern architecture
            </p>
          </div>
          
          {/* Optimized Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className={`relative bg-white/5 backdrop-blur-sm border ${service.borderColor} hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full`}>
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      {/* Simplified Icon */}
                      <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-xl border ${service.borderColor} flex items-center justify-center`}>
                        <span className={service.iconColor}>
                          {service.icon}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <CardTitle className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-white/60 leading-relaxed group-hover:text-white/80 transition-colors mb-4">
                      {service.description}
                    </CardDescription>
                    
                    {/* Learn More Link */}
                    <div className="flex items-center text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                <span className="flex items-center justify-center gap-2">
                  View All Services
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group px-8 py-3 border border-white/20 text-white font-medium rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                Get Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
