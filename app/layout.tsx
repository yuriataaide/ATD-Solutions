import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'ATD Solutions | Soluções Completas em Tecnologia',
  description: 'Serviços profissionais de manutenção de eletrônicos, montagem de computadores, desenvolvimento de sites e suporte técnico. Confiança, inovação e eficiência.',
  keywords: ['tecnologia', 'manutenção', 'computadores', 'sites', 'suporte técnico', 'eletrônicos'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-website.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-website.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon-website.png',
        type: 'image/png+xml',
      },
    ],
    apple: '/icon-website.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
