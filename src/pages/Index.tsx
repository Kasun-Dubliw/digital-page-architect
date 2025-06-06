
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import AnimatedBackground from '../components/AnimatedBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
