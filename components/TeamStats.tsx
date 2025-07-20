'use client'

import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Globe, TrendingUp, Star } from 'lucide-react'

const stats = [
  {
    icon: Users,
    value: '50+',
    label: 'Team Members',
    description: 'Researchers, students, and staff',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: BookOpen,
    value: '100+',
    label: 'Publications',
    description: 'Peer-reviewed papers and articles',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Award,
    value: '25+',
    label: 'Awards & Grants',
    description: 'NIH, NSF, and industry funding',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Globe,
    value: '15+',
    label: 'Collaborations',
    description: 'Academic and industry partners',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: TrendingUp,
    value: '10+',
    label: 'Active Projects',
    description: 'Ongoing research initiatives',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    icon: Star,
    value: '95%',
    label: 'Success Rate',
    description: 'Project completion rate',
    color: 'from-yellow-500 to-orange-500',
  },
]

const achievements = [
  {
    title: 'NSF CAREER Award',
    recipient: 'Prof. Suchi Saria',
    year: '2023',
    description: 'National Science Foundation Early Career Development Award',
  },
  {
    title: 'Sloan Research Fellowship',
    recipient: 'Prof. Suchi Saria',
    year: '2022',
    description: 'Alfred P. Sloan Foundation Research Fellowship',
  },
  {
    title: 'MIT TR35',
    recipient: 'Prof. Suchi Saria',
    year: '2021',
    description: 'MIT Technology Review 35 Innovators Under 35',
  },
  {
    title: 'Google PhD Fellowship',
    recipient: 'Dr. Sarah Chen',
    year: '2023',
    description: 'Google PhD Fellowship in Machine Learning',
  },
  {
    title: 'NIH K99 Award',
    recipient: 'Dr. Michael Rodriguez',
    year: '2023',
    description: 'NIH Pathway to Independence Award',
  },
  {
    title: 'CDC Fellowship',
    recipient: 'Dr. Emily Watson',
    year: '2022',
    description: 'Centers for Disease Control Fellowship',
  },
]

export default function TeamStats() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Lab Statistics & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our lab has achieved significant milestones in research, funding, and recognition within the AI and healthcare community.
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 card-hover border border-gray-100 text-center"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Recent Awards & Recognition
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="bg-white rounded-xl p-6 card-hover border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-bold text-gray-900">{achievement.title}</h4>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                    {achievement.year}
                  </span>
                </div>
                <p className="text-primary-600 font-semibold mb-2">{achievement.recipient}</p>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Join Our Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Join Our Team
              </h3>
              <p className="text-lg text-primary-100 leading-relaxed mb-6">
                We're always looking for talented researchers, students, and collaborators who are passionate about advancing healthcare through AI and machine learning.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-primary-100">
                  <Star className="h-5 w-5 mr-3" />
                  <span>PhD and Postdoc positions available</span>
                </div>
                <div className="flex items-center text-primary-100">
                  <Star className="h-5 w-5 mr-3" />
                  <span>Research collaborations welcome</span>
                </div>
                <div className="flex items-center text-primary-100">
                  <Star className="h-5 w-5 mr-3" />
                  <span>Industry partnerships encouraged</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4">Open Positions</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>PhD Students</span>
                  <span className="font-bold">3 Positions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Postdoctoral Researchers</span>
                  <span className="font-bold">2 Positions</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Research Scientists</span>
                  <span className="font-bold">1 Position</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Software Engineers</span>
                  <span className="font-bold">2 Positions</span>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full mt-6 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 