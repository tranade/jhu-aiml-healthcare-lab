import { Metadata } from 'next'
import Contact from '@/components/Contact'
import PageHeader from '@/components/PageHeader'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact - JHU AI/ML Healthcare Lab',
  description: 'Get in touch with our lab for collaborations, research opportunities, and inquiries.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Navbar />
      <PageHeader 
        title="Get in Touch"
        description="We welcome collaborations, research partnerships, and inquiries from researchers, healthcare providers, and industry partners interested in advancing AI in healthcare."
      />
      <Contact />
      <Footer />
    </main>
  )
} 