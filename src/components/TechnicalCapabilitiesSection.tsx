import { Check, Code, Cloud, Smartphone, Database, Monitor, Server, Globe, Shield, Zap, Sparkles, Star, SquareCheck } from 'lucide-react';
import TechStackCarousel from './TechStackCarousel';
import TechStack from './TechStack';

const TechnicalCapabilitiesSection = () => {
  const expertise = [
    "Cloud-based applications with cost-effectiveness in mind",
    "Scalable software platforms utilizing microservices architecture",
    "Data pipelines to handle massive ammounts of data",
    "Data security and platform security with zero-trust architecture"
  ];

  const stats = [
    {
      title: "Missing Your Launch Window",
      problemValue: "6+",
      problemLabel: "Months Delayed",
      solutionValue: "8",
      solutionLabel: "Weeks to Launch",
      description:
        "Stop watching competitors beat you to market. Get your MVP launched while the opportunity is still hot.",
    },
    {
      title: "Burning Through Your Runway",
      problemValue: "3x",
      problemLabel: "Over Budget",
      solutionValue: "100%",
      solutionLabel: "Fixed Scope",
      description:
        "No more scope creep eating your cash. Know exactly what you'll pay before we start building.",
    },
    {
      title: "Building Something That Won't Scale",
      problemValue: "💸",
      problemLabel: "Costly Rebuilds",
      solutionValue: <SquareCheck fill="green" size={48} />,
      solutionLabel: "Built to Scale",
      description:
        "Don't waste months rebuilding when you grow. Our architects design for your future, not just today.",
    },
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
          </div>
          <div className="relative mb-16 text-center mt-16">

            <div className="relative bg-[#3e3f56] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilitiesSection;
