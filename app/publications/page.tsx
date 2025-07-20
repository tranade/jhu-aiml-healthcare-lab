import { Metadata } from 'next'
import Publications from '@/components/Publications'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Publications - JHU AIML Healthcare Lab',
  description: 'Browse our latest research papers and publications in AI and healthcare.',
}

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <Publications />
      <Footer />
    </main>
  )
} 