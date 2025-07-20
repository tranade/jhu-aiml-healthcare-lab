import { Metadata } from 'next'
import Team from '@/components/Team'
import TeamStats from '@/components/TeamStats'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Team - JHU AIML Healthcare Lab',
  description: 'Meet our interdisciplinary team of researchers, engineers, and healthcare professionals.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <Team />
      <TeamStats />
      <Footer />
    </main>
  )
} 