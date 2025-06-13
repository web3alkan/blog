import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tarık İsmet ALKAN - Hukuk Blog',
  description: 'Hukuk makaleleri, ders notları ve günlük yazılar',
  keywords: 'hukuk, law, makale, ders notları, Tarık İsmet ALKAN, AYBU',
  authors: [{ name: 'Tarık İsmet ALKAN' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}