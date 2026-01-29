import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-zoonar.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="ZOONAR"
              className="h-12 w-auto mb-6"
            />
            <p className="text-muted-foreground max-w-md mb-6">
              Especialistas em sistemas de crescimento previsível para clínicas médicas e estéticas.
              Método Órbita™ - Crescimento organizado e sustentável.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-primary text-lg mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#metodo" className="text-muted-foreground hover:text-accent transition-colors">
                  Método Órbita
                </a>
              </li>
              <li>
                <a href="#pilares" className="text-muted-foreground hover:text-accent transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#entregas" className="text-muted-foreground hover:text-accent transition-colors">
                  O Que Entregamos
                </a>
              </li>
              <li>
                <a href="#jornada" className="text-muted-foreground hover:text-accent transition-colors">
                  Jornada
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-bold text-primary text-lg mb-4">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/5521969446745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@zoonar.com.br"
                  className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contato@zoonar.com.br</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Rio de Janeiro, RJ</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} ZOONAR. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Método Órbita™ é uma marca registrada
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
