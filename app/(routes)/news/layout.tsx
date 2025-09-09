import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("news")

export default function NewsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
