import { getPostsByCategory } from '@/lib/data/posts'
import PostCard from '@/components/PostCard'

export default function MakalelerPage() {
  const articles = getPostsByCategory('makale')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Hukuk Makaleleri</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Güncel hukuki konular, akademik araştırmalar ve derinlemesine analizler
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Henüz makale bulunmamaktadır.</p>
        </div>
      )}
    </div>
  )
}