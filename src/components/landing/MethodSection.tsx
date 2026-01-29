import { Orbit } from "lucide-react";

const MethodSection = () => {
  return (
    <section id="metodo" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
              <Orbit className="w-10 h-10 text-accent" />
            </div>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary text-center mb-8">
            O que é o <span className="text-accent">Método Órbita</span>
          </h2>

          {/* Content */}
          <div className="space-y-6 text-center">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              O Método Órbita é um sistema proprietário criado para clínicas que desejam
              crescer sem perder controle, qualidade e organização.
            </p>
            
            <div className="w-16 h-0.5 bg-accent/30 mx-auto" />
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic font-serif">
              "Assim como na ciência, nada entra em órbita por acaso.
              Existe cálculo, estrutura e método."
            </p>
          </div>

          {/* Visual representation */}
          <div className="mt-16 relative">
            <div className="aspect-square max-w-md mx-auto relative">
              {/* Orbiting circles */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/10 animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute inset-8 rounded-full border-2 border-dashed border-accent/20 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }} />
              <div className="absolute inset-16 rounded-full border-2 border-dashed border-primary/10 animate-spin" style={{ animationDuration: "25s" }} />
              
              {/* Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent to-gold-hover flex items-center justify-center shadow-xl shadow-accent/30">
                  <span className="font-serif font-bold text-primary text-xl">Órbita</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
