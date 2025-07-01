
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database, Sparkles, ArrowRight, Rocket, DollarSign, Hammer } from 'lucide-react';
import ProjectDialog from './ui/ProjectDialog';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openDialog = (type) => {
    setSelectedProject(type);
    document.body.style.overflow = 'hidden';
  };

  const closeDialog = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#2e2a3b]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Cleaner Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-[2.4rem] font-semibold font-bold mb-6 text-[#f1f5f9]">
              Featured <span className="bg-[#a9524b] bg-clip-text text-transparent">Projects</span>
            </h2>

            <p className="text-lg text-[#f1f5f9] leading-relaxed max-w-2xl mx-auto opacity-70 text-[1.1rem]">
              AProven results across industries - see our client successes
            </p>

          </div>

          {/* Optimized Projects Grid */}
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
            <div className="projects-compact-logo">
                    <div className="project-compact-card fade-in">
                        <div className="compact-header">
                            <div className="client-logo-compact">
                                <div className="logo-compact-placeholder">CLIENT<br />LOGO</div>
                            </div>
                            <div className="compact-content">
                                <h3 className="project-title-compact">US Healthcare Startup Platform</h3>
                                <div className="project-meta-compact">Healthcare MVP • Series A Success</div>
                                <div className="video-section">
                                    <a href="https://your-app-demo.com" target="_blank" className="video-indicator">📹 Watch Demo</a>
                                    <a onClick={() => openDialog('healthcare')} className="video-indicator">📄 Full Story</a>
                                </div>
                            </div>
                        </div>
                        
                        <div className="project-summary-compact">
                            HIPAA-compliant healthcare platform delivered in 8 weeks, helping client secure $2M Series A funding with 10,000+ active users.
                        </div>
                        
                        <div className="key-metrics-compact">
                            <div className="compact-metric">
                                <div className="compact-value">8 wks</div>
                                <div className="compact-label">Launch</div>
                            </div>
                            <div className="compact-metric">
                                <div className="compact-value">$2M</div>
                                <div className="compact-label">Funding</div>
                            </div>
                            <div className="compact-metric">
                                <div className="compact-value">10K+</div>
                                <div className="compact-label">Users</div>
                            </div>
                        </div>
                        
                        <div className="tech-tags-compact">
                            <span className="tech-tag-compact">React</span>
                            <span className="tech-tag-compact">Node.js</span>
                            <span className="tech-tag-compact">AWS</span>
                            <span className="tech-tag-compact">HIPAA</span>
                        </div>
                    </div>

                    <div className="project-compact-card fade-in">
                        <div className="compact-header">
                            <div className="client-logo-compact">
                                <div className="logo-compact-placeholder">CLIENT<br />LOGO</div>
                            </div>
                            <div className="compact-content">
                                <h3 className="project-title-compact">New Zealand Learning System</h3>
                                <div className="project-meta-compact">Education Platform • Enterprise Scale</div>
                                <div className="video-section">
                                    <a href="https://your-lms-platform.com" target="_blank" className="video-indicator">📹 Platform Tour</a>
                                    <a onClick={() => openDialog('education')} className="video-indicator">📄 Read More</a>

                                </div>
                            </div>
                        </div>
                        
                        <div className="project-summary-compact">
                            Enterprise LMS serving 50,000+ daily users with 99.9% uptime. Built with microservices architecture for scalability.
                        </div>
                        
                        <div className="key-metrics-compact">
                            <div className="compact-metric">
                                <div className="compact-value">50K+</div>
                                <div className="compact-label">Daily Users</div>
                            </div>
                            <div className="compact-metric">
                                <div className="compact-value">99.9%</div>
                                <div className="compact-label">Uptime</div>
                            </div>
                            <div className="compact-metric">
                                <div className="compact-value">6 mos</div>
                                <div className="compact-label">Built</div>
                            </div>
                        </div>
                        
                        <div className="tech-tags-compact">
                            <span className="tech-tag-compact">Angular</span>
                            <span className="tech-tag-compact">Java</span>
                            <span className="tech-tag-compact">PostgreSQL</span>
                            <span className="tech-tag-compact">K8s</span>
                        </div>
                    </div>

                    <div className="project-compact-card fade-in">
                        <div className="compact-header">
                            <div className="client-logo-compact">
                                <div className="logo-compact-placeholder">CLIENT<br />LOGO</div>
                            </div>
                            <div className="compact-content">
                                <h3 className="project-title-compact">Personal Finance Mobile App</h3>
                                <div className="project-meta-compact">Fintech Mobile • AI-Powered</div>
                                <div className="video-section">
                                    <a href="https://your-app-store-link.com" target="_blank" className="video-indicator">📹 App Demo</a>
                                    <a onClick={() => openDialog('fintech')} className="video-indicator">📄 Read More</a>

                                </div>
                            </div>
                        </div>
                        
                        <div className="project-summary-compact">
                            Cross-platform mobile app with AI insights achieving 25K+ downloads and 4.8-star rating on app stores.
                        </div>
                        
                        <div className="key-metrics-compact">
                            <div className="compact-metric">
                                <div className="compact-value">25K+</div>
                                <div className="compact-label">Downloads</div>
                            </div>
                            <div className="compact-metric">
                                <div className="compact-value">4.8★</div>
                                <div className="compact-label">Rating</div>
                            </div>
                            <div className="compact-metric">
                                <div className="compact-value">12 wks</div>
                                <div className="compact-label">Built</div>
                            </div>
                        </div>
                        
                        <div className="tech-tags-compact">
                            <span className="tech-tag-compact">React Native</span>
                            <span className="tech-tag-compact">Python</span>
                            <span className="tech-tag-compact">Firebase</span>
                            <span className="tech-tag-compact">AI/ML</span>
                        </div>
                    </div>
                </div>
          </div>
          <div className="flex justify-center mt-12">
            <button onClick={() => scrollToSection('journeySection')} className="px-10 py-4 rounded-[6px] font-medium bg-[#a9524b] text-[#f1f5f9] hover:bg-[#94453e] hover:-translate-y-0.5 transition duration-300">
              <span className="flex items-center justify-center gap-2">
                View All Projects & Schedule Consultation
              </span>
            </button>
          </div>

        </div>
      </div>
      {selectedProject && <ProjectDialog projectType={selectedProject} onClose={closeDialog} />}
    </section>
  );
};

export default Projects;
