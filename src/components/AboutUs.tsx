import { Check, Code, Cloud, Smartphone, Database, Monitor, Server, Globe, Shield, Zap, Sparkles } from 'lucide-react';
import TechStackCarousel from './TechStackCarousel';
import TechStack from './TechStack';

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
      name: "Backend",
      category: "Backend",
      icon: <Server className="w-6 h-6" />,
      technologies: [
        { name: ".Net", imageUrl: "/icons/dotnet.svg" },
        { name: "Python", imageUrl: "/icons/python.svg" },
        { name: "Node.js", imageUrl: "/icons/nodejs.svg" },
        { name: "Java", imageUrl: "/icons/java.svg" }
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30"
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
        { name: "PrimeNG", imageUrl: "/icons/primeng.webp" },
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
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-t from-[#E9EDF4] via-[#F2F5FB] to-white relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F2F5FB] backdrop-blur-sm border border-[#515167] text-[#515167] text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2 text-[#515167]" />
             Innovation at Scale
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#515167]">
               About <span className="bg-gradient-to-r from-[#363636] to-[#515167] bg-clip-text text-transparent">Us</span>
            </h2>
          </div>

          {/* Company Introduction */}
          <div className="relative mb-16">
            {/* <div className="absolute inset-0 -m-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl blur"></div> */}
            <div className="relative bg-[#3F3F59] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <p className="text-xl text-white/80 leading-relaxed mb-8 text-center">
                We are a <span className="text-[#F2F5FB] font-semibold">young software company</span> based in Sri Lanka,
                powered by engineers with <span className="text-[#E9EDF4] font-semibold">10+ years of expertise</span> in crafting
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

              <div className="text-center  backdrop-blur-xl p-6 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-3">Why Choose the Dubliw?</h3>
                <p className="text-xl bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                  Our Expertise & Quantum Passion
                </p>
              </div>
            </div>
          </div>

          {/* Expertise and Domains Section */}
          <div className="mb-16">
            <h3 className="text-4xl font-bold text-center mb-12">
              <span className="text-[#363636]">Explore Our </span>
              <span className="bg-gradient-to-r from-[#363636] to-[#515167] bg-clip-text text-transparent">Quantum Capabilities</span>
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Expertise */}
              <div className="relative group">
                <div className="relative bg-[#3F3F59] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#363636] rounded-2xl flex items-center justify-center mr-4">
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Quantum Expertise</h4>
                  </div>
                  <p className="text-lg font-semibold text-[#F2F5FB] mb-4">Engineering & Architecting:</p>
                  <div className="space-y-3">
                    {expertise.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-[#] backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                        <Check className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Domains */}
              <div className="relative group">
                <div className="relative bg-[#3F3F59] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-[#363636] rounded-2xl flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Domains</h4>
                  </div>
                  <div className="space-y-3">
                    {domains.map((domain, index) => (
                      <div key={index} className="flex items-center space-x-3 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group">
                        <div className="w-3 h-3 bg-gradient-to-r to-[#363636] from-white rounded-full group-hover:scale-125 transition-transform"></div>
                        <span className="text-lg text-white/90 font-medium">{domain}</span>
                      </div>
                    ))}
                  </div>
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
