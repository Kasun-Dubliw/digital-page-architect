
import { Check, Code, Cloud, Smartphone, Database, Monitor, Server, Globe, Shield, Zap, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const AboutUs = () => {
  const expertise = [
    "AI-powered cloud solutions with quantum-level optimization",
    "Microservices architecture with self-healing capabilities", 
    "Real-time data pipelines processing billions of events",
    "Zero-trust security with blockchain integration"
  ];

  const domains = [
    "FinTech & DeFi",
    "HealthTech & Biotech", 
    "Smart Travel & Mobility",
    "EdTech & VR Learning",
    "PropTech & Smart Cities"
  ];

  const techStacks = [
    {
      category: "AI & ML",
      icon: <Sparkles className="w-8 h-8 text-purple-400" />,
      technologies: ["TensorFlow", "PyTorch", "OpenAI", "LangChain"],
      color: "bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "Backend", 
      icon: <Server className="w-8 h-8 text-cyan-400" />,
      technologies: ["Node.js", "Python", "Rust", "Go"],
      color: "bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/30",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      category: "Mobile", 
      icon: <Smartphone className="w-8 h-8 text-emerald-400" />,
      technologies: ["Flutter", "React Native", "Swift", "Kotlin"],
      color: "bg-gradient-to-br from-emerald-900/20 to-green-900/20 border-emerald-500/30",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      category: "Cloud",
      icon: <Cloud className="w-8 h-8 text-indigo-400" />,
      technologies: ["AWS", "Azure", "GCP", "Kubernetes"],
      color: "bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/30",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      category: "Frontend",
      icon: <Monitor className="w-8 h-8 text-orange-400" />,
      technologies: ["React", "Next.js", "Vue", "Svelte"],
      color: "bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/30",
      gradient: "from-orange-500 to-red-500"
    },
    {
      category: "Blockchain",
      icon: <Shield className="w-8 h-8 text-yellow-400" />,
      technologies: ["Ethereum", "Solana", "Web3.js", "IPFS"],
      color: "bg-gradient-to-br from-yellow-900/20 to-amber-900/20 border-yellow-500/30",
      gradient: "from-yellow-500 to-amber-500"
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
                We are a <span className="text-cyan-400 font-semibold">next-generation software company</span> based in Sri Lanka, 
                powered by engineers with <span className="text-purple-400 font-semibold">15+ years of expertise</span> in crafting 
                <span className="font-semibold text-white"> enterprise-grade solutions</span> that are:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group">
                  <Check className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 font-medium">Quantum Fast</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-300 group">
                  <Check className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 font-medium">Infinitely Scalable</span>
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
                  Our AI-Powered Expertise & Quantum Passion
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

          {/* Tech Stacks Section */}
          <div>
            <h3 className="text-4xl font-bold text-center mb-12">
              <span className="text-white">Our </span>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tech Arsenal</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStacks.map((stack, index) => (
                <Card key={index} className={`${stack.color} backdrop-blur-xl border-2 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardHeader className="text-center pb-4 relative z-10">
                    <div className={`flex justify-center mb-4 p-4 bg-gradient-to-r ${stack.gradient} rounded-2xl w-20 h-20 mx-auto items-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}>
                      <div className="text-white group-hover:scale-110 transition-transform duration-300">
                        {stack.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {stack.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {stack.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium text-white/90 shadow-md hover:shadow-lg transition-all duration-300 border border-white/20 hover:border-white/40 hover:bg-white/20 hover:scale-105"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
