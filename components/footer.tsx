"use client"

import Link from "next/link"
import Image from "next/image"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  X
} from "lucide-react"

const navigation = {
  services: [
    { label: "Manutenção de Eletrônicos", href: "#servicos" },
    { label: "Montagem de Computadores", href: "#servicos" },
    { label: "Criação de Sites", href: "#servicos" },
    { label: "Suporte Técnico", href: "#servicos" },
  ],
  company: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Contato", href: "#contato" },
  ],
  social: [
    { icon: X, href: "https://x.com/atdsolutions", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/atdsolutions", label: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/atdsolutions", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com/atdsolutions0", label: "YouTube" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <Image
                src="/logo.png"
                alt="ATD Solutions"
                width={160}
                height={60}
                className="h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 mix-blend-lighten"
              />
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Soluções completas em tecnologia para empresas e pessoas. 
              Qualidade, confiança e inovação em cada projeto.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {navigation.social.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Serviços</h4>
            <ul className="space-y-3">
              {navigation.services.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Empresa</h4>
            <ul className="space-y-3">
              {navigation.company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Rua Cirilo Vieira Ramos, 303<br />
                  Vila Nova - Lages, SC
                </span>
              </li>
              <li>
                <Link
                  href="tel:+5511999999999"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  (48) 99852-9910
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:contato@atdsolutions.com.br"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  atdsolutions0@gmail.com
                </Link>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  Seg - Sex: 8h às 18h<br />
                  Sáb: 9h às 13h
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ATD Solutions. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
