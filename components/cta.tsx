"use client"

import { MessageCircle, Phone, Mail, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="p-8 md:p-12 rounded-3xl bg-card/80 border border-primary/30 glow-border backdrop-blur-sm text-center">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Entre em contato
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance">
              Pronto para transformar sua <span className="text-primary glow-text">experiência tecnológica</span>?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
              Entre em contato conosco e receba um orçamento gratuito. 
              Estamos prontos para atender você com a melhor solução.
            </p>
            
            {/* Contact Options */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <Link
                href="https://wa.me/48998529910"
                target="_blank"
                className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30 hover:bg-green-500/20 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 text-green-500" />
                <span className="text-foreground font-medium">WhatsApp</span>
              </Link>
              
              <Link
                href="tel:+48998529910"
                className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/30 hover:bg-primary/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">Ligar Agora</span>
              </Link>
              
              <Link
                href="mailto:atdsolutions0@gmail.com"
                className="group flex items-center justify-center gap-3 p-4 rounded-xl bg-accent/10 border border-accent/30 hover:bg-accent/20 transition-all duration-300"
              >
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">E-mail</span>
              </Link>
            </div>
            
            {/* Primary CTA */}
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow transition-all duration-300 hover:scale-105 px-10 py-6 text-lg group"
            >
              <Link href="https://wa.me/5511999999999" target="_blank">
                Solicitar Orçamento Grátis
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            
            <p className="text-sm text-muted-foreground mt-6">
              Respondemos em até 24 horas • Orçamento sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
