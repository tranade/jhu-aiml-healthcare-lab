import { Metadata } from 'next'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact - JHU AIML Healthcare Lab',
  description: 'Get in touch with our lab for collaborations, research opportunities, and inquiries.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  )
} 