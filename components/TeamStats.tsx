'use client'

import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Globe, Calendar, MapPin } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Team Members',
    description: 'Interdisciplinary researchers, engineers, and healthcare professionals',
  },
  {
    icon: Award,
    value: '100+',
    label: 'Publications',
    description: 'Peer-reviewed papers in top-tier venues including Nature Medicine, JAMA, ICML',
  },
  {
    icon: TrendingUp,
    value: '25+',
    label: 'Research Projects',
    description: 'Active projects spanning clinical decision support to population health',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Collaborations',
    description: 'Partnerships with hospitals, research institutions, and industry',
  },
]

const highlights = [
  {
    title: 'NSF CAREER Award',
    description: 'Recognizing early-career excellence in research and education',
    year: '2023',
  },
  {
    title: 'Sloan Research Fellowship',
    description: 'Prestigious fellowship for outstanding early-career scientists',
    year: '2022',
  },
  {
    title: 'MIT TR35',
    description: 'Innovator under 35 making significant contributions to technology',
    year: '2021',
  },
  {
    title: 'NIH Director\'s New Innovator Award',
    description: 'Supporting exceptionally creative early-career investigators',
    year: '2020',
  },
]

export default function TeamStats() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Lab Statistics & Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our lab has grown significantly over the years, with numerous publications, awards, and impactful research contributions to the field of healthcare AI.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="dark-card p-6 text-center card-hover h-full">
                <stat.icon className="h-12 w-12 text-primary-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-100 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-100 mb-3">{stat.label}</div>
                <p className="text-sm text-gray-300">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Awards & Recognition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-100 mb-8 text-center">
            Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="dark-card p-6 card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-100">{highlight.title}</h4>
                    <span className="px-3 py-1 bg-primary-900/50 text-primary-300 text-sm rounded-full border border-primary-500/30">
                      {highlight.year}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lab Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white glow-border">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                  Join Our Team
                </h3>
                <p className="text-lg text-primary-100 leading-relaxed mb-6">
                  We're always looking for talented researchers, engineers, and healthcare professionals who are passionate about advancing AI in healthcare. Join us in making a difference.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-primary-100">
                    <MapPin className="h-5 w-5 mr-3" />
                    <span>Malone Hall, Johns Hopkins University</span>
                  </div>
                  <div className="flex items-center text-primary-100">
                    <Calendar className="h-5 w-5 mr-3" />
                    <span>Open positions for Postdocs, PhD students, and Research Scientists</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-4">Current Openings</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span>Postdoctoral Fellow</span>
                    <span className="font-bold">2 positions</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>PhD Students</span>
                    <span className="font-bold">3 positions</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Research Scientist</span>
                    <span className="font-bold">1 position</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Software Engineer</span>
                    <span className="font-bold">2 positions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 