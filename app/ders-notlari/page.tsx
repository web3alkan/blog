import { getPostsByCategory } from '@/lib/data/posts'
import PostCard from '@/components/PostCard'

export default function DersNotlariPage() {
  const courseNotes = getPostsByCategory('ders-notu')

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Ders Notları</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Hukuk derslerine yönelik kapsamlı notlar ve öğretim materyalleri
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courseNotes.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
      
      {courseNotes.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Henüz ders notu bulunmamaktadır.</p>
        </div>
      )}
    </div>
  )
}