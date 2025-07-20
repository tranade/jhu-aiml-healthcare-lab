import { Metadata } from 'next'
import Publications from '@/components/Publications'
import PageHeader from '@/components/PageHeader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Publications - JHU AI/ML Healthcare Lab',
  description: 'Browse our latest research papers and publications in AI and healthcare.',
}

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <PageHeader 
        title="Publications"
        description="Our research has been published in top-tier venues including Nature Medicine, JAMA, Science, and other leading journals in AI and healthcare."
      />
      <Publications />
      <Footer />
    </main>
  )
} 