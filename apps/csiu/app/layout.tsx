import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Concerned Scientists @ IU",
  description: "Faculty organization dedicated to promoting scientific integrity and evidence-based policy at Indiana University."
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#A03C30" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}