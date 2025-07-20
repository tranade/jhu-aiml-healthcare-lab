import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ResearchAreas from '@/components/ResearchAreas'
import Team from '@/components/Team'
import Publications from '@/components/Publications'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'JHU AIML Healthcare Lab - Advancing Healthcare Through AI',
  description: 'The Machine Learning, AI, and Healthcare Lab at Johns Hopkins University, led by Professor Suchi Saria. Pioneering research in healthcare AI and machine learning.',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ResearchAreas />
      <Team />
      <Publications />
      <Contact />
      <Footer />
    </main>
  )
} 