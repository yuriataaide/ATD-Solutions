"use client"

import { useState } from "react"
import { ExternalLink, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { projectCompilationEventsSubscribe } from "next/dist/build/swc/generated-native"

const categories = ["Todos", "Sites", "E-commerce", "Landing Pages", "Sistemas Web"]

const projects = [
  {
    title: "Ferpa Chopp",
    category: "E-commerce",
    description: "Site virtual completa com integração de pagamentos e gestão de estoque.",
    tech: ["Next.js", "Stripe", "PostgreSQL", "Mercado Pago", "React", "TypeScript"],
    color: "from-blue-500 to-cyan-500",
    image: "/ferpachopp-site.png",
    link: "https://ferpa-chopp.vercel.app/"
  },
  {
    title: "Ferpa Auto Elétrica",
    category: "Sites",
    description: "Site informativo para a Ferpa Auto Elétrica.",
    tech: ["Next.js", "React", "TypeScript"],
    color: "from-primary to-accent",
    image: "/autoeletrica-site.png",
    link: "https://ferpaautoeletrica.vercel.app/"
  },
  {
    title: "ATD Solutions",
    category: "Sites",
    description: "Site informativo para a ATD Solutions.",
    tech: ["Next.js", "React", "TypeScript"],
    color: "from-cyan-500 to-blue-600",
    image: "/atd-site.png",
    link: "https://atdsolutions.vercel.app/"
  },
  { 
    title: "Ridere Odontologia",
    category: "Sites",
    description: "Site informativo para a Ridere Odontologia.",
    tech: ["Next.js", "React", "TypeScript"],
    color: "from-cyan-500 to-blue-600",
    image: "/ridere-site.png",
    link: "https://ridere-odontologia.vercel.app/"
  }
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  
  const filteredProjects = activeCategory === "Todos" 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            Nosso trabalho
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Projetos <span className="text-primary">Recentes</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Confira alguns dos sites e sistemas que desenvolvemos para nossos clientes. 
            Cada projeto é único e personalizado.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:glow-border"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Ver Projeto
                  </Button>
                  </a>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-5">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}