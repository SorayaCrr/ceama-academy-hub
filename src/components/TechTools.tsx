import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Gamepad2, PlayCircle, BookOpen, Brain } from "lucide-react";

export const TechTools = () => {
  const tools = [
    {
      icon: Brain,
      name: "Kahoot!",
      description:
        "Plataforma interactiva de aprendizaje basado en juegos que hace las clases más dinámicas y entretenidas.",
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      icon: Gamepad2,
      name: "Quizizz",
      description:
        "Herramienta de cuestionarios gamificados que permite evaluar el progreso de forma divertida y efectiva.",
      color: "from-pink-500/20 to-red-500/20",
    },
    {
      icon: PlayCircle,
      name: "Videos Dinámicos",
      description:
        "Contenido audiovisual educativo especialmente diseñado para reforzar conceptos y facilitar el aprendizaje.",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: BookOpen,
      name: "Materiales Físicos",
      description:
        "Recursos didácticos tangibles como libros, fichas de trabajo y material manipulativo para aprendizaje práctico.",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Gamepad2,
      name: "Juegos Educativos",
      description:
        "Actividades lúdicas diseñadas para reforzar conocimientos mientras los estudiantes se divierten aprendiendo.",
      color: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-education-secondary/10 mb-6">
            <Laptop className="h-10 w-10 text-education-secondary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Herramientas Tecnológicas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilizamos las mejores herramientas educativas para hacer el aprendizaje más efectivo y atractivo
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {tools.map((tool, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="hover:shadow-lg transition-shadow">
                      <CardContent className="flex flex-col items-center p-6 space-y-4">
                        <div
                          className={`w-20 h-20 rounded-full bg-gradient-to-br ${tool.color} flex items-center justify-center`}
                        >
                          <tool.icon className="h-10 w-10 text-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground text-center">
                          {tool.name}
                        </h3>
                        <p className="text-muted-foreground text-center text-sm leading-relaxed">
                          {tool.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
