
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import { ExternalLink, Github, Sparkles, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Systemate - AI Real Estate Platform",
      summary: "Revolutionary real estate intelligence platform processing terabytes of market data using advanced machine learning algorithms. Built with quantum-ready microservices architecture on Azure Cloud, featuring neural network-powered analytics and predictive market modeling.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      highlights: ["AI Analytics", "Quantum Architecture", "Azure Cloud", "Neural Networks", "Predictive Modeling", "Real-time Processing"],
      category: "Real Estate Intelligence",
      status: "Live Production",
      gradient: "from-cyan-500/20 to-blue-500/20"
    },
    {
      id: 2,
      title: "fACT - Neural Health Platform",
      summary: "Next-generation mental health treatment platform featuring AI-driven diagnostics, blockchain-secured patient data, and quantum-encrypted communications. Built from ground up with zero-trust architecture and advanced biometric integration.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      highlights: ["AI Diagnostics", "Blockchain Security", "Quantum Encryption", "Biometric Auth", "Zero-Trust Architecture", "Neural Processing"],
      category: "Healthcare Innovation",
      status: "Development",
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      id: 3,
      title: "TeaBase - Quantum Market Analytics",
      summary: "Revolutionary SaaS platform for agricultural market prediction using quantum computing algorithms, satellite data integration, and AI-powered forecasting. Features real-time global market analysis and cryptocurrency integration for seamless transactions.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
      highlights: ["Quantum Computing", "Satellite Integration", "AI Forecasting", "Crypto Payments", "Global Analytics", "Real-time Processing"],
      category: "Agricultural Intelligence",
      status: "Scaling",
      gradient: "from-emerald-500/20 to-green-500/20"
    }
  ];

  return (
    <section id="portfolio" className="relative py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900/50 to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-cyan-600/10 to-blue-600/10 animate-gradient-xy"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2 text-purple-400" />
              Innovation Showcase
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Future Projects
              </span>
            </h2>
            
            <p className="text-xl text-white/70 leading-relaxed max-w-3xl mx-auto">
              Explore our portfolio of revolutionary applications that push the boundaries 
              of technology and redefine industry standards
            </p>
          </div>
          
          {/* Portfolio Carousel */}
          <div className="relative">
            <Carousel className="w-full max-w-6xl mx-auto">
              <CarouselContent className="-ml-6">
                {projects.map((project) => (
                  <CarouselItem key={project.id} className="pl-6 md:basis-1/2 lg:basis-1/2">
                    <div className="group relative h-full">
                      {/* Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
                      
                      {/* Card */}
                      <Card className="relative bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl h-full overflow-hidden">
                        {/* Project Image with Overlay */}
                        <div className="relative aspect-video w-full overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                          
                          {/* Status Badge */}
                          <div className="absolute top-4 right-4">
                            <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border border-white/20 ${
                              project.status === 'Live Production' ? 'bg-emerald-500/20 text-emerald-300' :
                              project.status === 'Development' ? 'bg-yellow-500/20 text-yellow-300' :
                              'bg-cyan-500/20 text-cyan-300'
                            }`}>
                              {project.status}
                            </div>
                          </div>

                          {/* Category Badge */}
                          <div className="absolute bottom-4 left-4">
                            <div className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white/90">
                              {project.category}
                            </div>
                          </div>
                        </div>

                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                              {project.title}
                            </CardTitle>
                            <div className="flex gap-2 ml-4">
                              <button className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/60 hover:text-cyan-400 hover:bg-white/20 transition-all">
                                <ExternalLink className="w-4 h-4" />
                              </button>
                              <button className="p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white/60 hover:text-purple-400 hover:bg-white/20 transition-all">
                                <Github className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="pt-0 space-y-6">
                          <CardDescription className="text-white/60 leading-relaxed text-sm group-hover:text-white/80 transition-colors">
                            {project.summary}
                          </CardDescription>
                          
                          {/* Tech Stack Pills */}
                          <div className="flex flex-wrap gap-2">
                            {project.highlights.map((highlight, index) => (
                              <span 
                                key={index}
                                className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white/80 text-xs rounded-full font-medium hover:bg-white/20 hover:scale-105 transition-all cursor-default"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>

                          {/* Progress Bar */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs text-white/60">
                              <span>Development Progress</span>
                              <span>{project.status === 'Live Production' ? '100%' : project.status === 'Scaling' ? '85%' : '60%'}</span>
                            </div>
                            <div className="w-full bg-white/10 rounded-full h-1">
                              <div 
                                className={`h-1 rounded-full bg-gradient-to-r ${project.gradient.replace('/20', '')} transition-all duration-1000`}
                                style={{ 
                                  width: project.status === 'Live Production' ? '100%' : project.status === 'Scaling' ? '85%' : '60%'
                                }}
                              ></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              {/* Custom Navigation */}
              <CarouselPrevious className="hidden sm:flex -left-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white" />
              <CarouselNext className="hidden sm:flex -right-6 bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 text-white" />
            </Carousel>
          </div>
          
          {/* Bottom Section */}
          <div className="text-center mt-16 space-y-6">
            <p className="text-white/50 text-sm">
              Navigate through our revolutionary portfolio using gestures or controls
            </p>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
              <span className="flex items-center justify-center gap-3">
                View All Projects
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
