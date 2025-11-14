import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ThemeProvider } from '../components/ThemeProvider'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nitesh Kumar | AI Engineer & Full Stack Developer',
  description: 'B.Tech CSE AI Graduate | 200+ LeetCode | Published Research | ML & Web Development Expert',
  keywords: 'full stack developer, ai engineer, machine learning, react, next.js, portfolio, leetcode',
  authors: [{ name: 'Nitesh Kumar' }],
  creator: 'Nitesh Kumar',
  openGraph: {
    title: 'Nitesh Kumar | Portfolio',
    description: 'AI Engineer & Full Stack Developer Portfolio',
    type: 'website',
    url: 'https://nitesh-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nitesh Kumar | Portfolio',
    description: 'AI Engineer & Full Stack Developer Portfolio',
    creator: '@yourusername',
  },
  metadataBase: new URL('https://nitesh-portfolio.vercel.app'),
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
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}