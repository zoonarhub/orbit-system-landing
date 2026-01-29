import { Check, X } from "lucide-react";

const idealFor = [
  "Buscam previsibilidade",
  "Valorizam processo",
  "Pensam a longo prazo",
  "Querem controle sobre resultados",
  "Estão prontas para organizar processos",
];

const notFor = [
  "Querem apenas postar mais",
  "Buscam soluções milagrosas",
  "Não querem mudar processos internos",
  "Esperam resultados sem participação",
  "Preferem atalhos a sistemas",
];

const TargetSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
            Para quem é o <span className="text-accent">Método Órbita</span>
          </h2>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Ideal For */}
          <div className="bg-secondary/30 rounded-2xl p-8 lg:p-10 border border-accent/20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary">
                É para clínicas que
              </h3>
            </div>
            <ul className="space-y-4">
              {idealFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-primary/5 rounded-2xl p-8 lg:p-10 border border-primary/10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <X className="w-6 h-6 text-primary/60" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary">
                Não é para clínicas que
              </h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-primary/50" />
                  </div>
                  <span className="text-lg text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
