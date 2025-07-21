'use client'

import { motion } from 'framer-motion'
import { Brain, TrendingUp, Shield, BarChart3, Users, Zap } from 'lucide-react'

const researchAreas = [
  {
    icon: Brain,
    title: 'Clinical Decision Support',
    description: 'Developing AI systems that assist healthcare providers in making informed clinical decisions through real-time data analysis and predictive modeling.',
    color: 'primary',
    bgColor: 'dark-card-emerald',
    iconBg: 'from-primary-500 to-accent-500',
    textColor: 'text-primary-400',
  },
  {
    icon: TrendingUp,
    title: 'Predictive Healthcare',
    description: 'Building machine learning models to predict patient outcomes, disease progression, and treatment responses for personalized medicine.',
    color: 'emerald',
    bgColor: 'dark-card-violet',
    iconBg: 'from-emerald-500 to-teal-500',
    textColor: 'text-emerald-400',
  },
  {
    icon: Shield,
    title: 'Patient Safety & Quality',
    description: 'Creating AI-powered systems to monitor patient safety, detect adverse events, and improve healthcare quality metrics.',
    color: 'violet',
    bgColor: 'dark-card-rose',
    iconBg: 'from-violet-500 to-indigo-500',
    textColor: 'text-violet-400',
  },
  {
    icon: BarChart3,
    title: 'Healthcare Data Analytics',
    description: 'Developing advanced analytics tools to extract insights from electronic health records, medical imaging, and clinical trials.',
    color: 'rose',
    bgColor: 'dark-card-amber',
    iconBg: 'from-rose-500 to-pink-500',
    textColor: 'text-rose-400',
  },
  {
    icon: Users,
    title: 'Population Health',
    description: 'Leveraging AI to analyze population-level health data for disease prevention, public health interventions, and health policy.',
    color: 'amber',
    bgColor: 'dark-card-emerald',
    iconBg: 'from-amber-500 to-orange-500',
    textColor: 'text-amber-400',
  },
  {
    icon: Zap,
    title: 'Real-time Monitoring',
    description: 'Building intelligent monitoring systems for continuous patient surveillance and early warning systems in critical care.',
    color: 'teal',
    bgColor: 'dark-card-violet',
    iconBg: 'from-teal-500 to-cyan-500',
    textColor: 'text-teal-400',
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
              <div className={`${area.bgColor} rounded-2xl p-8 h-full card-hover-${area.color} border border-gray-800/50 glass-effect-${area.color} depth-layer-2`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${area.iconBg} flex items-center justify-center mb-6 shadow-depth-2`}>
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className={`text-xl font-bold text-gray-100 mb-4 ${area.textColor}`}>
                  {area.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Featured Research Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 lg:p-12 text-white glow-border-emerald shadow-depth-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-glow-emerald">
                Featured Research: Early Sepsis Detection
              </h3>
              <p className="text-lg text-emerald-100 leading-relaxed mb-6">
                Our latest breakthrough in machine learning for early detection of sepsis in critical care settings has been published in Nature Medicine, demonstrating significant improvements in patient outcomes.
              </p>
              <div className="flex items-center text-emerald-100 mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                  Nature Medicine, 2024
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-200 text-sm">95% Accuracy</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
                  <span className="text-emerald-200 text-sm">Real-time Detection</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h4 className="text-lg font-semibold mb-3 text-emerald-100">Key Findings</h4>
                <ul className="space-y-2 text-emerald-200">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Reduced detection time by 67%</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Improved patient survival rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Decreased false positive rates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 