import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("getInvolved")

export default function GetInvolvedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
