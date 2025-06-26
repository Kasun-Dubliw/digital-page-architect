
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import HeroV1 from '@/components/Hero-v1';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* <Hero /> */}
      <HeroV1 />
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
