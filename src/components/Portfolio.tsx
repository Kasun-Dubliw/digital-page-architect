
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';
import { ExternalLink, Github, Sparkles, Zap, ArrowRight, Calendar, TrendingUp } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Systemate",
      subtitle: "Systemate LLC (USA)",
      description: "Systemate is a software platform designed for real estate investors targeting the U.S. market. We are helping the client revamp the existing platform to handle 100s of gigabytes of data in a more scalable yet cost-effective manner. We designed the new system based on microservices concepts and hosted it in the Azure cloud. Systemate includes .NET and Python backends, an Angular frontend, and Android/iOS mobile applications.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      technologies: [".Net FrameWork", ".Net Core", "MS SQL", "Angular", "Azure Cloud", "AWS"],
      category: "Real Estate Intelligence",
      status: "Live",
      statusColor: "emerald",
      progress: 65,
      year: "2024"
    },
    {
      id: 2,
      title: "fACT",
      subtitle: "University of Auckland (New Zealand)",
      description: "fACT is software designed to b e used in treating patients with mental health conditions . W e are working with the client to build the platform from the ground up, starting from architectural design t o implementation. The biggest challenge is data security, as the system will handle patients' health data. fACT includes a .NET backend and Android/iOS applications for both tablets and mobile phones.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      technologies: [".Net Core", "Posgress SQL", "Android", "iOS", "AWS"],
      category: "Healthcare Innovation",
      status: "Development",
      statusColor: "yellow",
      progress: 100,
      year: "2024"
    },
    {
      id: 3,
      title: "TeaBase",
      subtitle: "BPH 200 Pte Ltd (Singapore)",
      description: "TeaBase is a SaaS application for the tea industry, designed for market price forecasting and providing the required analytics for business operators to make data-driven decisions. W e helped the team b y analyzing their business requirements, reviewing the software architecture they designed, and proposing an improved architecture that includes ETL pipelines capable of handling large amounts of data while incorporating necessary security controls i n a cost-effective manner. The system was designed using AWS-managed components.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
      technologies: ["Python", "AWS", "Machine Learning", "Data Analytics", "ETL"],
      category: "Agricultural Intelligence",
      status: "Scaling",
      statusColor: "cyan",
      progress: 55,
      year: "2022"
    }
  ];

  const getStatusStyles = (color: string) => {
    const styles = {
      emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      yellow: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
      cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
    };
    return styles[color as keyof typeof styles];
  };

  return (
    <section id="portfolio" className="relative py-24 overflow-hidden">
      {/* Simplified Background */}
      <div className="absolute inset-0 bg-gradient-to-tl from-[#E9EDF4] to-white"></div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cleaner Section Header */}
          <div className="text-center mb-16">
            
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F2F5FB] backdrop-blur-sm border border-[#515167] text-[#515167] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-[#515167]" />
             Our Portfolio
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#515167]">
               A Few <span className="bg-gradient-to-r from-[#363636] to-[#515167] bg-clip-text text-transparent">Projects</span>
            </h2>
            
            <p className="text-lg text-[#515167] leading-relaxed max-w-2xl mx-auto">
              Explore our revolutionary applications that push the boundaries of technology
            </p>

          </div>
          
          {/* Improved Portfolio Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-12">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <Card className="relative bg-[#30303E] backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-1 h-full overflow-hidden">
                  {/* Project Image */}
                  <div className="relative aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                    
                    {/* Status and Year */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                      <div className={`px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm border ${getStatusStyles(project.statusColor)}`}>
                        {project.status}
                      </div>
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </div>
                    </div>

                    {/* Category */}
                    <div className="absolute bottom-3 left-3">
                      <div className="px-2 py-1 rounded-lg text-xs font-medium bg-white/10 backdrop-blur-sm border border-white/20 text-white/90">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div
                      className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <CardTitle className="text-lg font-bold  group-hover:text-white text-[#E9EDF4] transition-colors mb-1">
                          {project.title}
                        </CardTitle>
                        <p className="text-sm text-[#F2F5FB] font-medium">
                          {project.subtitle}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        <button className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 hover:text-white hover:bg-white/20 transition-all">
                          <ExternalLink className="w-3 h-3" />
                        </button>
                        {/* <button className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white/60 hover:text-purple-400 hover:bg-white/20 transition-all">
                          <Github className="w-3 h-3" />
                        </button> */}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0 space-y-4" >
                    <CardDescription className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                      {project.description}
                    </CardDescription>
                    
                    {/* Key Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-xs rounded-md font-medium hover:bg-white/20 transition-all"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-xs text-white/60">
                        <span>Progress</span>
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          <span>{project.progress}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-1.5">
                        <div 
                          className="h-1.5 rounded-full bg-gradient-to-r from-[#ffffff] to-[#E9EDF4] transition-all duration-1000"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Learn More Link */}
                    {/* <div className="flex items-center text-sm text-cyan-400 group-hover:text-cyan-300 transition-colors cursor-pointer pt-2">
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div> */}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Enhanced Call to Action */}
          {/* <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-600 text-white font-medium rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-0.5">
                <span className="flex items-center justify-center gap-2">
                  View All Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              
              <button className="group px-8 py-3 border border-white/20 text-white font-medium rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                Start Your Project
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
