
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Dubli<span className="text-red-600">W</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for innovative IT solutions. 
              We help businesses thrive in the digital age.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: hello@dubliw.com</p>
              <p>Phone: +94 77 9821079</p>
              <p>Address: 68/3, Sandun Uyana<br />Hedigama, Piliyandala<br />Sri Lanka</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 DubliW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
