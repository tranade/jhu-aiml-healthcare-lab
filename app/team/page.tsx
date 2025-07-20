import { Metadata } from 'next'
import Team from '@/components/Team'
import TeamStats from '@/components/TeamStats'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Our Team - JHU AIML Healthcare Lab',
  description: 'Meet Professor Suchi Saria and our interdisciplinary team of researchers at the JHU AIML Healthcare Lab.',
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Team />
      <TeamStats />
      <Footer />
    </main>
  )
} 