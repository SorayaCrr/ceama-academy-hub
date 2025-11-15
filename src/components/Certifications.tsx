import { Card, CardContent } from "@/components/ui/card";
import { Award, CheckCircle2 } from "lucide-react";
import kahootVerified from "@/assets/kahoot-verified.png";

export const Certifications = () => {
  const certifications = [
    {
      title: "Kahoot! Verified Creator",
      description:
        "Nuestros docentes son creadores verificados de Kahoot!, reconocidos por crear contenido educativo de alta calidad.",
      badge: kahootVerified,
    },
    {
      title: "Metodología Certificada",
      description:
        "Aplicamos metodologías pedagógicas certificadas y validadas por instituciones educativas reconocidas.",
    },
    {
      title: "Experiencia Comprobada",
      description:
        "Más de 10 años de experiencia en la enseñanza de comunicación y matemática con resultados excepcionales.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Award className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certificaciones y Reconocimientos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestros docentes cuentan con certificaciones que avalan su excelencia educativa
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="pt-8 pb-6 space-y-4">
                {cert.badge ? (
                  <div className="flex justify-center mb-4">
                    <img
                      src={cert.badge}
                      alt={cert.title}
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                ) : (
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-education-accent/10 mb-4">
                    <CheckCircle2 className="h-8 w-8 text-education-accent" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
