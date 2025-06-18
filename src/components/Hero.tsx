
const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-white min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <p className="text-blue-600 text-sm font-semibold tracking-wider uppercase mb-3 bg-blue-50 px-4 py-2 rounded-full">
                  WE ARE DUBLIW
                </p>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Innovative
                <br />
                <span className="text-blue-600">IT Solutions</span>
                <br />
                <span className="text-gray-700 text-4xl md:text-5xl lg:text-6xl">for Your Business</span>
              </h1>
              <p className="text-gray-600 text-xl leading-relaxed max-w-2xl">
                We deliver cutting-edge technology solutions that drive growth, 
                enhance efficiency, and transform your business for the digital future. 
                Our expertise spans across multiple domains with a focus on scalable, 
                secure, and cost-effective solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Get Started
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 font-semibold text-lg">
                Learn More
              </button>
            </div>

            {/* Stats or Features */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600 text-sm font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-gray-600 text-sm font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-gray-600 text-sm font-medium">Client Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Right Side - Enhanced Illustration */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl">
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-3xl p-12 shadow-2xl">
                <div className="aspect-square w-full flex items-center justify-center">
                  {/* Enhanced Developer Working Illustration */}
                  <div className="relative w-96 h-96">
                    {/* Desk - More realistic perspective */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-72 h-40 bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 rounded-2xl shadow-2xl" 
                         style={{ 
                           transform: 'translateX(-50%) perspective(600px) rotateX(35deg) rotateY(-5deg)',
                           boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                         }}>
                      {/* Desk legs */}
                      <div className="absolute -bottom-6 left-8 w-3 h-12 bg-amber-600 rounded-lg"></div>
                      <div className="absolute -bottom-6 right-8 w-3 h-12 bg-amber-600 rounded-lg"></div>
                    </div>
                    
                    {/* Multiple Monitors Setup */}
                    <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2">
                      {/* Main Monitor */}
                      <div className="relative transform translate-x-4">
                        <div className="w-40 h-28 bg-gray-900 rounded-xl shadow-2xl border-4 border-gray-800">
                          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-lg p-3">
                            <div className="grid grid-cols-4 gap-1 h-full">
                              <div className="bg-white/40 rounded-md"></div>
                              <div className="bg-white/30 rounded-md"></div>
                              <div className="bg-white/40 rounded-md"></div>
                              <div className="bg-white/20 rounded-md"></div>
                              <div className="bg-white/60 rounded-md col-span-3"></div>
                              <div className="bg-white/30 rounded-md"></div>
                              <div className="bg-white/40 rounded-md col-span-2"></div>
                              <div className="bg-white/50 rounded-md col-span-2"></div>
                            </div>
                          </div>
                        </div>
                        {/* Monitor Stand */}
                        <div className="w-12 h-8 bg-gray-700 mx-auto rounded-b-xl"></div>
                        <div className="w-20 h-3 bg-gray-800 mx-auto rounded-lg"></div>
                      </div>
                      
                      {/* Secondary Monitor */}
                      <div className="absolute -left-16 top-2 transform -rotate-12">
                        <div className="w-24 h-16 bg-gray-900 rounded-lg shadow-xl border-2 border-gray-800">
                          <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-500 rounded-md p-2">
                            <div className="grid grid-cols-2 gap-1 h-full">
                              <div className="bg-white/40 rounded"></div>
                              <div className="bg-white/60 rounded"></div>
                              <div className="bg-white/30 rounded col-span-2"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Person */}
                    <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 -translate-x-12">
                      {/* Head with details */}
                      <div className="relative w-10 h-10 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full mx-auto mb-2 shadow-lg">
                        {/* Hair */}
                        <div className="absolute -top-1 -left-1 w-12 h-8 bg-amber-800 rounded-full"></div>
                        {/* Eyes */}
                        <div className="absolute top-3 left-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                        <div className="absolute top-3 right-2 w-1 h-1 bg-gray-800 rounded-full"></div>
                      </div>
                      {/* Body */}
                      <div className="w-16 h-20 bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl mx-auto shadow-lg"></div>
                      {/* Arms with typing position */}
                      <div className="absolute top-12 -left-3 w-8 h-3 bg-orange-200 rounded-full transform rotate-45 shadow-md"></div>
                      <div className="absolute top-12 -right-3 w-8 h-3 bg-orange-200 rounded-full transform -rotate-45 shadow-md"></div>
                      {/* Keyboard */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-3 bg-gray-800 rounded-md"></div>
                    </div>
                    
                    {/* Enhanced Decorative Elements */}
                    <div className="absolute top-12 right-12 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-2xl opacity-90 shadow-xl transform rotate-12 animate-float"></div>
                    <div className="absolute top-20 left-12 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full opacity-80 shadow-lg animate-float-delayed"></div>
                    <div className="absolute bottom-12 right-16 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl opacity-85 shadow-md transform -rotate-12"></div>
                    
                    {/* Office Plant */}
                    <div className="absolute bottom-32 right-20">
                      <div className="w-4 h-12 bg-gradient-to-t from-green-600 to-green-500 rounded-full shadow-md"></div>
                      <div className="absolute -top-2 -left-2 w-3 h-6 bg-green-400 rounded-full transform rotate-45"></div>
                      <div className="absolute -top-2 -right-2 w-3 h-6 bg-green-400 rounded-full transform -rotate-45"></div>
                      <div className="absolute -top-1 -left-1 w-2 h-4 bg-green-500 rounded-full transform rotate-90"></div>
                      <div className="w-8 h-4 bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg mx-auto shadow-md"></div>
                    </div>

                    {/* Code Symbols Floating */}
                    <div className="absolute top-16 left-16 text-blue-500 text-xl font-mono opacity-60 animate-pulse">&lt;/&gt;</div>
                    <div className="absolute top-24 right-24 text-green-500 text-lg font-mono opacity-60 animate-pulse">{ }</div>
                    <div className="absolute bottom-16 left-20 text-purple-500 text-lg font-mono opacity-60 animate-pulse">( )</div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl animate-float opacity-70 shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full animate-float-delayed opacity-70 shadow-lg"></div>
              <div className="absolute top-1/2 -left-12 w-6 h-6 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-xl animate-pulse opacity-50 shadow-md"></div>
              <div className="absolute top-1/4 -right-8 w-4 h-4 bg-gradient-to-br from-green-200 to-green-300 rounded-full animate-float opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
