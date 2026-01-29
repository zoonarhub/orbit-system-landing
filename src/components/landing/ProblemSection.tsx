import { AlertCircle, Calendar, MessageSquareX, TrendingDown, Users } from "lucide-react";

const problems = [
  {
    icon: Users,
    text: "Leads chegam, mas poucos agendamentos",
  },
  {
    icon: MessageSquareX,
    text: "Recepção sobrecarregada",
  },
  {
    icon: Calendar,
    text: "Pacientes faltam ou somem",
  },
  {
    icon: TrendingDown,
    text: "Agenda cheia em um mês e vazia no outro",
  },
  {
    icon: AlertCircle,
    text: "Marketing sem controle e previsibilidade",
  },
];

const ProblemSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
            Se sua clínica cresce assim, existe um{" "}
            <span className="text-accent">problema invisível</span>
          </h2>

          {/* Problems Grid */}
          <div className="grid gap-6 md:gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-accent/30"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-accent" />
                </div>
                <p className="text-lg md:text-xl font-medium">{problem.text}</p>
              </div>
            ))}
          </div>

          {/* Impact phrase */}
          <div className="mt-16 text-center">
            <p className="font-serif text-2xl md:text-3xl font-semibold text-accent">
              "Crescer sem sistema tira clínicas da órbita."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
