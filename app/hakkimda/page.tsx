export default function HakkimdaPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Hakkımda</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2>Akademik Geçmiş</h2>
              <p>
                Ankara Yıldırım Beyazıt Üniversitesi Hukuk Fakültesi'nde öğretim üyesi olarak görev yapmaktayım. 
                Hukuk alanında uzun yılları kapsayan akademik deneyimim ile öğrencilerime kaliteli eğitim sunmaya odaklanıyorum.
              </p>

              <h2>Araştırma Alanları</h2>
              <ul>
                <li>Medeni Hukuk</li>
                <li>Borçlar Hukuku</li>
                <li>Kişisel Verilerin Korunması</li>
                <li>Dijital Hukuk</li>
                <li>Hukuk Eğitimi</li>
              </ul>

              <h2>Bu Blog Hakkında</h2>
              <p>
                Bu platformda hukuk alanındaki güncel gelişmeleri, akademik çalışmalarımı ve ders notlarımı 
                paylaşmaktayım. Amacım, hukuk öğrencilerine ve meslek mensuplarına faydalı içerikler sunmak 
                ve hukuki konularda farkındalık yaratmaktır.
              </p>

              <h2>İletişim</h2>
              <p>
                Akademik profililmi ve detaylı bilgilerimi{' '}
                <a 
                  href="https://avesis.aybu.edu.tr/tialkan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  AYBU Avesis sayfamda
                </a>{' '}
                bulabilirsiniz.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h3 className="text-xl font-semibold mb-4">Özet</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Kurum</h4>
                  <p className="text-gray-600">Ankara Yıldırım Beyazıt Üniversitesi</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Fakülte</h4>
                  <p className="text-gray-600">Hukuk Fakültesi</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Uzmanlık Alanları</h4>
                  <p className="text-gray-600">Medeni Hukuk, Borçlar Hukuku, Dijital Hukuk</p>
                </div>
                <div className="pt-4">
                  <a 
                    href="https://avesis.aybu.edu.tr/tialkan" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center inline-block"
                  >
                    Akademik Profil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}