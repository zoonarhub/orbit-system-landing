const journeySteps = [
  {
    number: "01",
    title: "Diagnóstico Órbita",
    description: "Análise completa da clínica",
  },
  {
    number: "02",
    title: "Definição do Eixo",
    description: "Posicionamento estratégico",
  },
  {
    number: "03",
    title: "Implementação da Tração",
    description: "Ativação do fluxo de pacientes",
  },
  {
    number: "04",
    title: "Estabilização",
    description: "Automação e processos",
  },
  {
    number: "05",
    title: "Operação e Controle",
    description: "Métricas e otimização",
  },
];

const JourneySection = () => {
  return (
    <section id="jornada" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Jornada de Implementação
          </h2>
          <p className="text-lg text-muted-foreground">
            Em até 30 dias, sua clínica entra em órbita
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
            
            {/* Steps */}
            <div className="flex justify-between relative">
              {journeySteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center w-1/5">
                  {/* Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-background border-4 border-accent flex items-center justify-center mb-4 relative z-10">
                    <span className="font-serif font-bold text-accent text-lg">
                      {step.number}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-center">
                    <h3 className="font-serif font-bold text-primary text-lg mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-6">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-background rounded-xl border border-border"
              >
                {/* Number */}
                <div className="w-12 h-12 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center flex-shrink-0">
                  <span className="font-serif font-bold text-accent">
                    {step.number}
                  </span>
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-serif font-bold text-primary text-lg mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final statement */}
        <div className="text-center mt-16">
          <p className="font-serif text-2xl md:text-3xl font-semibold text-accent">
            "Em até 30 dias, a clínica entra em órbita."
          </p>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
