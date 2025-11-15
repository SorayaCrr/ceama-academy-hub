import { BookOpen, Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-8 w-8" />
              <span className="text-2xl font-bold">CEAMA</span>
            </div>
            <p className="text-background/80 mb-4">
              Centro de Excelencia Académica en Matemática y Comunicación.
              Comprometidos con tu éxito académico y profesional.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#inicio"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#cursos"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Cursos
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-background/80">
              <li>Av. Universitaria 123</li>
              <li>Lima, Perú</li>
              <li>+51 999 999 999</li>
              <li>info@ceama.edu.pe</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-background/60">
          <p>
            © {new Date().getFullYear()} CEAMA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
