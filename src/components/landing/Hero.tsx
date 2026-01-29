import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent">Método Órbita</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Crescimento para clínicas não é sorte.{" "}
            <span className="text-gradient">É sistema.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            A Zoonar implementa o Método ™, um sistema completo que coloca clínicas
            médicas em crescimento estável, previsível e organizado.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://form.respondi.app/EdimbhML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-gold-hover text-primary font-semibold px-8 py-6 text-base group"
              >
                Quero o Diagnóstico Órbita
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a
              href="https://wa.me/5521969446745"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="border-primary/20 hover:bg-primary/5 text-primary font-semibold px-8 py-6 text-base group"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com especialista
              </Button>
            </a>
          </div>

          {/* Trust indicator */}
          <p className="mt-12 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Vagas limitadas por região para manter qualidade operacional
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/20 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary/40 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
