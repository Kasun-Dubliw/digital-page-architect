
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles, ArrowRight, Rocket, DollarSign, Hammer } from 'lucide-react';

const Projects = () => {
  const Projects = [
    {
      icon: <Rocket size={48} strokeWidth={2.25} absoluteStrokeWidth fill='#a9524b' />,
      title: "Rapid MVP Delivery",
      description: "Get your product to market fast with our streamlined development process and proven methodologies."
    },
    {
      icon: <DollarSign size={48} strokeWidth={2.25} absoluteStrokeWidth fill='#a9524b' />,
      title: "Budget-Friendly Pricing",
      description: "Competitive rate based on your budget without compromising on quality or expertise."
    },
    {
      icon: <Hammer size={48} strokeWidth={2.25} absoluteStrokeWidth fill='#a9524b' />,
      title: "Senior Architecture Guidance",
      description: "15+ years of experience ensuring your systems are built for scale and performance."
    },
  ];

  return (
    <section id="WhyChooseSection" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#2e2a3b]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cleaner Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[2.4rem] font-semibold font-bold mb-6 text-[#f1f5f9]">
              Featured <span className="bg-[#a9524b] bg-clip-text text-transparent">Projects</span>
            </h2>

            <p className="text-lg text-[#f1f5f9] leading-relaxed max-w-2xl mx-auto opacity-70 text-[1.1rem]">
              AProven results across industries - see our client successes
            </p>

          </div>

          {/* Optimized Projects Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {Projects.map((project, index) => (
              <div key={index} className="group">
                <Card className={`bg-[#3e3f56] p-8 rounded-[12px] transition-all duration-300 shadow-[0_2px_8px_rgba(46,42,59,0.1)] text-[#2e2a3b] hover:-translate-y-2 border border-[#2e2a3b] hover:border-[#a9524b] hover:shadow-[0_8px_24px_rgba(46,42,59,0.15)] transition-all duration-300`}>
                  <CardHeader className="pb-4">
                    <div className="text-center">
                      {/* Icon on top with exact styling */}
                      <div className="w-[60px] h-[60px] bg-[rgba(169,82,75,0.1)] rounded-[12px] flex items-center justify-center mx-auto mb-6 text-[1.5rem]">
                        {project.icon}
                      </div>

                      {/* Title below icon */}
                      <CardTitle className="text-lg font-semibold text-[#f1f5f9] group-hover:text-[#515167] transition-colors">
                        {project.title}
                      </CardTitle>
                    </div>

                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="text-[#f1f5f9] leading-relaxed transition-colors mb-4">
                      {project.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <button className="px-10 py-4 rounded-[6px] font-medium bg-[#a9524b] text-[#f1f5f9] hover:bg-[#94453e] hover:-translate-y-0.5 transition duration-300">
              <span className="flex items-center justify-center gap-2">
                View All Projects & Schedule Consultation
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
