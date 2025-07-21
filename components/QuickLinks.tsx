'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, BookOpen, Brain, Mail, MapPin } from 'lucide-react'
import Link from 'next/link'

const quickLinks = [
  {
    title: 'Research Areas',
    description: 'Explore our cutting-edge research in AI and healthcare',
    icon: Brain,
    href: '/research',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
  },
  {
    title: 'Our Team',
    description: 'Meet Professor Suchi Saria and our research team',
    icon: Users,
    href: '/team',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    title: 'Publications',
    description: 'Browse our latest research papers and publications',
    icon: BookOpen,
    href: '/publications',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    title: 'Contact Us',
    description: 'Get in touch for collaborations and inquiries',
    icon: Mail,
    href: '/contact',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
  },
]

export default function QuickLinks() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-max mobile-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Explore Our Lab
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our research areas, meet our team, browse publications, and get in touch with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickLinks.map((link, index) => (
            <motion.div
              key={link.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={link.href}
                className={`block ${link.bgColor} rounded-2xl p-8 card-hover border border-gray-100 h-full`}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${link.color} flex items-center justify-center mb-6`}>
                  <link.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {link.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {link.description}
                </p>
                
                <div className="flex items-center text-primary-600 font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Lab Location Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Visit Our Lab
              </h3>
              <p className="text-lg text-primary-100 leading-relaxed mb-6">
                Located in Malone Hall at Johns Hopkins University, our lab is at the heart of innovation in healthcare AI research.
              </p>
              <div className="flex items-center text-primary-100 mb-4">
                <MapPin className="h-5 w-5 mr-3" />
                <span>Malone Hall, Johns Hopkins University</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Directions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4">Lab Hours</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Monday - Friday</span>
                  <span className="font-bold">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Saturday</span>
                  <span className="font-bold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Sunday</span>
                  <span className="font-bold">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 