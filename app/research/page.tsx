import { Metadata } from 'next'
import ResearchAreas from '@/components/ResearchAreas'
import ResearchProjects from '@/components/ResearchProjects'
import PageHeader from '@/components/PageHeader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Research - JHU AI/ML Healthcare Lab',
  description: 'Explore our cutting-edge research in AI and healthcare at Johns Hopkins University.',
}

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <PageHeader 
        title="Our Research Areas"
        description="We focus on cutting-edge research at the intersection of artificial intelligence, machine learning, and healthcare to address the most pressing challenges in modern medicine."
      />
      <ResearchAreas />
      <ResearchProjects />
      <Footer />
    </main>
  )
} 