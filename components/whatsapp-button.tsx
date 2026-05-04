"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contato via WhatsApp"
    >
      <div className="relative">
        {/* Pulse Effect */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30" />
        
        {/* Button */}
        <div className="relative flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-green-500/50">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        {/* Tooltip */}
        <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-card border border-border rounded-lg text-sm text-foreground whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco!
        </div>
      </div>
    </Link>
  )
}
