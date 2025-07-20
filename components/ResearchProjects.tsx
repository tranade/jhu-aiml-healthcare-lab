'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Users, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: 'Early Sepsis Detection System',
    description: 'Real-time machine learning system for early detection of sepsis in critical care settings using continuous monitoring data.',
    status: 'Active',
    statusColor: 'bg-green-500',
    team: 'Dr. Sarah Johnson, Dr. Michael Chen',
    timeline: '2023 - 2025',
    funding: 'NIH R01 Grant',
    impact: 'High',
    tags: ['Clinical Decision Support', 'Critical Care', 'Real-time Monitoring'],
    link: '#',
  },
  {
    title: 'Predictive Healthcare Analytics Platform',
    description: 'Comprehensive platform for predicting patient outcomes and treatment responses across multiple disease domains.',
    status: 'Active',
    statusColor: 'bg-green-500',
    team: 'Prof. Suchi Saria, Dr. Emily Rodriguez',
    timeline: '2022 - 2026',
    funding: 'NSF CAREER Award',
    impact: 'High',
    tags: ['Predictive Modeling', 'Personalized Medicine', 'Deep Learning'],
    link: '#',
  },
  {
    title: 'Federated Learning for Healthcare',
    description: 'Privacy-preserving AI development through federated learning across multiple healthcare institutions.',
    status: 'Active',
    statusColor: 'bg-green-500',
    team: 'Dr. Michael Chen, Dr. Sarah Johnson',
    timeline: '2023 - 2025',
    funding: 'NIH Director\'s New Innovator Award',
    impact: 'Breakthrough',
    tags: ['Federated Learning', 'Privacy', 'Collaborative AI'],
    link: '#',
  },
  {
    title: 'Population Health Intelligence',
    description: 'Large-scale analysis of population health data for disease prevention and public health interventions.',
    status: 'Planning',
    statusColor: 'bg-yellow-500',
    team: 'Dr. Emily Rodriguez, Prof. Suchi Saria',
    timeline: '2024 - 2027',
    funding: 'CDC Grant',
    impact: 'Policy',
    tags: ['Population Health', 'Public Health', 'Epidemiology'],
    link: '#',
  },
  {
    title: 'Patient Safety Monitoring System',
    description: 'AI system for continuous monitoring of patient safety and early detection of adverse events.',
    status: 'Active',
    statusColor: 'bg-green-500',
    team: 'Dr. Sarah Johnson, Dr. Michael Chen',
    timeline: '2023 - 2025',
    funding: 'AHRQ Grant',
    impact: 'Clinical',
    tags: ['Patient Safety', 'Real-time Monitoring', 'Quality Improvement'],
    link: '#',
  },
  {
    title: 'Interpretable AI for Clinical Decision Support',
    description: 'Development of interpretable AI systems for clinical decision support with transparency and trust.',
    status: 'Active',
    statusColor: 'bg-green-500',
    team: 'Prof. Suchi Saria, Dr. Sarah Johnson',
    timeline: '2022 - 2025',
    funding: 'Sloan Research Fellowship',
    impact: 'High',
    tags: ['Interpretable AI', 'Clinical Decision Support', 'Transparency'],
    link: '#',
  },
]

export default function ResearchProjects() {
  return (
    <section className="section-padding bg-gray-950">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-100 mb-6">
            Current Research Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our lab is actively working on cutting-edge research projects that push the boundaries of AI in healthcare.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="dark-card p-8 h-full card-hover">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${project.statusColor}`}>
                    {project.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.impact === 'High' ? 'bg-green-900/50 text-green-300 border border-green-500/30' :
                    project.impact === 'Breakthrough' ? 'bg-purple-900/50 text-purple-300 border border-purple-500/30' :
                    project.impact === 'Policy' ? 'bg-orange-900/50 text-orange-300 border border-orange-500/30' :
                    'bg-blue-900/50 text-blue-300 border border-blue-500/30'
                  }`}>
                    {project.impact} Impact
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-400 text-sm">
                    <Users className="h-4 w-4 mr-3" />
                    <span>{project.team}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-3" />
                    <span>{project.timeline}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <TrendingUp className="h-4 w-4 mr-3" />
                    <span>{project.funding}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 text-white glow-border">
            <h3 className="text-2xl font-bold mb-4">
              Collaborate With Us
            </h3>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              Interested in collaborating on research projects? We welcome partnerships with healthcare institutions, industry partners, and fellow researchers.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 