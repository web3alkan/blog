import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Tarık İsmet ALKAN</h3>
            <p className="text-gray-400">
              Ankara Yıldırım Beyazıt Üniversitesi<br />
              Hukuk Fakültesi
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/makaleler" className="text-gray-400 hover:text-white transition-colors">
                  Makaleler
                </Link>
              </li>
              <li>
                <Link href="/ders-notlari" className="text-gray-400 hover:text-white transition-colors">
                  Ders Notları
                </Link>
              </li>
              <li>
                <Link href="https://avesis.aybu.edu.tr/tialkan" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Akademik Profil
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <p className="text-gray-400">
              <a href="https://avesis.aybu.edu.tr/tialkan" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Avesis Profili
              </a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tarık İsmet ALKAN. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}