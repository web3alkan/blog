'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-primary">
              Tarık İsmet ALKAN
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/makaleler" className="text-gray-700 hover:text-primary transition-colors">
              Makaleler
            </Link>
            <Link href="/ders-notlari" className="text-gray-700 hover:text-primary transition-colors">
              Ders Notları
            </Link>
            <Link href="/gunluk" className="text-gray-700 hover:text-primary transition-colors">
              Günlük
            </Link>
            <Link href="/hakkimda" className="text-gray-700 hover:text-primary transition-colors">
              Hakkımda
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center px-3 py-2 border rounded text-gray-700 hover:text-primary"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Ana Sayfa
              </Link>
              <Link href="/makaleler" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Makaleler
              </Link>
              <Link href="/ders-notlari" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Ders Notları
              </Link>
              <Link href="/gunluk" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Günlük
              </Link>
              <Link href="/hakkimda" className="block px-3 py-2 text-gray-700 hover:text-primary">
                Hakkımda
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}