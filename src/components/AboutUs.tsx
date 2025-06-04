
import { Check } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">About Us</h2>
          <div className="bg-gray-50 p-8 rounded-lg">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We are a <span className="text-red-600 font-semibold">young software company</span> based in Sri Lanka, 
              led by engineers with more than a <span className="text-red-600 font-semibold">decade of expertise</span> in <span className="font-semibold">designing 
              and building enterprise-level software solutions</span> that are:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">High performance</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Scalable</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Secure</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-gray-700 font-medium">Cost effective</span>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why should you hire us?</h3>
              <p className="text-lg text-red-600 font-semibold">Our expertise and passion</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
