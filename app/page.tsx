import Link from 'next/link'
import RecentPosts from '@/components/RecentPosts'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">İçerik Kategorileri</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/makaleler" className="card p-8 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-2">Hukuk Makaleleri</h3>
              <p className="text-gray-600">Güncel hukuki konular ve akademik makaleler</p>
            </Link>
            
            <Link href="/ders-notlari" className="card p-8 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-2">Ders Notları</h3>
              <p className="text-gray-600">Hukuk dersleri için hazırlanmış notlar ve materyaller</p>
            </Link>
            
            <Link href="/gunluk" className="card p-8 text-center hover:scale-105 transition-transform">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-2">Günlük Yazılar</h3>
              <p className="text-gray-600">Güncel hukuki gelişmeler ve düşünceler</p>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Son Yazılar</h2>
          <RecentPosts />
        </div>
      </section>
    </div>
  )
}