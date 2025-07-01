
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles, ArrowRight, Rocket, DollarSign, Hammer } from 'lucide-react';

const HowWeWorkSection = () => {
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
      description: "Based on your requirements, we build your software according to the designed architecture, providing end-to-end delivery. Our developers assess design documents and carry out development with precision and quality."
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
              How We <span className="bg-[#a9524b] bg-clip-text text-transparent">Work</span>
            </h2>

            <p className="text-lg text-[#2e2a3b] leading-relaxed max-w-2xl mx-auto opacity-70 text-[1.1rem]">
              We offer flexible engagement models tailored to your project's needs, from strategic consultation to end-to-end software delivery.
            </p>

          </div>

          {/* Optimized Services Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className={`bg-white h-full pb-20 pl-10 pt-8 pr-10 rounded-[12px] text-left transition-all duration-300 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(46,42,59,0.1)] text-[#2e2a3b] hover:shadow-[0_8px_24px_rgba(46,42,59,0.15)] transition-all duration-300`}>
                  <div className="text-left mb-4 text-[1.4rem] font-semibold text-[#a9524b]">
                    {service.title}
                  </div>
                  <div>
                    <p className="text-[#2e2a3b] opacity-80 mb-6 leading-[1.6]">{service.description}</p>
                    <ul className="list-disc marker:text-[#a9524b] opacity-90 text-[0.95rem] pl-4">
                      {service.listItems.map((item, i) => (
                        <li key={i} className="mb-2">{item}</li>
                      ))}
                    </ul>
                  </div>

                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
