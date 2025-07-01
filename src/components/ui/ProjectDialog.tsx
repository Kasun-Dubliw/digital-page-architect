
import React from 'react';

const projectData = {
  healthcare: {
    title: "US Healthcare Startup Platform",
    category: "Healthcare MVP • HIPAA Compliant • Series A Success",
    description: `
                        <p>We partnered with a US-based healthcare startup to deliver their MVP in just 8 weeks. The platform includes patient management, appointment scheduling, secure messaging, and real-time analytics.</p>
                        
                        <p>The challenge was building a HIPAA-compliant platform that could handle sensitive patient data while maintaining excellent user experience. Our team implemented end-to-end encryption, secure authentication, and comprehensive audit logging.</p>
                        
                        <p>The platform's success directly contributed to the client securing $2M in Series A funding within 3 months of launch. Today, it serves over 10,000 active users across multiple healthcare providers.</p>
                    `,
    metrics: [
      { value: "8 weeks", label: "MVP Development" },
      { value: "$2M", label: "Series A Funding" },
      { value: "10,000+", label: "Active Users" },
      { value: "99.8%", label: "Uptime" },
      { value: "HIPAA", label: "Compliant" },
      { value: "3 months", label: "To Funding" }
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS", "Redis", "Docker", "HIPAA Compliance", "End-to-end Encryption"]
  },
  education: {
    title: "New Zealand Learning Management System",
    category: "Education Platform • Enterprise Scale • Microservices Architecture",
    description: `
                        <p>We architected and developed a comprehensive learning management system for New Zealand's education sector. The platform handles 50,000+ daily active users with 99.9% uptime.</p>
                        
                        <p>Built using microservices architecture, the system includes real-time collaboration tools, advanced analytics, mobile learning capabilities, and seamless integration with existing educational tools and databases.</p>
                        
                        <p>The platform features automated grading, progress tracking, virtual classrooms, and supports multiple content formats including video, interactive quizzes, and collaborative projects.</p>
                    `,
    metrics: [
      { value: "50,000+", label: "Daily Active Users" },
      { value: "99.9%", label: "System Uptime" },
      { value: "6 months", label: "Development Time" },
      { value: "15+", label: "Integrated Tools" },
      { value: "24/7", label: "Support Coverage" },
      { value: "Multi-tenant", label: "Architecture" }
    ],
    techStack: ["Angular", "Java Spring Boot", "PostgreSQL", "Kubernetes", "Redis", "Elasticsearch", "WebRTC", "Microservices"]
  },
  fintech: {
    title: "Personal Finance Mobile App",
    category: "Fintech Mobile • AI-Powered • Cross-Platform",
    description: `
                        <p>Cross-platform mobile application with AI-powered financial insights, budget tracking, and real-time analytics. The app has achieved over 25,000 downloads with an exceptional 4.8-star rating.</p>
                        
                        <p>Features include intelligent expense categorization, predictive budget alerts, investment tracking, and personalized financial recommendations. The AI engine analyzes spending patterns to provide actionable insights.</p>
                        
                        <p>Users report saving an average of $500 per month through the app's smart insights and automated budget optimization features. The app integrates with major banks and financial institutions.</p>
                    `,
    metrics: [
      { value: "25,000+", label: "App Downloads" },
      { value: "4.8★", label: "App Store Rating" },
      { value: "12 weeks", label: "Development Time" },
      { value: "$500", label: "Avg Monthly Savings" },
      { value: "50+", label: "Bank Integrations" },
      { value: "AI-Powered", label: "Insights Engine" }
    ],
    techStack: ["React Native", "Python", "TensorFlow", "Firebase", "Plaid API", "Node.js", "MongoDB", "Real-time Analytics"]
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

          <div className="dialog-metrics">
            {project.metrics.map((metric, idx) => (
              <div className="dialog-metric" key={idx}>
                <div className="dialog-metric-value">{metric.value}</div>
                <div className="dialog-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>

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

