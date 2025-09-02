import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Advocates for Science @ IU",
  description: "Student affiliate of Concerned Scientists @ IU, working to promote scientific integrity and evidence-based decision making in policy and society."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#002F5F" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
