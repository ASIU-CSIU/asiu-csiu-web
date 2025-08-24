export interface CommitteeChair {
  _id: string
  name: string
  role: string
  bio: string
  email?: string
  tags?: string[]
  socialLinks?: string[]
  image?: any
  imageUrl?: string
}

export interface FacultyAdvisor {
  _id: string
  name: string
  role: string
  bio: string
  email?: string
  tags?: string[]
  socialLinks?: string[]
  image?: any
  imageUrl?: string
}

export interface BulletinArticle {
  category: string
  publisher: string
  published: string
  title: string
  link: string
  description: string
}

export interface NewsBulletin {
  _id: string
  publication: string
  content: string
  articles?: BulletinArticle[]
}
