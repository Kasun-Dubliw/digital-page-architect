import { Check, Code, Cloud, Smartphone, Database, Monitor, Server, Globe, Shield, Zap, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const AboutUs = () => {
  const expertise = [
    "Cloud-based applications with cost-effectiveness in mind",
    "Scalable software platforms utilizing microservices architecture", 
    "Data pipelines to handle massive ammounts of data",
    "Data security and platform security with zero-trust architecture"
  ];

  const domains = [
    "Finance",
    "HealthCare", 
    "Smart Travel & Mobility",
    "Educataion & E-Learning",
    "Real State",
  ];

  const techStacks = [
    {
      name: "AI & ML",
      category: "AI & ML",
      icon: <Sparkles className="w-6 h-6" />,
      technologies: [
        { name: "TensorFlow", imageUrl: "/icons/tensorflow.svg" },
        { name: "PyTorch", imageUrl: "/icons/pytorch.svg" }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
    },
    {
      name: "Backend",
      category: "Backend", 
      icon: <Server className="w-6 h-6" />,
      technologies: [
        { name: ".Net", imageUrl: "/icons/dotnet.svg" },
        { name: "Python", imageUrl: "/icons/python.svg" },
        { name: "Node.js", imageUrl: "/icons/nodejs.svg" },
        { name: "Java", imageUrl: "/icons/java.svg" }
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      name: "Mobile",
      category: "Mobile", 
      icon: <Smartphone className="w-6 h-6" />,
      technologies: [
        { name: "Android", imageUrl: "/icons/android.svg" },
        { name: "Flutter", imageUrl: "/icons/flutter.svg" },
        { name: "React Native", imageUrl: "/icons/react.svg" },
        { name: "IOS", imageUrl: "/icons/apple.svg" }
      ],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30"
    },
    {
      name: "Cloud & DevOps",
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      technologies: [
        { name: "AWS", imageUrl: "/icons/aws.svg" },
        { name: "Azure", imageUrl: "/icons/azure.svg" },
        { name: "GitHub Workflows", imageUrl: "/icons/github.svg" }
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      name: "Frontend",
      category: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      technologies: [
        { name: "Angular", imageUrl: "/icons/angular.svg" },
        { name: "PrimeNG", imageUrl: "/icons/primeng.svg" },
        { name: "React", imageUrl: "/icons/react.svg" },
        { name: "Javascript", imageUrl: "/icons/javascript.svg" }
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      name: "Big Data & Analytics",
      category: "Big Data & Analytics",
      icon: <Shield className="w-6 h-6" />,
      technologies: [
        { name: "Kafka", imageUrl: "/icons/kafka.svg" },
        { name: "Apache Spark", imageUrl: "/icons/spark.svg" },
        { name: "AWS Glue", imageUrl: "/icons/glue.svg" },
        { name: "nifi", imageUrl: "/icons/nifi.svg" },
        { name: "ArangoDB", imageUrl: "/icons/arangodb.svg" },
        { name: "MongoDB", imageUrl: "/icons/mongodb.svg" }
      ],
      color: "from-yellow-500 to-amber-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-xy"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2 text-cyan-400" />
              Innovation at Scale
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">About</span>
              <span className="text-white"> Us</span>
            </h2>
          </div>
          
          {/* Company Introduction */}
          <div className="relative mb-16">
            <div className="absolute inset-0 -m-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <p className="text-xl text-white/80 leading-relaxed mb-8 text-center">
                We are a <span className="text-cyan-400 font-semibold">young software company</span> based in Sri Lanka, 
                powered by engineers with <span className="text-purple-400 font-semibold">15+ years of expertise</span> in crafting 
                <span className="font-semibold text-white"> enterprise-grade solutions</span> that are:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <Check className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 font-medium">High performance</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                  <Check className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 font-medium">Scalable</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-emerald-400/50 transition-all duration-300 group">
                  <Check className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 font-medium">Fort Knox Secure</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-300 group">
                  <Check className="w-5 h-5 text-yellow-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 font-medium">Cost Optimized</span>
                </div>
              </div>
              
              <div className="text-center bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-3">Why Choose the Future?</h3>
                <p className="text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Our Expertise & Quantum Passion
                </p>
              </div>
            </div>
          </div>

          {/* Expertise and Domains Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-12">
              <span className="text-white">Explore Our </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Quantum Capabilities</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Expertise */}
              <div className="relative group">
                <div className="absolute inset-0 -m-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Quantum Expertise</h4>
                  </div>
                  <p className="text-lg font-semibold text-cyan-400 mb-4">Engineering & Architecting:</p>
                  <div className="space-y-3">
                    {expertise.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                        <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Domains */}
              <div className="relative group">
                <div className="absolute inset-0 -m-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Future Domains</h4>
                  </div>
                  <div className="space-y-3">
                    {domains.map((domain, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
                        <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-lg text-white/90 font-medium">{domain}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Redesigned Tech Arsenal Section */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                <span className="text-white">Our </span>
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Arsenal</span>
              </h3>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks that power our innovative solutions
              </p>
            </div>
            
            {/* Horizontal Scrolling Layout for Mobile, Grid for Desktop */}
            <div className="relative">
              {/* Desktop Grid Layout */}
              <div className="hidden lg:grid lg:grid-cols-3 gap-6">
                {techStacks.map((stack, index) => (
                  <div key={index} className="group relative">
                    <div className={`absolute inset-0 -m-1 bg-gradient-to-r ${stack.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`relative ${stack.bgColor} backdrop-blur-xl border ${stack.borderColor} rounded-2xl p-6 h-full hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1`}>
                      
                      {/* Icon and Category */}
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                          {stack.icon}
                        </div>
                        <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                          {stack.category}
                        </h4>
                      </div>
                      
                      {/* Technologies Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        {stack.technologies.map((tech, techIndex) => (
                          <div 
                            key={techIndex}
                            className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group/tech"
                          >
                            <img
                              src={tech.imageUrl}
                              width="48"
                              height="24"
                              className="rounded object-cover"
                              alt={tech.name}
                            />
                            <span className="text-sm font-medium text-white/90 group-hover/tech:text-white transition-colors">
                              {tech.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Horizontal Scroll Layout */}
              <div className="lg:hidden overflow-x-auto pb-6">
                <div className="flex gap-4 w-max">
                  {techStacks.map((stack, index) => (
                    <div key={index} className="group relative w-72 flex-shrink-0">
                      <div className={`absolute inset-0 -m-1 bg-gradient-to-r ${stack.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className={`relative ${stack.bgColor} backdrop-blur-xl border ${stack.borderColor} rounded-2xl p-6 h-full hover:border-white/30 transition-all duration-300`}>
                        
                        {/* Icon and Category */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                            {stack.icon}
                          </div>
                          <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                            {stack.category}
                          </h4>
                        </div>
                        
                        {/* Technologies Grid */}
                        <div className="grid grid-cols-2 gap-3">
                          {stack.technologies.map((tech, techIndex) => (
                            <div 
                              key={techIndex}
                              className="bg-white/5 backdrop-blur-md rounded-lg p-3 text-center border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group/tech"
                            >
                              <span className="text-sm font-medium text-white/90 group-hover/tech:text-white transition-colors">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scroll Indicator for Mobile */}
              <div className="lg:hidden flex justify-center mt-4">
                <div className="flex gap-2">
                  {Array.from({ length: Math.ceil(techStacks.length / 2) }).map((_, index) => (
                    <div key={index} className="w-2 h-2 bg-white/20 rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
