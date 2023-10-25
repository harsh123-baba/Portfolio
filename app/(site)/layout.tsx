import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import '../globals.css'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Harshit's Portfolio",
  description: 'Built on NextJS + Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        
          <header>
            <Link 
              href="/" 
              className = "bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
                Harshit
            </Link>
          </header>
        <main className='py-20'>
          {children}
        </main>
        
        
        </body>
    </html>
  )
}
