
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from './ui/carousel';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Systemate - Systemate LLC (USA)",
      summary: "Systemate is a software platform designed for real estate investors targeting the U.S. market. We are helping the client revamp the existing platform to handle 100s of gigabytes of data in a more scalable yet cost-effective manner. We designed the new system based on microservices concepts and hosted it in the Azure cloud. Systemate includes .NET and Python backends, an Angular frontend, and Android/iOS mobile applications. Currently, we are redesigning and implementing legacy components while migrating the entire platform to AWS.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      highlights: ["100s of gigabytes of data", "microservices concepts", "Azure cloud", ".NET and Python backends", "Angular frontend", "Android/iOS mobile applications"]
    },
    {
      id: 2,
      title: "fACT - University of Auckland (New Zealand)",
      summary: "fACT is software designed to be used in treating patients with mental health conditions. We are working with the client to build the platform from the ground up, starting from architectural design to implementation. The biggest challenge is data security, as the system will handle patients' health data. fACT includes a .NET backend and Android/iOS applications for both tablets and mobile phones.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
      highlights: ["mental health conditions", "ground up development", "data security", "patients' health data", ".NET backend", "Android/iOS applications"]
    },
    {
      id: 3,
      title: "TeaBase - BPH 200 Pte Ltd (Singapore)",
      summary: "TeaBase is a SaaS application for the tea industry, designed for market price forecasting and providing the required analytics for business operators to make data-driven decisions. We helped the team by analyzing their business requirements, reviewing the software architecture they designed, and proposing an improved architecture that includes ETL pipelines capable of handling large amounts of data while incorporating necessary security controls in a cost-effective manner. The system was designed using AWS-managed components.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&h=400&fit=crop",
      highlights: ["tea industry SaaS", "market price forecasting", "data-driven decisions", "ETL pipelines", "large amounts of data", "AWS-managed components"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">A Few projects....</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our success stories and the innovative solutions we've delivered for clients across various industries.
          </p>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-semibold text-gray-900 leading-tight">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-4">
                      <CardDescription className="text-gray-600 leading-relaxed text-sm">
                        {project.summary}
                      </CardDescription>
                      <div className="flex flex-wrap gap-2">
                        {project.highlights.map((highlight, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-red-50 text-red-600 text-xs rounded-full font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
          
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              Swipe or use the arrows to browse through our portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
