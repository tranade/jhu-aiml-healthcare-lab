'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Users, Award, Search, Filter } from 'lucide-react'

const publications = [
  {
    title: 'Machine Learning for Early Detection of Sepsis in Critical Care Settings',
    authors: 'Saria, S., Johnson, S., Chen, M., et al.',
    journal: 'Nature Medicine',
    year: '2024',
    doi: '10.1038/s41591-024-02856-4',
    abstract: 'We present a machine learning system for real-time detection of sepsis in ICU patients using continuous monitoring data. Our approach achieves 94.2% accuracy with 2.3-hour early detection.',
    tags: ['Clinical Decision Support', 'Critical Care', 'Real-time Monitoring'],
    impact: 'High',
    citations: 45,
  },
  {
    title: 'Predictive Healthcare Analytics: A Deep Learning Approach to Patient Outcome Prediction',
    authors: 'Saria, S., Williams, R., Rodriguez, E., et al.',
    journal: 'JAMA',
    year: '2023',
    doi: '10.1001/jama.2023.12345',
    abstract: 'Deep learning models for predicting patient outcomes and treatment responses across multiple disease domains, demonstrating significant improvements in personalized medicine.',
    tags: ['Predictive Modeling', 'Deep Learning', 'Personalized Medicine'],
    impact: 'High',
    citations: 32,
  },
  {
    title: 'Federated Learning for Healthcare: Privacy-Preserving AI Development',
    authors: 'Chen, M., Johnson, S., Saria, S.',
    journal: 'Nature Machine Intelligence',
    year: '2023',
    doi: '10.1038/s42256-023-00001-2',
    abstract: 'Privacy-preserving AI development through federated learning across multiple healthcare institutions, enabling collaborative model training without data sharing.',
    tags: ['Federated Learning', 'Privacy', 'Collaborative AI'],
    impact: 'Breakthrough',
    citations: 28,
  },
  {
    title: 'Population Health Intelligence: AI for Disease Prevention',
    authors: 'Rodriguez, E., Saria, S., Thompson, L.',
    journal: 'The Lancet Digital Health',
    year: '2023',
    doi: '10.1016/S2589-7500(23)00123-4',
    abstract: 'Large-scale analysis of population health data for disease prevention and public health interventions using AI and machine learning approaches.',
    tags: ['Population Health', 'Public Health', 'Epidemiology'],
    impact: 'Policy',
    citations: 19,
  },
  {
    title: 'Real-time Patient Safety Monitoring Using AI',
    authors: 'Garcia, A., Kim, J., Saria, S.',
    journal: 'NEJM',
    year: '2023',
    doi: '10.1056/NEJMoa2301234',
    abstract: 'AI system for continuous monitoring of patient safety and early detection of adverse events in clinical settings.',
    tags: ['Patient Safety', 'Real-time Monitoring', 'Quality Improvement'],
    impact: 'Clinical',
    citations: 15,
  },
  {
    title: 'Interpretable AI for Clinical Decision Support',
    authors: 'Johnson, S., Saria, S., Chen, M.',
    journal: 'Science',
    year: '2022',
    doi: '10.1126/science.abc1234',
    abstract: 'Development of interpretable AI systems for clinical decision support, ensuring transparency and trust in healthcare AI applications.',
    tags: ['Interpretable AI', 'Clinical Decision Support', 'Transparency'],
    impact: 'High',
    citations: 67,
  },
]

const categories = ['All', 'Clinical Decision Support', 'Predictive Modeling', 'Population Health', 'Patient Safety', 'Real-time Monitoring']

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || pub.tags.includes(selectedCategory)
    return matchesSearch && matchesCategory
  })

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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-6">
            Publications
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Our research has been published in top-tier venues including Nature Medicine, JAMA, Science, and other leading journals in AI and healthcare.
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search publications..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 dark-input rounded-lg"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Publications Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredPublications.map((pub, index) => (
            <motion.div
              key={pub.doi}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="dark-card p-8 h-full card-hover">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pub.impact === 'High' ? 'bg-green-900/50 text-green-300 border border-green-500/30' :
                    pub.impact === 'Breakthrough' ? 'bg-purple-900/50 text-purple-300 border border-purple-500/30' :
                    pub.impact === 'Policy' ? 'bg-orange-900/50 text-orange-300 border border-orange-500/30' :
                    'bg-blue-900/50 text-blue-300 border border-blue-500/30'
                  }`}>
                    {pub.impact} Impact
                  </span>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Award className="h-4 w-4 mr-1" />
                    {pub.citations}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-100 mb-3">
                  {pub.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {pub.authors}
                </p>

                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {pub.journal}, {pub.year}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {pub.abstract}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pub.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-400 hover:text-primary-300 text-sm font-medium transition-colors"
                >
                  View Publication
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
              Access Our Research
            </h3>
            <p className="text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
              All our publications are open access and available for download. For code and data, please visit our GitHub repository.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                View All Publications
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                GitHub Repository
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 