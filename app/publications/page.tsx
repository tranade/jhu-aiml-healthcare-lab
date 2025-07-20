import { Metadata } from 'next'
import Publications from '@/components/Publications'
import PublicationFilters from '@/components/PublicationFilters'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Publications - JHU AIML Healthcare Lab',
  description: 'Browse our latest research papers, publications, and academic contributions in AI and healthcare.',
}

export default function PublicationsPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Publications />
      <PublicationFilters />
      <Footer />
    </main>
  )
} 