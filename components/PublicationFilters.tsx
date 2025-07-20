'use client'

import { motion } from 'framer-motion'
import { Search, Filter, Calendar, Award, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const allPublications = [
  {
    title: 'Machine Learning for Early Detection of Sepsis in Critical Care Settings',
    authors: 'Saria, S., Chen, S., Rodriguez, M., et al.',
    journal: 'Nature Medicine',
    year: '2024',
    doi: '10.1038/s41591-024-00001-x',
    abstract: 'We present a novel machine learning approach for early detection of sepsis in critical care settings, achieving 94.2% accuracy with a 2.1% false positive rate.',
    impact: 'High Impact',
    citations: 150,
    tags: ['Clinical Decision Support', 'Sepsis Detection', 'Critical Care'],
    category: 'Clinical Research'
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
    tags: ['Medical Imaging', 'Deep Learning', 'Review'],
    category: 'Review'
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
    tags: ['Real-time Monitoring', 'Clinical Implementation', 'Patient Safety'],
    category: 'Clinical Research'
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
    tags: ['Predictive Healthcare', 'Population Health', 'Policy'],
    category: 'Policy Research'
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
    tags: ['Federated Learning', 'Privacy', 'Collaborative AI'],
    category: 'Technical Research'
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
    tags: ['AI Ethics', 'Guidelines', 'Healthcare Policy'],
    category: 'Policy Research'
  },
  {
    title: 'Population Health Analytics Using Machine Learning',
    authors: 'Watson, E., Saria, S., Davis, K.',
    journal: 'The Lancet Digital Health',
    year: '2023',
    doi: '10.1016/S2589-7500(23)00001-X',
    abstract: 'Large-scale analysis of population health data using machine learning for disease prevention and public health interventions.',
    impact: 'High Impact',
    citations: 145,
    tags: ['Population Health', 'Epidemiology', 'Public Health'],
    category: 'Population Health'
  },
  {
    title: 'Clinical Decision Support Systems: A Systematic Review',
    authors: 'Chen, S., Saria, S., Williams, R.',
    journal: 'BMJ',
    year: '2023',
    doi: '10.1136/bmj.2023.12345',
    abstract: 'Systematic review of clinical decision support systems and their impact on patient outcomes.',
    impact: 'Review',
    citations: 98,
    tags: ['Clinical Decision Support', 'Systematic Review', 'Patient Outcomes'],
    category: 'Review'
  },
]

const categories = ['All', 'Clinical Research', 'Technical Research', 'Policy Research', 'Population Health', 'Review']
const years = ['All', '2024', '2023', '2022', '2021', '2020']

export default function PublicationFilters() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedYear, setSelectedYear] = useState('All')

  const filteredPublications = allPublications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.abstract.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || pub.category === selectedCategory
    const matchesYear = selectedYear === 'All' || pub.year === selectedYear
    
    return matchesSearch && matchesCategory && matchesYear
  })

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
            All Publications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our complete collection of research papers, publications, and academic contributions.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Publications
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by title, authors, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Year Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Year
              </label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                {years.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {filteredPublications.length} of {allPublications.length} publications
            </p>
          </div>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-8">
          {filteredPublications.map((pub, index) => (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -2 }}
              className="bg-white rounded-2xl p-8 card-hover border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    pub.impact === 'High Impact' ? 'bg-blue-100 text-blue-700' :
                    pub.impact === 'Breakthrough' ? 'bg-purple-100 text-purple-700' :
                    pub.impact === 'Review' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>
                    {pub.impact}
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                    {pub.category}
                  </span>
                  <span className="text-sm text-gray-500">{pub.year}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Award className="h-4 w-4 mr-1" />
                  {pub.citations} citations
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                {pub.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-3">
                {pub.authors}
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
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
                  <span className="text-sm text-gray-500">DOI: {pub.doi}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredPublications.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center py-12"
          >
            <div className="text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <h3 className="text-lg font-semibold mb-2">No publications found</h3>
              <p>Try adjusting your search criteria or filters.</p>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
} 