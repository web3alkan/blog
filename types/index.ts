export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  category: 'makale' | 'ders-notu' | 'gunluk'
  tags: string[]
  slug: string
  author: string
  readTime: number
}

export interface CourseNote {
  id: string
  title: string
  course: string
  semester: string
  content: string
  downloadUrl?: string
  lastUpdated: string
}