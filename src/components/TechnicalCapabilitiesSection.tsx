import { Check, Code, Cloud, Smartphone, Database, Monitor, Server, Globe, Shield, Zap, Sparkles, Star, SquareCheck, Workflow } from 'lucide-react';
import TechStackCarousel from './TechStackCarousel';
import TechStack from './TechStack';

const TechnicalCapabilitiesSection = () => {
  const expertise = [
    "Cloud-based applications with cost-effectiveness in mind",
    "Scalable software platforms utilizing microservices architecture",
    "Data pipelines to handle massive ammounts of data",
    "Data security and platform security with zero-trust architecture"
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
      name: "Frontend",
      category: "Frontend",
      icon: <Monitor className="w-6 h-6" />,
      technologies: [
        { name: "Angular", imageUrl: "/icons/angular.svg" },
        // { name: "PrimeNG", imageUrl: "/icons/primeng.webp" },
        { name: "React", imageUrl: "/icons/react.svg" },
        { name: "Javascript", imageUrl: "/icons/javascript.svg" }
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30"
    },
    {
      name: "Cloud & DevOps",
      category: "Cloud & DevOps",
      icon: <Cloud className="w-6 h-6" />,
      technologies: [
        { name: "AWS", imageUrl: "/icons/aws.svg" },
        { name: "Azure", imageUrl: "/icons/azure.svg" },
        { name: "Google Cloud", imageUrl: "/icons/github.svg" }
      ],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30"
    },
    {
      name: "Mobile",
      category: "Mobile",
      icon: <Smartphone className="w-6 h-6" />,
      technologies: [
        { name: "Android", imageUrl: "/icons/android.svg" },
        { name: "Flutter", imageUrl: "/icons/flutter.svg" },
        { name: "React Native", imageUrl: "/icons/react.svg" },
        { name: "Swift", imageUrl: "/icons/apple.svg" },
        { name: "Kotlin", imageUrl: "/icons/apple.svg" }
      ],
      color: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30"
    },
    {
      name: "Data Engineering",
      category: "Big Data & Analytics",
      icon: <Workflow className="w-6 h-6" />,
      technologies: [
        // { name: "Kafka", imageUrl: "/icons/kafka.svg" },
        // { name: "Apache Spark", imageUrl: "/icons/spark.svg" },
        // { name: "AWS Glue", imageUrl: "/icons/glue.svg" },
        // { name: "nifi", imageUrl: "/icons/nifi.svg" },
        // { name: "ArangoDB", imageUrl: "/icons/arangodb.svg" },
        // { name: "MongoDB", imageUrl: "/icons/mongodb.svg" },

        { name: "Storage", imageUrl: "/icons/mongodb.svg" },
        { name: "ETL/ELT Tools", imageUrl: "/icons/mongodb.svg" },
        { name: "Data Processing", imageUrl: "/icons/mongodb.svg" },
        { name: "Cloud & Infra", imageUrl: "/icons/mongodb.svg" },

      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    },
    {
      name: "DevSecOps",
      category: "Dev Sec Ops",
      icon: <Shield className="w-6 h-6" />,
      technologies: [
        // { name: "Kafka", imageUrl: "/icons/kafka.svg" },
        // { name: "Apache Spark", imageUrl: "/icons/spark.svg" },
        // { name: "AWS Glue", imageUrl: "/icons/glue.svg" },
        // { name: "nifi", imageUrl: "/icons/nifi.svg" },
        // { name: "ArangoDB", imageUrl: "/icons/arangodb.svg" },
        // { name: "MongoDB", imageUrl: "/icons/mongodb.svg" },

        { name: "GitHub", imageUrl: "/icons/mongodb.svg" },
        { name: "GitLab", imageUrl: "/icons/mongodb.svg" },
        { name: "SonarQube", imageUrl: "/icons/mongodb.svg" },
        { name: "Snyk", imageUrl: "/icons/mongodb.svg" },

      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#2e2a3b] relative overflow-hidden">

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">

            <h2 className="text-[2.4rem] font-semibold font-bold mb-6 text-[#f1f5f9]">
              Our Technical <span className="bg-[#a9524b] bg-clip-text text-transparent">Capabilities</span>
            </h2>

            <p className="text-base text-lg text-[#f1f5f9] leading-relaxed max-w-2xl mx-auto opacity-70 text-[1.1rem] section-subtitle">
              Our experienced team and extensive network cover a broad range of modern technologies, ensuring we can tackle your most complex challenges.
            </p>

            <div className="flex flex-col items-center gap-8 mb-16 md:flex-row md:justify-between">
              <div className="flex-1 text-center opacity-100 transition-opacity transition-transform duration-600 ease-in-out">
                <div className="w-[80px] h-[80px] bg-[#3e3f56] rounded-full flex items-center justify-center mx-auto mb-6 text-[2.5rem] border-[3px] border-[#a9524b] transition-transform duration-300 shadow-[0_4px_15px_rgba(169,82,75,0.2)] hover:scale-110"><Cloud size={48} strokeWidth={0.75} fill='#a9524b' /> </div>
                <h3 className='text-[1.1rem] font-semibold mb-4 text-[#f1f5f9] leading-[1.3]'>Cloud-based Applications</h3>
                <p className='text-[#f1f5f9] opacity-80 leading-[1.6] text-[0.9rem]'>Delivering cost-effective and scalable solutions on leading cloud platforms including AWS, Azure, and Google Cloud Platform.</p>
              </div>
              <div className="flex-1 text-center opacity-100 transition-opacity transition-transform duration-600 ease-in-out">
                <div className="w-[80px] h-[80px] bg-[#3e3f56] rounded-full flex items-center justify-center mx-auto mb-6 text-[2.5rem] border-[3px] border-[#a9524b] transition-transform duration-300 shadow-[0_4px_15px_rgba(169,82,75,0.2)] hover:scale-110">🏗️</div>
                <h3 className='text-[1.1rem] font-semibold mb-4 text-[#f1f5f9] leading-[1.3]'>Scalable Software Platforms</h3>
                <p className='text-[#f1f5f9] opacity-80 leading-[1.6] text-[0.9rem]'>Utilizing microservices architecture for robust and future-proof systems that grow with your business.</p>
              </div>
              <div className="flex-1 text-center opacity-100 transition-opacity transition-transform duration-600 ease-in-out">
                <div className="w-[80px] h-[80px] bg-[#3e3f56] rounded-full flex items-center justify-center mx-auto mb-6 text-[2.5rem] border-[3px] border-[#a9524b] transition-transform duration-300 shadow-[0_4px_15px_rgba(169,82,75,0.2)] hover:scale-110">📊</div>
                <h3 className='text-[1.1rem] font-semibold mb-4 text-[#f1f5f9] leading-[1.3]'>High-Volume Data Pipelines</h3>
                <p className='text-[#f1f5f9] opacity-80 leading-[1.6] text-[0.9rem]'>Building efficient data pipelines to handle massive amounts of data for analytics and processing requirements.</p>
              </div>
              <div className="flex-1 text-center opacity-100 transition-opacity transition-transform duration-600 ease-in-out">
                <div className="w-[80px] h-[80px] bg-[#3e3f56] rounded-full flex items-center justify-center mx-auto mb-6 text-[2.5rem] border-[3px] border-[#a9524b] transition-transform duration-300 shadow-[0_4px_15px_rgba(169,82,75,0.2)] hover:scale-110">🔒</div>
                <h3 className='text-[1.1rem] font-semibold mb-4 text-[#f1f5f9] leading-[1.3]'>Advanced Security</h3>
                <p className='text-[#f1f5f9] opacity-80 leading-[1.6] text-[0.9rem]'>Implementing data and platform security with a zero-trust architecture approach for maximum protection.</p>
              </div>
            </div>

          </div>
          <div className="relative mb-16 text-center mt-16">

            <div className="relative bg-[rgba(62,63,86,0.4)] rounded-[16px] p-10 border border-[rgba(79,80,103,0.3)] backdrop-blur-[10px]">

              <h2 className="text-[2.4rem] font-semibold font-bold mb-6 text-[#f1f5f9]">
                Main Tech Stacks We <span className="bg-[#a9524b] bg-clip-text text-transparent">Use</span>
              </h2>

              <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
                {techStacks.map((stack) => (
                  <div key={stack.name} className="bg-[rgba(79,80,103,0.3)] rounded-[12px] p-6 border border-[rgba(79,80,103,0.5)] transition-all duration-300 ease-in-out hover:bg-[rgba(79,80,103,0.5)] hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] transition duration-300 ease-in-out">
                    <div className="flex items-center mb-4 pb-3 border-b border-[rgba(79,80,103,0.5)]">
                      <span className="text-[1.2rem] mr-3 w-8 h-8 flex items-center justify-center rounded-full border-2 border-[#a9524b] border p-1 bg-[linear-gradient(135deg,rgba(251,146,60,0.2)_0%,rgba(251,146,60,0.1)_100%)] text-[#f1f5f9]">{stack.icon}</span>
                      <span className="text-[1.1rem] font-semibold text-[#f1f5f9]">{stack.name}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {stack.technologies.map((tech) => (
                        <span key={tech.name} className="bg-[rgba(169,82,75,0.2)] text-[#f1f5f9] px-3 py-1 rounded-[20px] text-[0.85rem] font-medium border border-[rgba(169,82,75,0.3)] transition-all duration-300 ease-in-out cursor-pointer hover:bg-[rgba(169,82,75,0.4)] hover:-translate-y-[1px] hover:shadow-[0_3px_10px_rgba(169,82,75,0.3)] transition-transform transition-shadow duration-300 ease-in-out">{tech.name}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button className="px-10 py-4 rounded-[6px] font-medium bg-[#a9524b] text-[#f1f5f9] hover:bg-[#94453e] hover:-translate-y-0.5 transition duration-300">
                <span className="flex items-center justify-center gap-2">
                  Have a unique tech challenge? Let's discuss how our expertise can help.
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilitiesSection;
