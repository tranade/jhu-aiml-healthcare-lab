'use client'

import { motion } from 'framer-motion'
import { Brain, TrendingUp, Shield, BarChart3, Users, Zap } from 'lucide-react'

const researchAreas = [
  {
    icon: Brain,
    title: 'Clinical Decision Support',
    description: 'Developing AI systems that assist healthcare providers in making informed clinical decisions through real-time data analysis and predictive modeling.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-900/20',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Healthcare',
    description: 'Building machine learning models to predict patient outcomes, disease progression, and treatment responses for personalized medicine.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-900/20',
  },
  {
    icon: Shield,
    title: 'Patient Safety & Quality',
    description: 'Creating AI-powered systems to monitor patient safety, detect adverse events, and improve healthcare quality metrics.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-900/20',
  },
  {
    icon: BarChart3,
    title: 'Healthcare Data Analytics',
    description: 'Developing advanced analytics tools to extract insights from electronic health records, medical imaging, and clinical trials.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-900/20',
  },
  {
    icon: Users,
    title: 'Population Health',
    description: 'Leveraging AI to analyze population-level health data for disease prevention, public health interventions, and health policy.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-900/20',
  },
  {
    icon: Zap,
    title: 'Real-time Monitoring',
    description: 'Building intelligent monitoring systems for continuous patient surveillance and early warning systems in critical care.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-900/20',
  },
]

export default function ResearchAreas() {
  return (
    <section className="section-padding bg-gray-900">
      <div className="container-max mobile-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className={`${area.bgColor} rounded-2xl p-8 h-full card-hover border border-gray-800/50 glass-effect`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${area.color} flex items-center justify-center mb-6`}>
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-100 mb-4">
                  {area.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Research Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-8 lg:p-12 text-white glow-border"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Featured Research: Early Sepsis Detection
              </h3>
              <p className="text-lg text-primary-100 leading-relaxed mb-6">
                Our latest breakthrough in machine learning for early detection of sepsis in critical care settings has been published in Nature Medicine, demonstrating significant improvements in patient outcomes.
              </p>
              <div className="flex items-center text-primary-100 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                  Nature Medicine, 2024
                </span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
              <h4 className="text-lg font-semibold mb-4">Key Findings</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                  <span>30% improvement in early detection</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                  <span>Reduced false positive rates by 45%</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                  <span>Real-time monitoring capabilities</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 