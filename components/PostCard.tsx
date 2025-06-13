import Link from 'next/link'
import { Post } from '@/types'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
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
    <article className="card p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className={`${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm font-medium`}>
          {getCategoryLabel(post.category)}
        </span>
        <span className="text-sm text-gray-500">{post.readTime} dk okuma</span>
      </div>
      
      <h3 className="text-xl font-semibold mb-3 flex-grow">
        <Link href={`/yazilar/${post.slug}`} className="hover:text-primary transition-colors">
          {post.title}
        </Link>
      </h3>
      
      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
      
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200">
        <div className="flex flex-wrap gap-1">
          {post.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
      
      <Link 
        href={`/yazilar/${post.slug}`} 
        className="text-primary font-medium hover:text-secondary transition-colors mt-3 inline-block"
      >
        Devamını Oku →
      </Link>
    </article>
  )
}