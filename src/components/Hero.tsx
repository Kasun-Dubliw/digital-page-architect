
const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <p className="text-gray-600 text-lg font-medium tracking-wider uppercase mb-4">
                WE ARE DUBLIW
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Innovative IT Solutions
                <br />
                <span className="text-gray-700">for Your Business</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                We deliver cutting-edge technology solutions that drive growth, 
                enhance efficiency, and transform your business for the digital future. 
                Our expertise spans across multiple domains with a focus on scalable, 
                secure, and cost-effective solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg">
                Get Started
              </button>
              <button className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Side - Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Isometric Illustration Placeholder */}
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 shadow-lg">
                <div className="aspect-square w-full flex items-center justify-center">
                  {/* Developer Working Illustration */}
                  <div className="relative w-80 h-80">
                    {/* Desk */}
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-60 h-32 bg-gradient-to-r from-orange-200 to-orange-300 rounded-lg shadow-lg" 
                         style={{ transform: 'translateX(-50%) perspective(400px) rotateX(45deg)' }}>
                    </div>
                    
                    {/* Computer Monitor */}
                    <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 translate-x-4">
                      <div className="w-32 h-20 bg-gray-800 rounded-lg shadow-lg">
                        <div className="w-full h-full bg-blue-400 rounded-lg p-2">
                          <div className="grid grid-cols-3 gap-1 h-full">
                            <div className="bg-white/30 rounded"></div>
                            <div className="bg-white/30 rounded"></div>
                            <div className="bg-white/30 rounded"></div>
                            <div className="bg-white/50 rounded col-span-2"></div>
                            <div className="bg-white/30 rounded"></div>
                          </div>
                        </div>
                      </div>
                      {/* Monitor Stand */}
                      <div className="w-8 h-6 bg-gray-600 mx-auto rounded-b-lg"></div>
                      <div className="w-16 h-2 bg-gray-700 mx-auto rounded-lg"></div>
                    </div>
                    
                    {/* Person */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 -translate-x-8">
                      {/* Head */}
                      <div className="w-8 h-8 bg-orange-200 rounded-full mx-auto mb-1"></div>
                      {/* Body */}
                      <div className="w-12 h-16 bg-blue-500 rounded-lg mx-auto"></div>
                      {/* Arms */}
                      <div className="absolute top-8 -left-2 w-6 h-2 bg-orange-200 rounded-full transform rotate-12"></div>
                      <div className="absolute top-8 -right-2 w-6 h-2 bg-orange-200 rounded-full transform -rotate-12"></div>
                    </div>
                    
                    {/* Decorative Elements */}
                    <div className="absolute top-8 right-8 w-12 h-12 bg-green-400 rounded-lg opacity-80"></div>
                    <div className="absolute top-16 left-8 w-8 h-8 bg-yellow-400 rounded-full opacity-60"></div>
                    <div className="absolute bottom-8 right-12 w-6 h-6 bg-purple-400 rounded-lg opacity-70"></div>
                    
                    {/* Plant */}
                    <div className="absolute bottom-24 right-16">
                      <div className="w-3 h-8 bg-green-500 rounded-full"></div>
                      <div className="absolute -top-1 -left-1 w-2 h-4 bg-green-400 rounded-full transform rotate-45"></div>
                      <div className="absolute -top-1 -right-1 w-2 h-4 bg-green-400 rounded-full transform -rotate-45"></div>
                      <div className="w-6 h-3 bg-orange-400 rounded-lg mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-200 rounded-lg animate-float opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-200 rounded-full animate-float-delayed opacity-60"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-yellow-200 rounded-lg animate-pulse opacity-40"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
