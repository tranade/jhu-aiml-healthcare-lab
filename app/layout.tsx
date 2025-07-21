import type { Metadata } from 'next'
import { Source_Sans_3, Playfair_Display } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-source-sans'
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'JHU AI/ML Healthcare Lab - Machine Learning, AI, and Healthcare Research',
  description: 'The Machine Learning, AI, and Healthcare Lab at Johns Hopkins University, led by Professor Suchi Saria. Advancing healthcare through innovative AI and machine learning research.',
  keywords: 'machine learning, artificial intelligence, healthcare, JHU, Johns Hopkins, Suchi Saria, research lab',
  authors: [{ name: 'JHU AI/ML Healthcare Lab' }],
  openGraph: {
    title: 'JHU AI/ML Healthcare Lab',
    description: 'Advancing healthcare through innovative AI and machine learning research',
    url: 'https://aiml-healthcare.jhu.edu',
    siteName: 'JHU AI/ML Healthcare Lab',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JHU AI/ML Healthcare Lab',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JHU AI/ML Healthcare Lab',
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
      <body className={`${sourceSans.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
} 