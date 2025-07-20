'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Users, Award } from 'lucide-react'

const projects = [
  {
    title: 'Early Sepsis Detection System',
    description: 'Machine learning system for real-time detection of sepsis in ICU patients using continuous monitoring data.',
    status: 'Active',
    team: 'Dr. Saria, Dr. Johnson, Dr. Chen',
    funding: 'NIH R01 Grant',
    timeline: '2023-2026',
    impact: 'Potential to save 500+ lives annually',
    tags: ['Clinical Trials', 'FDA Approval', 'Real-time Monitoring'],
  },
  {
    title: 'Predictive Healthcare Analytics',
    description: 'AI-powered platform for predicting patient outcomes and treatment responses across multiple disease domains.',
    status: 'Active',
    team: 'Dr. Saria, Dr. Williams, Dr. Rodriguez',
    funding: 'NSF CAREER Award',
    timeline: '2022-2027',
    impact: 'Improving treatment decisions for 10,000+ patients',
    tags: ['Predictive Modeling', 'Personalized Medicine', 'Clinical Decision Support'],
  },
  {
    title: 'Population Health Intelligence',
    description: 'Large-scale analysis of population health data for disease prevention and public health interventions.',
    status: 'Planning',
    team: 'Dr. Saria, Dr. Thompson, Dr. Lee',
    funding: 'CDC Partnership',
    timeline: '2024-2028',
    impact: 'Population-level health insights for 5M+ individuals',
    tags: ['Population Health', 'Public Health', 'Data Analytics'],
  },
  {
    title: 'Patient Safety Monitoring',
    description: 'AI system for continuous monitoring of patient safety and early detection of adverse events.',
    status: 'Active',
    team: 'Dr. Saria, Dr. Garcia, Dr. Kim',
    funding: 'AHRQ Grant',
    timeline: '2023-2025',
    impact: 'Reducing adverse events by 30%',
    tags: ['Patient Safety', 'Quality Improvement', 'Real-time Alerts'],
  },
]

export default function ResearchProjects() {
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
            Current Research Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our active research projects span multiple domains of healthcare AI, from clinical decision support to population health analytics.
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
                  <h3 className="text-xl font-bold text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active' 
                      ? 'bg-green-900/50 text-green-300 border border-green-500/30'
                      : 'bg-yellow-900/50 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-300">
                    <Users className="h-4 w-4 mr-3 text-primary-400" />
                    <span className="text-sm">{project.team}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Award className="h-4 w-4 mr-3 text-primary-400" />
                    <span className="text-sm">{project.funding}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Calendar className="h-4 w-4 mr-3 text-primary-400" />
                    <span className="text-sm">{project.timeline}</span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-100 mb-3">Expected Impact</h4>
                  <p className="text-sm text-gray-300">{project.impact}</p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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
              Interested in Collaborating?
            </h3>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              We're always looking for partners in healthcare, technology, and research. Let's work together to advance healthcare AI.
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