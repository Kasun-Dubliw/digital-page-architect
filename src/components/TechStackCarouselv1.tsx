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

export default function TechStackCarouselv1({ techStacks }: TechStackCarouselProps) {

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
    <div className="">
      <Carousel opts={{ loop: true }} className="w-full">
        <CarouselContent>
          {technologies.map((tech, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/3 lg:basis-1/6 px-4"
            >
                <div
                className={`h-36 flex flex-col items-center justify-center gap-3 ${tech.bgColor} backdrop-blur-md rounded-xl border ${tech.borderColor} hover:border-white/30 hover:bg-[#515167]/100 transition-all duration-300 group/tech`}
                >
                <img
                  src={tech.imageUrl}
                  width="48"
                  height="48"
                  className="rounded object-contain group-hover/tech:opacity-90 transition-opacity"
                  alt={tech.name}
                />
                <span className="text-sm font-medium text-[#30303E] group-hover/tech:text-white transition-colors">
                  {tech.name}
                </span>
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

