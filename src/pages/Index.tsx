
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Portfolio />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Index;
