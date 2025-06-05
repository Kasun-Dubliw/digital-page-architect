
import { Check, Code, Cloud, Smartphone, Database, Monitor, Server, Globe } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const AboutUs = () => {
  const expertise = [
    "Cloud-based applications with cost-effectiveness in mind",
    "Scalable software platforms utilizing microservices architecture", 
    "Data pipelines to handle massive amounts of data",
    "Data security and platform security"
  ];

  const domains = [
    "Finance",
    "Healthcare", 
    "Travel",
    "Education",
    "Real Estate"
  ];

  const techStacks = [
    {
      category: "Backend",
      icon: <Server className="w-8 h-8 text-blue-600" />,
      technologies: ["Node.js", "Python", "Java", ".NET"],
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      category: "Mobile", 
      icon: <Smartphone className="w-8 h-8 text-green-600" />,
      technologies: ["Android", "iOS", "React Native"],
      color: "bg-green-50 border-green-200 hover:bg-green-100",
      gradient: "from-green-500 to-green-600"
    },
    {
      category: "Cloud",
      icon: <Cloud className="w-8 h-8 text-purple-600" />,
      technologies: ["AWS", "Azure"],
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      category: "Frontend",
      icon: <Monitor className="w-8 h-8 text-orange-600" />,
      technologies: ["React", "Angular"],
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
      gradient: "from-orange-500 to-orange-600"
    },
    {
      category: "Big Data Tech",
      icon: <Database className="w-8 h-8 text-indigo-600" />,
      technologies: ["Kafka", "Spark", "ArangoDB", "Elastic", "AWS Glue", "MongoDB"],
      color: "bg-indigo-50 border-indigo-200 hover:bg-indigo-100",
      gradient: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Us</h2>
          
          {/* Company Introduction */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl mb-16 shadow-sm">
            <p className="text-lg text-gray-600 leading-relaxed mb-6 text-center">
              We are a <span className="text-red-600 font-semibold">young software company</span> based in Sri Lanka, 
              led by engineers with more than a <span className="text-red-600 font-semibold">decade of expertise</span> in <span className="font-semibold">designing 
              and building enterprise-level software solutions</span> that are:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center justify-center md:justify-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-medium">High performance</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-medium">Scalable</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-medium">Secure</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Check className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-medium">Cost effective</span>
              </div>
            </div>
            
            <div className="text-center bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why should you hire us?</h3>
              <p className="text-lg text-red-600 font-semibold">Our expertise and passion</p>
            </div>
          </div>

          {/* Expertise and Domains Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Let us explain a bit... <span className="text-blue-600">Our Expertise and Domains</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Expertise */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-6">
                  <Code className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-2xl font-bold text-gray-900">Expertise</h4>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-4">Designing and building:</p>
                <div className="space-y-3">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-white p-3 rounded-lg shadow-sm">
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domains */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-sm">
                <div className="flex items-center mb-6">
                  <Globe className="w-8 h-8 text-green-600 mr-3" />
                  <h4 className="text-2xl font-bold text-gray-900">Domains</h4>
                </div>
                <div className="space-y-3">
                  {domains.map((domain, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                      <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
                      <span className="text-lg text-gray-700 font-medium">{domain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tech Stacks Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Let us explain a bit... <span className="text-blue-600">Tech Stacks</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStacks.map((stack, index) => (
                <Card key={index} className={`${stack.color} border-2 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
                  <CardHeader className="text-center pb-4">
                    <div className={`flex justify-center mb-4 p-3 bg-gradient-to-r ${stack.gradient} rounded-full w-16 h-16 mx-auto items-center`}>
                      {stack.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {stack.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {stack.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
