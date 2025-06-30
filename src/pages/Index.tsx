
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Portfolio from '../components/Portfolio';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import HeroV1 from '@/components/Hero-v1';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';
import WhyChooseSection from '@/components/WhyChooseSection';
import TechnicalCapabilitiesSection from '@/components/TechnicalCapabilitiesSection';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import Projects from '@/components/Projects';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroV1 />
      <AboutUs />
      <WhyChooseSection />
      <TechnicalCapabilitiesSection />
      <HowWeWorkSection />
      <Projects />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
