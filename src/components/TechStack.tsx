
import TechStackCarousel from './TechStackCarousel';
import TechStackCarouselv1 from './TechStackCarouselv1';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles, ArrowRight, Server, Cloud, Monitor, Shield, Smartphone } from 'lucide-react';

const TechStack = () => {
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
    // <section id="services" className="relative py-24 overflow-hidden">
    //   <div className="absolute inset-0 bg-gradient-to-r from-[#E9EDF4] via-[#515167] to-[#E9EDF4]"></div>

    //   <div className="container mx-auto px-6 relative z-10">
    //     <div className="max-w-6xl mx-auto">
    //       {/* Cleaner Section Header */}
    //       <div className="text-center mb-16">
    //         <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F2F5FB] backdrop-blur-sm border border-[#515167] text-[#515167] text-sm font-medium mb-6">
    //           <Sparkles className="w-4 h-4 mr-2 text-[#515167]" />
    //          Tech Stack
    //         </div>

    //         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E9EDF4]">
    //           Our <span className="bg-gradient-to-r from-[#E9EDF4] via-[#F2F5FB] to-white bg-clip-text text-transparent">Tech Arsenal</span>
    //         </h2>

    //         <p className="text-lg text-white leading-relaxed max-w-2xl mx-auto">
    //           Cutting-edge technologies and frameworks that power our innovative solutions
    //         </p>
    //       </div>

    //     </div>
    //   </div>
    //   <div className=''>
    //     <TechStackCarousel techStacks={techStacks} />
    //   </div>
    // </section>

    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#E9EDF4] via-[#F2F5FB] to-[#white]"></div>

      {/* Section content (title) — still centered */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F2F5FB] backdrop-blur-sm border border-[#515167] text-[#515167] text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2 text-[#515167]" />
              Tech Stack
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#515167]">
              Our <span className="bg-gradient-to-r from-[#363636] to-[#515167] bg-clip-text text-transparent">Tech Arsenal</span>
            </h2>
            
            <p className="text-lg text-[#515167] leading-relaxed max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks that power our innovative solutions
            </p>
          </div>
          {/* <TechStackCarousel techStacks={techStacks} /> */}
        </div>
      </div>

      {/* ✅ Full-width Carousel */}
      <div className="w-screen relative z-10 bg-[#E9EDF4]">
        <TechStackCarouselv1 techStacks={techStacks} />
      </div>
    </section>

  );
};

export default TechStack;
