import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { BulletinArticle } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function parseBulletinContent(content: string): BulletinArticle[] {
  if (!content) return []

  // Split by ␞ (group separator) to get individual articles
  const articles = content.split('␞').filter(article => article.trim())

  return articles.map(article => {
    // Split by ␟ (unit separator) to get individual fields
    const fields = article.split('␟')

    return {
      category: fields[0] || '',
      publisher: fields[1] || '',
      published: fields[2] || '',
      title: fields[3] || '',
      link: fields[4] || '',
      description: fields[5] || ''
    }
  })
}

export function formatPublicationDate(dateString: string): string {
  if (!dateString) return 'No date'

  const date = new Date(dateString + 'T00:00:00')
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${month}/${day}/${year}`
}

export function formatPublicationDateLong(dateString: string): string {
  if (!dateString) return 'No date'

  const date = new Date(dateString + 'T00:00:00')
  const year = date.getFullYear()
  const month = date.toLocaleDateString('en-US', { month: 'short' })
  const day = date.getDate()

  return `${month} ${day}, ${year}`
}

export function createSlug(dateString: string): string {
  if (!dateString) return 'no-date'

  const date = new Date(dateString + 'T00:00:00')
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')

  return `${year}-${month}-${day}`
}

export function getCategoryColor(category: string): string {
  switch (category.toLowerCase()) {
    case 'global news':
      return 'bg-science-blue'
    case 'opinion & analysis':
      return 'bg-science-red'
    case 'regional news':
      return 'bg-science-green'
    case 'take action':
      return 'bg-science-black'
    default:
      return 'bg-gray-500'
  }
}
