
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles, ArrowRight, Rocket, DollarSign, Hammer } from 'lucide-react';

const HowWeWorkSection = () => {
  const services = [
    {
      listItems: [
        "We offer flexible engagement models tailored to your project's needs, from strategic consultation to end-to-end software delivery.",
      ],
      title: "Rapid MVP Delivery",
      description: "Get your product to market fast with our streamlined development process and proven methodologies."
    },
    {
      listItems: [
        "We offer flexible engagement models tailored to your project's needs, from strategic consultation to end-to-end software delivery.",
      ],
      title: "Budget-Friendly Pricing",
      description: "Competitive rate based on your budget without compromising on quality or expertise."
    },
    {
      listItems: [
        "We offer flexible engagement models tailored to your project's needs, from strategic consultation to end-to-end software delivery.",
      ],
      title: "Senior Architecture Guidance",
      description: "15+ years of experience ensuring your systems are built for scale and performance."
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
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className={`bg-white p-8 rounded-[12px] text-left transition-all duration-300 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(46,42,59,0.1)] text-[#2e2a3b] hover:shadow-[0_8px_24px_rgba(46,42,59,0.15)] transition-all duration-300`}>
                  <CardHeader className="pb-4">
                    <div className="text-left mb-4">
                      {/* Title below icon */}
                      <CardTitle className="text-[1.4rem] font-semibold mb-4 text-[#a9524b]">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className='text-[#2e2a3b] opacity-80 mb-6 leading-[1.6]'>We help you review your architecture and design to provide critical inputs, considering all functional and non-functional requirements. From technology stack decisions to implementation tools, we guide you through every technical decision.</p>
                        <ul className="list-disc pl-6 marker:text-[#a9524b]  opacity-90 text-[0.95rem]">
                            <li className='mb-2'>Optimize existing systems</li>
                            <li className='mb-2'>Validate technical ideas</li>
                            <li className='mb-2'>Choose the right technology stack</li>
                            <li className='mb-2'>Prevent costly architectural mistakes</li>
                        </ul>
                  </CardContent>
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
