
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles, ArrowRight, Rocket, DollarSign, Hammer, CircleDollarSign, Landmark } from 'lucide-react';

const WhyChooseSection = () => {
  const services = [
    {
      icon: <Rocket size={48} strokeWidth={1.5} className='text-white'/>,
      title: "Rapid MVP Delivery",
      description: "Get your product to market fast with our streamlined development process and proven methodologies."
    },
    {
      icon: <Landmark  size={48} strokeWidth={1.5}  className='text-white'/>,
      title: "Budget-Friendly Pricing",
      description: "Competitive rate based on your budget without compromising on quality or expertise."
    },
    {
      icon: <Hammer  size={48} strokeWidth={1.5} className='text-white' />,
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
              Why Choose <span className="bg-[#a9524b] bg-clip-text text-transparent">DubliW</span>
            </h2>

            <p className="text-lg text-[#2e2a3b] leading-relaxed max-w-2xl mx-auto opacity-70 text-[1.1rem]">
              At DubliW, you work directly with senior architects from day one — not sales reps or project coordinators. That means faster decisions, deeper technical insight, and a real partner who understands your business goals as well as the codebase.
            </p>

          </div>

          {/* Optimized Services Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            {services.map((service, index) => (
              <div key={index} className="group">
                <Card className={`bg-white p-8 rounded-[12px] text-center transition-all duration-300 border border-[#e2e8f0] shadow-[0_2px_8px_rgba(46,42,59,0.1)] text-[#2e2a3b] hover:-translate-y-2 hover:border-[#a9524b] hover:shadow-[0_8px_24px_rgba(46,42,59,0.15)] transition-all duration-300`}>
                  <CardHeader className="pb-4">
                    <div className="text-center">
                      {/* Icon on top with exact styling */}
                      <div className="w-[60px] h-[60px] bg-[#a9524b] rounded-[12px] flex items-center justify-center mx-auto mb-6 text-[1.5rem]">
                        {service.icon}
                      </div>

                      {/* Title below icon */}
                      <CardTitle className="text-lg font-semibold text-[#30303E] group-hover:text-[#515167] transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>

                  </CardHeader>

                  <CardContent className="pt-0">
                    <CardDescription className="text-[#515167] leading-relaxed transition-colors mb-4">
                      {service.description}
                    </CardDescription>
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

export default WhyChooseSection;
