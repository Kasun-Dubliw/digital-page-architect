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
      solutionValue: "✅",
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
            {/* <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#F2F5FB] backdrop-blur-sm border border-[#515167] text-[#515167] text-sm font-medium mb-6">
              <Zap className="w-4 h-4 mr-2 text-[#515167]" />
             Innovation at Scale
            </div> */}

            <h2 className="text-[2.4rem] font-semibold font-bold mb-6 text-[#f1f5f9]">
              We Solve Real Development <span className="bg-[#a9524b] bg-clip-text text-transparent">Challenges</span>
            </h2>

            <p className="text-lg text-[#f1f5f9] leading-relaxed max-w-2xl mx-auto opacity-70 text-[1.1rem]">
              Build smart, scale fast — without breaking the bank. We specialize in helping startups and SMEs bring their product ideas to life with senior-level expertise, startup-friendly pricing, and flexible team scaling.
            </p>
          </div>


          <div className="grid grid-cols-3 gap-6 mb-12">
            {stats.map((item, index) => (
              <div
                key={index}
                className="bg-[#3e3f56] rounded-[12px] text-center border border-[rgba(79,80,103,0.3)] transition-all duration-300 overflow-hidden gradient-border"
              >
                <h3 className="text-[1.1rem] font-semibold text-[#a9524b] mb-6 uppercase tracking-[0.5px] border-b-2 border-b-[rgba(169,82,75,0.3)] pb-2 w-full">
                  {item.title}
                </h3>

                <div className="flex flex-col items-center text-center">
                  <span className="text-[2.5rem] font-bold mb-2 block text-[#dc2626]">
                    {item.problemValue}
                  </span>
                  <div className="text-base font-semibold mb-3 text-[#f1f5f9]">{item.problemLabel}</div>
                </div>

                <div className="my-[0.8rem] text-[1.2rem] text-[#a9524b] font-bold">→</div>

                <div className="flex flex-col items-center text-center">
                  <span className="text-[2.5rem] font-bold mb-2 block text-[#22c55e]">
                    {item.solutionValue}
                  </span>
                  <div className="text-base font-semibold mb-3 text-[#f1f5f9]">{item.solutionLabel}</div>
                </div>

                <p className="mt-4 text-[0.85rem] opacity-90 leading-[1.4] text-center text-[#f1f5f9]">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="relative mb-16 text-center mt-16">

            <div className="relative bg-[#3e3f56] backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl">
              <h2 className="text-[2rem] font-semibold font-bold mb-4 text-[#f1f5f9]">
                Stop Struggling. Start Scaling.
              </h2>

              <p className="text-lg text-[#f1f5f9] leading-relaxed max-w-xl mx-auto opacity-80 text-[1.1rem] mb-8">
                These problems are killing startups every day. Don't let yours be next.
              </p>


              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button className="group relative px-10 py-4 rounded-[6px] font-medium mr-4 mb-4 bg-[#a9524b] text-[#f1f5f9] font-medium rounded-lg hover:bg-[#94453e] hover:-translate-y-0.5 transition duration-300">
                  <span className="flex items-center justify-center gap-2">
                    Fix My Development Problems
                  </span>
                </button>

                <button className="group px-10 py-4 rounded-[6px] font-medium mr-4 mb-4 text-[#f1f5f9] font-medium rounded-lg border border border-[#f1f5f9]/10 hover:border-[#a9524b] hover:text-[#a9524b] hover:-translate-y-0.5 transition duration-300">
                  See How We Do It
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
