import { useState } from "react";
import { X } from "lucide-react";
import teacherClass1 from "@/assets/gallery/teacher-class-1.png";
import communicationClass from "@/assets/gallery/communication-class.jpg";
import mathClass from "@/assets/gallery/math-class.jpg";
import groupClass1 from "@/assets/gallery/group-class-1.jpg";
import groupClass2 from "@/assets/gallery/group-class-2.jpg";
import teacherClass2 from "@/assets/gallery/teacher-class-2.jpg";
import groupClass3 from "@/assets/gallery/group-class-3.jpg";

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: teacherClass1, alt: "Clase con el profesor" },
    { src: communicationClass, alt: "Clase de Comunicación" },
    { src: mathClass, alt: "Clase de Matemática" },
    { src: groupClass1, alt: "Estudiantes en clase" },
    { src: groupClass2, alt: "Trabajo en grupo" },
    { src: teacherClass2, alt: "Enseñanza activa" },
    { src: groupClass3, alt: "Ambiente de aprendizaje" },
  ];

  return (
    <section id="galeria" className="py-20 bg-gradient-to-br from-education-primary/10 to-education-teal/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galería
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conoce nuestras instalaciones y el ambiente de aprendizaje que ofrecemos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:brightness-110 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selectedImage}
              alt="Vista ampliada"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};
