
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
                            Proven results across industries - see our client successes
                        </p>

                    </div>

                    {/* Optimized Projects Grid */}
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8">
                        <div className="projects-compact-logo">
                            <div className="project-compact-card fade-in">
                                <div className="compact-header">
                                    <div className="client-logo-compact">
                                        <div className="logo-compact-placeholder"><img src="/icons/lighthouse.png" /></div>
                                    </div>
                                    <div className="compact-content">
                                        <h3 className="project-title-compact">New Zealand Mental Health Platform</h3>
                                        {/* <div className="project-meta-compact">Healthcare mobile • MVP</div> */}
                                        <div className="video-section">
                                            <a href="https://lighthousehealth.tech/" target="_blank" className="video-indicator">📹 Watch Demo</a>
                                            <a onClick={() => openDialog('lighthousehealth')} className="video-indicator">📄 Full Story</a>
                                        </div>
                                    </div>
                                </div>

                                <div className="project-summary-compact">
                                    Lighthouse Health Tech is a social-impact startup that develops digital tools to scale mental health services by connecting practitioners and clients beyond therapy sessions while reducing administrative work so practitioners can focus on patient care.
                                </div>

                                <div className="project-summary-compact">
                                    Dubliw develops and maintains Lighthouse Health Tech's complete mental health platform, including patient and clinician applications with backend infrastructure for scheduling, notifications, and account management, hosted securely on AWS.
                                </div>

                                {/* <div className="key-metrics-compact">
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
                        </div> */}

                                <div className="tech-tags-compact">
                                    <span className="tech-tag-compact">Cloud</span>
                                    <span className="tech-tag-compact">Mobile Development</span>
                                    <span className="tech-tag-compact">Software Development</span>
                                </div>
                            </div>
                            <div className="project-compact-card fade-in">
                                <div className="compact-header">
                                    <div className="client-logo-compact">
                                        <div className="logo-compact-placeholder"><img src="/icons/systemate.svg" /></div>
                                    </div>
                                    <div className="compact-content">
                                        <h3 className="project-title-compact">US Lead Generation Platform</h3>
                                        {/* <div className="project-meta-compact">US Lead Generation Platform • Enterprise Scale</div> */}
                                        <div className="video-section">
                                            <a href="https://systemate.com/" target="_blank" className="video-indicator">📹 Platform Tour</a>
                                            <a onClick={() => openDialog('systemate')} className="video-indicator">📄 Read More</a>

                                        </div>
                                    </div>
                                </div>

                                <div className="project-summary-compact">
                                    Systemate is a lead generation platform providing inbound seller leads to real estate investors.
                                    The platform sources motivated sellers from various situations like divorce, foreclosure, and probate,
                                    eliminating traditional outbound marketing needs.
                                </div>
                                <div className="project-summary-compact">
                                    Dubliw designs develops and maintains Systemate's complete software
                                    platform, which includes components for lead generation and management, market comparisons, and scheduling tools, all hosted on AWS.
                                </div>

                                {/* <div className="key-metrics-compact">
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
                        </div> */}

                                <div className="tech-tags-compact">
                                    <span className="tech-tag-compact">Cloud</span>
                                    <span className="tech-tag-compact">System Architecture</span>
                                    <span className="tech-tag-compact">Software Development</span>
                                </div>
                            </div>

                            <div className="project-compact-card fade-in">
                                <div className="compact-header">
                                    <div className="client-logo-compact">
                                        <div className="logo-compact-placeholder"><img src="/icons/teaAI.svg" style={{ height: '50px' }} alt="Tea AI" /></div>
                                    </div>
                                    <div className="compact-content">
                                        <h3 className="project-title-compact">Sri Lankan Tea Grading Platform</h3>
                                        {/* <div className="project-meta-compact">Fintech Mobile • AI-Powered</div> */}
                                        <div className="video-section">
                                            {/* <a href="https://www.teaai.ai/solutions" target="_blank" className="video-indicator">📹 App Demo</a> */}
                                            <a onClick={() => openDialog('teaAI')} className="video-indicator">📄 Read More</a>

                                        </div>
                                    </div>
                                </div>

                                <div className="project-summary-compact">
                                    TeaAI creates AI tools for tea traders to optimize operations through market intelligence, automated grading, price forecasting and quality assessment with zero trust data privacy.
                                </div>
                                <div className="project-summary-compact">
                                    We helped the team to design an improved AWS-based architecture with ETL pipelines for processing large data volumes while maintaining cost-effective security controls. different architectureal patterns were explored to create a data lake and near-realtime data processing

                                </div>

                                {/* <div className="key-metrics-compact">
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
                        </div> */}

                                <div className="tech-tags-compact">
                                    <span className="tech-tag-compact">Data Engineering</span>
                                    <span className="tech-tag-compact">Cloud</span>
                                    <span className="tech-tag-compact">ETL/ELT Tools</span>
                                    <span className="tech-tag-compact">Strategic Consultation</span>
                                    <span className="tech-tag-compact">Security</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mt-12">
                        <button onClick={() => scrollToSection('journeySection')} className="px-10 py-4 rounded-[6px] font-medium bg-[#a9524b] text-[#f1f5f9] hover:bg-[#94453e] hover:-translate-y-0.5 transition duration-300">
                            <span className="flex items-center justify-center gap-2">
                                Schedule Free Consultation
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
