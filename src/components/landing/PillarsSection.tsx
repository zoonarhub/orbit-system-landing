import { Brain, Globe, Bot, Building2, BarChart3 } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "EIXO",
    description: "Posicionamento, oferta e foco estratégico",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Globe,
    title: "TRAÇÃO",
    description: "Entrada contínua de pacientes qualificados",
    color: "from-green-500/20 to-green-600/10",
  },
  {
    icon: Bot,
    title: "ESTABILIZAÇÃO",
    description: "Automação e atendimento inteligente via WhatsApp",
    color: "from-purple-500/20 to-purple-600/10",
  },
  {
    icon: Building2,
    title: "OPERAÇÃO",
    description: "Recepção treinada, agenda organizada e processos claros",
    color: "from-orange-500/20 to-orange-600/10",
  },
  {
    icon: BarChart3,
    title: "CONTROLE",
    description: "Métricas, previsibilidade e decisões baseadas em dados",
    color: "from-accent/30 to-accent/10",
  },
];

const PillarsSection = () => {
  return (
    <section id="pilares" className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Os 5 Pilares do <span className="text-accent">Método Órbita™</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um sistema integrado onde cada pilar sustenta o crescimento da sua clínica
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`card-premium group ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                <pillar.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
