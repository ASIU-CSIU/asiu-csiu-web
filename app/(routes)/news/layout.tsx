import { getPageMetadata } from "@/lib/metadata"
import { headers } from 'next/headers'

export async function generateMetadata() {
    const headersList = await headers()
    const host = headersList.get('host') || ''
    const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching

    return getPageMetadata("news", domain)
}

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
