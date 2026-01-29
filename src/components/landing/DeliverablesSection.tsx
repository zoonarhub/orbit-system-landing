import { 
  MessageSquare, 
  FileText, 
  GraduationCap, 
  Globe, 
  Palette, 
  Camera, 
  Target, 
  Share2, 
  LayoutDashboard 
} from "lucide-react";

const deliverables = [
  {
    icon: MessageSquare,
    title: "Atendimento inteligente via WhatsApp",
    description: "Automação + humano trabalhando juntos",
  },
  {
    icon: FileText,
    title: "Scripts médicos de atendimento",
    description: "Comunicação padronizada e profissional",
  },
  {
    icon: GraduationCap,
    title: "Treinamento da recepção",
    description: "Equipe preparada para converter",
  },
  {
    icon: Globe,
    title: "Site médico focado em conversão",
    description: "Design que transforma visitantes em pacientes",
  },
  {
    icon: Palette,
    title: "Identidade visual profissional",
    description: "Marca que transmite autoridade",
  },
  {
    icon: Camera,
    title: "Produção de fotos e vídeos reais",
    description: "Conteúdo autêntico da sua clínica",
  },
  {
    icon: Target,
    title: "Tráfego pago com filtro e controle",
    description: "Anúncios que atraem pacientes certos",
  },
  {
    icon: Share2,
    title: "Social media com função estratégica",
    description: "Conteúdo que posiciona e converte",
  },
  {
    icon: LayoutDashboard,
    title: "Painel de métricas e acompanhamento",
    description: "Dados em tempo real para decisões",
  },
];

const DeliverablesSection = () => {
  return (
    <section id="entregas" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Não entregamos serviços.
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent">
            Entregamos um sistema funcionando.
          </h3>
        </div>

        {/* Deliverables Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-accent/30 group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center transition-all group-hover:bg-accent/30">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
