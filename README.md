# Tarık İsmet ALKAN - Hukuk Blog

Modern ve profesyonel bir blog sitesi - hukuk makaleleri, ders notları ve günlük yazılar için tasarlanmıştır.

## Özellikler

- 🎨 Modern ve responsive tasarım
- 📚 Makale yönetim sistemi
- 🎓 Ders notları bölümü
- ✍️ Günlük yazı girişleri
- 🔍 Kategori bazlı filtreleme
- 📱 Mobil uyumlu
- ⚡ Next.js 15 ile hızlı performans
- 🎯 SEO optimizasyonu

## Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Content**: Markdown desteği
- **Icons**: Emoji tabanlı görsel öğeler

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

3. Tarayıcıda `http://localhost:3000` adresini açın

## Proje Yapısı

```
blog/
├── app/                    # Next.js App Router
│   ├── makaleler/         # Makaleler sayfası
│   ├── ders-notlari/      # Ders notları sayfası
│   ├── gunluk/            # Günlük yazılar sayfası
│   ├── yazilar/[slug]/    # Dinamik yazı sayfaları
│   ├── hakkimda/          # Hakkımda sayfası
│   ├── layout.tsx         # Ana layout
│   └── page.tsx           # Ana sayfa
├── components/            # React bileşenleri
├── lib/                   # Yardımcı fonksiyonlar ve veri
├── types/                 # TypeScript tip tanımları
└── public/               # Statik dosyalar
```

## İçerik Yönetimi

İçerikler `lib/data/posts.ts` dosyasında yönetilmektedir. Yeni içerik eklemek için:

1. `posts` dizisine yeni post objesi ekleyin
2. Gerekli alanları doldurun (title, content, category, tags, vs.)
3. Markdown formatında içerik yazın

## Kategoriler

- **Makaleler**: Akademik makaleler ve derinlemesine analizler
- **Ders Notları**: Eğitim materyalleri ve ders içerikleri  
- **Günlük**: Kısa yazılar ve güncel değerlendirmeler

## Komutlar

- `npm run dev` - Geliştirme sunucusu
- `npm run build` - Prodüksiyon build
- `npm run start` - Prodüksiyon sunucusu
- `npm run lint` - Kod kontrolü

## Kişiselleştirme

- Renkler ve tema: `tailwind.config.ts`
- Global stiller: `app/globals.css`
- Site metadata: `app/layout.tsx`
- İçerik verisi: `lib/data/posts.ts`

## Katkıda Bulunma

Bu proje Tarık İsmet ALKAN'ın kişisel blog sitesi içindir.

## Lisans

Bu proje özel mülkiyettedir ve telif hakları saklıdır.