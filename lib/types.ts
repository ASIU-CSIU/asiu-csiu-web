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

export interface Event {
  _id: string
  title: string
  subtitle: string
  description: string
  date: string
  startTime: string
  endTime: string
  location: string
  locationUrl: string
  audience: string[]
  participantCount?: number
  tags: string[]
  btnText: string
  btnUrl: string
}
