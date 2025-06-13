import Link from 'next/link'
import { posts } from '@/lib/data/posts'

// Son 3 yazıyı göster
const recentPosts = posts.slice(0, 3).map(post => ({
  id: parseInt(post.id),
  title: post.title,
  excerpt: post.excerpt,
  date: post.date,
  category: post.category === 'makale' ? 'Makale' : 
           post.category === 'ders-notu' ? 'Ders Notu' : 'Günlük',
  slug: post.slug
}))

export default function RecentPosts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {recentPosts.map((post) => (
        <article key={post.id} className="card p-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
          <h3 className="text-xl font-semibold mb-3">
            <Link href={`/yazilar/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
          <Link 
            href={`/yazilar/${post.slug}`} 
            className="text-primary font-medium hover:text-secondary transition-colors"
          >
            Devamını Oku →
          </Link>
        </article>
      ))}
    </div>
  )
}