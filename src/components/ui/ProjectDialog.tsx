
import React from 'react';

const projectData = {
  lighthousehealth: {
    title: "New Zealand Mental Health Platform",
    category: "Healthcare mobile MVP",
    description: `
                        <p>We partnered with a US-based healthcare startup to deliver their MVP in just 8 weeks. The platform includes patient management, appointment scheduling, secure messaging, and real-time analytics.</p>
                        <br />
                        <p>The challenge was building a HIPAA-compliant platform that could handle sensitive patient data while maintaining excellent user experience. Our team implemented end-to-end encryption, secure authentication, and comprehensive audit logging.</p>
                        <br />
                        <p>The platform's success directly contributed to the client securing $2M in Series A funding within 3 months of launch. Today, it serves over 10,000 active users across multiple healthcare providers.</p>
                    `,
    metrics: [],
    techStack: ["AWS", ".NET", "Flutter", "PostgreSQL", "Docker", "GitHub"]
  },
  teaAI: {
    title: "TeaAI",
    category: "Sri Lankan Tea Grading Platform • AI Powered",
    description: `
                        <p>Revolutionizing Tea Visual Grading with Artificial Intelligence: Sri Lanka.</p>
                        <br />
                        <p>TeaAI creates AI tools for tea traders to optimize operations through market intelligence, automated grading, price forecasting and quality assessment. Their platform helps with trading decisions and market analysis while ensuring complete zero trust data privacy.  TeaAI features enterprise-grade security with zero trust data privacy and specialized voice-to-text recognition for tea industry terminology, delivering enhanced consistency, efficiency, and cost savings for traders from sample analysis to auction participation.</p>
                        <br />
                        <p>We helped the team by analyzing their business requirements, reviewing the software architecture they designed, and proposing an improved architecture that includes ETL pipelines capable of handling large amounts of structured and unstructured data while incorporating necessary security controls in a cost-effective manner. The system was designed using AWS-managed components.</p>
                    `,
    // metrics: [
    //   { value: "50,000+", label: "Daily Active Users" },
    //   { value: "99.9%", label: "System Uptime" },
    //   { value: "6 months", label: "Development Time" },
    //   { value: "15+", label: "Integrated Tools" },
    //   { value: "24/7", label: "Support Coverage" },
    //   { value: "Multi-tenant", label: "Architecture" }
    // ],
    techStack: ["AWS", "Data Engineering", "ETL/ELT Tools", "Strategic Consultation", "Cyber Security"]
  },
  systemate: {
    title: "Systemate",
    category: "US Lead Generation Platform • Enterprise scale",
    description: `
                        <p>All-in-One Real Estate Investment Automation Platform - USA</p>
                        <br />
                        <p>Systemate is a comprehensive real estate investment software platform designed by real estate investors to systematize and automate entire investing businesses. Key features include Sweet Spot Locator Technology for market analysis, Instant Offer Technology that can make thousands of automated offers, and a complete marketing automation suite with handwritten direct mail, SMS, ringless voicemails, and email campaigns. The software includes a full CRM system for deal management, nationwide property comparison tools that exceed MLS capabilities, and intelligent long-term follow-up automation. Systemate positions itself as a true all-in-one solution that replaces multiple standalone real estate tools.</p>
                        <br />
                        <p>Dubliw's role in this ongoing project is managing all the software suites of Systemate.com from solution design, implementation, and maintenance. We are helping Systemate revamp their existing platform to handle hundreds of gigabytes of data in a more scalable yet cost-effective manner. We designed the new system based on microservices concepts, which was initially hosted in the Azure cloud. Systemate includes .NET and Python backends, an Angular frontend, and Android/iOS mobile applications. Currently, we are redesigning and implementing legacy components while migrating the entire platform to AWS.</p>
                    `,
    metrics: [],
    techStack: ["AWS", "Azure", ".NET", "Python", "Kotlin", "Swift", "Angular", "PostgreSQL", "DevSecOps", "Data Engineering"]
  }
};

const ProjectDialog = ({ projectType, onClose }) => {
  const project = projectData[projectType];
  if (!project) return null;

  return (
    <div
      id="project-dialog"
      className="project-dialog show"
      onClick={(e) => {
        if ((e.target as HTMLElement).id === 'project-dialog') onClose();
      }}
    >
      <div className="dialog-content">
        <div className="dialog-close" onClick={onClose}>×</div>
        <div id="dialog-body">
          <h2 className="dialog-title">{project.title}</h2>
          <div className="dialog-category">{project.category}</div>

          {/* Safely inject description HTML */}
          <div
            className="dialog-description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></div>

          {/* <div className="dialog-metrics">
            {project.metrics.map((metric, idx) => (
              <div className="dialog-metric" key={idx}>
                <div className="dialog-metric-value">{metric.value}</div>
                <div className="dialog-metric-label">{metric.label}</div>
              </div>
            ))}
          </div> */}

          <div className="dialog-tech-stack">
            <h3 className="dialog-tech-title">Technology Stack</h3>
            <div className="dialog-tech-tags">
              {project.techStack.map((tech, idx) => (
                <span className="dialog-tech-tag" key={idx}>{tech}</span>
              ))}
            </div>
          </div>

          <div className="dialog-cta">
            <a href="#journeySection" className="dialog-cta-button" onClick={onClose}>
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDialog;

