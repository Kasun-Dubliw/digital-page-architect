
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Portfolio from '../components/Portfolio';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import HeroV1 from '@/components/Hero-v1';
import TechStack from '@/components/TechStack';
import Services from '@/components/Services';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* <Hero /> */}
      <HeroV1 />
      <AboutUs />
      <TechStack />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
