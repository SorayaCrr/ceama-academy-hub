import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import communicationIcon from "@/assets/communication-icon.jpg";
import mathIcon from "@/assets/math-icon.jpg";

export const Courses = () => {
  return (
    <section id="cursos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros Cursos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Programas diseñados para potenciar tus habilidades académicas y
            profesionales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Communication Course */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden bg-gradient-to-br from-primary to-primary/70">
              <img
                src={communicationIcon}
                alt="Curso de Comunicación"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">
                Comunicación Efectiva
              </CardTitle>
              <CardDescription className="text-base">
                Desarrolla habilidades de expresión oral y escrita
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Aprende a comunicarte con claridad, persuasión y confianza en
                cualquier contexto académico o profesional.
              </p>
              <ul className="space-y-2">
                {[
                  "Redacción académica y profesional",
                  "Oratoria y expresión oral",
                  "Comprensión lectora avanzada",
                  "Técnicas de argumentación",
                  "Análisis de textos literarios",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-education-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4">Más Información</Button>
            </CardContent>
          </Card>

          {/* Mathematics Course */}
          <Card className="overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 overflow-hidden bg-gradient-to-br from-education-secondary to-education-secondary/70">
              <img
                src={mathIcon}
                alt="Curso de Matemática"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">
                Razonamiento Matemático
              </CardTitle>
              <CardDescription className="text-base">
                Domina los conceptos y el pensamiento lógico-matemático
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Fortalece tu capacidad de análisis y resolución de problemas con
                métodos innovadores y efectivos.
              </p>
              <ul className="space-y-2">
                {[
                  "Álgebra y geometría aplicada",
                  "Razonamiento lógico",
                  "Resolución de problemas",
                  "Estadística y probabilidades",
                  "Matemática para exámenes de admisión",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-education-secondary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-4">Más Información</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
