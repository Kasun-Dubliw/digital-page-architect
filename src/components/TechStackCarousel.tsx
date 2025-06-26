import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"


type Technology = {
  name: string;
  imageUrl: string;
};

type TechStack = {
  category: string;
  color: string;
  bgColor: string;
  borderColor: string;
  icon: React.ReactNode;
  technologies: Technology[];
};

type TechStackCarouselProps = {
  techStacks: TechStack[];
};

type FlatTechnology = {
  name: string;
  imageUrl: string;
  color: string;
  bgColor: string;
  borderColor: string;
};

export default function TechStackCarousel({ techStacks }: TechStackCarouselProps) {

  // Shuffle array utility
  function shuffleArray<T>(array: T[]): T[] {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  const technologies = shuffleArray(
    techStacks.flatMap(stack =>
      stack.technologies.map(tech => ({
        name: tech.name,
        imageUrl: tech.imageUrl,
        color: stack.color,
        bgColor: stack.bgColor,
        borderColor: stack.borderColor
      }))
    )
  );
  return (
    <div className="w-full max-w-6xl mx-auto py-12">
      <Carousel opts={{ loop: true }} className="relative">
        <CarouselContent>
          {techStacks.map((stack, index) => (
            <CarouselItem key={index} className="px-4 basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="group relative h-full">
                <div
                  className={`absolute inset-0 -m-1 bg-gradient-to-r ${stack.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>
                <div
                  className={`relative ${stack.bgColor} backdrop-blur-xl border ${stack.borderColor} rounded-2xl p-6 h-full hover:border-white/30 transition-all duration-300 transform hover:-translate-y-1`}
                >
                  {/* Icon and Category */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${stack.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {stack.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors duration-300">
                      {stack.category}
                    </h4>
                  </div>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {stack.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="flex items-center gap-2 bg-white/5 backdrop-blur-md rounded-lg p-3 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300 group/tech"
                      >
                        <img
                          src={tech.imageUrl}
                          width="48"
                          height="24"
                          className="rounded object-cover"
                          alt={tech.name}
                        />
                        <span className="text-sm font-medium text-white/90 group-hover/tech:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

