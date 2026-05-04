"use client"

import { ArrowRight, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      
      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">
              Tecnologia de ponta para o seu negócio
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
            <span className="text-foreground">Soluções completas em</span>
            <br />
            <span className="text-primary glow-text">Tecnologia</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Manutenção de eletrônicos, montagem de computadores, 
            desenvolvimento de sites e suporte técnico. Transformamos 
            tecnologia em resultados para você.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all duration-300 hover:scale-105 px-8 group"
            >
              <Link href="#contato">
                Fale Conosco
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-muted/50 px-8 group"
            >
              <Link href="#servicos">
                Nossos Serviços
                <ChevronDown className="ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
              </Link>
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/50">
            {[
              { value: "100+", label: "Clientes Satisfeitos" },
              { value: "3+", label: "Anos de Experiência" },
              { value: "200+", label: "Projetos Realizados" },
              { value: "24/7", label: "Suporte Disponível" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary glow-text">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
