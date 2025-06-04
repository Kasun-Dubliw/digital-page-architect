
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Code, Settings, MessageCircle, Database } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Software Development",
      description: "Custom software solutions built with modern technologies and best practices to meet your specific business requirements."
    },
    {
      icon: <Settings className="w-8 h-8 text-green-600" />,
      title: "System Architecture",
      description: "Scalable and robust system architecture design that ensures optimal performance and future-proof solutions."
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />,
      title: "Consultation",
      description: "Expert technology consulting to help you make informed decisions and optimize your software development processes."
    },
    {
      icon: <Database className="w-8 h-8 text-orange-600" />,
      title: "Data Engineering",
      description: "Comprehensive data solutions including data pipelines, analytics platforms, and machine learning implementations."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive software solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
