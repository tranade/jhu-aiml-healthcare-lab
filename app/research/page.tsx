import { Metadata } from 'next'
import ResearchAreas from '@/components/ResearchAreas'
import ResearchProjects from '@/components/ResearchProjects'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Research Areas - JHU AIML Healthcare Lab',
  description: 'Explore our cutting-edge research in machine learning, AI, and healthcare at Johns Hopkins University.',
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ResearchAreas />
      <ResearchProjects />
      <Footer />
    </main>
  )
} 