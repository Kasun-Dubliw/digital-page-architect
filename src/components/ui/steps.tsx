import React, { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Initial Discovery Call",
    highlight: "(You Are Here!)",
    icon: <img src="/icons/clear_vision_alignment.svg" alt="Step 1 Icon" className="w-8 h-8" />,
    outcomeTitle: "Clear Vision Alignment",
    timeframe: "FREE 30-60 min session",
    description:
      "This is a complimentary conversation where we listen to your vision, understand your business challenges, and discuss your high-level requirements. We'll identify if there's a good fit for us to collaborate.",
    features: ["Free consultation", "30-60 minutes", "No commitment"],
  },
  {
    id: 2,
    title: "Detailed Requirements & Solution Brainstorm",
    icon: <img src="/icons/custom_solution_blueprint_v2.svg" alt="Step 1 Icon" className="w-8 h-8" />,
    outcomeTitle: "Custom Solution Blueprint",
    timeframe: "Architect-designed roadmap",
    description:
      "Following the discovery call, we'll dive deeper into your project details. Our architects and senior developers will brainstorm potential solutions tailored to your specific needs and goals.",
    features: ["Deep dive analysis", "Architect involvement", "Tailored solutions"],
  },
  {
    id: 3,
    title: "Proposal & Technical Roadmap",
    icon: <img src="/icons/detailed_project_plan.svg" alt="Step 1 Icon" className="w-8 h-8" />,
    outcomeTitle: "Detailed Project Plan",
    timeframe: "Fixed scope & transparent pricing",
    description:
      "Based on our understanding, we'll prepare a comprehensive proposal outlining the scope of work, recommended technology stack, estimated timelines, and pricing (fixed-scope, hourly, or retainer options).",
    features: ["Comprehensive proposal", "Tech stack recommendations", "Flexible pricing options"],
  },
  {
    id: 4,
    title: "Project Kick-off & Agile Development",
    icon: <img src="/icons/working_mvp.svg" alt="Step 1 Icon" className="w-8 h-8" />,
    outcomeTitle: "Working MVP",
    timeframe: "Launch-ready in 8-12 weeks",
    description:
      "Once the proposal is approved, we'll formalize the agreement. Our team will conduct a project kick-off, establish communication channels, and commence development following agile methodologies.",
    features: ["Formal kick-off", "Agile methodology", "Regular updates"],
  },
  {
    id: 5,
    title: "Handover or Maintenance",
    icon: <img src="/icons/full_ownership.svg" alt="Step 1 Icon" className="w-8 h-8" />,
    outcomeTitle: "Full Ownership",
    timeframe: "Complete codebase & docs",
    description:
      "Once development is complete, we support a seamless handover to your internal team or continue with ongoing maintenance. We ensure complete documentation, knowledge transfer, and optional SLA-based support plans.",
    features: [
      "Clean documentation",
      "Knowledge transfer",
      "Optional long-term support",
      "Flexible handoff model",
    ],
  },
];

function Step({ step, isExpanded, toggle }) {
  return (
    <div
      className="flex-shrink-0 max-w-[220px] text-center relative z-20 cursor-pointer transition-transform duration-300 ease-in-out hover:-translate-y-[5px] p-4"
      onClick={toggle}
    >
      <div className="text-[0.9rem] font-semibold text-[#2e2a3b] mb-4 leading-[1.3] min-h-[2.5rem] flex flex-col justify-end">
        {step.title}{" "}
        {step.highlight && (
          <span className="text-[#a9524b] text-[0.8rem] font-medium block mt-1">
            {step.highlight}
          </span>
        )}
      </div>
      <div
        className="w-[70px] h-[70px] bg-[#a9524b] rounded-full flex items-center justify-center 
          text-[#f1f5f9] font-semibold text-[1.4rem] mx-auto 
          border-[4px] border-[#f1f5f9] shadow-[0_6px_20px_rgba(169,82,75,0.3)] 
          transition-all duration-300 ease-in-out"
      >
        {step.id}
      </div>
      <div className="text-[1.5rem] my-[0.8rem] mb-[0.5rem] block flex items-center justify-center">{step.icon}</div>
      <div className="text-[1rem] font-semibold text-[#2e2a3b] mb-[0.3rem] leading-[1.2]">
        {step.outcomeTitle}
      </div>
      <div className="text-[0.8rem] text-[#a9524b] font-medium mb-4">{step.timeframe}</div>
      <div
        className="text-[0.75rem] text-[#a9524b] underline cursor-pointer font-medium transition-colors duration-300 ease-in-out"
      >
        Learn more {isExpanded ? "↑" : "↓"}
      </div>

      {/* Expandable content with smooth animation */}
      <div
        className={`p-[1.2rem] text-[0.85rem] leading-[1.6] text-[#2e2a3b] border border-[#e2e8f0] overflow-auto shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-500 ease-in-out
          ${isExpanded ? "max-h-[250px] opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}`}
      >
        <div className="mb-4 opacity-80">{step.description}</div>
        <div className="flex flex-wrap gap-[0.3rem] justify-center">
          {step.features.map((feature, idx) => (
            <span
              key={idx}
              className="bg-[rgba(169,82,75,0.1)] text-[#a9524b] px-2 py-[0.2rem] rounded-sm text-[0.7rem] font-medium border border-[rgba(169,82,75,0.3)]"
            >
              ✓ {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HybridTimeline() {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleDetails = (id) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  return (
    <div className="hybrid-timeline" role="list">
      {steps.map((step) => (
        <Step
          key={step.id}
          step={step}
          isExpanded={expandedStep === step.id}
          toggle={() => toggleDetails(step.id)}
        />
      ))}
    </div>
  );
}
