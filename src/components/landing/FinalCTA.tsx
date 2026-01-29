import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Antes de crescer, sua clínica precisa{" "}
            <span className="text-accent">entrar em órbita.</span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Solicite o Diagnóstico Órbita™ e descubra se sua clínica está pronta
            para um crescimento previsível e organizado.
          </p>

          {/* CTA Button */}
          <a
            href="https://form.respondi.app/EdimbhML"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-gold-hover text-primary font-bold px-10 py-7 text-lg group animate-pulse-glow"
            >
              Solicitar Diagnóstico Órbita
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>

          {/* Scarcity text */}
          <p className="mt-8 text-sm text-white/60">
            Vagas limitadas por região para manter qualidade operacional.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
