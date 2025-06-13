import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Tarık İsmet ALKAN
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Hukuk Akademisyeni | Ankara Yıldırım Beyazıt Üniversitesi
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Hukuk alanındaki akademik çalışmalar, güncel gelişmeler ve ders notlarını paylaştığım kişisel blog sayfama hoş geldiniz.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/makaleler" className="btn-primary inline-block">
            Makaleleri İncele
          </Link>
          <Link href="/hakkimda" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 inline-block">
            Hakkımda
          </Link>
        </div>
      </div>
    </section>
  )
}