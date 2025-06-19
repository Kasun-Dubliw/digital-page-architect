
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Development",
      description: "Next-generation software solutions built with AI integration, machine learning capabilities, and intelligent automation to revolutionize your business processes.",
      gradient: "from-cyan-500/20 to-blue-500/20",
      glowColor: "cyan"
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-400" />,
      title: "Cloud-Native Architecture",
      description: "Scalable microservices architecture designed for the cloud, featuring auto-scaling, distributed systems, and quantum-ready infrastructure solutions.",
      gradient: "from-purple-500/20 to-pink-500/20",
      glowColor: "purple"
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-emerald-400" />,
      title: "Neural Consultation",
      description: "Advanced AI-driven technology consulting using predictive analytics and data intelligence to optimize your digital transformation journey.",
      gradient: "from-emerald-500/20 to-green-500/20",
      glowColor: "emerald"
    },
    {
      icon: <Database className="w-8 h-8 text-orange-400" />,
      title: "Quantum Data Engineering",
      description: "Revolutionary data solutions featuring real-time processing, neural networks, blockchain integration, and quantum computing readiness for massive datasets.",
      gradient: "from-orange-500/20 to-red-500/20",
      glowColor: "orange"
    }
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-xy"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-cyan-400" />
              Advanced Solutions
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Next-Gen Services
              </span>
            </h2>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Cutting-edge technology solutions powered by artificial intelligence, 
              quantum computing, and revolutionary software architecture
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse`}></div>
                
                {/* Card */}
                <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full">
                  <CardHeader className="text-center pb-6">
                    {/* Icon Container */}
                    <div className="relative mb-6 flex justify-center">
                      <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-400 rounded-full animate-ping"></div>
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-white/60 text-center leading-relaxed group-hover:text-white/80 transition-colors">
                      {service.description}
                    </CardDescription>
                    
                    {/* Futuristic accent line */}
                    <div className="mt-6 flex justify-center">
                      <div className={`w-16 h-0.5 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center justify-center gap-3">
                Explore All Services
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
