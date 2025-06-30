
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles, ArrowRight, Rocket, DollarSign, Hammer } from 'lucide-react';
import Steps from './ui/steps';

const JourneySection = () => {
  const services = [
    {
      listItems: [
        "Optimize existing systems",
        "Validate technical ideas",
        "Choose the right technology stack",
        "Prevent costly architectural mistakes"
      ],
      title: "Strategic Consultation",
      description: "We help you review your architecture and design to provide critical inputs, considering all functional and non-functional requirements. From technology stack decisions to implementation tools, we guide you through every technical decision."
    },
    {
      listItems: [
        "Solid foundation for development",
        "Clear technical roadmap",
        "Reduced technical debt",
        "Comprehensive solution documentation"
      ],
      title: "System Architecture",
      description: "Upon understanding your business requirements, we design the entire system architecture, including tech stack and necessary tools. We brief your tech leads and developers, ensuring they understand our designs with follow-up sessions."
    },
    {
      listItems: [
        "Full-cycle development",
        "High-quality, scalable code",
        "Timely delivery commitments",
        "Access to diverse skill sets"
      ],
      title: "Software Development",
      description: "Based on your requirements, we build your software according to the given architecture, providing end-to-end delivery. Our developers assess design documents and carry out development with precision and quality."
    },
  ];

  return (
    <section id="WhyChooseSection" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#f1f5f9]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cleaner Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[2.4rem] font-semibold font-bold mb-6 text-[#2e2a3b]">
              Your Journey to a Successful Software Solution <span className="bg-[#a9524b] bg-clip-text text-transparent">Starts Here</span>
            </h2>

            <p className="text-lg text-[#2e2a3b] leading-relaxed max-w-2xl mx-auto opacity-70 text-[1.1rem] mb-8">
              We believe in a transparent and collaborative approach. Here's what you can expect after your initial inquiry:
            </p>

            <Steps />

          </div>

          {/* Optimized Services Grid */}
          <div className="grid grid-cols-1 gap-8">
            <div className="group">
              <Card className={`bg-white rounded-[12px] text-left transition-all duration-300 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(46,42,59,0.1)] text-[#2e2a3b] hover:shadow-[0_8px_24px_rgba(46,42,59,0.15)] transition-all duration-300`}>
                
                <CardContent className="pt-0 text-center p-12">

                  <h2 className="text-[2.4rem] font-semibold font-bold mb-6 text-[#2e2a3b]">
                    Ready to Start Your<span className="bg-[#a9524b] bg-clip-text text-transparent"> Project</span>?
                  </h2>

                  <p className="text-lg text-[#2e2a3b] leading-relaxed max-w-2xl mx-auto opacity-70 text-[1.1rem] mb-12">
                    Schedule your free Discovery Call now and take the first step towards bringing your vision to life.
                  </p>


                  <div className="inline-flex flex-col sm:flex-row gap-4">
                    <button className="group relative px-10 py-4 rounded-[6px] font-medium mr-4 mb-4 bg-[#a9524b] text-[#f1f5f9] font-medium rounded-lg hover:bg-[#94453e] hover:-translate-y-0.5 transition duration-300">
                      <span className="flex items-center justify-center gap-2">
                        <a href="mailto:contact@dubliw.com">Schedule Your Free Discovery Call</a>
                      </span>
                    </button>

                    <button className="group px-10 py-4 rounded-[6px] font-medium mr-4 mb-4 text-[#2e2a3b] font-medium rounded-lg border border border-[#2e2a3b] hover:border-[#a9524b] hover:text-[#a9524b] hover:-translate-y-0.5 transition duration-300">
                      Learn More About Our Services
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
