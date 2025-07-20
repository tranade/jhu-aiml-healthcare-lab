import { Metadata } from 'next'
import Contact from '@/components/Contact'
import ContactMap from '@/components/ContactMap'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us - JHU AIML Healthcare Lab',
  description: 'Get in touch with the JHU AIML Healthcare Lab for collaborations, inquiries, or to learn more about our research.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Contact />
      <ContactMap />
      <Footer />
    </main>
  )
} 