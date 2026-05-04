"use client"

import { CheckCircle2, Award, Users, Zap } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Excelência em Qualidade",
    description: "Trabalhamos com equipamentos e peças de primeira linha para garantir resultados duradouros.",
  },
  {
    icon: Users,
    title: "Equipe Especializada",
    description: "Profissionais certificados e em constante atualização com as novidades do mercado.",
  },
  {
    icon: Zap,
    title: "Agilidade no Atendimento",
    description: "Prazos curtos e processos otimizados para entregar seu projeto no menor tempo possível.",
  },
]

const highlights = [
  "Mais de 3 anos de experiência no mercado",
  "Equipe técnica altamente qualificada",
  "Atendimento personalizado para cada cliente",
  "Garantia em todos os serviços prestados",
  "Orçamentos gratuitos e sem compromisso",
  "Parcerias com as melhores marcas",
]

export function About() {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden gradient-bg">
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Sua parceira em <span className="text-primary">soluções tecnológicas</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              A ATD Solutions nasceu da paixão por tecnologia e do compromisso em 
              oferecer serviços de excelência. Com mais de uma década de experiência, 
              nos tornamos referência em manutenção, desenvolvimento e suporte técnico, 
              sempre focando na satisfação total dos nossos clientes.
            </p>
            
            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:glow-border"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
