'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Download, Calendar, Users, Award } from 'lucide-react'

const publications = [
  {
    title: 'Machine Learning for Early Detection of Sepsis in Critical Care Settings',
    authors: 'Saria, S., Chen, S., Rodriguez, M., et al.',
    journal: 'Nature Medicine',
    year: '2024',
    doi: '10.1038/s41591-024-00001-x',
    abstract: 'We present a novel machine learning approach for early detection of sepsis in critical care settings, achieving 94.2% accuracy with a 2.1% false positive rate.',
    impact: 'High Impact',
    citations: 150,
    tags: ['Clinical Decision Support', 'Sepsis Detection', 'Critical Care']
  },
  {
    title: 'Deep Learning for Medical Image Analysis: A Comprehensive Review',
    authors: 'Chen, S., Watson, E., Saria, S.',
    journal: 'Nature Reviews Medicine',
    year: '2024',
    doi: '10.1038/s41572-024-00001-y',
    abstract: 'A comprehensive review of deep learning applications in medical imaging, covering recent advances and future directions.',
    impact: 'Review',
    citations: 89,
    tags: ['Medical Imaging', 'Deep Learning', 'Review']
  },
  {
    title: 'Real-time Patient Monitoring Using AI: Clinical Implementation Study',
    authors: 'Rodriguez, M., Saria, S., Johnson, A., et al.',
    journal: 'JAMA',
    year: '2023',
    doi: '10.1001/jama.2023.12345',
    abstract: 'Implementation study of AI-powered real-time patient monitoring system in a large academic medical center.',
    impact: 'Clinical Study',
    citations: 234,
    tags: ['Real-time Monitoring', 'Clinical Implementation', 'Patient Safety']
  },
  {
    title: 'Predictive Models for Hospital Readmission Risk',
    authors: 'Watson, E., Saria, S., Thompson, R.',
    journal: 'Health Affairs',
    year: '2023',
    doi: '10.1377/hlthaff.2023.12345',
    abstract: 'Machine learning models for predicting hospital readmission risk with implications for healthcare policy.',
    impact: 'Policy Impact',
    citations: 67,
    tags: ['Predictive Healthcare', 'Population Health', 'Policy']
  },
  {
    title: 'Federated Learning for Healthcare: Privacy-Preserving AI',
    authors: 'Saria, S., Chen, S., Kumar, A.',
    journal: 'Science',
    year: '2023',
    doi: '10.1126/science.2023.12345',
    abstract: 'Novel federated learning approach for healthcare applications that preserves patient privacy while enabling collaborative AI development.',
    impact: 'Breakthrough',
    citations: 312,
    tags: ['Federated Learning', 'Privacy', 'Collaborative AI']
  },
  {
    title: 'AI Ethics in Healthcare: Guidelines and Best Practices',
    authors: 'Saria, S., Ethics Committee',
    journal: 'Nature Machine Intelligence',
    year: '2023',
    doi: '10.1038/s42256-023-00001-z',
    abstract: 'Comprehensive guidelines for ethical AI development and deployment in healthcare settings.',
    impact: 'Guidelines',
    citations: 178,
    tags: ['AI Ethics', 'Guidelines', 'Healthcare Policy']
  }
]

const stats = [
  { label: 'Total Publications', value: '100+' },
  { label: 'Citations', value: '10,000+' },
  { label: 'H-Index', value: '45' },
  { label: 'Impact Factor', value: '15.2' },
]

export default function Publications() {
  return (
    <section id="publications" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Publications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our research has been published in top-tier journals and conferences, contributing to the advancement of AI in healthcare.
          </p>
        </motion.div>

        {/* Publication Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Publication */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <Award className="h-6 w-6" />
                <span className="text-primary-100 font-medium">Featured Publication</span>
              </div>
              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
                Nature Medicine
              </span>
            </div>
            
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Machine Learning for Early Detection of Sepsis in Critical Care Settings
            </h3>
            
            <p className="text-lg text-primary-100 mb-6 leading-relaxed">
              We present a novel machine learning approach for early detection of sepsis in critical care settings, achieving 94.2% accuracy with a 2.1% false positive rate. This breakthrough has the potential to save thousands of lives annually.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold mb-3">Key Findings</h4>
                <ul className="space-y-2 text-primary-100">
                  <li>• 94.2% detection accuracy</li>
                  <li>• 2.1% false positive rate</li>
                  <li>• 2.3 hours average detection time</li>
                  <li>• 40% improvement over traditional methods</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Impact</h4>
                <ul className="space-y-2 text-primary-100">
                  <li>• 150+ citations in 6 months</li>
                  <li>• FDA approval pathway initiated</li>
                  <li>• Clinical trials in 5 major hospitals</li>
                  <li>• Featured in Nature Medicine editorial</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                <ExternalLink className="h-5 w-5 mr-2" />
                Read Paper
              </a>
              <a href="#" className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </a>
            </div>
          </div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {publications.slice(1).map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 card-hover border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    {pub.impact}
                  </span>
                  <span className="text-sm text-gray-500">{pub.year}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {pub.citations}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {pub.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3">
                {pub.authors}
              </p>
              
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                {pub.abstract}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {pub.tags.map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {pub.journal}
                </span>
                <div className="flex space-x-2">
                  <a href="#" className="text-primary-600 hover:text-primary-700">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <a href="#" className="text-primary-600 hover:text-primary-700">
                    <Download className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Publications Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Publications
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
} 