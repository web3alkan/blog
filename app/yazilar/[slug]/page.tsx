import { getPostBySlug, posts } from '@/lib/data/posts'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'

interface PostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'makale':
        return 'Makale'
      case 'ders-notu':
        return 'Ders Notu'
      case 'gunluk':
        return 'Günlük'
      default:
        return category
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'makale':
        return 'bg-blue-500'
      case 'ders-notu':
        return 'bg-green-500'
      case 'gunluk':
        return 'bg-purple-500'
      default:
        return 'bg-gray-500'
    }
  }

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-primary hover:text-secondary transition-colors mb-4 inline-block">
            ← Ana Sayfaya Dön
          </Link>
        </div>

        <header className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <span className={`${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
              {getCategoryLabel(post.category)}
            </span>
            <span className="text-gray-500">{post.readTime} dakika okuma süresi</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex items-center justify-between text-gray-600 mb-6">
            <div>
              <span className="font-medium">{post.author}</span>
              <span className="mx-2">•</span>
              <span>{post.date}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-a:text-primary hover:prose-a:text-secondary prose-pre:bg-gray-100 prose-pre:text-gray-800">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <p className="text-gray-600 mb-4">Bu yazı faydalı oldu mu?</p>
            <Link href="/" className="btn-primary">
              Diğer Yazıları İncele
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}