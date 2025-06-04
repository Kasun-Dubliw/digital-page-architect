
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
      title: "E-Commerce Platform Development",
      summary: "Built a scalable e-commerce platform serving 100,000+ users with real-time inventory management and secure payment processing.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Enterprise Software Solution",
      summary: "Developed a comprehensive enterprise management system that increased operational efficiency by 40% for a Fortune 500 company.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "Mobile App Development",
      summary: "Created a cross-platform mobile application with 500,000+ downloads and 4.8-star rating on app stores.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "Cloud Migration Project",
      summary: "Successfully migrated legacy systems to cloud infrastructure, reducing costs by 35% and improving performance by 60%.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Digital Transformation Initiative",
      summary: "Led complete digital transformation for manufacturing company, implementing IoT solutions and real-time analytics dashboard.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Portfolio</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Explore our success stories and the innovative solutions we've delivered for clients across various industries.
          </p>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent className="-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl font-semibold text-gray-900 line-clamp-2">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-gray-600 leading-relaxed">
                        {project.summary}
                      </CardDescription>
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
