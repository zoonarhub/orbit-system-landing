const AuthoritySection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main statement */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
            A maioria das agências vende tráfego.
          </h2>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-12">
            A Zoonar constrói infraestrutura de crescimento.
          </h3>

          {/* Separator */}
          <div className="w-24 h-1 bg-accent mx-auto mb-12" />

          {/* Supporting text */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Não entregamos ações isoladas. Criamos sistemas que sustentam o crescimento.
            Cada peça trabalha em conjunto para garantir que sua clínica tenha
            previsibilidade, controle e resultados consistentes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
