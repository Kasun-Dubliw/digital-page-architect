import React from 'react';

const projectData = {
  lighthousehealth: {
    title: "Digital Mental Health Solutions for Enhanced Care Delivery - New Zealand",
    category: "Healthcare mobile MVP",
    description: `
                        <p>Lighthouse Health Tech is a research-focused social-impact startup that develops innovative digital tools to improve mental health service scalability and accessibility. The company creates solutions that connect practitioners and clients outside the therapy room while enabling clients to take greater control of their mental health journey. Their platform is designed to reduce administrative burden for mental health practitioners, allowing them to focus more time on providing quality patient care. Lighthouse Health Tech takes an ecosystem-focused approach, addressing service delivery challenges at all levels of the practitioner workflow to benefit everyone involved in mental health care delivery.</p>
                        <br />
                        <p>Dubliw is currently helping the team with software architecture design, implementation, deployment, and maintenance of the whole software stack. Currently, we've created a patient-facing mobile app, a clinician-facing tablet-based application, and a backend to gather, process, and store the data while adhering to best practices in cybersecurity. The system includes different scheduling mechanisms, notification systems, content management capabilities, and account management including linking between clinicians and patients. The system is currently hosted on the AWS cloud.</p>
                    `,
    metrics: [],
    website: 'https://lighthousehealth.tech/',
    techStack: ["AWS", ".NET", "Flutter", "PostgreSQL", "Docker", "GitHub"]
  },
  'lighthousehealth-video': {
    title: "Demo Video for Lighthouse Health Tech",
    category: "",
    description: `<video
            src="https://static-website-gnome.s3.ap-south-1.amazonaws.com/videos/vecteezy_username-and-password-for-login-information-on-smartphone_25322750.mov"
            controls
            autoPlay
            muted
            className="w-full h-auto rounded-lg"
          />`,
    metrics: [],
    website: '',
    techStack: []
  },
  teaAI: {
    title: "Revolutionizing Tea Visual Grading with Artificial Intelligence: Sri Lanka",
    category: "Sri Lankan Tea Grading Platform • AI Powered",
    description: `
                        <p>TeaAI creates AI tools for tea traders to optimize operations through market intelligence, automated grading, price forecasting and quality assessment. Their platform helps with trading decisions and market analysis while ensuring complete zero trust data privacy.  TeaAI features enterprise-grade security with zero trust data privacy and specialized voice-to-text recognition for tea industry terminology, delivering enhanced consistency, efficiency, and cost savings for traders from sample analysis to auction participation.</p>
                        <br />
                        <p>We helped the team by analyzing their business requirements, reviewing the software architecture they designed, and proposing an improved architecture that includes ETL pipelines capable of handling large amounts of structured and unstructured data while incorporating necessary security controls in a cost-effective manner. The system was designed using AWS-managed components.</p>
                    `,
    website: 'https://www.teaai.ai/solutions',
    techStack: ["AWS", "Data Engineering", "ETL/ELT Tools", "Strategic Consultation", "Cyber Security"]
  },
  systemate: {
    title: "All-in-One Real Estate Investment Automation Platform - USA",
    category: "US Lead Generation Platform • Enterprise scale",
    description: `
                        <p>Systemate is a comprehensive real estate investment software platform designed by real estate investors to systematize and automate entire investing businesses. Key features include Sweet Spot Locator Technology for market analysis, Instant Offer Technology that can make thousands of automated offers, and a complete marketing automation suite with handwritten direct mail, SMS, ringless voicemails, and email campaigns. The software includes a full CRM system for deal management, nationwide property comparison tools that exceed MLS capabilities, and intelligent long-term follow-up automation. Systemate positions itself as a true all-in-one solution that replaces multiple standalone real estate tools.</p>
                        <br />
                        <p>Dubliw's role in this ongoing project is managing all the software suites of Systemate.com from solution design, implementation, and maintenance. We are helping Systemate revamp their existing platform to handle hundreds of gigabytes of data in a more scalable yet cost-effective manner. We designed the new system based on microservices concepts, which was initially hosted in the Azure cloud. Systemate includes .NET and Python backends, an Angular frontend, and Android/iOS mobile applications. Currently, we are redesigning and implementing legacy components while migrating the entire platform to AWS.</p>
                    `,
    metrics: [],
    website: 'https://systemate.com/',
    techStack: ["AWS", "Azure", ".NET", "Python", "Kotlin", "Swift", "Angular", "PostgreSQL", "DevSecOps", "Data Engineering"]
  }
};

const ProjectDialog = ({ projectType, onClose }) => {
  const project = projectData[projectType];
  if (!project) return null;

  // Special handling for video-only display
  if (projectType === 'lighthousehealth-video') {
    return (
      <div
        id="project-dialog"
        className="project-dialog show"
        onClick={(e) => {
          if ((e.target as HTMLElement).id === 'project-dialog') onClose();
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        <div 
          className="dialog-content"
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            width: 'auto',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: 'rgba(0, 0, 0, 0.95)',
            borderRadius: '12px',
            padding: '20px',
            position: 'relative'
          }}
        >
          <div 
            className="dialog-close" 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '15px',
              right: '20px',
              fontSize: '28px',
              color: 'white',
              cursor: 'pointer',
              zIndex: 10,
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.3s ease'
            }}
            onMouseEnter={(e) => (e.target as HTMLVideoElement).style.background = 'rgba(255, 255, 255, 0.2)'}
            onMouseLeave={(e) => (e.target as HTMLVideoElement).style.background = 'rgba(255, 255, 255, 0.1)'}
          >
            ×
          </div>
          
          <div style={{ 
            width: '100%', 
            maxWidth: '800px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '20px'
          }}>
            <video
              src="https://static-website-gnome.s3.ap-south-1.amazonaws.com/videos/BigBuckBunny.mp4"
              controls
              autoPlay
              muted
              style={{
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
              onError={(e) => {
                console.error('Video failed to load:', e);
                (e.target as HTMLVideoElement).style.display = 'none';
                const errorMsg = document.createElement('div');
                errorMsg.innerHTML = `
                  <div style="
                    color: white;
                    text-align: center;
                    padding: 40px;
                    font-size: 16px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 8px;
                    border: 2px dashed rgba(255, 255, 255, 0.3);
                  ">
                    <div style="font-size: 48px; margin-bottom: 16px;">📹</div>
                    <div>Video temporarily unavailable</div>
                    <div style="font-size: 14px; opacity: 0.7; margin-top: 8px;">Please try again later</div>
                  </div>
                `;
                (e.target as HTMLVideoElement).parentNode?.appendChild(errorMsg);
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  // Regular project display
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
          {/* <div className="dialog-category">{project.category}</div> */}

          {/* Safely inject description HTML */}
          <div
            className="dialog-description"
            dangerouslySetInnerHTML={{ __html: project.description }}
          ></div>

          <div className="video-section mb-5">
            {project.website && (
              <a href={project.website} target="_blank" rel="noopener noreferrer" className="video-indicator">
                Visit Website
              </a>
            )}
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