'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Award, Users, Calendar, TrendingUp } from 'lucide-react'

const projects = [
  {
    title: 'Early Sepsis Detection System',
    description: 'AI-powered system for early detection of sepsis in critical care settings with 94.2% accuracy.',
    status: 'Active',
    funding: 'NIH R01 Grant',
    team: '8 Researchers',
    duration: '2022-2025',
    impact: 'High',
    tags: ['Clinical Decision Support', 'Critical Care', 'Real-time Monitoring'],
    metrics: {
      accuracy: '94.2%',
      patients: '10,000+',
      hospitals: '5',
      publications: '3',
    }
  },
  {
    title: 'Predictive Healthcare Analytics',
    description: 'Machine learning models for predicting patient outcomes and treatment responses.',
    status: 'Active',
    funding: 'NSF CAREER Award',
    team: '6 Researchers',
    duration: '2023-2026',
    impact: 'High',
    tags: ['Predictive Modeling', 'Personalized Medicine', 'EHR Analytics'],
    metrics: {
      accuracy: '89.7%',
      patients: '50,000+',
      hospitals: '12',
      publications: '5',
    }
  },
  {
    title: 'Federated Learning for Healthcare',
    description: 'Privacy-preserving AI development through federated learning across multiple institutions.',
    status: 'Active',
    funding: 'DARPA Grant',
    team: '10 Researchers',
    duration: '2023-2027',
    impact: 'Breakthrough',
    tags: ['Federated Learning', 'Privacy', 'Collaborative AI'],
    metrics: {
      institutions: '15',
      dataSize: '2TB+',
      privacy: '100%',
      publications: '2',
    }
  },
  {
    title: 'Population Health AI',
    description: 'Large-scale analysis of population health data for disease prevention and public health.',
    status: 'Active',
    funding: 'CDC Partnership',
    team: '4 Researchers',
    duration: '2024-2026',
    impact: 'Policy',
    tags: ['Population Health', 'Epidemiology', 'Public Health'],
    metrics: {
      population: '1M+',
      regions: '8',
      diseases: '25+',
      publications: '4',
    }
  },
  {
    title: 'Medical Imaging AI',
    description: 'Deep learning approaches for medical image analysis and diagnosis.',
    status: 'Active',
    funding: 'Industry Partnership',
    team: '7 Researchers',
    duration: '2023-2025',
    impact: 'Clinical',
    tags: ['Medical Imaging', 'Deep Learning', 'Diagnosis'],
    metrics: {
      accuracy: '92.1%',
      images: '100K+',
      modalities: '5',
      publications: '6',
    }
  },
  {
    title: 'AI Ethics in Healthcare',
    description: 'Developing guidelines and frameworks for ethical AI deployment in healthcare settings.',
    status: 'Active',
    funding: 'NIH Ethics Grant',
    team: '5 Researchers',
    duration: '2024-2027',
    impact: 'Guidelines',
    tags: ['AI Ethics', 'Healthcare Policy', 'Guidelines'],
    metrics: {
      guidelines: '15+',
      institutions: '20+',
      adoption: '85%',
      publications: '3',
    }
  },
]

export default function ResearchProjects() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Current Research Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our lab is actively working on cutting-edge research projects that address real-world healthcare challenges through innovative AI and machine learning solutions.
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
              className="bg-white rounded-2xl p-8 card-hover border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {project.status}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.impact === 'High' ? 'bg-blue-100 text-blue-700' :
                    project.impact === 'Breakthrough' ? 'bg-purple-100 text-purple-700' :
                    project.impact === 'Policy' ? 'bg-orange-100 text-orange-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {project.impact} Impact
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-sm text-gray-600">
                  <Award className="h-4 w-4 mr-2 text-primary-600" />
                  {project.funding}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Users className="h-4 w-4 mr-2 text-primary-600" />
                  {project.team}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2 text-primary-600" />
                  {project.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <TrendingUp className="h-4 w-4 mr-2 text-primary-600" />
                  {project.metrics.publications} Papers
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-primary-600">{value}</div>
                      <div className="text-xs text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                    </div>
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
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Interested in Collaborating?
            </h3>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              We're always looking for new collaborators and research partners. Whether you're a researcher, healthcare provider, or industry partner, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get in Touch
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/publications"
                className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Publications
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 