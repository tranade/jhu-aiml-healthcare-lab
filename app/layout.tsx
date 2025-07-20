import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JHU AIML Healthcare Lab - Machine Learning, AI, and Healthcare Research',
  description: 'The Machine Learning, AI, and Healthcare Lab at Johns Hopkins University, led by Professor Suchi Saria. Advancing healthcare through innovative AI and machine learning research.',
  keywords: 'machine learning, artificial intelligence, healthcare, JHU, Johns Hopkins, Suchi Saria, research lab',
  authors: [{ name: 'JHU AIML Healthcare Lab' }],
  openGraph: {
    title: 'JHU AIML Healthcare Lab',
    description: 'Advancing healthcare through innovative AI and machine learning research',
    url: 'https://aiml-healthcare.jhu.edu',
    siteName: 'JHU AIML Healthcare Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JHU AIML Healthcare Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JHU AIML Healthcare Lab',
    description: 'Advancing healthcare through innovative AI and machine learning research',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 