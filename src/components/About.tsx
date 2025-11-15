import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, BookOpen } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Target,
      title: "Metodología Efectiva",
      description:
        "Aplicamos técnicas pedagógicas innovadoras que garantizan el aprendizaje significativo y duradero.",
    },
    {
      icon: Users,
      title: "Docentes Expertos",
      description:
        "Nuestro equipo está conformado por profesionales altamente calificados con amplia experiencia educativa.",
    },
    {
      icon: Award,
      title: "Resultados Comprobados",
      description:
        "Miles de estudiantes han logrado sus objetivos académicos gracias a nuestros programas de estudio.",
    },
    {
      icon: BookOpen,
      title: "Material Didáctico",
      description:
        "Proporcionamos recursos educativos de calidad diseñados específicamente para cada nivel y necesidad.",
    },
  ];

  return (
    <section id="nosotros" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Somos una institución comprometida con la excelencia académica y el
            desarrollo integral de nuestros estudiantes
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-primary/10 to-education-secondary/10 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4 text-center">
            Nuestra Misión
          </h3>
          <p className="text-lg text-muted-foreground text-center leading-relaxed">
            En CEAMA nos dedicamos a formar estudiantes con sólidas competencias
            en comunicación y matemática, brindándoles las herramientas
            necesarias para destacar en su vida académica y profesional.
            Creemos en la educación de calidad como el camino hacia el éxito y
            el desarrollo personal.
          </p>
        </div>
      </div>
    </section>
  );
};
