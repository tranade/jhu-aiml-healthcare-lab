'use client'

import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, BookOpen, Globe, Star } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Team Members',
    description: 'Interdisciplinary researchers, engineers, and healthcare professionals',
  },
  {
    icon: BookOpen,
    value: '100+',
    label: 'Publications',
    description: 'Peer-reviewed papers in top-tier venues including Nature Medicine, JAMA, Science',
  },
  {
    icon: TrendingUp,
    value: '25+',
    label: 'Research Projects',
    description: 'Active projects spanning clinical decision support to population health',
  },
  {
    icon: Award,
    value: '15+',
    label: 'Awards & Grants',
    description: 'NSF CAREER, Sloan Fellowship, NIH Director\'s New Innovator Award',
  },
]

const awards = [
  {
    title: 'NSF CAREER Award',
    recipient: 'Prof. Suchi Saria',
    year: '2023',
    description: 'National Science Foundation\'s most prestigious award for early-career faculty',
    icon: Star,
  },
  {
    title: 'Sloan Research Fellowship',
    recipient: 'Prof. Suchi Saria',
    year: '2022',
    description: 'Alfred P. Sloan Foundation fellowship recognizing outstanding early-career scientists',
    icon: Star,
  },
  {
    title: 'MIT TR35',
    recipient: 'Prof. Suchi Saria',
    year: '2021',
    description: 'MIT Technology Review\'s 35 Innovators Under 35',
    icon: Star,
  },
  {
    title: 'NIH Director\'s New Innovator Award',
    recipient: 'Prof. Suchi Saria',
    year: '2020',
    description: 'High-risk, high-reward research award from the National Institutes of Health',
    icon: Star,
  },
]

export default function TeamStats() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-max mobile-padding">
        {/* Lab Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Lab Statistics & Impact
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our research has made significant contributions to the field of AI in healthcare, with measurable impact across multiple domains.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="dark-card p-8 text-center card-hover">
                <stat.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-100 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-200 mb-3">{stat.label}</div>
                <p className="text-sm text-gray-400 leading-relaxed">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white glow-border">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Awards & Recognition
              </h3>
              <p className="text-lg text-primary-100 max-w-3xl mx-auto">
                Our lab has received numerous prestigious awards and recognition for our contributions to AI in healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                >
                  <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <award.icon className="h-6 w-6 text-primary-300" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{award.title}</h4>
                        <p className="text-primary-200 text-sm mb-2">{award.recipient}, {award.year}</p>
                        <p className="text-sm text-primary-100 leading-relaxed">{award.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-4">
                  Join Our Team
                </h4>
                <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                  We're always looking for talented researchers, engineers, and healthcare professionals to join our mission of advancing AI in healthcare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Contact Us
                    <Globe className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                  >
                    View Openings
                    <Users className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 