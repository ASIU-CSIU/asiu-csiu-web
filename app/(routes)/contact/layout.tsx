import { getPageMetadata, getStructuredData } from "@/lib/metadata"
import { headers } from 'next/headers'

export async function generateMetadata() {
    const headersList = await headers()
    const host = headersList.get('host') || ''
    const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching

    return getPageMetadata("contact", domain)
}

export default async function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const headersList = await headers()
    const host = headersList.get('host') || ''
    const domain = host.replace(/^www\./, '') // Remove www prefix for domain matching
    const structuredData = getStructuredData("contact", domain)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData)
                }}
            />
            {children}
        </>
    )
}
