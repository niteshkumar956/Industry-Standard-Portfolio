import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nitesh Kumar | Full Stack Developer & AI Engineer',
  description: 'Portfolio of Nitesh Kumar - B.Tech CSE AI Graduate specialized in Full Stack Development, ML, and Problem Solving',
  keywords: 'full stack developer, ai engineer, machine learning, react, next.js, portfolio',
  openGraph: {
    title: 'Nitesh Kumar Portfolio',
    description: 'Full Stack Developer & AI Engineer Portfolio',
    type: 'website',
    url: 'https://your-domain.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitesh Kumar Portfolio',
    description: 'Full Stack Developer & AI Engineer Portfolio',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}