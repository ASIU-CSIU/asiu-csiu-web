import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans } from "next/font/google"
import "./globals.css"

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Advocates for Science @ IU",
  description:
    "Student affiliate of Concerned Scientists @ IU - Advocating for evidence-based policy and scientific integrity",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
