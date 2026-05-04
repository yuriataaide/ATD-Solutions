"use client"

import { Monitor, Cpu, Globe, Headphones, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Monitor,
    title: "Manutenção de Eletrônicos",
    description: "Reparo e manutenção de computadores, notebooks, smartphones, tablets e outros dispositivos eletrônicos com garantia de qualidade.",
    features: ["Diagnóstico gratuito", "Peças originais", "Garantia de 30 dias"],
  },
  {
    icon: Cpu,
    title: "Montagem de Computadores",
    description: "PCs personalizados para gaming, trabalho ou uso profissional. Configurações otimizadas para o seu perfil de uso.",
    features: ["Hardware premium", "Setup personalizado", "Testes completos"],
  },
  {
    icon: Globe,
    title: "Criação de Sites",
    description: "Websites modernos, responsivos e otimizados para SEO. Landing pages, e-commerce e sistemas web sob medida.",
    features: ["Design exclusivo", "SEO otimizado", "Suporte contínuo"],
  },
  {
    icon: Headphones,
    title: "Suporte Técnico",
    description: "Assistência técnica remota ou presencial para empresas e residências. Atendimento rápido e eficiente.",
    features: ["Atendimento 24/7", "Suporte remoto", "Contratos flexíveis"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            O que fazemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos soluções tecnológicas completas para atender todas as suas necessidades, 
            desde manutenção até desenvolvimento web.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:glow-border relative overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="#contato"
                  className="inline-flex items-center text-primary text-sm font-medium group/link"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
