import { Metadata } from 'next'
import Team from '@/components/Team'
import TeamStats from '@/components/TeamStats'
import PageHeader from '@/components/PageHeader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Team - JHU AI/ML Healthcare Lab',
  description: 'Meet our interdisciplinary team of researchers, engineers, and healthcare professionals.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <PageHeader 
        title="Meet Our Team"
        description="Our interdisciplinary team brings together expertise in machine learning, computer science, medicine, and healthcare analytics to advance the field of AI in healthcare."
      />
      <Team />
      <TeamStats />
      <Footer />
    </main>
  )
} 